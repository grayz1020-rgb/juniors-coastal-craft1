import shrimpGrits from "@/assets/shrimp-grits.jpeg";
import blackenedShrimp from "@/assets/blackened-shrimp.jpeg";
import captainsPlatter from "@/assets/captains-platter.jpg";
import friedShrimp from "@/assets/fried-shrimp.jpg";
import blackenedMahi from "@/assets/blackened-mahi.jpg";
import shrimpTacos from "@/assets/shrimp-tacos.jpg";
import friedCatfish from "@/assets/fried-catfish.jpg";
import seafoodFeast from "@/assets/seafood-feast.jpg";
import crabCakes from "@/assets/crab-cakes.jpg";
export type Dish = {
  name: string;
  tagline: string;
  image: string;
};
export const featuredDishes: Dish[] = [
  {
    name: "Shrimp & Grits",
    tagline: "Creamy stone-ground grits, sautéed shrimp, andouille sausage, cheddar, and scallions.",
    image: shrimpGrits,
  },
  {
    name: "Captain's Platter",
    tagline: "A generous mix of fried shrimp, oysters, scallops, and catfish — the ultimate feast.",
    image: captainsPlatter,
  },
  {
    name: "Fried Shrimp",
    tagline: "Golden hand-breaded Gulf shrimp with our house cocktail sauce and lemon.",
    image: friedShrimp,
  },
  {
    name: "Blackened Mahi",
    tagline: "Cajun-spiced mahi mahi with a signature char crust, served with dirty rice.",
    image: blackenedMahi,
  },
  {
    name: "Shrimp Tacos",
    tagline: "Grilled shrimp, cabbage slaw, pico, and avocado crema in warm flour tortillas.",
    image: shrimpTacos,
  },
  {
    name: "Fried Catfish",
    tagline: "Southern-style cornmeal-breaded catfish with hush puppies and coleslaw.",
    image: friedCatfish,
  },
  {
    name: "Seafood Feast",
    tagline: "Snow crab, lobster tail, jumbo shrimp, corn, potatoes — a hearty seafood boil for the table.",
    image: seafoodFeast,
  },
  {
    name: "Blackened Shrimp",
    tagline: "Jumbo shrimp seared in Cajun spice, served with collards, corn, and hush puppies.",
    image: blackenedShrimp,
  },
  {
    name: "Crab Cakes",
    tagline: "Jumbo lump crab cakes pan-seared golden, finished with house remoulade.",
    image: crabCakes,
  },
];
export const galleryImages = [
  { src: shrimpGrits, alt: "Shrimp & Grits" },
  { src: blackenedShrimp, alt: "Blackened Shrimp Plate" },
  { src: captainsPlatter, alt: "Captain's Platter" },
  { src: friedShrimp, alt: "Fried Shrimp Basket" },
  { src: blackenedMahi, alt: "Blackened Mahi" },
  { src: shrimpTacos, alt: "Shrimp Tacos" },
  { src: friedCatfish, alt: "Fried Catfish" },
  { src: seafoodFeast, alt: "Seafood Feast" },
  { src: crabCakes, alt: "Crab Cakes" },
];
