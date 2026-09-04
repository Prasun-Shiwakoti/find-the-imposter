/* ---------- DATA: chaos rules. Add more here later ---------- */
/* Each rule applies to the whole clue round, everyone follows it. */
const CHAOS_RULES = [
  { name: "One syllable only",     rule: "Every clue must be a single-syllable word. Two syllables and you are instantly suspicious." },
  { name: "No nouns",              rule: "Clues must be verbs or adjectives. No naming things." },
  { name: "Silent round",          rule: "Nobody speaks. Act your clue out with gestures only." },
  { name: "Starts with a vowel",   rule: "Every clue must begin with A, E, I, O or U." },
  { name: "Double clue",           rule: "Everyone gives two clue words instead of one, back to back." },
  { name: "Whisper it",            rule: "All clues must be whispered. Say it once, no repeats." },
  { name: "Backwards order",       rule: "Ignore the suggested starting player. Go in reverse seating order." },
  { name: "Rhyme chain",           rule: "Your clue must rhyme with the clue given right before yours." },
  { name: "Exactly four letters",  rule: "Every clue must be exactly four letters long." },
  { name: "Sing it",               rule: "You must sing your clue. Speaking it does not count." },
  { name: "Eyes closed",           rule: "Everyone keeps their eyes shut for the whole clue round." },
  { name: "Point and say",         rule: "You must point at another player while giving your clue." },
  { name: "Emotion words only",    rule: "Your clue must be a feeling: happy, tense, lonely, proud, and so on." },
  { name: "No first letter",       rule: "Your clue cannot start with the same letter as any earlier clue this round." },
  { name: "Fake accent",           rule: "Deliver your clue in an accent that is not your own." },
  { name: "Slow motion",           rule: "Say your clue as slowly as you possibly can. Stretch every sound." },
  { name: "Vaguest wins",          rule: "Try to be as vague as you can while still being honest. Obvious clues are banned." },
  { name: "Ten second limit",      rule: "You get ten seconds from your turn starting. Say nothing in time and you forfeit your clue." },
  { name: "Stand up",              rule: "You must be standing to give your clue, and sit back down straight after." },
  { name: "No repeats, ever",      rule: "If a clue has already been said this round, you cannot say anything close to it." }
];
