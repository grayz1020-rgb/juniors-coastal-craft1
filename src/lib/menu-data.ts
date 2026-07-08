export type MenuItem = {
  name: string;
  description?: string;
  price?: string;
};

export type MenuCategory = {
  name: string;
  blurb?: string;
  items: MenuItem[];
};

// Menu content provided by Junior's Seafood Restaurant & Grill.
// Prices are not listed on the shared menu source — call the restaurant for
// current pricing and daily specials.
export const menu: MenuCategory[] = [
  {
    name: "New Featured Items",
    blurb: "Chef's picks that guests keep coming back for.",
    items: [
      {
        name: "Shrimp & Grits",
        description:
          "Jumbo shrimp served atop cheese grits topped with andouille sausage, bacon, chives, diced tomatoes and a creamy onion and green pepper sauce. Fried, grilled, or blackened.",
      },
      {
        name: "Mahi Tacos",
        description:
          "Topped with homemade pico de gallo, cheese, lettuce and drizzled in our signature spicy taco sauce. Fried, grilled, or blackened.",
      },
      {
        name: "Shrimp Tacos",
        description:
          "Topped with homemade pico de gallo, cheese, lettuce and drizzled in our signature spicy taco sauce. Fried, grilled, or blackened.",
      },
    ],
  },
  {
    name: "Off The Coast",
    blurb: "Fresh from the Gulf and Atlantic — shrimp, oysters, scallops and more.",
    items: [
      { name: "Shrimp" },
      { name: "Bayou Boiled Shrimp" },
      { name: "Jumbo Shrimp" },
      { name: "Bam-Bam Shrimp" },
      { name: "Big Cats Buffalo Shrimp" },
      { name: "Popcorn Shrimp" },
      { name: "Oysters" },
      { name: "Scallops" },
      { name: "Clam Strips" },
      { name: "Deviled Crab" },
    ],
  },
  {
    name: "Fisherman's Favorites",
    blurb: "Whole filets, grilled or fried the way you like them.",
    items: [
      { name: "Flounder or Catfish" },
      { name: "Salmon", description: "Served grilled or blackened." },
      { name: "Tilapia" },
      { name: "Basa" },
      { name: "Whiting" },
      { name: "Mahi" },
      {
        name: "Stuffed Flounder",
        description:
          "With crabmeat stuffing, cheese, grilled onions and mushrooms.",
      },
      { name: "Crab Cakes" },
    ],
  },
  {
    name: "Captain's Platters",
    blurb: "Legendary plates — pick your favorite or go all in.",
    items: [
      { name: "Shrimp" },
      { name: "Scallops" },
      { name: "Oysters" },
      { name: "Deviled Crab" },
      { name: "Clam Strips" },
      { name: "Seafood Feast for One" },
      { name: "Seafood Feast for Two" },
      {
        name: "Pick Three!",
        description: "Choose 3 of your favorites from above.",
      },
    ],
  },
  {
    name: "Combos From The Sea",
    blurb: "The best of two worlds on one plate.",
    items: [
      {
        name: "Perfect Two",
        description:
          "Choose 2 of your favorites: whiting, shrimp, deviled crab or clam strips. Substitute with oysters or scallops for an upcharge.",
      },
      { name: "Mahi & Shrimp" },
      { name: "Basa & Shrimp" },
      { name: "Tilapia & Shrimp" },
      { name: "Flounder & Shrimp" },
      { name: "Catfish & Shrimp" },
      { name: "Salmon & Shrimp" },
      { name: "Stuffed Flounder & Shrimp" },
      { name: "Gator Tail & Shrimp" },
      { name: "Wings & Shrimp" },
      { name: "Crab Cake & Shrimp" },
    ],
  },
  {
    name: "Shrimp Dinner",
    blurb: "Our house shrimp dinner special.",
    items: [
      { name: "Shrimp Dinner" },
      {
        name: "Two Sides",
        description: "Green beans, fried corn, or collards.",
      },
      { name: "Free Drink" },
    ],
  },
  {
    name: "Signature Sandwich Platters",
    blurb: "Piled-high sandwiches and pitas, served with two sides.",
    items: [
      { name: "Salmon B.L.T.", description: "Served grilled or blackened." },
      { name: "Mahi Sandwich" },
      { name: "Basa Sandwich" },
      {
        name: "Pirate's Shrimp Pita",
        description:
          "Arr! Fried shrimp stuffed into a pita making this the best pita on the 7 seas!",
      },
      { name: "Oyster Pita" },
      {
        name: "Crab Cake Pita",
        description: "Served in a toasted pita with paradise sauce.",
      },
      {
        name: "Land & Sea Burger",
        description:
          "Four grilled shrimp served atop a burger with Monterey Jack cheese.",
      },
      {
        name: "The Junior's Burger",
        description:
          "The perfect burger served with up to 3 choice toppings: cheese, grilled onions, bacon, onion ring, bleu cheese dressing, or grilled mushrooms.",
      },
      {
        name: "Sweet Pete's Honey Chicken",
        description:
          "Served grilled with bacon, mozzarella and honey mustard.",
      },
      {
        name: "Chicken Sandwich",
        description: "Served grilled or blackened.",
      },
      {
        name: "North Jax Buffalo Chicken",
        description: "Chicken breast served fried.",
      },
    ],
  },
  {
    name: "Land Ahoy",
    blurb: "For the landlubbers — steaks, chops and grilled favorites.",
    items: [
      { name: "Backyard Blackened Ribeye" },
      { name: "Off the Grill Ribeye" },
      { name: "Chicken Breast", description: "Served grilled or blackened." },
      { name: "Chicken Strips" },
      { name: "Pork Chop", description: "Served fried or grilled." },
      { name: "Gator Tail" },
    ],
  },
  {
    name: "Pasta",
    blurb: "Southern comfort meets the coast.",
    items: [
      {
        name: "Ocean Pasta with Shrimp & Crabmeat",
        description:
          "Over fettuccine with sautéed mushrooms. Add scallops or oysters $5.99.",
      },
      {
        name: "Chicken Alfredo",
        description: "Served grilled or blackened with sautéed mushrooms.",
      },
      {
        name: "Fish Fabulous Pasta",
        description:
          "Choose basa or mahi, served grilled or blackened over alfredo with sautéed mushrooms.",
      },
    ],
  },
  {
    name: "Salads",
    blurb: "Crisp, cool and loaded with seafood.",
    items: [
      {
        name: "Dames Pointe Seafood Salad",
        description: "With boiled shrimp and crabmeat.",
      },
      {
        name: "Buffalo Shrimp Salad",
        description: "Fried shrimp dipped in buffalo sauce.",
      },
      {
        name: "Bam-Bam Shrimp Salad",
        description: "Sweet and a little spicy.",
      },
      {
        name: "Chicken Salad",
        description: "Served fried, grilled, blackened or buffalo style.",
      },
      { name: "Grilled Chicken Club Salad" },
      {
        name: "Bayou Shrimp Caesar Salad",
        description: "With boiled shrimp.",
      },
      {
        name: "Ultimate Salad",
        description:
          "With chicken and shrimp — blackened, grilled or buffalo.",
      },
      { name: "Salmon Salad" },
      {
        name: "Chicken Caesar Salad",
        description: "Served fried, grilled or blackened.",
      },
    ],
  },
  {
    name: "Soups",
    blurb: "Warm bowls of Southern comfort.",
    items: [
      { name: "Clam Chowder" },
      { name: "Crab Bisque" },
      { name: "Seafood Gumbo" },
      { name: "Lobster Bisque" },
    ],
  },
  {
    name: "Teasers",
    blurb: "Perfect for sharing — or not.",
    items: [
      {
        name: "Veggie Sampler",
        description:
          "Choice of 3: fried green tomatoes, squash, onion rings, mushrooms, okra, or pickles.",
      },
      { name: "Bam-Bam Shrimp" },
      {
        name: "Buffalo Shrimp",
        description: "Fried shrimp tossed in our homemade buffalo sauce.",
      },
      { name: "Fried Green Tomatoes" },
      { name: "Fried Squash" },
      { name: "Gator Tail" },
      { name: "Cheese Sticks" },
      {
        name: "Buffalo Sampler",
        description:
          "Shrimp, chicken strips and wings served buffalo style!",
      },
      {
        name: "Cajun Calamari",
        description: "A slightly spicy twist to this favorite dish.",
      },
      {
        name: "Crab Cakes",
        description:
          "Made with real crabmeat and served with our paradise sauce.",
      },
      {
        name: "Wings",
        description:
          "Choose 1 way per order: mild, BBQ, parmesan, blackened, sweet mustard or spicy ranch.",
      },
      { name: "Onion Rings" },
      { name: "Fried Mushrooms" },
      {
        name: "Cheese Fries",
        description: "Piled high with bacon, cheese and chives.",
      },
      { name: "Fried Okra" },
      { name: "Fried Pickles" },
      { name: "Corn Nuggets" },
      { name: "Conch Fritters" },
    ],
  },
  {
    name: "Little Fishies Favorites",
    blurb: "For the little ones at the table.",
    items: [
      { name: "Popcorn Shrimp" },
      { name: "Chicken Strips" },
      { name: "Fish Bites" },
      { name: "Burger" },
      { name: "Grilled Cheese" },
      { name: "Cheese Quesadilla" },
      { name: "Fettuccine Alfredo" },
    ],
  },
  {
    name: "Regular Sides",
    blurb: "Classic Southern sides.",
    items: [
      { name: "Baked Potato" },
      { name: "French Fries" },
      { name: "Coleslaw" },
      { name: "Applesauce" },
      { name: "Grits" },
      { name: "Green Beans" },
      { name: "Rice Pilaf" },
      { name: "Veggie of the Day" },
    ],
  },
  {
    name: "Premium Sides",
    blurb: "A little something extra.",
    items: [
      { name: "House Salad" },
      { name: "Loaded Baked Potato" },
      { name: "Sweet Potato Fries" },
      { name: "Fried Pickles" },
      { name: "Onion Rings" },
      { name: "Fried Green Tomatoes" },
      { name: "Fried Squash" },
      { name: "Fried Okra" },
      { name: "Fried Mushrooms" },
      { name: "Cheese Fries" },
      { name: "Corn Nuggets" },
    ],
  },
  {
    name: "À La Carte",
    blurb: "Build your own plate.",
    items: [
      { name: "Coleslaw, Applesauce, or Grits" },
      { name: "French Fries, Baked Potato, Veggie, or Rice Pilaf" },
      { name: "Fully Loaded Baked Potato" },
      { name: "Sweet Potato Fries" },
      { name: "House Salad" },
      { name: "Caesar Salad" },
      { name: "Deviled Crab" },
      { name: "½ Dozen Hushpuppies" },
      { name: "Shrimp" },
      { name: "Popcorn Shrimp" },
      { name: "Oysters" },
      { name: "Scallops" },
      { name: "Clam Strips" },
      { name: "Basa or Mahi" },
      { name: "Whiting" },
      { name: "Flounder or Catfish" },
      { name: "6 Jumbo Shrimp" },
    ],
  },
  {
    name: "Desserts",
    blurb: "Save room — you'll thank yourself.",
    items: [
      { name: "Brownie" },
      { name: "Summertime Key Lime Pie" },
      { name: "Sweet Potato Pie" },
    ],
  },
  {
    name: "Beverages",
    blurb: "Fountain, tea, and cold beer.",
    items: [
      {
        name: "Fountain Beverages",
        description:
          "Pepsi, Diet Pepsi, Dr. Pepper, Mountain Dew and Pink Lemonade.",
      },
      { name: "Freshly Brewed Sweet & Unsweet Iced Tea" },
      { name: "Beer", description: "Served on tap or in the bottle." },
    ],
  },
];
