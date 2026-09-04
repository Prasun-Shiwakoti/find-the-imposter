/* ==========================================================
   Find the Imposter — game logic
   Data lives in deck.js (BASE_DECK) and chaos.js (CHAOS_RULES).
   ========================================================== */

const K_CUSTOM   = "fti_custom_deck";
const K_PLAYERS  = "fti_players";
const K_SCORES   = "fti_scores";
const K_SETTINGS = "fti_settings";
const K_ACTIVE   = "fti_active_round";

const $ = id => document.getElementById(id);
const screens = ["setup","reveal","briefing","discussion","vote","verdict","guess","result"];

function readJSON(key, fallback){
  try{
    const raw = localStorage.getItem(key);
    if(raw == null) return fallback;
    const parsed = JSON.parse(raw);
    return parsed == null ? fallback : parsed;
  }catch(e){ return fallback; }
}

let customDeck = readJSON(K_CUSTOM, []);
if(!Array.isArray(customDeck)) customDeck = [];
let players = readJSON(K_PLAYERS, []);
if(!Array.isArray(players) || players.length < 1) players = ["Alex","Sam","Jordan","Taylor"];
let scores = readJSON(K_SCORES, {});
if(typeof scores !== "object" || scores === null) scores = {};

const state = {
  screen:"setup",
  round:null,
  revealIndex:0, flipped:false,
  selectedVote:[],
  caughtIds:[], uncaughtIds:[], caught:false, allCaught:false,
  outcome:null,          // {winner:"imposters"|"crew"|"split", guessCorrect, reason}
  points:null,           // {playerName: pointsThisRound}
  timerEndAt:null, timerRemaining:0, timerPaused:false, timerFired:false, timerId:null
};

/* ---------------- helpers ---------------- */

function escapeHtml(s){
  return String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[c]));
}
const escapeAttr = escapeHtml;

/* Fisher-Yates. The old `sort(() => Math.random() - .5)` was biased and made
   the first players in the list more likely to be picked as imposter. */
function shuffle(a){
  const r = [...a];
  for(let i = r.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [r[i], r[j]] = [r[j], r[i]];
  }
  return r;
}
function pick(arr){ return arr[Math.floor(Math.random() * arr.length)]; }

function roster(){ return state.round ? state.round.roster : players; }
function fullDeck(){ return [...BASE_DECK, ...customDeck]; }

