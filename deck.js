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
  {
    category: "Food",
    word: "Sandwich",
    hints: {
      easy: "Bread",
      medium: "Layers",
      hard: "Lunchbox"
    }
  },
  {
    category: "Food",
    word: "Samosa",
    hints: {
      easy: "Fried",
      medium: "Potato",
      hard: "Triangle"
    }
  },
  {
    category: "Food",
    word: "Omelette",
    hints: {
      easy: "Eggs",
      medium: "Breakfast",
      hard: "Fold"
    }
  },
  {
    category: "Food",
    word: "Cheese",
    hints: {
      easy: "Dairy",
      medium: "Yellow",
      hard: "Holes"
    }
  },
  {
    category: "Food",
    word: "Bread",
    hints: {
      easy: "Bakery",
      medium: "Slices",
      hard: "Toast"
    }
  },
  {
    category: "Food",
    word: "Soup",
    hints: {
      easy: "Bowl",
      medium: "Warm",
      hard: "Spoon"
    }
  },
  {
    category: "Food",
    word: "Salad",
    hints: {
      easy: "Vegetables",
      medium: "Healthy",
      hard: "Leaves"
    }
  },
  {
    category: "Food",
    word: "Steak",
    hints: {
      easy: "Meat",
      medium: "Grill",
      hard: "Rare"
    }
  },
  {
    category: "Food",
    word: "Chow Mein",
    hints: {
      easy: "Stir-fried",
      medium: "Street food",
      hard: "Wok"
    }
  },
  {
    category: "Food",
    word: "Sel Roti",
    hints: {
      easy: "Festival food",
      medium: "Rice flour",
      hard: "Circle"
    }
  },
  {
    category: "Food",
    word: "Dal Bhat",
    hints: {
      easy: "Nepali",
      medium: "Lentils",
      hard: "Twice daily"
    }
  },
  {
    category: "Food",
    word: "Croissant",
    hints: {
      easy: "Pastry",
      medium: "French",
      hard: "Crescent"
    }
  },
  {
    category: "Food",
    word: "Cookie",
    hints: {
      easy: "Baked",
      medium: "Sweet",
      hard: "Chips"
    }
  },
  {
    category: "Food",
    word: "Burrito",
    hints: {
      easy: "Mexican",
      medium: "Wrapped",
      hard: "Foil"
    }
  },
  {
    category: "Food",
    word: "Kebab",
    hints: {
      easy: "Grilled",
      medium: "Skewer",
      hard: "Smoke"
    }
  },
  {
    category: "Food",
    word: "Pie",
    hints: {
      easy: "Crust",
      medium: "Filling",
      hard: "Slice"
    }
  },
  {
    category: "Food",
    word: "Cereal",
    hints: {
      easy: "Breakfast",
      medium: "Milk",
      hard: "Crunch"
    }
  },
  {
    category: "Food",
    word: "Honey",
    hints: {
      easy: "Sweet",
      medium: "Bees",
      hard: "Golden"
    }
  },
  {
    category: "Food",
    word: "Chips",
    hints: {
      easy: "Snack",
      medium: "Salty",
      hard: "Packet"
    }
  },
  {
    category: "Food",
    word: "Apple",
    hints: {
      easy: "Fruit",
      medium: "Crunchy",
      hard: "Doctor"
    }
  },
  {
    category: "Food",
    word: "Banana",
    hints: {
      easy: "Fruit",
      medium: "Peel",
      hard: "Monkey"
    }
  },
  {
    category: "Food",
    word: "Mango",
    hints: {
      easy: "Fruit",
      medium: "Summer",
      hard: "Seed"
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
  {
    category: "Drinks",
    word: "Water",
    hints: {
      easy: "Drink",
      medium: "Clear",
      hard: "Essential"
    }
  },
  {
    category: "Drinks",
    word: "Milk",
    hints: {
      easy: "Dairy",
      medium: "White",
      hard: "Cow"
    }
  },
  {
    category: "Drinks",
    word: "Soda",
    hints: {
      easy: "Fizzy",
      medium: "Can",
      hard: "Bubbles"
    }
  },
  {
    category: "Drinks",
    word: "Beer",
    hints: {
      easy: "Alcohol",
      medium: "Foam",
      hard: "Barley"
    }
  },
  {
    category: "Drinks",
    word: "Wine",
    hints: {
      easy: "Alcohol",
      medium: "Grapes",
      hard: "Cellar"
    }
  },
  {
    category: "Drinks",
    word: "Whiskey",
    hints: {
      easy: "Alcohol",
      medium: "Strong",
      hard: "Ice"
    }
  },
  {
    category: "Drinks",
    word: "Energy Drink",
    hints: {
      easy: "Caffeine",
      medium: "Awake",
      hard: "Wings"
    }
  },
  {
    category: "Drinks",
    word: "Lassi",
    hints: {
      easy: "Yogurt",
      medium: "South Asian",
      hard: "Sweet"
    }
  },
  {
    category: "Drinks",
    word: "Cocktail",
    hints: {
      easy: "Bar",
      medium: "Mixed",
      hard: "Umbrella"
    }
  },
  {
    category: "Drinks",
    word: "Champagne",
    hints: {
      easy: "Celebration",
      medium: "Sparkling",
      hard: "Cork"
    }
  },
  {
    category: "Drinks",
    word: "Bubble Tea",
    hints: {
      easy: "Taiwanese",
      medium: "Pearls",
      hard: "Straw"
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
  {
    category: "Animals",
    word: "Dog",
    hints: {
      easy: "Pet",
      medium: "Loyal",
      hard: "Fetch"
    }
  },
  {
    category: "Animals",
    word: "Cat",
    hints: {
      easy: "Pet",
      medium: "Whiskers",
      hard: "Nine"
    }
  },
  {
    category: "Animals",
    word: "Horse",
    hints: {
      easy: "Riding",
      medium: "Gallop",
      hard: "Shoes"
    }
  },
  {
    category: "Animals",
    word: "Cow",
    hints: {
      easy: "Farm",
      medium: "Milk",
      hard: "Sacred"
    }
  },
  {
    category: "Animals",
    word: "Rabbit",
    hints: {
      easy: "Hopping",
      medium: "Carrot",
      hard: "Hat"
    }
  },
  {
    category: "Animals",
    word: "Bear",
    hints: {
      easy: "Forest",
      medium: "Honey",
      hard: "Sleep"
    }
  },
  {
    category: "Animals",
    word: "Fox",
    hints: {
      easy: "Wild",
      medium: "Clever",
      hard: "Red"
    }
  },
  {
    category: "Animals",
    word: "Deer",
    hints: {
      easy: "Antlers",
      medium: "Forest",
      hard: "Headlights"
    }
  },
  {
    category: "Animals",
    word: "Camel",
    hints: {
      easy: "Desert",
      medium: "Hump",
      hard: "Ship"
    }
  },
  {
    category: "Animals",
    word: "Whale",
    hints: {
      easy: "Ocean",
      medium: "Huge",
      hard: "Song"
    }
  },
  {
    category: "Animals",
    word: "Crocodile",
    hints: {
      easy: "Reptile",
      medium: "Jaws",
      hard: "Tears"
    }
  },
  {
    category: "Animals",
    word: "Peacock",
    hints: {
      easy: "Bird",
      medium: "Feathers",
      hard: "Dance"
    }
  },
  {
    category: "Animals",
    word: "Parrot",
    hints: {
      easy: "Bird",
      medium: "Talking",
      hard: "Shoulder"
    }
  },
  {
    category: "Animals",
    word: "Turtle",
    hints: {
      easy: "Shell",
      medium: "Slow",
      hard: "Ninja"
    }
  },
  {
    category: "Animals",
    word: "Spider",
    hints: {
      easy: "Eight legs",
      medium: "Web",
      hard: "Corner"
    }
  },
  {
    category: "Animals",
    word: "Ant",
    hints: {
      easy: "Insect",
      medium: "Tiny",
      hard: "Teamwork"
    }
  },
  {
    category: "Animals",
    word: "Rhino",
    hints: {
      easy: "Horn",
      medium: "Thick skin",
      hard: "Chitwan"
    }
  },
  {
    category: "Animals",
    word: "Mosquito",
    hints: {
      easy: "Insect",
      medium: "Buzzing",
      hard: "Itch"
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
  {
    category: "Places",
    word: "Park",
    hints: {
      easy: "Outdoor",
      medium: "Benches",
      hard: "Green"
    }
  },
  {
    category: "Places",
    word: "Zoo",
    hints: {
      easy: "Animals",
      medium: "Cages",
      hard: "Tickets"
    }
  },
  {
    category: "Places",
    word: "Bank",
    hints: {
      easy: "Money",
      medium: "Queue",
      hard: "Vault"
    }
  },
  {
    category: "Places",
    word: "Church",
    hints: {
      easy: "Worship",
      medium: "Bells",
      hard: "Sunday"
    }
  },
  {
    category: "Places",
    word: "Farm",
    hints: {
      easy: "Rural",
      medium: "Crops",
      hard: "Sunrise"
    }
  },
  {
    category: "Places",
    word: "Bus Stop",
    hints: {
      easy: "Waiting",
      medium: "Roadside",
      hard: "Shelter"
    }
  },
  {
    category: "Places",
    word: "Bridge",
    hints: {
      easy: "Crossing",
      medium: "River",
      hard: "Cables"
    }
  },
  {
    category: "Places",
    word: "Cafe",
    hints: {
      easy: "Coffee",
      medium: "Chatting",
      hard: "Wi-Fi"
    }
  },
  {
    category: "Places",
    word: "Stadium",
    hints: {
      easy: "Sports",
      medium: "Crowd",
      hard: "Roar"
    }
  },
  {
    category: "Places",
    word: "Office",
    hints: {
      easy: "Work",
      medium: "Desks",
      hard: "Monday"
    }
  },
  {
    category: "Places",
    word: "Bakery",
    hints: {
      easy: "Bread",
      medium: "Oven",
      hard: "Smell"
    }
  },
  {
    category: "Places",
    word: "Salon",
    hints: {
      easy: "Haircut",
      medium: "Mirrors",
      hard: "Gossip"
    }
  },
  {
    category: "Places",
    word: "Petrol Pump",
    hints: {
      easy: "Fuel",
      medium: "Vehicles",
      hard: "Nozzle"
    }
  },
  {
    category: "Places",
    word: "Police Station",
    hints: {
      easy: "Law",
      medium: "Uniforms",
      hard: "Report"
    }
  },
  {
    category: "Places",
    word: "Cave",
    hints: {
      easy: "Underground",
      medium: "Dark",
      hard: "Echo"
    }
  },
  {
    category: "Places",
    word: "Island",
    hints: {
      easy: "Surrounded",
      medium: "Water",
      hard: "Alone"
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
    word: "Broom",
    hints: {
      easy: "Cleaning",
      medium: "Sweep",
      hard: "Witch"
    }
  },
  {
    category: "Objects",
    word: "Ladder",
    hints: {
      easy: "Climbing",
      medium: "Steps",
      hard: "Luck"
    }
  },
  {
    category: "Objects",
    word: "Rope",
    hints: {
      easy: "Tying",
      medium: "Knot",
      hard: "Tug"
    }
  },
  {
    category: "Objects",
    word: "Hammer",
    hints: {
      easy: "Tool",
      medium: "Nails",
      hard: "Thor"
    }
  },
  {
    category: "Objects",
    word: "Bucket",
    hints: {
      easy: "Water",
      medium: "Carrying",
      hard: "List"
    }
  },
  {
    category: "Objects",
    word: "Chair",
    hints: {
      easy: "Sitting",
      medium: "Legs",
      hard: "Music"
    }
  },
  {
    category: "Objects",
    word: "Table",
    hints: {
      easy: "Furniture",
      medium: "Flat",
      hard: "Turns"
    }
  },
  {
    category: "Objects",
    word: "Book",
    hints: {
      easy: "Reading",
      medium: "Pages",
      hard: "Cover"
    }
  },
  {
    category: "Objects",
    word: "Pen",
    hints: {
      easy: "Writing",
      medium: "Ink",
      hard: "Mightier"
    }
  },
  {
    category: "Objects",
    word: "Bottle",
    hints: {
      easy: "Container",
      medium: "Cap",
      hard: "Spin"
    }
  },
  {
    category: "Objects",
    word: "Fan",
    hints: {
      easy: "Cooling",
      medium: "Blades",
      hard: "Ceiling"
    }
  },
  {
    category: "Objects",
    word: "Soap",
    hints: {
      easy: "Washing",
      medium: "Bubbles",
      hard: "Slippery"
    }
  },
  {
    category: "Objects",
    word: "Comb",
    hints: {
      easy: "Hair",
      medium: "Teeth",
      hard: "Pocket"
    }
  },
  {
    category: "Objects",
    word: "Watch",
    hints: {
      easy: "Wrist",
      medium: "Time",
      hard: "Gift"
    }
  },
  {
    category: "Objects",
    word: "Ring",
    hints: {
      easy: "Finger",
      medium: "Gold",
      hard: "Promise"
    }
  },
  {
    category: "Objects",
    word: "Map",
    hints: {
      easy: "Directions",
      medium: "Folded",
      hard: "Treasure"
    }
  },
  {
    category: "Objects",
    word: "Torch",
    hints: {
      easy: "Light",
      medium: "Battery",
      hard: "Dark"
    }
  },
  {
    category: "Objects",
    word: "Notebook",
    hints: {
      easy: "Writing",
      medium: "Blank",
      hard: "Margins"
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
  {
    category: "Technology",
    word: "Bluetooth",
    hints: {
      easy: "Wireless",
      medium: "Pairing",
      hard: "Viking"
    }
  },
  {
    category: "Technology",
    word: "Charger",
    hints: {
      easy: "Battery",
      medium: "Cable",
      hard: "Missing"
    }
  },
  {
    category: "Technology",
    word: "Email",
    hints: {
      easy: "Messages",
      medium: "Inbox",
      hard: "Spam"
    }
  },
  {
    category: "Technology",
    word: "Cloud",
    hints: {
      easy: "Storage",
      medium: "Online",
      hard: "Sky"
    }
  },
  {
    category: "Technology",
    word: "Firewall",
    hints: {
      easy: "Security",
      medium: "Blocking",
      hard: "Network"
    }
  },
  {
    category: "Technology",
    word: "Bug",
    hints: {
      easy: "Software",
      medium: "Error",
      hard: "Insect"
    }
  },
  {
    category: "Technology",
    word: "Algorithm",
    hints: {
      easy: "Code",
      medium: "Steps",
      hard: "Feed"
    }
  },
  {
    category: "Technology",
    word: "Touchscreen",
    hints: {
      easy: "Display",
      medium: "Fingers",
      hard: "Smudges"
    }
  },
  {
    category: "Technology",
    word: "GPS",
    hints: {
      easy: "Navigation",
      medium: "Location",
      hard: "Voice"
    }
  },
  {
    category: "Technology",
    word: "Smartwatch",
    hints: {
      easy: "Wearable",
      medium: "Steps",
      hard: "Notifications"
    }
  },
  {
    category: "Technology",
    word: "Antivirus",
    hints: {
      easy: "Protection",
      medium: "Scanning",
      hard: "Warning"
    }
  },
  {
    category: "Technology",
    word: "Hacker",
    hints: {
      easy: "Computers",
      medium: "Breaking in",
      hard: "Hoodie"
    }
  },
  {
    category: "Technology",
    word: "Chatbot",
    hints: {
      easy: "AI",
      medium: "Replies",
      hard: "Typing"
    }
  },
  {
    category: "Technology",
    word: "Search Engine",
    hints: {
      easy: "Browser",
      medium: "Queries",
      hard: "Results"
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
  {
    category: "Sports",
    word: "Badminton",
    hints: {
      easy: "Racket",
      medium: "Shuttlecock",
      hard: "Light"
    }
  },
  {
    category: "Sports",
    word: "Baseball",
    hints: {
      easy: "Bat",
      medium: "Diamond",
      hard: "Innings"
    }
  },
  {
    category: "Sports",
    word: "Marathon",
    hints: {
      easy: "Running",
      medium: "Endurance",
      hard: "Greek"
    }
  },
  {
    category: "Sports",
    word: "Wrestling",
    hints: {
      easy: "Grappling",
      medium: "Mat",
      hard: "Pin"
    }
  },
  {
    category: "Sports",
    word: "Cycling",
    hints: {
      easy: "Pedals",
      medium: "Race",
      hard: "Yellow"
    }
  },
  {
    category: "Sports",
    word: "Hockey",
    hints: {
      easy: "Stick",
      medium: "Goal",
      hard: "Ice"
    }
  },
  {
    category: "Sports",
    word: "Rugby",
    hints: {
      easy: "Tackling",
      medium: "Oval",
      hard: "Scrum"
    }
  },
  {
    category: "Sports",
    word: "Gymnastics",
    hints: {
      easy: "Flexibility",
      medium: "Balance",
      hard: "Perfect"
    }
  },
  {
    category: "Sports",
    word: "Karate",
    hints: {
      easy: "Martial arts",
      medium: "Belts",
      hard: "Kid"
    }
  },
  {
    category: "Sports",
    word: "Skateboarding",
    hints: {
      easy: "Board",
      medium: "Tricks",
      hard: "Street"
    }
  },
  {
    category: "Sports",
    word: "Weightlifting",
    hints: {
      easy: "Gym",
      medium: "Heavy",
      hard: "Bar"
    }
  },
  {
    category: "Sports",
    word: "Formula One",
    hints: {
      easy: "Racing",
      medium: "Speed",
      hard: "Pit"
    }
  },
  {
    category: "Sports",
    word: "Kabaddi",
    hints: {
      easy: "South Asian",
      medium: "Breath",
      hard: "Raid"
    }
  },
  {
    category: "Sports",
    word: "Climbing",
    hints: {
      easy: "Height",
      medium: "Grip",
      hard: "Summit"
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
  {
    category: "Movies & TV",
    word: "Frozen",
    hints: {
      easy: "Animated",
      medium: "Sisters",
      hard: "Snowman"
    }
  },
  {
    category: "Movies & TV",
    word: "The Lion King",
    hints: {
      easy: "Animated",
      medium: "Africa",
      hard: "Circle"
    }
  },
  {
    category: "Movies & TV",
    word: "Star Wars",
    hints: {
      easy: "Space",
      medium: "Saber",
      hard: "Father"
    }
  },
  {
    category: "Movies & TV",
    word: "Friends",
    hints: {
      easy: "Sitcom",
      medium: "Six",
      hard: "Couch"
    }
  },
  {
    category: "Movies & TV",
    word: "Money Heist",
    hints: {
      easy: "Series",
      medium: "Robbery",
      hard: "Red"
    }
  },
  {
    category: "Movies & TV",
    word: "Inception",
    hints: {
      easy: "Dreams",
      medium: "Layers",
      hard: "Spinning"
    }
  },
  {
    category: "Movies & TV",
    word: "The Avengers",
    hints: {
      easy: "Superheroes",
      medium: "Team",
      hard: "Assemble"
    }
  },
  {
    category: "Movies & TV",
    word: "Toy Story",
    hints: {
      easy: "Animated",
      medium: "Toys",
      hard: "Infinity"
    }
  },
  {
    category: "Movies & TV",
    word: "Sherlock",
    hints: {
      easy: "Detective",
      medium: "London",
      hard: "Deduction"
    }
  },
  {
    category: "Movies & TV",
    word: "Naruto",
    hints: {
      easy: "Anime",
      medium: "Ninja",
      hard: "Ramen"
    }
  },
  {
    category: "Movies & TV",
    word: "Doraemon",
    hints: {
      easy: "Anime",
      medium: "Robot cat",
      hard: "Pocket"
    }
  },
  {
    category: "Movies & TV",
    word: "Interstellar",
    hints: {
      easy: "Space",
      medium: "Time",
      hard: "Corn"
    }
  },
  {
    category: "Movies & TV",
    word: "Kung Fu Panda",
    hints: {
      easy: "Animated",
      medium: "Martial arts",
      hard: "Dumpling"
    }
  },
  {
    category: "Movies & TV",
    word: "Peaky Blinders",
    hints: {
      easy: "Series",
      medium: "Gangs",
      hard: "Caps"
    }
  },
  {
    category: "Movies & TV",
    word: "Baahubali",
    hints: {
      easy: "Indian",
      medium: "Epic",
      hard: "Waterfall"
    }
  },
  {
    category: "Movies & TV",
    word: "Mr. Bean",
    hints: {
      easy: "Comedy",
      medium: "Silent",
      hard: "Teddy"
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
  {
    category: "Music",
    word: "Flute",
    hints: {
      easy: "Instrument",
      medium: "Blowing",
      hard: "Holes"
    }
  },
  {
    category: "Music",
    word: "Saxophone",
    hints: {
      easy: "Instrument",
      medium: "Jazz",
      hard: "Brass"
    }
  },
  {
    category: "Music",
    word: "Trumpet",
    hints: {
      easy: "Brass",
      medium: "Loud",
      hard: "Valves"
    }
  },
  {
    category: "Music",
    word: "Harmonica",
    hints: {
      easy: "Mouth",
      medium: "Pocket",
      hard: "Blues"
    }
  },
  {
    category: "Music",
    word: "Choir",
    hints: {
      easy: "Singing",
      medium: "Group",
      hard: "Robes"
    }
  },
  {
    category: "Music",
    word: "Orchestra",
    hints: {
      easy: "Classical",
      medium: "Many players",
      hard: "Baton"
    }
  },
  {
    category: "Music",
    word: "Playlist",
    hints: {
      easy: "Songs",
      medium: "Order",
      hard: "Shuffle"
    }
  },
  {
    category: "Music",
    word: "Album",
    hints: {
      easy: "Collection",
      medium: "Release",
      hard: "Cover"
    }
  },
  {
    category: "Music",
    word: "Rap",
    hints: {
      easy: "Verses",
      medium: "Rhymes",
      hard: "Fast"
    }
  },
  {
    category: "Music",
    word: "Lullaby",
    hints: {
      easy: "Song",
      medium: "Sleep",
      hard: "Mother"
    }
  },
  {
    category: "Music",
    word: "Speaker",
    hints: {
      easy: "Sound",
      medium: "Volume",
      hard: "Bass"
    }
  },
  {
    category: "Music",
    word: "Beatbox",
    hints: {
      easy: "Rhythm",
      medium: "No instrument",
      hard: "Lips"
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
  {
    category: "School & College",
    word: "Uniform",
    hints: {
      easy: "Dress code",
      medium: "Same",
      hard: "Iron"
    }
  },
  {
    category: "School & College",
    word: "Blackboard",
    hints: {
      easy: "Classroom",
      medium: "Chalk",
      hard: "Dust"
    }
  },
  {
    category: "School & College",
    word: "Attendance",
    hints: {
      easy: "Roll call",
      medium: "Present",
      hard: "Percentage"
    }
  },
  {
    category: "School & College",
    word: "Detention",
    hints: {
      easy: "Punishment",
      medium: "Staying back",
      hard: "Silence"
    }
  },
  {
    category: "School & College",
    word: "Backbencher",
    hints: {
      easy: "Classroom",
      medium: "Last row",
      hard: "Legend"
    }
  },
  {
    category: "School & College",
    word: "Assembly",
    hints: {
      easy: "Morning",
      medium: "Lines",
      hard: "Anthem"
    }
  },
  {
    category: "School & College",
    word: "Scholarship",
    hints: {
      easy: "Money",
      medium: "Merit",
      hard: "Application"
    }
  },
  {
    category: "School & College",
    word: "Field Trip",
    hints: {
      easy: "Outing",
      medium: "Bus",
      hard: "Permission"
    }
  },
  {
    category: "School & College",
    word: "Result",
    hints: {
      easy: "Marks",
      medium: "Waiting",
      hard: "Sheet"
    }
  },
  {
    category: "School & College",
    word: "Group Study",
    hints: {
      easy: "Together",
      medium: "Notes",
      hard: "Distraction"
    }
  },
  {
    category: "School & College",
    word: "Principal",
    hints: {
      easy: "Head",
      medium: "Office",
      hard: "Fear"
    }
  },
  {
    category: "School & College",
    word: "Timetable",
    hints: {
      easy: "Periods",
      medium: "Planning",
      hard: "Ignored"
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
  {
    category: "Nature",
    word: "River",
    hints: {
      easy: "Water",
      medium: "Flowing",
      hard: "Bank"
    }
  },
  {
    category: "Nature",
    word: "Sun",
    hints: {
      easy: "Sky",
      medium: "Heat",
      hard: "Center"
    }
  },
  {
    category: "Nature",
    word: "Star",
    hints: {
      easy: "Night",
      medium: "Twinkle",
      hard: "Wish"
    }
  },
  {
    category: "Nature",
    word: "Wind",
    hints: {
      easy: "Air",
      medium: "Blowing",
      hard: "Invisible"
    }
  },
  {
    category: "Nature",
    word: "Earthquake",
    hints: {
      easy: "Shaking",
      medium: "Ground",
      hard: "Nepal"
    }
  },
  {
    category: "Nature",
    word: "Flood",
    hints: {
      easy: "Overflow",
      medium: "Rising",
      hard: "Monsoon"
    }
  },
  {
    category: "Nature",
    word: "Glacier",
    hints: {
      easy: "Ice",
      medium: "Slow",
      hard: "Melting"
    }
  },
  {
    category: "Nature",
    word: "Tree",
    hints: {
      easy: "Wood",
      medium: "Roots",
      hard: "Shade"
    }
  },
  {
    category: "Nature",
    word: "Flower",
    hints: {
      easy: "Petals",
      medium: "Garden",
      hard: "Gift"
    }
  },
  {
    category: "Nature",
    word: "Fog",
    hints: {
      easy: "Weather",
      medium: "Visibility",
      hard: "Morning"
    }
  },
  {
    category: "Nature",
    word: "Eclipse",
    hints: {
      easy: "Shadow",
      medium: "Alignment",
      hard: "Glasses"
    }
  },
  {
    category: "Nature",
    word: "Monsoon",
    hints: {
      easy: "Season",
      medium: "Rain",
      hard: "Wait"
    }
  },
  {
    category: "Nature",
    word: "Coral Reef",
    hints: {
      easy: "Ocean",
      medium: "Colorful",
      hard: "Fragile"
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
  {
    category: "Professions",
    word: "Nurse",
    hints: {
      easy: "Hospital",
      medium: "Care",
      hard: "Shifts"
    }
  },
  {
    category: "Professions",
    word: "Lawyer",
    hints: {
      easy: "Court",
      medium: "Arguing",
      hard: "Suit"
    }
  },
  {
    category: "Professions",
    word: "Farmer",
    hints: {
      easy: "Fields",
      medium: "Crops",
      hard: "Sunrise"
    }
  },
  {
    category: "Professions",
    word: "Journalist",
    hints: {
      easy: "News",
      medium: "Questions",
      hard: "Deadline"
    }
  },
  {
    category: "Professions",
    word: "Barber",
    hints: {
      easy: "Hair",
      medium: "Scissors",
      hard: "Chair"
    }
  },
  {
    category: "Professions",
    word: "Mechanic",
    hints: {
      easy: "Repair",
      medium: "Engines",
      hard: "Grease"
    }
  },
  {
    category: "Professions",
    word: "Dentist",
    hints: {
      easy: "Teeth",
      medium: "Drill",
      hard: "Fear"
    }
  },
  {
    category: "Professions",
    word: "Scientist",
    hints: {
      easy: "Research",
      medium: "Experiments",
      hard: "Coat"
    }
  },
  {
    category: "Professions",
    word: "Singer",
    hints: {
      easy: "Voice",
      medium: "Stage",
      hard: "Fans"
    }
  },
  {
    category: "Professions",
    word: "Soldier",
    hints: {
      easy: "Army",
      medium: "Duty",
      hard: "Boots"
    }
  },
  {
    category: "Professions",
    word: "Driver",
    hints: {
      easy: "Vehicle",
      medium: "Roads",
      hard: "Horn"
    }
  },
  {
    category: "Professions",
    word: "Waiter",
    hints: {
      easy: "Restaurant",
      medium: "Orders",
      hard: "Tips"
    }
  },
  {
    category: "Professions",
    word: "Programmer",
    hints: {
      easy: "Coding",
      medium: "Bugs",
      hard: "Coffee"
    }
  },
  {
    category: "Professions",
    word: "Accountant",
    hints: {
      easy: "Numbers",
      medium: "Money",
      hard: "Balance"
    }
  },
  {
    category: "Professions",
    word: "Electrician",
    hints: {
      easy: "Wiring",
      medium: "Power",
      hard: "Shock"
    }
  },
  {
    category: "Professions",
    word: "Tailor",
    hints: {
      easy: "Clothes",
      medium: "Measuring",
      hard: "Needle"
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
  {
    category: "Transport",
    word: "Taxi",
    hints: {
      easy: "Hired",
      medium: "Meter",
      hard: "Yellow"
    }
  },
  {
    category: "Transport",
    word: "Truck",
    hints: {
      easy: "Cargo",
      medium: "Heavy",
      hard: "Highway"
    }
  },
  {
    category: "Transport",
    word: "Ambulance",
    hints: {
      easy: "Emergency",
      medium: "Siren",
      hard: "Backwards"
    }
  },
  {
    category: "Transport",
    word: "Rickshaw",
    hints: {
      easy: "Three wheels",
      medium: "Pedals",
      hard: "Narrow streets"
    }
  },
  {
    category: "Transport",
    word: "Scooter",
    hints: {
      easy: "Two wheels",
      medium: "City",
      hard: "Small"
    }
  },
  {
    category: "Transport",
    word: "Metro",
    hints: {
      easy: "Underground",
      medium: "Tunnels",
      hard: "Crowded"
    }
  },
  {
    category: "Transport",
    word: "Ferry",
    hints: {
      easy: "Water",
      medium: "Crossing",
      hard: "Schedule"
    }
  },
  {
    category: "Transport",
    word: "Rocket",
    hints: {
      easy: "Space",
      medium: "Launch",
      hard: "Countdown"
    }
  },
  {
    category: "Transport",
    word: "Cable Car",
    hints: {
      easy: "Hanging",
      medium: "Hills",
      hard: "View"
    }
  },
  {
    category: "Transport",
    word: "Tractor",
    hints: {
      easy: "Farm",
      medium: "Slow",
      hard: "Plough"
    }
  },
  {
    category: "Transport",
    word: "Submarine",
    hints: {
      easy: "Underwater",
      medium: "Navy",
      hard: "Periscope"
    }
  },
  {
    category: "Transport",
    word: "Hot Air Balloon",
    hints: {
      easy: "Floating",
      medium: "Basket",
      hard: "Flame"
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
  {
    category: "Countries & Cities",
    word: "China",
    hints: {
      easy: "Country",
      medium: "Wall",
      hard: "Population"
    }
  },
  {
    category: "Countries & Cities",
    word: "Italy",
    hints: {
      easy: "Country",
      medium: "Boot",
      hard: "Pizza"
    }
  },
  {
    category: "Countries & Cities",
    word: "Egypt",
    hints: {
      easy: "Country",
      medium: "Pyramids",
      hard: "River"
    }
  },
  {
    category: "Countries & Cities",
    word: "America",
    hints: {
      easy: "Country",
      medium: "Stars",
      hard: "Dream"
    }
  },
  {
    category: "Countries & Cities",
    word: "Russia",
    hints: {
      easy: "Country",
      medium: "Cold",
      hard: "Largest"
    }
  },
  {
    category: "Countries & Cities",
    word: "Germany",
    hints: {
      easy: "Country",
      medium: "Cars",
      hard: "Beer"
    }
  },
  {
    category: "Countries & Cities",
    word: "Canada",
    hints: {
      easy: "Country",
      medium: "Maple",
      hard: "Polite"
    }
  },
  {
    category: "Countries & Cities",
    word: "Thailand",
    hints: {
      easy: "Country",
      medium: "Beaches",
      hard: "Smiles"
    }
  },
  {
    category: "Countries & Cities",
    word: "Switzerland",
    hints: {
      easy: "Country",
      medium: "Alps",
      hard: "Neutral"
    }
  },
  {
    category: "Countries & Cities",
    word: "Paris",
    hints: {
      easy: "City",
      medium: "Tower",
      hard: "Love"
    }
  },
  {
    category: "Countries & Cities",
    word: "Tokyo",
    hints: {
      easy: "City",
      medium: "Neon",
      hard: "Crowds"
    }
  },
  {
    category: "Countries & Cities",
    word: "Singapore",
    hints: {
      easy: "City",
      medium: "Clean",
      hard: "Fines"
    }
  },
  {
    category: "Countries & Cities",
    word: "Rome",
    hints: {
      easy: "City",
      medium: "Ancient",
      hard: "Fountain"
    }
  },
  {
    category: "Countries & Cities",
    word: "Mumbai",
    hints: {
      easy: "City",
      medium: "Bollywood",
      hard: "Trains"
    }
  },
  {
    category: "Countries & Cities",
    word: "Sydney",
    hints: {
      easy: "City",
      medium: "Opera",
      hard: "Harbour"
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
  {
    category: "Clothing",
    word: "Socks",
    hints: {
      easy: "Feet",
      medium: "Pairs",
      hard: "Missing"
    }
  },
  {
    category: "Clothing",
    word: "Sweater",
    hints: {
      easy: "Warm",
      medium: "Wool",
      hard: "Itchy"
    }
  },
  {
    category: "Clothing",
    word: "Dress",
    hints: {
      easy: "Occasion",
      medium: "Flowing",
      hard: "Twirl"
    }
  },
  {
    category: "Clothing",
    word: "Saree",
    hints: {
      easy: "South Asian",
      medium: "Draped",
      hard: "Pleats"
    }
  },
  {
    category: "Clothing",
    word: "Shorts",
    hints: {
      easy: "Legs",
      medium: "Summer",
      hard: "Pockets"
    }
  },
  {
    category: "Clothing",
    word: "Gloves",
    hints: {
      easy: "Hands",
      medium: "Winter",
      hard: "Evidence"
    }
  },
  {
    category: "Clothing",
    word: "Belt",
    hints: {
      easy: "Waist",
      medium: "Buckle",
      hard: "Holes"
    }
  },
  {
    category: "Clothing",
    word: "Boots",
    hints: {
      easy: "Footwear",
      medium: "Ankles",
      hard: "Mud"
    }
  },
  {
    category: "Clothing",
    word: "Suit",
    hints: {
      easy: "Formal",
      medium: "Matching",
      hard: "Interview"
    }
  },
  {
    category: "Clothing",
    word: "Raincoat",
    hints: {
      easy: "Waterproof",
      medium: "Downpour",
      hard: "Hood"
    }
  },
  {
    category: "Clothing",
    word: "Slippers",
    hints: {
      easy: "Home",
      medium: "Easy",
      hard: "Doorway"
    }
  },
  {
    category: "Clothing",
    word: "Pajamas",
    hints: {
      easy: "Sleeping",
      medium: "Comfortable",
      hard: "Cartoon"
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
  {
    category: "Household",
    word: "Kettle",
    hints: {
      easy: "Boiling",
      medium: "Spout",
      hard: "Whistle"
    }
  },
  {
    category: "Household",
    word: "Toaster",
    hints: {
      easy: "Bread",
      medium: "Pop",
      hard: "Crumbs"
    }
  },
  {
    category: "Household",
    word: "Iron",
    hints: {
      easy: "Clothes",
      medium: "Heat",
      hard: "Creases"
    }
  },
  {
    category: "Household",
    word: "Curtains",
    hints: {
      easy: "Windows",
      medium: "Privacy",
      hard: "Morning"
    }
  },
  {
    category: "Household",
    word: "Carpet",
    hints: {
      easy: "Floor",
      medium: "Soft",
      hard: "Hiding"
    }
  },
  {
    category: "Household",
    word: "Wardrobe",
    hints: {
      easy: "Storage",
      medium: "Doors",
      hard: "Narnia"
    }
  },
  {
    category: "Household",
    word: "Dishwasher",
    hints: {
      easy: "Kitchen",
      medium: "Plates",
      hard: "Noise"
    }
  },
  {
    category: "Household",
    word: "Ceiling Fan",
    hints: {
      easy: "Above",
      medium: "Spinning",
      hard: "Summer"
    }
  },
  {
    category: "Household",
    word: "Water Filter",
    hints: {
      easy: "Drinking",
      medium: "Purify",
      hard: "Cartridge"
    }
  },
  {
    category: "Household",
    word: "Doorbell",
    hints: {
      easy: "Entrance",
      medium: "Ring",
      hard: "Guests"
    }
  },
  {
    category: "Household",
    word: "Mop",
    hints: {
      easy: "Cleaning",
      medium: "Wet",
      hard: "Bucket"
    }
  },
  {
    category: "Household",
    word: "Air Conditioner",
    hints: {
      easy: "Cooling",
      medium: "Remote",
      hard: "Bill"
    }
  },
  {
    category: "Household",
    word: "Water Heater",
    hints: {
      easy: "Bathroom",
      medium: "Hot water",
      hard: "Winter"
    }
  },
  {
    category: "Household",
    word: "Rice Cooker",
    hints: {
      easy: "Appliance",
      medium: "Steam",
      hard: "Click"
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
  {
    category: "Internet & Social Media",
    word: "Facebook",
    hints: {
      easy: "Social media",
      medium: "Friends",
      hard: "Blue"
    }
  },
  {
    category: "Internet & Social Media",
    word: "WhatsApp",
    hints: {
      easy: "Messaging",
      medium: "Groups",
      hard: "Green"
    }
  },
  {
    category: "Internet & Social Media",
    word: "Snapchat",
    hints: {
      easy: "Social media",
      medium: "Disappearing",
      hard: "Streak"
    }
  },
  {
    category: "Internet & Social Media",
    word: "Twitter",
    hints: {
      easy: "Posting",
      medium: "Short",
      hard: "Bird"
    }
  },
  {
    category: "Internet & Social Media",
    word: "Netflix",
    hints: {
      easy: "Streaming",
      medium: "Binge",
      hard: "Red"
    }
  },
  {
    category: "Internet & Social Media",
    word: "Spotify",
    hints: {
      easy: "Music",
      medium: "Playlists",
      hard: "Wrapped"
    }
  },
  {
    category: "Internet & Social Media",
    word: "Podcast",
    hints: {
      easy: "Audio",
      medium: "Episodes",
      hard: "Headphones"
    }
  },
  {
    category: "Internet & Social Media",
    word: "Emoji",
    hints: {
      easy: "Symbols",
      medium: "Feelings",
      hard: "Yellow"
    }
  },
  {
    category: "Internet & Social Media",
    word: "Hashtag",
    hints: {
      easy: "Tagging",
      medium: "Trending",
      hard: "Symbol"
    }
  },
  {
    category: "Internet & Social Media",
    word: "Livestream",
    hints: {
      easy: "Real time",
      medium: "Chat",
      hard: "Donations"
    }
  },
  {
    category: "Internet & Social Media",
    word: "Comment Section",
    hints: {
      easy: "Below",
      medium: "Opinions",
      hard: "War"
    }
  },
  {
    category: "Internet & Social Media",
    word: "Notification",
    hints: {
      easy: "Alert",
      medium: "Badge",
      hard: "Ignore"
    }
  },
  {
    category: "Internet & Social Media",
    word: "Selfie",
    hints: {
      easy: "Photo",
      medium: "Yourself",
      hard: "Angle"
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
  {
    category: "Fantasy",
    word: "Ghost",
    hints: {
      easy: "Spirit",
      medium: "Haunting",
      hard: "Sheet"
    }
  },
  {
    category: "Fantasy",
    word: "Zombie",
    hints: {
      easy: "Undead",
      medium: "Slow",
      hard: "Brains"
    }
  },
  {
    category: "Fantasy",
    word: "Giant",
    hints: {
      easy: "Huge",
      medium: "Beanstalk",
      hard: "Footsteps"
    }
  },
  {
    category: "Fantasy",
    word: "Witch",
    hints: {
      easy: "Magic",
      medium: "Spells",
      hard: "Broom"
    }
  },
  {
    category: "Fantasy",
    word: "Elf",
    hints: {
      easy: "Pointed ears",
      medium: "Forest",
      hard: "Christmas"
    }
  },
  {
    category: "Fantasy",
    word: "Phoenix",
    hints: {
      easy: "Bird",
      medium: "Fire",
      hard: "Rebirth"
    }
  },
  {
    category: "Fantasy",
    word: "Genie",
    hints: {
      easy: "Wishes",
      medium: "Lamp",
      hard: "Three"
    }
  },
  {
    category: "Fantasy",
    word: "Troll",
    hints: {
      easy: "Creature",
      medium: "Bridge",
      hard: "Internet"
    }
  },
  {
    category: "Fantasy",
    word: "Knight",
    hints: {
      easy: "Armor",
      medium: "Sword",
      hard: "Honor"
    }
  },
  {
    category: "Fantasy",
    word: "Potion",
    hints: {
      easy: "Liquid",
      medium: "Brewed",
      hard: "Effects"
    }
  },
  {
    category: "Fantasy",
    word: "Curse",
    hints: {
      easy: "Spell",
      medium: "Bad luck",
      hard: "Generations"
    }
  },
  {
    category: "Fantasy",
    word: "Yeti",
    hints: {
      easy: "Snow",
      medium: "Himalayas",
      hard: "Footprints"
    }
  },
  {
    category: "Fantasy",
    word: "Kraken",
    hints: {
      easy: "Sea monster",
      medium: "Tentacles",
      hard: "Release"
    }
  },
  {
    category: "Fantasy",
    word: "Time Machine",
    hints: {
      easy: "Travel",
      medium: "Past",
      hard: "Paradox"
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
  {
    category: "Games",
    word: "Hide and Seek",
    hints: {
      easy: "Hiding",
      medium: "Counting",
      hard: "Found"
    }
  },
  {
    category: "Games",
    word: "Tag",
    hints: {
      easy: "Chasing",
      medium: "Touch",
      hard: "It"
    }
  },
  {
    category: "Games",
    word: "Carrom",
    hints: {
      easy: "Board",
      medium: "Striker",
      hard: "Powder"
    }
  },
  {
    category: "Games",
    word: "Sudoku",
    hints: {
      easy: "Numbers",
      medium: "Grid",
      hard: "Logic"
    }
  },
  {
    category: "Games",
    word: "Candy Crush",
    hints: {
      easy: "Puzzle app",
      medium: "Matching",
      hard: "Lives"
    }
  },
  {
    category: "Games",
    word: "PUBG",
    hints: {
      easy: "Shooter",
      medium: "Island",
      hard: "Chicken"
    }
  },
  {
    category: "Games",
    word: "Free Fire",
    hints: {
      easy: "Mobile game",
      medium: "Battle royale",
      hard: "Squad"
    }
  },
  {
    category: "Games",
    word: "Super Mario",
    hints: {
      easy: "Video game",
      medium: "Plumber",
      hard: "Mushroom"
    }
  },
  {
    category: "Games",
    word: "Angry Birds",
    hints: {
      easy: "Slingshot",
      medium: "Pigs",
      hard: "Physics"
    }
  },
  {
    category: "Games",
    word: "FIFA",
    hints: {
      easy: "Football",
      medium: "Console",
      hard: "Ratings"
    }
  },
  {
    category: "Games",
    word: "Truth or Dare",
    hints: {
      easy: "Party game",
      medium: "Choice",
      hard: "Regret"
    }
  },
  {
    category: "Games",
    word: "Musical Chairs",
    hints: {
      easy: "Circle",
      medium: "Music stops",
      hard: "One less"
    }
  },
  {
    category: "Games",
    word: "Rock Paper Scissors",
    hints: {
      easy: "Hands",
      medium: "Three",
      hard: "Deciding"
    }
  },
  {
    category: "Games",
    word: "Bingo",
    hints: {
      easy: "Cards",
      medium: "Calling",
      hard: "Shout"
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
  {
    category: "Superheroes",
    word: "Captain America",
    hints: {
      easy: "Marvel",
      medium: "Shield",
      hard: "Frozen"
    }
  },
  {
    category: "Superheroes",
    word: "Doctor Strange",
    hints: {
      easy: "Marvel",
      medium: "Magic",
      hard: "Portals"
    }
  },
  {
    category: "Superheroes",
    word: "Black Widow",
    hints: {
      easy: "Marvel",
      medium: "Spy",
      hard: "Red"
    }
  },
  {
    category: "Superheroes",
    word: "Deadpool",
    hints: {
      easy: "Marvel",
      medium: "Jokes",
      hard: "Fourth wall"
    }
  },
  {
    category: "Superheroes",
    word: "Ant-Man",
    hints: {
      easy: "Marvel",
      medium: "Shrinking",
      hard: "Insects"
    }
  },
  {
    category: "Superheroes",
    word: "Groot",
    hints: {
      easy: "Marvel",
      medium: "Tree",
      hard: "Three words"
    }
  },
  {
    category: "Superheroes",
    word: "Loki",
    hints: {
      easy: "Marvel",
      medium: "Trickster",
      hard: "Brother"
    }
  },
  {
    category: "Superheroes",
    word: "Aquaman",
    hints: {
      easy: "DC",
      medium: "Ocean",
      hard: "Trident"
    }
  },
  {
    category: "Superheroes",
    word: "Green Lantern",
    hints: {
      easy: "DC",
      medium: "Ring",
      hard: "Willpower"
    }
  },
  {
    category: "Superheroes",
    word: "Joker",
    hints: {
      easy: "Villain",
      medium: "Laughing",
      hard: "Cards"
    }
  },
  {
    category: "Superheroes",
    word: "Thanos",
    hints: {
      easy: "Villain",
      medium: "Snap",
      hard: "Balance"
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
  {
    category: "Emotions",
    word: "Sadness",
    hints: {
      easy: "Emotion",
      medium: "Tears",
      hard: "Blue"
    }
  },
  {
    category: "Emotions",
    word: "Excitement",
    hints: {
      easy: "Emotion",
      medium: "Energy",
      hard: "Waiting"
    }
  },
  {
    category: "Emotions",
    word: "Surprise",
    hints: {
      easy: "Emotion",
      medium: "Sudden",
      hard: "Party"
    }
  },
  {
    category: "Emotions",
    word: "Panic",
    hints: {
      easy: "Emotion",
      medium: "Rushing",
      hard: "Deadline"
    }
  },
  {
    category: "Emotions",
    word: "Guilt",
    hints: {
      easy: "Feeling",
      medium: "Regret",
      hard: "Conscience"
    }
  },
  {
    category: "Emotions",
    word: "Loneliness",
    hints: {
      easy: "Feeling",
      medium: "Alone",
      hard: "Crowd"
    }
  },
  {
    category: "Emotions",
    word: "Pride",
    hints: {
      easy: "Feeling",
      medium: "Achievement",
      hard: "Fall"
    }
  },
  {
    category: "Emotions",
    word: "Boredom",
    hints: {
      easy: "Feeling",
      medium: "Nothing",
      hard: "Clock"
    }
  },
  {
    category: "Emotions",
    word: "Hope",
    hints: {
      easy: "Feeling",
      medium: "Future",
      hard: "Last"
    }
  },
  {
    category: "Emotions",
    word: "Confusion",
    hints: {
      easy: "Feeling",
      medium: "Unclear",
      hard: "Questions"
    }
  },
  {
    category: "Emotions",
    word: "Relief",
    hints: {
      easy: "Feeling",
      medium: "Over",
      hard: "Breath"
    }
  },
  {
    category: "Emotions",
    word: "Gratitude",
    hints: {
      easy: "Feeling",
      medium: "Thanks",
      hard: "Small things"
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
  {
    category: "Activities",
    word: "Cleaning",
    hints: {
      easy: "Chore",
      medium: "Tidy",
      hard: "Weekend"
    }
  },
  {
    category: "Activities",
    word: "Gardening",
    hints: {
      easy: "Plants",
      medium: "Soil",
      hard: "Patience"
    }
  },
  {
    category: "Activities",
    word: "Painting",
    hints: {
      easy: "Art",
      medium: "Brush",
      hard: "Colors"
    }
  },
  {
    category: "Activities",
    word: "Singing",
    hints: {
      easy: "Voice",
      medium: "Song",
      hard: "Shower"
    }
  },
  {
    category: "Activities",
    word: "Running",
    hints: {
      easy: "Exercise",
      medium: "Speed",
      hard: "Morning"
    }
  },
  {
    category: "Activities",
    word: "Fishing",
    hints: {
      easy: "Water",
      medium: "Waiting",
      hard: "Story"
    }
  },
  {
    category: "Activities",
    word: "Travelling",
    hints: {
      easy: "Going",
      medium: "Places",
      hard: "Packing"
    }
  },
  {
    category: "Activities",
    word: "Texting",
    hints: {
      easy: "Phone",
      medium: "Typing",
      hard: "Reply"
    }
  },
  {
    category: "Activities",
    word: "Scrolling",
    hints: {
      easy: "Feed",
      medium: "Endless",
      hard: "Time"
    }
  },
  {
    category: "Activities",
    word: "Baking",
    hints: {
      easy: "Oven",
      medium: "Flour",
      hard: "Timing"
    }
  },
  {
    category: "Activities",
    word: "Watching Movies",
    hints: {
      easy: "Screen",
      medium: "Snacks",
      hard: "Subtitles"
    }
  },
  {
    category: "Activities",
    word: "Praying",
    hints: {
      easy: "Faith",
      medium: "Quiet",
      hard: "Hands"
    }
  },
  {
    category: "Activities",
    word: "Arguing",
    hints: {
      easy: "Talking",
      medium: "Disagreeing",
      hard: "Winning"
    }
  },
  {
    category: "Activities",
    word: "Waiting",
    hints: {
      easy: "Time",
      medium: "Patience",
      hard: "Line"
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
  {
    category: "Holidays & Events",
    word: "Holi",
    hints: {
      easy: "Colors",
      medium: "Spring",
      hard: "Water"
    }
  },
  {
    category: "Holidays & Events",
    word: "Eid",
    hints: {
      easy: "Festival",
      medium: "Moon",
      hard: "Feast"
    }
  },
  {
    category: "Holidays & Events",
    word: "Thanksgiving",
    hints: {
      easy: "American",
      medium: "Family meal",
      hard: "Turkey"
    }
  },
  {
    category: "Holidays & Events",
    word: "Easter",
    hints: {
      easy: "Christian",
      medium: "Eggs",
      hard: "Rabbit"
    }
  },
  {
    category: "Holidays & Events",
    word: "Valentine's Day",
    hints: {
      easy: "Love",
      medium: "February",
      hard: "Roses"
    }
  },
  {
    category: "Holidays & Events",
    word: "Anniversary",
    hints: {
      easy: "Yearly",
      medium: "Couple",
      hard: "Forgotten"
    }
  },
  {
    category: "Holidays & Events",
    word: "Funeral",
    hints: {
      easy: "Death",
      medium: "Black",
      hard: "Silence"
    }
  },
  {
    category: "Holidays & Events",
    word: "Baby Shower",
    hints: {
      easy: "Pregnancy",
      medium: "Gifts",
      hard: "Guessing"
    }
  },
  {
    category: "Holidays & Events",
    word: "Parade",
    hints: {
      easy: "Streets",
      medium: "Marching",
      hard: "Floats"
    }
  },
  {
    category: "Holidays & Events",
    word: "Fireworks",
    hints: {
      easy: "Sky",
      medium: "Loud",
      hard: "Celebration"
    }
  },
  {
    category: "Holidays & Events",
    word: "Farewell",
    hints: {
      easy: "Goodbye",
      medium: "Last day",
      hard: "Speech"
    }
  },
  {
    category: "Holidays & Events",
    word: "Picnic",
    hints: {
      easy: "Outdoor",
      medium: "Food basket",
      hard: "Ants"
    }
  },
  {
    category: "Holidays & Events",
    word: "Reunion",
    hints: {
      easy: "Meeting again",
      medium: "Old friends",
      hard: "Changed"
    }
  },
  {
    category: "Holidays & Events",
    word: "Housewarming",
    hints: {
      easy: "New home",
      medium: "Guests",
      hard: "Blessing"
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
  },
  {
    category: "Nepal",
    word: "Chitwan",
    hints: {
      easy: "National park",
      medium: "Jungle",
      hard: "Rhino"
    }
  },
  {
    category: "Nepal",
    word: "Annapurna",
    hints: {
      easy: "Himalaya",
      medium: "Trekking",
      hard: "Circuit"
    }
  },
  {
    category: "Nepal",
    word: "Pashupatinath",
    hints: {
      easy: "Temple",
      medium: "Hindu",
      hard: "River"
    }
  },
  {
    category: "Nepal",
    word: "Boudhanath",
    hints: {
      easy: "Stupa",
      medium: "Buddhist",
      hard: "Eyes"
    }
  },
  {
    category: "Nepal",
    word: "Rara",
    hints: {
      easy: "Lake",
      medium: "Remote",
      hard: "Blue"
    }
  },
  {
    category: "Nepal",
    word: "Bhaktapur",
    hints: {
      easy: "City",
      medium: "Ancient",
      hard: "Pottery"
    }
  },
  {
    category: "Nepal",
    word: "Janakpur",
    hints: {
      easy: "City",
      medium: "Sita",
      hard: "Mithila"
    }
  },
  {
    category: "Nepal",
    word: "Bagmati",
    hints: {
      easy: "River",
      medium: "Kathmandu",
      hard: "Sacred"
    }
  },
  {
    category: "Nepal",
    word: "Ilam",
    hints: {
      easy: "District",
      medium: "Tea",
      hard: "Green hills"
    }
  },
  {
    category: "Nepal",
    word: "Dhaka Topi",
    hints: {
      easy: "Cap",
      medium: "Traditional",
      hard: "Pattern"
    }
  },
  {
    category: "Nepal",
    word: "Daura Suruwal",
    hints: {
      easy: "Traditional dress",
      medium: "National",
      hard: "Ties"
    }
  },
  {
    category: "Nepal",
    word: "Madal",
    hints: {
      easy: "Drum",
      medium: "Folk",
      hard: "Both hands"
    }
  },
  {
    category: "Nepal",
    word: "Khukuri",
    hints: {
      easy: "Knife",
      medium: "Curved",
      hard: "Gurkha"
    }
  },
  {
    category: "Nepal",
    word: "Gurkha",
    hints: {
      easy: "Soldier",
      medium: "Brave",
      hard: "Recruitment"
    }
  },
  {
    category: "Nepal",
    word: "Lhosar",
    hints: {
      easy: "New year",
      medium: "Community",
      hard: "Dance"
    }
  },
  {
    category: "Nepal",
    word: "Rhododendron",
    hints: {
      easy: "Flower",
      medium: "Hills",
      hard: "Spring"
    }
  }
];
