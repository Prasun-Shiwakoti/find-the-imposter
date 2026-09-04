/* ---------- DATA: add more categories/words here later ---------- */
const BASE_DECK = [
  // =========================
  // FOOD
  // =========================
  {
    category: "Food",
    word: "Pizza",
    hints: {
      easy: "Italian",
      medium: "Cheese",
      hard: "Round"
    }
  },
  {
    category: "Food",
    word: "Burger",
    hints: {
      easy: "Fast food",
      medium: "Layers",
      hard: "Bun"
    }
  },
  {
    category: "Food",
    word: "Sushi",
    hints: {
      easy: "Japanese",
      medium: "Rice",
      hard: "Roll"
    }
  },
  {
    category: "Food",
    word: "Momo",
    hints: {
      easy: "Nepali",
      medium: "Steamed",
      hard: "Wrapper"
    }
  },
  {
    category: "Food",
    word: "Pasta",
    hints: {
      easy: "Italian",
      medium: "Sauce",
      hard: "Strands"
    }
  },
  {
    category: "Food",
    word: "Taco",
    hints: {
      easy: "Mexican",
      medium: "Shell",
      hard: "Folded"
    }
  },
  {
    category: "Food",
    word: "French Fries",
    hints: {
      easy: "Fast food",
      medium: "Salt",
      hard: "Sticks"
    }
  },
  {
    category: "Food",
    word: "Fried Rice",
    hints: {
      easy: "Asian",
      medium: "Wok",
      hard: "Leftovers"
    }
  },
  {
    category: "Food",
    word: "Ramen",
    hints: {
      easy: "Japanese",
      medium: "Broth",
      hard: "Noodles"
    }
  },
  {
    category: "Food",
    word: "Dumpling",
    hints: {
      easy: "Asian",
      medium: "Filling",
      hard: "Pocket"
    }
  },
  {
    category: "Food",
    word: "Hot Dog",
    hints: {
      easy: "Fast food",
      medium: "Sausage",
      hard: "Long"
    }
  },
  {
    category: "Food",
    word: "Popcorn",
    hints: {
      easy: "Movie snack",
      medium: "Butter",
      hard: "Explodes"
    }
  },
  {
    category: "Food",
    word: "Ice Cream",
    hints: {
      easy: "Dessert",
      medium: "Cold",
      hard: "Scoop"
    }
  },
  {
    category: "Food",
    word: "Chocolate",
    hints: {
      easy: "Sweet",
      medium: "Melt",
      hard: "Bar"
    }
  },
  {
    category: "Food",
    word: "Cake",
    hints: {
      easy: "Dessert",
      medium: "Birthday",
      hard: "Layers"
    }
  },
  {
    category: "Food",
    word: "Donut",
    hints: {
      easy: "Sweet",
      medium: "Glazed",
      hard: "Hole"
    }
  },
  {
    category: "Food",
    word: "Pancake",
    hints: {
      easy: "Breakfast",
      medium: "Syrup",
      hard: "Stack"
    }
  },
  {
    category: "Food",
    word: "Waffle",
    hints: {
      easy: "Breakfast",
      medium: "Syrup",
      hard: "Grid"
    }
  },
  {
    category: "Food",
    word: "Noodles",
    hints: {
      easy: "Asian",
      medium: "Bowl",
      hard: "Strands"
    }
  },
  {
    category: "Food",
    word: "Biryani",
    hints: {
      easy: "South Asian",
      medium: "Spices",
      hard: "Layered"
    }
  },

  // =========================
  // DRINKS
  // =========================
  {
    category: "Drinks",
    word: "Coffee",
    hints: {
      easy: "Morning",
      medium: "Bitter",
      hard: "Beans"
    }
  },
  {
    category: "Drinks",
    word: "Tea",
    hints: {
      easy: "Hot",
      medium: "Leaves",
      hard: "Cup"
    }
  },
  {
    category: "Drinks",
    word: "Lemonade",
    hints: {
      easy: "Refreshing",
      medium: "Sour",
      hard: "Yellow"
    }
  },
  {
    category: "Drinks",
    word: "Milkshake",
    hints: {
      easy: "Dessert drink",
      medium: "Thick",
      hard: "Straw"
    }
  },
  {
    category: "Drinks",
    word: "Coconut Water",
    hints: {
      easy: "Tropical",
      medium: "Refreshing",
      hard: "Inside"
    }
  },
  {
    category: "Drinks",
    word: "Orange Juice",
    hints: {
      easy: "Breakfast",
      medium: "Citrus",
      hard: "Pulp"
    }
  },
  {
    category: "Drinks",
    word: "Smoothie",
    hints: {
      easy: "Healthy",
      medium: "Blended",
      hard: "Thick"
    }
  },
  {
    category: "Drinks",
    word: "Hot Chocolate",
    hints: {
      easy: "Winter",
      medium: "Sweet",
      hard: "Marshmallow"
    }
  },

  // =========================
  // ANIMALS
  // =========================
  {
    category: "Animals",
    word: "Lion",
    hints: {
      easy: "Wild",
      medium: "Roar",
      hard: "Mane"
    }
  },
  {
    category: "Animals",
    word: "Tiger",
    hints: {
      easy: "Wild",
      medium: "Stripes",
      hard: "Orange"
    }
  },
  {
    category: "Animals",
    word: "Elephant",
    hints: {
      easy: "Large",
      medium: "Trunk",
      hard: "Wrinkles"
    }
  },
  {
    category: "Animals",
    word: "Giraffe",
    hints: {
      easy: "Tall",
      medium: "Spots",
      hard: "Neck"
    }
  },
  {
    category: "Animals",
    word: "Penguin",
    hints: {
      easy: "Cold",
      medium: "Swimming",
      hard: "Tuxedo"
    }
  },
  {
    category: "Animals",
    word: "Dolphin",
    hints: {
      easy: "Ocean",
      medium: "Intelligent",
      hard: "Echolocation"
    }
  },
  {
    category: "Animals",
    word: "Shark",
    hints: {
      easy: "Ocean",
      medium: "Dangerous",
      hard: "Fins"
    }
  },
  {
    category: "Animals",
    word: "Octopus",
    hints: {
      easy: "Ocean",
      medium: "Intelligent",
      hard: "Tentacles"
    }
  },
  {
    category: "Animals",
    word: "Kangaroo",
    hints: {
      easy: "Australia",
      medium: "Jumping",
      hard: "Pouch"
    }
  },
  {
    category: "Animals",
    word: "Panda",
    hints: {
      easy: "China",
      medium: "Bamboo",
      hard: "Black-white"
    }
  },
  {
    category: "Animals",
    word: "Monkey",
    hints: {
      easy: "Primate",
      medium: "Jungle",
      hard: "Climbing"
    }
  },
  {
    category: "Animals",
    word: "Wolf",
    hints: {
      easy: "Wild",
      medium: "Pack",
      hard: "Howling"
    }
  },
  {
    category: "Animals",
    word: "Eagle",
    hints: {
      easy: "Bird",
      medium: "Flying",
      hard: "Talons"
    }
  },
  {
    category: "Animals",
    word: "Owl",
    hints: {
      easy: "Bird",
      medium: "Night",
      hard: "Silent"
    }
  },
  {
    category: "Animals",
    word: "Snake",
    hints: {
      easy: "Reptile",
      medium: "Danger",
      hard: "Slithering"
    }
  },
  {
    category: "Animals",
    word: "Frog",
    hints: {
      easy: "Small",
      medium: "Jumping",
      hard: "Croak"
    }
  },
  {
    category: "Animals",
    word: "Butterfly",
    hints: {
      easy: "Insect",
      medium: "Colorful",
      hard: "Metamorphosis"
    }
  },
  {
    category: "Animals",
    word: "Bee",
    hints: {
      easy: "Insect",
      medium: "Honey",
      hard: "Buzz"
    }
  },

  // =========================
  // PLACES
  // =========================
  {
    category: "Places",
    word: "Beach",
    hints: {
      easy: "Vacation",
      medium: "Sand",
      hard: "Waves"
    }
  },
  {
    category: "Places",
    word: "Mountain",
    hints: {
      easy: "Nature",
      medium: "Climbing",
      hard: "Peak"
    }
  },
  {
    category: "Places",
    word: "Airport",
    hints: {
      easy: "Travel",
      medium: "Security",
      hard: "Runway"
    }
  },
  {
    category: "Places",
    word: "Hospital",
    hints: {
      easy: "Medical",
      medium: "Doctors",
      hard: "Emergency"
    }
  },
  {
    category: "Places",
    word: "Library",
    hints: {
      easy: "Books",
      medium: "Quiet",
      hard: "Shelves"
    }
  },
  {
    category: "Places",
    word: "School",
    hints: {
      easy: "Education",
      medium: "Students",
      hard: "Bell"
    }
  },
  {
    category: "Places",
    word: "Cinema",
    hints: {
      easy: "Entertainment",
      medium: "Dark",
      hard: "Screen"
    }
  },
  {
    category: "Places",
    word: "Restaurant",
    hints: {
      easy: "Food",
      medium: "Menu",
      hard: "Table"
    }
  },
  {
    category: "Places",
    word: "Gym",
    hints: {
      easy: "Exercise",
      medium: "Weights",
      hard: "Mirrors"
    }
  },
  {
    category: "Places",
    word: "Museum",
    hints: {
      easy: "History",
      medium: "Artifacts",
      hard: "Exhibits"
    }
  },
  {
    category: "Places",
    word: "Prison",
    hints: {
      easy: "Restricted",
      medium: "Guards",
      hard: "Bars"
    }
  },
  {
    category: "Places",
    word: "Supermarket",
    hints: {
      easy: "Shopping",
      medium: "Aisles",
      hard: "Cart"
    }
  },
  {
    category: "Places",
    word: "Hotel",
    hints: {
      easy: "Travel",
      medium: "Room",
      hard: "Key"
    }
  },
  {
    category: "Places",
    word: "Temple",
    hints: {
      easy: "Religion",
      medium: "Prayer",
      hard: "Incense"
    }
  },

  // =========================
  // OBJECTS
  // =========================
  {
    category: "Objects",
    word: "Umbrella",
    hints: {
      easy: "Rain",
      medium: "Opening",
      hard: "Canopy"
    }
  },
  {
    category: "Objects",
    word: "Backpack",
    hints: {
      easy: "Travel",
      medium: "School",
      hard: "Straps"
    }
  },
  {
    category: "Objects",
    word: "Mirror",
    hints: {
      easy: "Reflection",
      medium: "Glass",
      hard: "Image"
    }
  },
  {
    category: "Objects",
    word: "Clock",
    hints: {
      easy: "Time",
      medium: "Numbers",
      hard: "Hands"
    }
  },
  {
    category: "Objects",
    word: "Camera",
    hints: {
      easy: "Photos",
      medium: "Lens",
      hard: "Shutter"
    }
  },
  {
    category: "Objects",
    word: "Keyboard",
    hints: {
      easy: "Computer",
      medium: "Typing",
      hard: "Keys"
    }
  },
  {
    category: "Objects",
    word: "Headphones",
    hints: {
      easy: "Music",
      medium: "Audio",
      hard: "Ears"
    }
  },
  {
    category: "Objects",
    word: "Backpack",
    hints: {
      easy: "Travel",
      medium: "Shoulders",
      hard: "Zippers"
    }
  },
  {
    category: "Objects",
    word: "Candle",
    hints: {
      easy: "Light",
      medium: "Wax",
      hard: "Flame"
    }
  },
  {
    category: "Objects",
    word: "Pillow",
    hints: {
      easy: "Sleep",
      medium: "Soft",
      hard: "Head"
    }
  },
  {
    category: "Objects",
    word: "Blanket",
    hints: {
      easy: "Warm",
      medium: "Sleep",
      hard: "Cover"
    }
  },
  {
    category: "Objects",
    word: "Wallet",
    hints: {
      easy: "Money",
      medium: "Cards",
      hard: "Pocket"
    }
  },
  {
    category: "Objects",
    word: "Suitcase",
    hints: {
      easy: "Travel",
      medium: "Packing",
      hard: "Wheels"
    }
  },
  {
    category: "Objects",
    word: "Toothbrush",
    hints: {
      easy: "Bathroom",
      medium: "Morning",
      hard: "Bristles"
    }
  },
  {
    category: "Objects",
    word: "Key",
    hints: {
      easy: "Lock",
      medium: "Metal",
      hard: "Turn"
    }
  },
  {
    category: "Objects",
    word: "Scissors",
    hints: {
      easy: "Tool",
      medium: "Cutting",
      hard: "Blades"
    }
  },
  {
    category: "Objects",
    word: "Backpack",
    hints: {
      easy: "Bag",
      medium: "Straps",
      hard: "Carrying"
    }
  },

  // =========================
  // TECHNOLOGY
  // =========================
  {
    category: "Technology",
    word: "Smartphone",
    hints: {
      easy: "Communication",
      medium: "Apps",
      hard: "Pocket"
    }
  },
  {
    category: "Technology",
    word: "Laptop",
    hints: {
      easy: "Computer",
      medium: "Portable",
      hard: "Keyboard"
    }
  },
  {
    category: "Technology",
    word: "Robot",
    hints: {
      easy: "Machine",
      medium: "Automation",
      hard: "Metal"
    }
  },
  {
    category: "Technology",
    word: "Internet",
    hints: {
      easy: "Online",
      medium: "Network",
      hard: "Invisible"
    }
  },
  {
    category: "Technology",
    word: "Wi-Fi",
    hints: {
      easy: "Internet",
      medium: "Wireless",
      hard: "Signal"
    }
  },
  {
    category: "Technology",
    word: "Drone",
    hints: {
      easy: "Flying",
      medium: "Camera",
      hard: "Remote"
    }
  },
  {
    category: "Technology",
    word: "Printer",
    hints: {
      easy: "Office",
      medium: "Paper",
      hard: "Ink"
    }
  },
  {
    category: "Technology",
    word: "USB Drive",
    hints: {
      easy: "Storage",
      medium: "Computer",
      hard: "Portable"
    }
  },
  {
    category: "Technology",
    word: "Virtual Reality",
    hints: {
      easy: "Gaming",
      medium: "Immersive",
      hard: "Headset"
    }
  },
  {
    category: "Technology",
    word: "Satellite",
    hints: {
      easy: "Space",
      medium: "Orbit",
      hard: "Signal"
    }
  },
  {
    category: "Technology",
    word: "AI",
    hints: {
      easy: "Technology",
      medium: "Learning",
      hard: "Prediction"
    }
  },
  {
    category: "Technology",
    word: "Password",
    hints: {
      easy: "Security",
      medium: "Secret",
      hard: "Login"
    }
  },
  {
    category: "Technology",
    word: "Server",
    hints: {
      easy: "Computers",
      medium: "Requests",
      hard: "Backend"
    }
  },
  {
    category: "Technology",
    word: "Database",
    hints: {
      easy: "Data",
      medium: "Storage",
      hard: "Tables"
    }
  },

  // =========================
  // SPORTS
  // =========================
  {
    category: "Sports",
    word: "Football",
    hints: {
      easy: "Sport",
      medium: "Goal",
      hard: "Offside"
    }
  },
  {
    category: "Sports",
    word: "Basketball",
    hints: {
      easy: "Sport",
      medium: "Court",
      hard: "Dribble"
    }
  },
  {
    category: "Sports",
    word: "Cricket",
    hints: {
      easy: "Sport",
      medium: "Bat",
      hard: "Wicket"
    }
  },
  {
    category: "Sports",
    word: "Tennis",
    hints: {
      easy: "Sport",
      medium: "Racket",
      hard: "Deuce"
    }
  },
  {
    category: "Sports",
    word: "Volleyball",
    hints: {
      easy: "Sport",
      medium: "Net",
      hard: "Rotation"
    }
  },
  {
    category: "Sports",
    word: "Swimming",
    hints: {
      easy: "Sport",
      medium: "Water",
      hard: "Laps"
    }
  },
  {
    category: "Sports",
    word: "Boxing",
    hints: {
      easy: "Sport",
      medium: "Fighting",
      hard: "Rounds"
    }
  },
  {
    category: "Sports",
    word: "Golf",
    hints: {
      easy: "Sport",
      medium: "Grass",
      hard: "Hole"
    }
  },
  {
    category: "Sports",
    word: "Archery",
    hints: {
      easy: "Sport",
      medium: "Target",
      hard: "Bullseye"
    }
  },
  {
    category: "Sports",
    word: "Skiing",
    hints: {
      easy: "Winter",
      medium: "Snow",
      hard: "Slopes"
    }
  },
  {
    category: "Sports",
    word: "Surfing",
    hints: {
      easy: "Ocean",
      medium: "Waves",
      hard: "Board"
    }
  },
  {
    category: "Sports",
    word: "Table Tennis",
    hints: {
      easy: "Indoor",
      medium: "Paddle",
      hard: "Fast"
    }
  },

  // =========================
  // MOVIES & TV
  // =========================
  {
    category: "Movies & TV",
    word: "Titanic",
    hints: {
      easy: "Movie",
      medium: "Ship",
      hard: "Iceberg"
    }
  },
  {
    category: "Movies & TV",
    word: "Avatar",
    hints: {
      easy: "Movie",
      medium: "Blue",
      hard: "Pandora"
    }
  },
  {
    category: "Movies & TV",
    word: "Harry Potter",
    hints: {
      easy: "Movie",
      medium: "Magic",
      hard: "Scar"
    }
  },
  {
    category: "Movies & TV",
    word: "Batman",
    hints: {
      easy: "Superhero",
      medium: "Night",
      hard: "Gotham"
    }
  },
  {
    category: "Movies & TV",
    word: "Spider-Man",
    hints: {
      easy: "Superhero",
      medium: "Web",
      hard: "Climbing"
    }
  },
  {
    category: "Movies & TV",
    word: "The Simpsons",
    hints: {
      easy: "TV show",
      medium: "Family",
      hard: "Yellow"
    }
  },
  {
    category: "Movies & TV",
    word: "Breaking Bad",
    hints: {
      easy: "TV show",
      medium: "Chemistry",
      hard: "Desert"
    }
  },
  {
    category: "Movies & TV",
    word: "Stranger Things",
    hints: {
      easy: "TV show",
      medium: "Mystery",
      hard: "Upside Down"
    }
  },
  {
    category: "Movies & TV",
    word: "The Office",
    hints: {
      easy: "Comedy",
      medium: "Workplace",
      hard: "Paper"
    }
  },
  {
    category: "Movies & TV",
    word: "Game of Thrones",
    hints: {
      easy: "TV show",
      medium: "Fantasy",
      hard: "Throne"
    }
  },
  {
    category: "Movies & TV",
    word: "Wednesday",
    hints: {
      easy: "TV show",
      medium: "School",
      hard: "Gothic"
    }
  },
  {
    category: "Movies & TV",
    word: "Squid Game",
    hints: {
      easy: "TV show",
      medium: "Competition",
      hard: "Green"
    }
  },
  {
    category: "Movies & TV",
    word: "Home Alone",
    hints: {
      easy: "Comedy",
      medium: "Christmas",
      hard: "Traps"
    }
  },
  {
    category: "Movies & TV",
    word: "Jurassic Park",
    hints: {
      easy: "Movie",
      medium: "Island",
      hard: "Fossils"
    }
  },

  // =========================
  // MUSIC
  // =========================
  {
    category: "Music",
    word: "Guitar",
    hints: {
      easy: "Instrument",
      medium: "Strings",
      hard: "Frets"
    }
  },
  {
    category: "Music",
    word: "Piano",
    hints: {
      easy: "Instrument",
      medium: "Keys",
      hard: "Pedals"
    }
  },
  {
    category: "Music",
    word: "Drums",
    hints: {
      easy: "Instrument",
      medium: "Rhythm",
      hard: "Sticks"
    }
  },
  {
    category: "Music",
    word: "Violin",
    hints: {
      easy: "Instrument",
      medium: "Strings",
      hard: "Bow"
    }
  },
  {
    category: "Music",
    word: "Microphone",
    hints: {
      easy: "Music",
      medium: "Voice",
      hard: "Feedback"
    }
  },
  {
    category: "Music",
    word: "Concert",
    hints: {
      easy: "Music",
      medium: "Crowd",
      hard: "Stage"
    }
  },
  {
    category: "Music",
    word: "DJ",
    hints: {
      easy: "Music",
      medium: "Club",
      hard: "Mixing"
    }
  },
  {
    category: "Music",
    word: "Karaoke",
    hints: {
      easy: "Singing",
      medium: "Lyrics",
      hard: "Screen"
    }
  },

  // =========================
  // SCHOOL / COLLEGE
  // =========================
  {
    category: "School & College",
    word: "Exam",
    hints: {
      easy: "Education",
      medium: "Stress",
      hard: "Paper"
    }
  },
  {
    category: "School & College",
    word: "Professor",
    hints: {
      easy: "Education",
      medium: "Lecture",
      hard: "Grades"
    }
  },
  {
    category: "School & College",
    word: "Homework",
    hints: {
      easy: "School",
      medium: "Deadline",
      hard: "Assignment"
    }
  },
  {
    category: "School & College",
    word: "Library",
    hints: {
      easy: "Books",
      medium: "Quiet",
      hard: "Study"
    }
  },
  {
    category: "School & College",
    word: "Graduation",
    hints: {
      easy: "Education",
      medium: "Celebration",
      hard: "Cap"
    }
  },
  {
    category: "School & College",
    word: "Laboratory",
    hints: {
      easy: "Science",
      medium: "Experiments",
      hard: "Beakers"
    }
  },
  {
    category: "School & College",
    word: "Project",
    hints: {
      easy: "College",
      medium: "Deadline",
      hard: "Presentation"
    }
  },
  {
    category: "School & College",
    word: "Canteen",
    hints: {
      easy: "Food",
      medium: "Students",
      hard: "Break"
    }
  },

  // =========================
  // NATURE
  // =========================
  {
    category: "Nature",
    word: "Rainbow",
    hints: {
      easy: "Weather",
      medium: "Colors",
      hard: "Arc"
    }
  },
  {
    category: "Nature",
    word: "Volcano",
    hints: {
      easy: "Nature",
      medium: "Mountain",
      hard: "Lava"
    }
  },
  {
    category: "Nature",
    word: "Waterfall",
    hints: {
      easy: "Nature",
      medium: "Water",
      hard: "Cliff"
    }
  },
  {
    category: "Nature",
    word: "Forest",
    hints: {
      easy: "Nature",
      medium: "Trees",
      hard: "Canopy"
    }
  },
  {
    category: "Nature",
    word: "Desert",
    hints: {
      easy: "Nature",
      medium: "Dry",
      hard: "Dunes"
    }
  },
  {
    category: "Nature",
    word: "Ocean",
    hints: {
      easy: "Water",
      medium: "Waves",
      hard: "Depth"
    }
  },
  {
    category: "Nature",
    word: "Thunderstorm",
    hints: {
      easy: "Weather",
      medium: "Lightning",
      hard: "Boom"
    }
  },
  {
    category: "Nature",
    word: "Snow",
    hints: {
      easy: "Winter",
      medium: "Cold",
      hard: "Flakes"
    }
  },
  {
    category: "Nature",
    word: "Sunset",
    hints: {
      easy: "Sky",
      medium: "Evening",
      hard: "Horizon"
    }
  },
  {
    category: "Nature",
    word: "Moon",
    hints: {
      easy: "Night",
      medium: "Sky",
      hard: "Crater"
    }
  },

  // =========================
  // JOBS / PROFESSIONS
  // =========================
  {
    category: "Professions",
    word: "Doctor",
    hints: {
      easy: "Medical",
      medium: "Patients",
      hard: "Diagnosis"
    }
  },
  {
    category: "Professions",
    word: "Engineer",
    hints: {
      easy: "Technical",
      medium: "Design",
      hard: "Blueprint"
    }
  },
  {
    category: "Professions",
    word: "Teacher",
    hints: {
      easy: "Education",
      medium: "Classroom",
      hard: "Lesson"
    }
  },
  {
    category: "Professions",
    word: "Chef",
    hints: {
      easy: "Food",
      medium: "Kitchen",
      hard: "Knife"
    }
  },
  {
    category: "Professions",
    word: "Pilot",
    hints: {
      easy: "Travel",
      medium: "Aircraft",
      hard: "Cockpit"
    }
  },
  {
    category: "Professions",
    word: "Police Officer",
    hints: {
      easy: "Law",
      medium: "Uniform",
      hard: "Badge"
    }
  },
  {
    category: "Professions",
    word: "Architect",
    hints: {
      easy: "Design",
      medium: "Buildings",
      hard: "Blueprint"
    }
  },
  {
    category: "Professions",
    word: "Photographer",
    hints: {
      easy: "Photos",
      medium: "Camera",
      hard: "Lens"
    }
  },
  {
    category: "Professions",
    word: "Firefighter",
    hints: {
      easy: "Emergency",
      medium: "Fire",
      hard: "Hose"
    }
  },

  // =========================
  // TRANSPORT
  // =========================
  {
    category: "Transport",
    word: "Car",
    hints: {
      easy: "Vehicle",
      medium: "Road",
      hard: "Steering"
    }
  },
  {
    category: "Transport",
    word: "Bus",
    hints: {
      easy: "Public transport",
      medium: "Passengers",
      hard: "Stops"
    }
  },
  {
    category: "Transport",
    word: "Train",
    hints: {
      easy: "Transport",
      medium: "Tracks",
      hard: "Carriages"
    }
  },
  {
    category: "Transport",
    word: "Airplane",
    hints: {
      easy: "Travel",
      medium: "Airport",
      hard: "Wings"
    }
  },
  {
    category: "Transport",
    word: "Bicycle",
    hints: {
      easy: "Vehicle",
      medium: "Exercise",
      hard: "Pedals"
    }
  },
  {
    category: "Transport",
    word: "Motorcycle",
    hints: {
      easy: "Vehicle",
      medium: "Helmet",
      hard: "Two wheels"
    }
  },
  {
    category: "Transport",
    word: "Boat",
    hints: {
      easy: "Water",
      medium: "Travel",
      hard: "Hull"
    }
  },
  {
    category: "Transport",
    word: "Helicopter",
    hints: {
      easy: "Aircraft",
      medium: "Flying",
      hard: "Blades"
    }
  },

  // =========================
  // COUNTRY / CITY
  // =========================
  {
    category: "Countries & Cities",
    word: "Nepal",
    hints: {
      easy: "Country",
      medium: "Himalayas",
      hard: "Landlocked"
    }
  },
  {
    category: "Countries & Cities",
    word: "Japan",
    hints: {
      easy: "Country",
      medium: "Asia",
      hard: "Islands"
    }
  },
  {
    category: "Countries & Cities",
    word: "India",
    hints: {
      easy: "Country",
      medium: "Asia",
      hard: "Spices"
    }
  },
  {
    category: "Countries & Cities",
    word: "France",
    hints: {
      easy: "Country",
      medium: "Europe",
      hard: "Eiffel"
    }
  },
  {
    category: "Countries & Cities",
    word: "Brazil",
    hints: {
      easy: "Country",
      medium: "Football",
      hard: "Amazon"
    }
  },
  {
    category: "Countries & Cities",
    word: "Australia",
    hints: {
      easy: "Country",
      medium: "Oceania",
      hard: "Outback"
    }
  },
  {
    category: "Countries & Cities",
    word: "Kathmandu",
    hints: {
      easy: "City",
      medium: "Nepal",
      hard: "Valley"
    }
  },
  {
    category: "Countries & Cities",
    word: "London",
    hints: {
      easy: "City",
      medium: "England",
      hard: "Underground"
    }
  },
  {
    category: "Countries & Cities",
    word: "New York",
    hints: {
      easy: "City",
      medium: "America",
      hard: "Manhattan"
    }
  },
  {
    category: "Countries & Cities",
    word: "Dubai",
    hints: {
      easy: "City",
      medium: "Luxury",
      hard: "Desert"
    }
  },

  // =========================
  // CLOTHING
  // =========================
  {
    category: "Clothing",
    word: "Jeans",
    hints: {
      easy: "Clothing",
      medium: "Denim",
      hard: "Pockets"
    }
  },
  {
    category: "Clothing",
    word: "T-Shirt",
    hints: {
      easy: "Clothing",
      medium: "Casual",
      hard: "Sleeves"
    }
  },
  {
    category: "Clothing",
    word: "Jacket",
    hints: {
      easy: "Clothing",
      medium: "Winter",
      hard: "Zipper"
    }
  },
  {
    category: "Clothing",
    word: "Sneakers",
    hints: {
      easy: "Shoes",
      medium: "Sports",
      hard: "Laces"
    }
  },
  {
    category: "Clothing",
    word: "Hat",
    hints: {
      easy: "Clothing",
      medium: "Head",
      hard: "Brim"
    }
  },
  {
    category: "Clothing",
    word: "Sunglasses",
    hints: {
      easy: "Accessory",
      medium: "Summer",
      hard: "Tint"
    }
  },
  {
    category: "Clothing",
    word: "Tie",
    hints: {
      easy: "Formal",
      medium: "Suit",
      hard: "Knot"
    }
  },
  {
    category: "Clothing",
    word: "Scarf",
    hints: {
      easy: "Winter",
      medium: "Warm",
      hard: "Neck"
    }
  },

  // =========================
  // HOUSEHOLD
  // =========================
  {
    category: "Household",
    word: "Refrigerator",
    hints: {
      easy: "Kitchen",
      medium: "Cold",
      hard: "Shelves"
    }
  },
  {
    category: "Household",
    word: "Television",
    hints: {
      easy: "Entertainment",
      medium: "Screen",
      hard: "Remote"
    }
  },
  {
    category: "Household",
    word: "Washing Machine",
    hints: {
      easy: "Laundry",
      medium: "Water",
      hard: "Spin"
    }
  },
  {
    category: "Household",
    word: "Microwave",
    hints: {
      easy: "Kitchen",
      medium: "Heating",
      hard: "Timer"
    }
  },
  {
    category: "Household",
    word: "Vacuum Cleaner",
    hints: {
      easy: "Cleaning",
      medium: "Floor",
      hard: "Suction"
    }
  },
  {
    category: "Household",
    word: "Sofa",
    hints: {
      easy: "Furniture",
      medium: "Living room",
      hard: "Cushions"
    }
  },
  {
    category: "Household",
    word: "Bed",
    hints: {
      easy: "Sleep",
      medium: "Bedroom",
      hard: "Mattress"
    }
  },
  {
    category: "Household",
    word: "Lamp",
    hints: {
      easy: "Light",
      medium: "Room",
      hard: "Shade"
    }
  },

  // =========================
  // INTERNET / SOCIAL MEDIA
  // =========================
  {
    category: "Internet & Social Media",
    word: "YouTube",
    hints: {
      easy: "Website",
      medium: "Videos",
      hard: "Creators"
    }
  },
  {
    category: "Internet & Social Media",
    word: "TikTok",
    hints: {
      easy: "Social media",
      medium: "Videos",
      hard: "Scroll"
    }
  },
  {
    category: "Internet & Social Media",
    word: "Instagram",
    hints: {
      easy: "Social media",
      medium: "Photos",
      hard: "Stories"
    }
  },
  {
    category: "Internet & Social Media",
    word: "Discord",
    hints: {
      easy: "Communication",
      medium: "Servers",
      hard: "Channels"
    }
  },
  {
    category: "Internet & Social Media",
    word: "Reddit",
    hints: {
      easy: "Website",
      medium: "Community",
      hard: "Subreddit"
    }
  },
  {
    category: "Internet & Social Media",
    word: "Meme",
    hints: {
      easy: "Internet",
      medium: "Funny",
      hard: "Template"
    }
  },
  {
    category: "Internet & Social Media",
    word: "Influencer",
    hints: {
      easy: "Internet",
      medium: "Followers",
      hard: "Sponsorship"
    }
  },
  {
    category: "Internet & Social Media",
    word: "Viral",
    hints: {
      easy: "Internet",
      medium: "Popular",
      hard: "Rapid"
    }
  },

  // =========================
  // MYTHICAL / FANTASY
  // =========================
  {
    category: "Fantasy",
    word: "Dragon",
    hints: {
      easy: "Mythical",
      medium: "Fire",
      hard: "Scales"
    }
  },
  {
    category: "Fantasy",
    word: "Unicorn",
    hints: {
      easy: "Mythical",
      medium: "Horse",
      hard: "Horn"
    }
  },
  {
    category: "Fantasy",
    word: "Wizard",
    hints: {
      easy: "Magic",
      medium: "Spells",
      hard: "Staff"
    }
  },
  {
    category: "Fantasy",
    word: "Vampire",
    hints: {
      easy: "Monster",
      medium: "Night",
      hard: "Fangs"
    }
  },
  {
    category: "Fantasy",
    word: "Werewolf",
    hints: {
      easy: "Monster",
      medium: "Moon",
      hard: "Transformation"
    }
  },
  {
    category: "Fantasy",
    word: "Mermaid",
    hints: {
      easy: "Mythical",
      medium: "Ocean",
      hard: "Tail"
    }
  },
  {
    category: "Fantasy",
    word: "Fairy",
    hints: {
      easy: "Magic",
      medium: "Tiny",
      hard: "Wings"
    }
  },
  {
    category: "Fantasy",
    word: "Castle",
    hints: {
      easy: "Fantasy",
      medium: "Royal",
      hard: "Towers"
    }
  },

  // =========================
  // GAMES
  // =========================
  {
    category: "Games",
    word: "Chess",
    hints: {
      easy: "Board game",
      medium: "Strategy",
      hard: "Checkmate"
    }
  },
  {
    category: "Games",
    word: "Monopoly",
    hints: {
      easy: "Board game",
      medium: "Money",
      hard: "Properties"
    }
  },
  {
    category: "Games",
    word: "Minecraft",
    hints: {
      easy: "Video game",
      medium: "Building",
      hard: "Blocks"
    }
  },
  {
    category: "Games",
    word: "Tetris",
    hints: {
      easy: "Video game",
      medium: "Blocks",
      hard: "Lines"
    }
  },
  {
    category: "Games",
    word: "Among Us",
    hints: {
      easy: "Video game",
      medium: "Imposter",
      hard: "Tasks"
    }
  },
  {
    category: "Games",
    word: "Pokémon",
    hints: {
      easy: "Video game",
      medium: "Creatures",
      hard: "Pikachu"
    }
  },
  {
    category: "Games",
    word: "UNO",
    hints: {
      easy: "Card game",
      medium: "Colors",
      hard: "Draw Four"
    }
  },
  {
    category: "Games",
    word: "Jenga",
    hints: {
      easy: "Game",
      medium: "Blocks",
      hard: "Balance"
    }
  },
  {
    category: "Games",
    word: "Ludo",
    hints: {
      easy: "Board game",
      medium: "Dice",
      hard: "Tokens"
    }
  },

  // =========================
  // SUPERHEROES
  // =========================
  {
    category: "Superheroes",
    word: "Superman",
    hints: {
      easy: "Superhero",
      medium: "Flying",
      hard: "Kryptonite"
    }
  },
  {
    category: "Superheroes",
    word: "Iron Man",
    hints: {
      easy: "Marvel",
      medium: "Technology",
      hard: "Arc reactor"
    }
  },
  {
    category: "Superheroes",
    word: "Thor",
    hints: {
      easy: "Marvel",
      medium: "Lightning",
      hard: "Hammer"
    }
  },
  {
    category: "Superheroes",
    word: "Hulk",
    hints: {
      easy: "Marvel",
      medium: "Strong",
      hard: "Green"
    }
  },
  {
    category: "Superheroes",
    word: "Wonder Woman",
    hints: {
      easy: "DC",
      medium: "Warrior",
      hard: "Lasso"
    }
  },
  {
    category: "Superheroes",
    word: "Flash",
    hints: {
      easy: "DC",
      medium: "Fast",
      hard: "Lightning"
    }
  },
  {
    category: "Superheroes",
    word: "Black Panther",
    hints: {
      easy: "Marvel",
      medium: "Wakanda",
      hard: "Vibranium"
    }
  },

  // =========================
  // EMOTIONS / ABSTRACT
  // =========================
  {
    category: "Emotions",
    word: "Happiness",
    hints: {
      easy: "Emotion",
      medium: "Smile",
      hard: "Joy"
    }
  },
  {
    category: "Emotions",
    word: "Fear",
    hints: {
      easy: "Emotion",
      medium: "Danger",
      hard: "Adrenaline"
    }
  },
  {
    category: "Emotions",
    word: "Anger",
    hints: {
      easy: "Emotion",
      medium: "Frustration",
      hard: "Heat"
    }
  },
  {
    category: "Emotions",
    word: "Love",
    hints: {
      easy: "Emotion",
      medium: "Relationship",
      hard: "Heart"
    }
  },
  {
    category: "Emotions",
    word: "Jealousy",
    hints: {
      easy: "Emotion",
      medium: "Envy",
      hard: "Green"
    }
  },
  {
    category: "Emotions",
    word: "Embarrassment",
    hints: {
      easy: "Emotion",
      medium: "Awkward",
      hard: "Blushing"
    }
  },
  {
    category: "Emotions",
    word: "Nostalgia",
    hints: {
      easy: "Feeling",
      medium: "Past",
      hard: "Memories"
    }
  },

  // =========================
  // EVERYDAY ACTIVITIES
  // =========================
  {
    category: "Activities",
    word: "Sleeping",
    hints: {
      easy: "Rest",
      medium: "Bed",
      hard: "Dreams"
    }
  },
  {
    category: "Activities",
    word: "Cooking",
    hints: {
      easy: "Kitchen",
      medium: "Food",
      hard: "Heat"
    }
  },
  {
    category: "Activities",
    word: "Shopping",
    hints: {
      easy: "Activity",
      medium: "Money",
      hard: "Cart"
    }
  },
  {
    category: "Activities",
    word: "Dancing",
    hints: {
      easy: "Movement",
      medium: "Music",
      hard: "Rhythm"
    }
  },
  {
    category: "Activities",
    word: "Swimming",
    hints: {
      easy: "Exercise",
      medium: "Water",
      hard: "Strokes"
    }
  },
  {
    category: "Activities",
    word: "Reading",
    hints: {
      easy: "Activity",
      medium: "Books",
      hard: "Pages"
    }
  },
  {
    category: "Activities",
    word: "Camping",
    hints: {
      easy: "Outdoor",
      medium: "Nature",
      hard: "Tent"
    }
  },
  {
    category: "Activities",
    word: "Hiking",
    hints: {
      easy: "Outdoor",
      medium: "Walking",
      hard: "Trail"
    }
  },

  // =========================
  // HOLIDAYS / EVENTS
  // =========================
  {
    category: "Holidays & Events",
    word: "Birthday",
    hints: {
      easy: "Celebration",
      medium: "Cake",
      hard: "Candles"
    }
  },
  {
    category: "Holidays & Events",
    word: "Wedding",
    hints: {
      easy: "Celebration",
      medium: "Couple",
      hard: "Vows"
    }
  },
  {
    category: "Holidays & Events",
    word: "Christmas",
    hints: {
      easy: "Holiday",
      medium: "Gifts",
      hard: "December"
    }
  },
  {
    category: "Holidays & Events",
    word: "Halloween",
    hints: {
      easy: "Holiday",
      medium: "Costumes",
      hard: "Pumpkin"
    }
  },
  {
    category: "Holidays & Events",
    word: "New Year",
    hints: {
      easy: "Celebration",
      medium: "Midnight",
      hard: "Countdown"
    }
  },
  {
    category: "Holidays & Events",
    word: "Festival",
    hints: {
      easy: "Celebration",
      medium: "Crowd",
      hard: "Stalls"
    }
  },

  // =========================
  // NEPAL
  // =========================
  {
    category: "Nepal",
    word: "Everest",
    hints: {
      easy: "Mountain",
      medium: "Nepal",
      hard: "Summit"
    }
  },
  {
    category: "Nepal",
    word: "Pokhara",
    hints: {
      easy: "City",
      medium: "Tourism",
      hard: "Lakes"
    }
  },
  {
    category: "Nepal",
    word: "Lumbini",
    hints: {
      easy: "Nepal",
      medium: "Pilgrimage",
      hard: "Birthplace"
    }
  },
  {
    category: "Nepal",
    word: "Dashain",
    hints: {
      easy: "Festival",
      medium: "Family",
      hard: "Tika"
    }
  },
  {
    category: "Nepal",
    word: "Tihar",
    hints: {
      easy: "Festival",
      medium: "Lights",
      hard: "Diyas"
    }
  },
  {
    category: "Nepal",
    word: "Kathmandu Valley",
    hints: {
      easy: "Nepal",
      medium: "Heritage",
      hard: "Temples"
    }
  },
  {
    category: "Nepal",
    word: "Sherpa",
    hints: {
      easy: "Nepal",
      medium: "Mountains",
      hard: "Climbing"
    }
  },
  {
    category: "Nepal",
    word: "Yak",
    hints: {
      easy: "Animal",
      medium: "Himalayas",
      hard: "Fur"
    }
  }
];