function toast(msg){
  const t = $("toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(window.__toast);
  window.__toast = setTimeout(() => t.classList.remove("show"), 1800);
}

function haptic(pattern){
  try{ if(navigator.vibrate) navigator.vibrate(pattern); }catch(e){}
}
const BUZZ = {
  tap:12, flip:18, hide:[10,55,10], next:10,
  start:[0,28,55,28], reveal:[0,45,70,45,70,95],
  win:[0,22,45,22,45,130], error:[0,55,45,55]
};

function showScreen(id){
  state.screen = id;
  screens.forEach(s => $(s).classList.toggle("active", s === id));
  const inRound = !!state.round && id !== "setup";
  $("endRound").classList.toggle("hide", !inRound);
  $("topBadge").classList.toggle("hide", inRound);   // keeps the topbar on one line
  window.scrollTo({top:0, behavior:"instant"});
  persist();
}

function save(){
  localStorage.setItem(K_PLAYERS, JSON.stringify(players));
  localStorage.setItem(K_SCORES, JSON.stringify(scores));
}

/* ---------------- settings persistence ----------------
   Needed so that a restored round (or "play another round") keeps the
   same rules instead of silently falling back to the defaults. */

const SETTING_IDS = ["imposterCount","imposterMode","difficulty","roundTime"];
const TOGGLE_IDS  = ["chaosMode","randomStart","revealHint","impostersKnowEachOther"];

function saveSettings(){
  const data = {cats:[...document.querySelectorAll('#categoryOptions input:checked')].map(x => x.value)};
  SETTING_IDS.forEach(id => data[id] = $(id).value);
  TOGGLE_IDS.forEach(id => data[id] = $(id).checked);
  localStorage.setItem(K_SETTINGS, JSON.stringify(data));
}
function loadSettings(){
  const data = readJSON(K_SETTINGS, null);
  if(!data) return;
  SETTING_IDS.forEach(id => {
    if(typeof data[id] === "string" && [...$(id).options].some(o => o.value === data[id])) $(id).value = data[id];
  });
  TOGGLE_IDS.forEach(id => { if(typeof data[id] === "boolean") $(id).checked = data[id]; });
  if(Array.isArray(data.cats) && data.cats.length){
    document.querySelectorAll('#categoryOptions input').forEach(cb => { cb.checked = data.cats.includes(cb.value); });
    syncAllCategoryBox();
  }
}

/* ---------------- setup screen ---------------- */

function renderPlayers(){
  const list = $("playerList");
  list.innerHTML = "";
  players.forEach((name,i) => {
    const row = document.createElement("div");
    row.className = "player";
    row.innerHTML = `<div class="player-index">${i+1}</div><div class="player-name">${escapeHtml(name)}</div><button class="icon-btn" aria-label="Remove ${escapeAttr(name)}" data-remove="${i}">×</button>`;
    list.appendChild(row);
  });
  updateStartAvailability();
}
$("playerList").addEventListener("click", e => {
  const btn = e.target.closest("[data-remove]");
  if(!btn) return;
  players.splice(Number(btn.dataset.remove), 1);
  save(); renderPlayers(); haptic(BUZZ.tap);
});
function updateStartAvailability(){
  $("startGame").disabled = players.length < 3 || players.length > 20;
}

function syncAllCategoryBox(){
  const wrap = $("categoryOptions");
  const all = wrap.querySelector('input[value="__all__"]');
  const others = [...wrap.querySelectorAll('input:not([value="__all__"])')];
  if(all) all.checked = others.length > 0 && others.every(x => x.checked);
}
function populateCategories(){
  const wrap = $("categoryOptions");
  const cats = [...new Set(fullDeck().map(x => x.category))];
  wrap.innerHTML = "";
  const makeOption = (value,label,checked=false,extraClass="") => {
    const id = "cat_" + value.toLowerCase().replace(/[^a-z0-9]+/g,"_");
    const box = document.createElement("div");
    box.className = `cat-option ${extraClass}`.trim();
    box.innerHTML = `<input type="checkbox" id="${id}" value="${escapeAttr(value)}" ${checked?"checked":""}><label for="${id}">${escapeHtml(label)}</label>`;
    wrap.appendChild(box);
  };
  makeOption("__all__","All",true,"all-option");
  cats.forEach(c => makeOption(c,c,false));
  wrap.querySelectorAll("input").forEach(cb => cb.addEventListener("change", () => {
    if(cb.value === "__all__"){
      const on = cb.checked;
      wrap.querySelectorAll('input:not([value="__all__"])').forEach(x => x.checked = on);
    }else{
      syncAllCategoryBox();
    }
    saveSettings();
  }));
  $("customSummary").textContent = customDeck.length
    ? `${customDeck.length} custom word${customDeck.length===1?"":"s"} saved.`
    : "No custom words yet.";
}
function getSelectedCategories(){
  const checked = [...document.querySelectorAll('#categoryOptions input:checked')].map(x => x.value);
  const all = [...new Set(fullDeck().map(x => x.category))];
  if(checked.includes("__all__")) return all;
  const picked = checked.filter(c => c !== "__all__");
  return picked.length ? picked : all;
}

const MODE_NOTES = {
  classic:"Classic — the imposter is told they are the imposter and gets a one-word hint to bluff with.",
  blank:"Blank — the imposter is told they are the imposter and gets no hint, only the category. Pure bluffing, much harder.",
  undercover:"Undercover — the imposter is quietly given a different word from the same category and is never told they are the imposter. They only find out at the reveal."
};
function applyModeUI(){
  const mode = $("imposterMode").value;
  $("difficultyWrap").classList.toggle("hide", mode !== "classic");
  $("modeNote").textContent = MODE_NOTES[mode] || "";
  const know = $("impostersKnowEachOther");
  const undercover = mode === "undercover";
  know.disabled = undercover;
  know.closest(".check").style.opacity = undercover ? ".45" : "";
  $("knowEachOtherLabel").textContent = undercover
    ? "Imposters cannot know each other in Undercover — they do not know they are imposters."
    : "Let imposters know who the other imposter(s) are during their private reveal.";
}

/* ---------------- round setup ---------------- */

function pickRoundWord(categories){
  const deck = fullDeck().filter(x => categories.includes(x.category));
  return deck.length ? pick(deck) : null;
}
/* Undercover decoy: a different word from the same category, so the imposter's
   card is indistinguishable from a real one. */
function pickDecoy(entry){
  const same = fullDeck().filter(x => x.category === entry.category && x.word.toLowerCase() !== entry.word.toLowerCase());
  if(same.length) return pick(same).word;
  const any = fullDeck().filter(x => x.word.toLowerCase() !== entry.word.toLowerCase());
  return any.length ? pick(any).word : null;
}
function randomImposters(count, size){
  return new Set(shuffle([...Array(size).keys()]).slice(0, count));
}

function startGame(){
  if(players.length < 3){ toast("Add at least 3 players."); return; }
  const selectedCategories = getSelectedCategories();
  const entry = pickRoundWord(selectedCategories);
  if(!entry){ toast("No words in the selected categories."); return; }

  const mode = $("imposterMode").value;
  const roundRoster = [...players];
  const maxImposters = Math.max(1, Math.floor(roundRoster.length / 3));
  const countSetting = $("imposterCount").value;
  const requested = countSetting === "random"
    ? Math.floor(Math.random() * maxImposters) + 1
    : Math.min(Number(countSetting), maxImposters);

  let decoy = null;
  if(mode === "undercover"){
    decoy = pickDecoy(entry);
    if(!decoy){ toast("Undercover needs at least two words available."); return; }
  }

  state.round = {
    roster: roundRoster,
    categories: selectedCategories,
    category: entry.category,
    word: entry.word,
    mode,
    hint: mode === "classic" ? (entry.hints[$("difficulty").value] || entry.hints.medium) : null,
    decoy,
    imposterIds: randomImposters(requested, roundRoster.length),
    actualImposterCount: requested,
    randomImposters: countSetting === "random",
    impostersKnowEachOther: mode !== "undercover" && $("impostersKnowEachOther").checked,
    revealGivenInfo: $("revealHint").checked,
    startingIndex: $("randomStart").checked ? Math.floor(Math.random() * roundRoster.length) : 0,
    discussionTime: Number($("roundTime").value),
    chaos: $("chaosMode").checked ? pick(CHAOS_RULES) : null,
    vote: null
  };

  roundRoster.forEach(p => { if(scores[p] == null) scores[p] = 0; });

  state.revealIndex = 0; state.flipped = false; state.selectedVote = [];
  state.caughtIds = []; state.uncaughtIds = []; state.caught = false; state.allCaught = false;
  state.outcome = null; state.points = null;
  stopTimer(); state.timerEndAt = null; state.timerRemaining = 0; state.timerPaused = false; state.timerFired = false;

  save(); saveSettings(); sound("start"); haptic(BUZZ.start);
  prepareReveal();
  showScreen("reveal");
}

/* ---------------- reveal ---------------- */

function prepareReveal(){
  const list = roster();
  const i = state.revealIndex;
  const name = list[i];
  const isImposter = state.round.imposterIds.has(i);
  const mode = state.round.mode;

  $("revealSub").textContent = `Player ${i+1} of ${list.length} — hand the phone to ${name}.`;
  $("backPlayer").textContent = name.toUpperCase();
  $("frontCategory").textContent = state.round.category;

  if(isImposter && mode === "undercover"){
    /* Looks exactly like a normal card. That is the whole point. */
    $("frontEyebrow").textContent = "Your secret word";
    $("frontSecret").textContent = state.round.decoy;
    $("frontHint").textContent = "";
  }else if(isImposter && mode === "blank"){
    $("frontEyebrow").textContent = "You are the imposter";
    $("frontSecret").textContent = "IMPOSTER";
    $("frontHint").textContent = "No hint. Listen hard and bluff.";
  }else if(isImposter){
    $("frontEyebrow").textContent = "You are the imposter";
    $("frontSecret").textContent = "IMPOSTER";
    $("frontHint").textContent = `Hint: ${state.round.hint}`;
  }else{
    $("frontEyebrow").textContent = "Your secret word";
    $("frontSecret").textContent = state.round.word;
    $("frontHint").textContent = "";
  }

  const partners = [...state.round.imposterIds].filter(id => id !== i).map(id => list[id]);
  const showPartners = isImposter && mode !== "undercover" && state.round.impostersKnowEachOther && partners.length;
  $("frontPartners").textContent = showPartners ? `Other imposter${partners.length>1?"s":""}: ${partners.join(", ")}` : "";
  $("frontPartners").classList.toggle("hide", !showPartners);

  $("secretCard").classList.remove("flipped");
  state.flipped = false;
  $("flipDot").classList.remove("on");
  $("flipLabel").textContent = "Not viewed yet";
  $("revealDone").disabled = true;
  $("revealDone").classList.remove("hide");
  $("revealDone").textContent = "Reveal my card";
  $("nextPlayer").classList.add("hide");
  $("passNote").classList.add("hide");
  $("revealProgress").style.width = `${(i / list.length) * 100}%`;
  persist();
}
function flipCard(){
  if(state.flipped) return;
  state.flipped = true;
  $("secretCard").classList.add("flipped");
  $("flipDot").classList.add("on");
  $("flipLabel").textContent = "Viewed — tap again to hide";
  $("revealDone").disabled = false;
  $("revealDone").textContent = "Hide my card";
  sound("flip"); haptic(BUZZ.flip);
}
function hideCard(){
  if(!state.flipped) return;
  state.flipped = false;
  $("secretCard").classList.remove("flipped");
  $("flipLabel").textContent = "Viewed and hidden";
  $("passNote").classList.remove("hide");
  $("revealDone").classList.add("hide");
  $("nextPlayer").classList.remove("hide");
  sound("pass"); haptic(BUZZ.hide);
}

/* ---------------- briefing ---------------- */

function renderChaosCard(cardId, nameId, ruleId){
  const chaos = state.round && state.round.chaos;
  $(cardId).classList.toggle("hide", !chaos);
  if(chaos){
    $(nameId).textContent = chaos.name;
    $(ruleId).textContent = chaos.rule;
  }
}
function renderBriefing(){
  $("briefCategory").textContent = state.round.category;
  $("startingPlayer").textContent = roster()[state.round.startingIndex];
  renderChaosCard("briefChaos","briefChaosName","briefChaosRule");
}
function startBriefing(){
  renderBriefing();
  sound("start"); haptic(BUZZ.start);
  showScreen("briefing");
}

/* ---------------- discussion + timer ----------------
   Driven by a wall-clock deadline rather than a per-second counter, so
   locking the phone, backgrounding the tab or reloading no longer drifts. */

function timerSecondsLeft(){
  if(!state.round || state.round.discussionTime <= 0) return -1;
  if(state.timerPaused || state.timerEndAt == null) return Math.max(0, Math.round(state.timerRemaining));
  return Math.max(0, Math.round((state.timerEndAt - Date.now()) / 1000));
}
function renderTimer(){
  const left = timerSecondsLeft();
  $("timer").textContent = left < 0
    ? "∞"
    : `${String(Math.floor(left/60)).padStart(2,"0")}:${String(left%60).padStart(2,"0")}`;
  $("pauseTimer").textContent = state.timerPaused ? "Resume" : "Pause";
}
function stopTimer(){
  clearInterval(state.timerId);
  state.timerId = null;
}
function runTimer(){
  stopTimer();
  if(!state.round || state.round.discussionTime <= 0) return;
  state.timerId = setInterval(() => {
    renderTimer();
    if(!state.timerPaused && !state.timerFired && timerSecondsLeft() <= 0){
      state.timerFired = true;
      stopTimer();
      sound("reveal"); haptic(BUZZ.reveal);
      toast("Time. Vote now.");
      persist();
    }
  }, 250);
}
function startTimerFresh(){
  const secs = state.round.discussionTime;
  state.timerPaused = false;
  state.timerFired = secs <= 0;
  state.timerRemaining = secs;
  state.timerEndAt = secs > 0 ? Date.now() + secs * 1000 : null;
}
function renderDiscussion(){
  const list = roster();
  $("clueTurnName").textContent = list[state.round.startingIndex];
  $("turnCounter").textContent = `Start: ${state.round.startingIndex + 1} / ${list.length}`;
  renderChaosCard("discussChaos","discussChaosName","discussChaosRule");
  renderTimer();
}

/* ---------------- vote ---------------- */

function voteRequirementText(){
  return state.round.randomImposters
    ? "Random imposter count: select every player the group suspects."
    : `Select exactly ${state.round.actualImposterCount} player${state.round.actualImposterCount>1?"s":""}.`;
}
function syncVoteUI(){
  const grid = $("voteGrid");
  grid.querySelectorAll(".vote-btn").forEach(btn => {
    const id = Number(btn.dataset.id);
    const selected = state.selectedVote.includes(id);
    btn.classList.toggle("selected", selected);
    btn.querySelector("small").textContent = `${selected ? "Selected · " : ""}Player ${id + 1}`;
  });
  $("lockVote").disabled = state.round.randomImposters
    ? state.selectedVote.length < 1
    : state.selectedVote.length !== state.round.actualImposterCount;
}
function buildVote(){
  const panel = $("voteGrid").parentElement;
  panel.querySelectorAll(".vote-selection-note").forEach(n => n.remove());
  const note = document.createElement("div");
  note.className = "vote-selection-note";
  note.textContent = voteRequirementText();
  panel.insertBefore(note, $("voteGrid"));

  const grid = $("voteGrid");
  grid.innerHTML = "";
  grid.classList.add("multi");
  roster().forEach((name,i) => {
    const b = document.createElement("button");
    b.className = "vote-btn";
    b.dataset.id = i;
    b.innerHTML = `${escapeHtml(name)}<small>Player ${i+1}</small>`;
    grid.appendChild(b);
  });
  syncVoteUI();
}
$("voteGrid").addEventListener("click", e => {
  const btn = e.target.closest(".vote-btn");
  if(!btn || !state.round) return;
  const id = Number(btn.dataset.id);
  const idx = state.selectedVote.indexOf(id);
  if(idx >= 0){
    state.selectedVote.splice(idx, 1);
  }else{
    if(!state.round.randomImposters && state.selectedVote.length >= state.round.actualImposterCount){
      toast(`Select exactly ${state.round.actualImposterCount}.`);
      haptic(BUZZ.error);
      return;
    }
    state.selectedVote.push(id);
  }
  haptic(BUZZ.tap);
  syncVoteUI();
  persist();
});

/* ---------------- verdict ---------------- */

function renderVerdict(){
  const list = roster();
  const caughtNames = state.caughtIds.map(i => list[i]);
  const uncaughtNames = state.uncaughtIds.map(i => list[i]);

  $("verdictIcon").textContent = state.caught ? "✓" : "✕";
  $("verdictTitle").textContent = state.caught
    ? `${caughtNames.join(", ")} ${caughtNames.length>1?"were":"was"} caught.`
    : "No imposter was caught.";
  $("verdictText").textContent = state.caught
    ? (state.allCaught
        ? "Every imposter was found. They get one final chance to guess the secret word."
        : `${uncaughtNames.join(", ")} ${uncaughtNames.length>1?"are":"is"} still hidden. The caught imposter(s) get a final guess.`)
    : "Every selected player was innocent. The imposter side wins immediately.";

  $("verdictRole").className = `role ${state.caught ? "civilian" : "imposter"}`;
  $("verdictRole").innerHTML = state.caught
    ? `<div class="role-name">Vote result</div><div class="role-main" style="color:var(--good)">Caught</div><div class="small" style="margin-top:6px">${escapeHtml(caughtNames.join(", "))}</div>`
    : `<div class="role-name">Vote result</div><div class="role-main" style="color:var(--danger)">Missed</div><div class="small" style="margin-top:6px">None of the selected players was an imposter.</div>`;

  $("revealSolution").textContent = state.caught
    ? "Give the caught imposter(s) their guess"
    : "Reveal the imposter(s)";
}

/* ---------------- guess ---------------- */

function renderGuess(){
  const many = state.caughtIds.length > 1;
  $("guessSub").textContent = state.round.mode === "undercover"
    ? "You had a different word the whole time. Guess what everyone else had — get it right and you steal the round."
    : "You were caught. One correct guess steals the round.";
  $("guessInput").placeholder = `${many ? "Caught imposters" : "Caught imposter"}: guess the secret word`;
}

/* ---------------- result ---------------- */

/* Three-way outcome. The old version called any wrong guess "the imposter side
   loses" even when an uncaught imposter was still scoring, which contradicted
   the scoreboard right below it. */
function computeOutcome(guessCorrect, reason){
  if(reason === "missed" || guessCorrect) return "imposters";
  return state.uncaughtIds.length === 0 ? "crew" : "split";
}
function awardPoints(winner){
  const list = roster();
  const points = {};
  const add = (name, n) => {
    scores[name] = (scores[name] || 0) + n;
    points[name] = (points[name] || 0) + n;
  };
  list.forEach((name,i) => {
    const isImposter = state.round.imposterIds.has(i);
    if(winner === "imposters"){
      if(isImposter) add(name, 3);
    }else if(winner === "crew"){
      if(!isImposter) add(name, 1);
    }else{ // split: the crew caught someone, but at least one imposter survived
      if(isImposter){ if(state.uncaughtIds.includes(i)) add(name, 3); }
      else add(name, 1);
    }
  });
  return points;
}

const RESULT_COPY = {
  imposters:{ icon:"🕵️", kicker:"Imposters win", title:"The imposter side takes it." },
  crew:     { icon:"✓",  kicker:"Crew wins",     title:"The crew takes it." },
  split:    { icon:"⚖️", kicker:"Split round",   title:"Nobody takes it cleanly." }
};
function resultBody(){
  const list = roster();
  const { winner, guessCorrect, reason } = state.outcome;
  const uncaught = state.uncaughtIds.map(i => list[i]);
  const caught = state.caughtIds.map(i => list[i]);
  if(winner === "imposters"){
    return guessCorrect
      ? "Caught — but the secret word was guessed correctly. Every imposter takes the round."
      : "The group only picked innocent players, so every imposter takes the round.";
  }
  if(winner === "crew"){
    return reason === "caught"
      ? "Every imposter was caught and the final guess was wrong. Clean win for the crew."
      : "The crew takes the round.";
  }
  return `The crew caught ${caught.join(", ")} and the guess was wrong, but ${uncaught.join(", ")} `
       + `${uncaught.length>1?"were":"was"} never found. The crew scores, and so ${uncaught.length>1?"do":"does"} `
       + `${uncaught.length>1?"the imposters who got away":"the imposter who got away"}.`;
}
function renderResult(){
  const list = roster();
  const { winner } = state.outcome;
  const copy = RESULT_COPY[winner];

  $("resultIcon").textContent = copy.icon;
  $("resultKicker").textContent = copy.kicker;
  $("resultTitle").textContent = copy.title;
  $("resultText").textContent = resultBody();
  $("resultWord").textContent = state.round.word;
  $("resultImposter").textContent = [...state.round.imposterIds].map(i => list[i]).join(", ");

  const many = state.round.imposterIds.size > 1;
  let given = "";
  if(state.round.revealGivenInfo){
    if(state.round.mode === "classic") given = `Hint shown to the imposter${many?"s":""}: ${state.round.hint}`;
    else if(state.round.mode === "undercover") given = `Decoy word given to the imposter${many?"s":""}: ${state.round.decoy}`;
    else given = `Blank mode — the imposter${many?"s were":" was"} given nothing.`;
  }
  let extra = state.round.chaos ? `Chaos rule: ${state.round.chaos.name}.` : "";
  $("resultHint").textContent = [given, extra].filter(Boolean).join(" · ");

  const points = state.points || {};
  const sorted = [...list].sort((a,b) => (scores[b]||0) - (scores[a]||0));
  $("scoreTable").innerHTML = sorted.map(n =>
    `<div class="score-row"><div>${escapeHtml(n)} ${points[n] ? `<span class="small">(+${points[n]})</span>` : ""}</div><b>${scores[n]||0}</b></div>`
  ).join("");
}
function finishRound(guessCorrect, reason){
  const winner = computeOutcome(guessCorrect, reason);
  state.outcome = {winner, guessCorrect, reason};
  state.points = awardPoints(winner);
  save();
  sound(winner === "crew" ? "win" : "reveal");
  haptic(winner === "crew" ? BUZZ.win : BUZZ.reveal);
  renderResult();
  showScreen("result");
}

/* ---------------- sound (Web Audio, no assets) ---------------- */

let audioCtx = null;
function tone(freq=440, dur=.08, type="sine", gain=.035){
  try{
    audioCtx ||= new (window.AudioContext || window.webkitAudioContext)();
    const o = audioCtx.createOscillator(), g = audioCtx.createGain();
    o.type = type; o.frequency.value = freq; g.gain.value = gain;
    o.connect(g); g.connect(audioCtx.destination); o.start();
    g.gain.exponentialRampToValueAtTime(.0001, audioCtx.currentTime + dur);
    o.stop(audioCtx.currentTime + dur);
  }catch(e){}
}
function sound(name){
  if(name === "flip"){ tone(520,.06,"triangle"); setTimeout(() => tone(700,.05,"triangle"), 55); }
  if(name === "pass"){ tone(340,.07,"sine"); setTimeout(() => tone(460,.07,"sine"), 75); }
  if(name === "start"){ tone(420,.08,"triangle"); setTimeout(() => tone(620,.1,"triangle"), 90); setTimeout(() => tone(820,.14,"triangle"), 200); }
  if(name === "reveal"){ tone(280,.1,"sawtooth"); setTimeout(() => tone(180,.18,"sawtooth"), 110); }
  if(name === "win"){ tone(560,.08,"triangle"); setTimeout(() => tone(740,.09,"triangle"), 90); setTimeout(() => tone(980,.18,"triangle"), 190); }
}

/* ---------------- crash / reload recovery ---------------- */

function persist(){
  if(!state.round){ localStorage.removeItem(K_ACTIVE); return; }
  try{
    localStorage.setItem(K_ACTIVE, JSON.stringify({
      v:1,
      screen: state.screen,
      round: {...state.round, imposterIds:[...state.round.imposterIds]},
      revealIndex: state.revealIndex,
      selectedVote: state.selectedVote,
      caughtIds: state.caughtIds,
      uncaughtIds: state.uncaughtIds,
      caught: state.caught,
      allCaught: state.allCaught,
      outcome: state.outcome,
      points: state.points,
      timerEndAt: state.timerEndAt,
      timerRemaining: state.timerRemaining,
      timerPaused: state.timerPaused,
      timerFired: state.timerFired
    }));
  }catch(e){}
}
function clearRound(){
  stopTimer();
  state.round = null;
  state.outcome = null;
  state.points = null;
  localStorage.removeItem(K_ACTIVE);
}
function restoreRound(){
  const snap = readJSON(K_ACTIVE, null);
  if(!snap || snap.v !== 1 || !snap.round) return false;
  if(!screens.includes(snap.screen) || snap.screen === "setup") return false;
  const r = snap.round;
  if(!Array.isArray(r.roster) || r.roster.length < 3 || !Array.isArray(r.imposterIds)) return false;

  state.round = {...r, imposterIds:new Set(r.imposterIds)};
  state.revealIndex = Math.min(Number(snap.revealIndex) || 0, r.roster.length - 1);
  state.selectedVote = Array.isArray(snap.selectedVote) ? snap.selectedVote : [];
  state.caughtIds = Array.isArray(snap.caughtIds) ? snap.caughtIds : [];
  state.uncaughtIds = Array.isArray(snap.uncaughtIds) ? snap.uncaughtIds : [];
  state.caught = !!snap.caught;
  state.allCaught = !!snap.allCaught;
  state.outcome = snap.outcome || null;
  state.points = snap.points || null;
  state.timerEndAt = snap.timerEndAt ?? null;
  state.timerRemaining = Number(snap.timerRemaining) || 0;
  state.timerPaused = !!snap.timerPaused;
  state.timerFired = !!snap.timerFired;

  switch(snap.screen){
    case "reveal":     prepareReveal(); break;      // always restores face-down, never leaks a card
    case "briefing":   renderBriefing(); break;
    case "discussion": renderDiscussion(); runTimer(); break;
    case "vote":       buildVote(); break;
    case "verdict":    renderVerdict(); break;
    case "guess":      renderGuess(); break;
    case "result":
      if(!state.outcome){ clearRound(); return false; }
      renderResult();
      break;
    default: return false;
  }
  showScreen(snap.screen);
  toast("Round restored where you left off.");
  return true;
}

/* ---------------- events ---------------- */

$("addPlayer").addEventListener("click", () => {
  const v = $("playerInput").value.trim();
  if(!v) return;
  if(players.some(p => p.toLowerCase() === v.toLowerCase())){ toast("That name is already in the list."); haptic(BUZZ.error); return; }
  if(players.length >= 20){ toast("Maximum 20 players."); haptic(BUZZ.error); return; }
  players.push(v);
  $("playerInput").value = "";
  save(); renderPlayers(); haptic(BUZZ.tap);
  $("playerInput").focus();
});
$("playerInput").addEventListener("keydown", e => { if(e.key === "Enter") $("addPlayer").click(); });
$("clearPlayers").addEventListener("click", () => { players = []; save(); renderPlayers(); haptic(BUZZ.tap); });

$("toggleCustom").addEventListener("click", () => $("customForm").classList.toggle("hide"));
$("cancelCustom").addEventListener("click", () => $("customForm").classList.add("hide"));
$("saveCustom").addEventListener("click", () => {
  const category = $("customCategory").value.trim();
  const word = $("customWord").value.trim();
  const hint = $("customHint").value.trim();
  if(!category || !word || !hint){ toast("Fill in category, word and hint."); haptic(BUZZ.error); return; }
  customDeck.push({category, word, hints:{easy:hint, medium:hint, hard:hint}});
  localStorage.setItem(K_CUSTOM, JSON.stringify(customDeck));
  ["customCategory","customWord","customHint"].forEach(id => $(id).value = "");
  $("customForm").classList.add("hide");
  populateCategories(); loadSettings();
  toast("Custom word saved."); haptic(BUZZ.tap);
});

SETTING_IDS.concat(TOGGLE_IDS).forEach(id => $(id).addEventListener("change", () => {
  if(id === "imposterMode") applyModeUI();
  saveSettings();
}));

$("startGame").addEventListener("click", startGame);

$("secretCard").addEventListener("click", () => { state.flipped ? hideCard() : flipCard(); });
$("secretCard").addEventListener("keydown", e => {
  if(e.key === "Enter" || e.key === " "){ e.preventDefault(); $("secretCard").click(); }
});
$("revealDone").addEventListener("click", hideCard);
$("nextPlayer").addEventListener("click", () => {
  haptic(BUZZ.next);
  state.revealIndex++;
  if(state.revealIndex >= roster().length){ startBriefing(); return; }
  prepareReveal();
});

$("startDiscussion").addEventListener("click", () => {
  startTimerFresh();
  renderDiscussion();
  runTimer();
  sound("start"); haptic(BUZZ.start);
  showScreen("discussion");
});
$("pauseTimer").addEventListener("click", () => {
  if(!state.round || state.round.discussionTime <= 0){ toast("No timer is enabled."); return; }
  if(state.timerPaused){
    state.timerEndAt = Date.now() + state.timerRemaining * 1000;
    state.timerPaused = false;
    runTimer();
  }else{
    state.timerRemaining = timerSecondsLeft();
    state.timerEndAt = null;
    state.timerPaused = true;
    stopTimer();
  }
  renderTimer(); haptic(BUZZ.tap); persist();
});
$("finishDiscussion").addEventListener("click", () => {
  stopTimer();
  state.selectedVote = [];
  buildVote();
  haptic(BUZZ.tap);
  showScreen("vote");
});

$("lockVote").addEventListener("click", () => {
  if(!state.selectedVote.length) return;
  if(!state.round.randomImposters && state.selectedVote.length !== state.round.actualImposterCount){
    toast(`Select exactly ${state.round.actualImposterCount}.`);
    haptic(BUZZ.error);
    return;
  }
  state.round.vote = [...state.selectedVote];
  state.caughtIds = state.round.vote.filter(i => state.round.imposterIds.has(i));
  state.uncaughtIds = [...state.round.imposterIds].filter(i => !state.round.vote.includes(i));
  state.caught = state.caughtIds.length > 0;
  state.allCaught = state.uncaughtIds.length === 0;
  sound("reveal"); haptic(BUZZ.reveal);
  renderVerdict();
  showScreen("verdict");
});

$("revealSolution").addEventListener("click", () => {
  if(state.caught){
    sound("pass"); haptic(BUZZ.tap);
    $("guessInput").value = "";
    renderGuess();
    showScreen("guess");
  }else{
    finishRound(false, "missed");
  }
});
$("submitGuess").addEventListener("click", () => {
  const guess = $("guessInput").value.trim();
  if(!guess){ toast("Enter a guess first."); haptic(BUZZ.error); return; }
  const correct = guess.localeCompare(state.round.word, undefined, {sensitivity:"accent"}) === 0;
  finishRound(correct, "caught");
});
$("guessInput").addEventListener("keydown", e => { if(e.key === "Enter") $("submitGuess").click(); });

$("newRound").addEventListener("click", startGame);
$("backSetup").addEventListener("click", () => { clearRound(); showScreen("setup"); });
$("endRound").addEventListener("click", () => {
  if(!confirm("End this round and go back to setup? Nothing is scored.")) return;
  clearRound();
  showScreen("setup");
});

document.addEventListener("visibilitychange", () => {
  if(!document.hidden && state.screen === "discussion") renderTimer();
});
window.addEventListener("beforeunload", stopTimer);

/* ---------------- boot ---------------- */

populateCategories();
loadSettings();
applyModeUI();
renderPlayers();
if(!restoreRound()) showScreen("setup");
