// Biriyani

import biriyaniImg1 from "../../Assets/Images/Biriyani/chicken-biriyani.jpg";
import biriyaniImg2 from "../../Assets/Images/Biriyani/Mutton-biriyani.jpg";
import biriyaniImg3 from "../../Assets/Images/Biriyani/egg-biriyani.jpg";
import biriyaniImg4 from "../../Assets/Images/Biriyani/chicken-65-biriyani.jpg";
import biriyaniImg5 from "../../Assets/Images/Biriyani/prawn-biriyani.jpg";
import biriyaniImg6 from "../../Assets/Images/Biriyani/veg-biriyani.jpg";

// Pizza

// non Veg

import PizzaImg1 from "../../Assets/Images/Pizza/Non-veg/CHICKEN DOMINATOR.png";
import PizzaImg2 from "../../Assets/Images/Pizza/Non-veg/CHICKEN GOLDEN DELIGHT.png";
import PizzaImg3 from "../../Assets/Images/Pizza/Non-veg/CHICKEN PEPPERONI.png";
import PizzaImg4 from "../../Assets/Images/Pizza/Non-veg/CHICKEN SAUSAGE.png";
import PizzaImg5 from "../../Assets/Images/Pizza/Non-veg/INDI CHICKEN TIKKA.png";
import PizzaImg6 from "../../Assets/Images/Pizza/Non-veg/NON VEG SUPREME.png";

// veg

import vegPizzaImg1 from "../../Assets/Images/Pizza/veg/FRESH VEGGIE.jpg";
import vegPizzaImg2 from "../../Assets/Images/Pizza/veg/MEXICAN GREEN WAVE.jpg";
import vegPizzaImg3 from "../../Assets/Images/Pizza/veg/INDI TANDOORI PANEER.jpg";
import vegPizzaImg4 from "../../Assets/Images/Pizza/veg/PEPPY PANEER.jpg";
import vegPizzaImg5 from "../../Assets/Images/Pizza/veg/DELUXE VEGGIE.jpg";
import vegPizzaImg6 from "../../Assets/Images/Pizza/veg/VEG EXTRAVAGANZA.jpg";

// Burger

import BurgerImg1 from "../../Assets/Images/Burger/Classic Zinger Burger.jpg";
import BurgerImg2 from "../../Assets/Images/Burger/Family Feast.jpg";
import BurgerImg3 from "../../Assets/Images/Burger/Tandoori Zinger Burger.jpg";
import BurgerImg4 from "../../Assets/Images/Burger/Veg Zinger Burger.jpg";

// Dessert

import dessertimg1 from "../../Assets/Images/Dessets/Chocolate Lava Cake.jpg";
import dessertimg2 from "../../Assets/Images/Dessets/Ice cream.jpg";
import dessertimg3 from "../../Assets/Images/Dessets/Red Velvet cake.jpg";
import dessertimg4 from "../../Assets/Images/Dessets/brownie.jpg";

// poppular Menu

import PopularImg1 from "../../Assets/Images/Biriyani/Mutton-biriyani.jpg";
import PopularImg2 from "../../Assets/Images/Pizza/Non-veg/CHICKEN DOMINATOR.png";
import PopularImg3 from "../../Assets/Images/Burger/Classic Zinger Burger.jpg";
import PopularImg4 from "../../Assets/Images/Pizza/veg/DELUXE VEGGIE.jpg";
import PopularImg5 from "../../Assets/Images/Dessets/brownie.jpg";
import PopularImg6 from "../../Assets/Images/Burger/Family Feast.jpg";
import PopularImg7 from "../../Assets/Images/Pizza/Non-veg/NON VEG SUPREME.png";
import PopularImg8 from "../../Assets/Images/Dessets/Red Velvet cake.jpg";

const AllFoodMenu = [
  {
    id: 35,
    heading: "All Foods Category",
    title: "CHICKEN BRIRIYANI",
    price: 20,
    imgUrl: biriyaniImg1,
    amount: 1,
  },
  {
    id: 36,
    title: "MUTTON BRIRIYANI",
    price: 30,
    imgUrl: biriyaniImg2,
    amount: 1,
  },
  {
    id: 37,
    title: "EGG BRIRIYANI",
    price: 15,
    imgUrl: biriyaniImg3,
    amount: 1,
  },
  {
    id: 38,
    title: "CHICKEN-65-BRIRIYANI",
    price: 25,
    imgUrl: biriyaniImg4,
    amount: 1,
  },
  {
    id: 39,
    title: "PRAWN BRIRIYANI",
    price: 25,
    imgUrl: biriyaniImg5,
    amount: 1,
  },
  {
    id: 40,
    title: "VEG BRIRIYANI",
    price: 13,
    imgUrl: biriyaniImg6,
    amount: 1,
  },
  {
    id: 41,
    title: "CHICKEN DOMINATOR",
    price: 40,
    imgUrl: PizzaImg1,
    amount: 1,
  },
  {
    id: 42,
    title: "CHICKEN GOLDEN DELIGHT",
    price: 42,
    imgUrl: PizzaImg2,
    amount: 1,
  },
  {
    id: 43,
    title: "CHICKEN PEPPERONI",
    price: 48,
    imgUrl: PizzaImg3,
    amount: 1,
  },
  {
    id: 44,
    title: "CHICKEN SAUSAGE",
    price: 44,
    imgUrl: PizzaImg4,
    amount: 1,
  },
  {
    id: 45,
    title: "INDI CHICKEN TIKKA",
    price: 50,
    imgUrl: PizzaImg5,
    amount: 1,
  },

  {
    id: 46,
    title: "NON VEG SUPREME",
    price: 50,
    imgUrl: PizzaImg6,
    amount: 1,
  },

  // veg

  {
    id: 47,
    title: "FRESH VEGGIE",
    price: 32,
    imgUrl: vegPizzaImg1,
    amount: 1,
  },
  {
    id: 48,
    title: "MEXICAN GREEN WAVE",
    price: 35,
    imgUrl: vegPizzaImg2,
    amount: 1,
  },
  {
    id: 49,
    title: "INDI TANDOORI PANEER",
    price: 35,
    imgUrl: vegPizzaImg3,
    amount: 1,
  },
  {
    id: 50,
    title: "PEPPY PANEER",
    price: 32,
    imgUrl: vegPizzaImg4,
    amount: 1,
  },
  {
    id: 51,
    title: "DELUXE VEGGIE",
    price: 30,
    imgUrl: vegPizzaImg5,
    amount: 1,
  },
  {
    id: 52,
    title: "VEG EXTRAVAGANZA",
    price: 30,
    imgUrl: vegPizzaImg6,
    amount: 1,
  },
  {
    id: 53,
    title: "CLASSIC ZINGER BURGER",
    price: 20,
    imgUrl: BurgerImg1,
    amount: 1,
  },
  {
    id: 54,
    title: "FAMILY FEAST",
    price: 80,
    imgUrl: BurgerImg2,
    amount: 1,
  },
  {
    id: 55,
    title: "TANDOORI ZINGER BURGER",
    price: 25,
    imgUrl: BurgerImg3,
    amount: 1,
  },
  {
    id: 56,
    title: "VEG ZINGER BURGER",
    price: 18,
    imgUrl: BurgerImg4,
    amount: 1,
  },
  {
    id: 57,
    title: "CHOCOLATE LAVA CAKE",
    price: 15,
    imgUrl: dessertimg1,
    amount: 1,
  },
  {
    id: 58,
    title: "ICE CREAM",
    price: 12,
    imgUrl: dessertimg2,
    amount: 1,
  },
  {
    id: 59,
    title: "Red Velvet cake",
    price: 15,
    imgUrl: dessertimg3,
    amount: 1,
  },
  {
    id: 60,
    title: "brownie",
    price: 10,
    imgUrl: dessertimg4,
    amount: 1,
  },
];

const BiriyaniItem = [
  {
    id: 3,
    heading: "BIRIYANI CATEGORY",
    title: "Chicken-65-Biriyani",
    price: 25,
    imgUrl: biriyaniImg4,
    amount: 1,
  },
  {
    id: 2,
    title: "PRAWN BIRIYANI",
    price: 25,
    imgUrl: biriyaniImg5,
    amount: 1,
  },
  {
    id: 1,
    title: "VEG BIRIYANI",
    price: 13,
    imgUrl: biriyaniImg6,
    amount: 1,
  },
  {
    id: 6,
    title: "CHICKEN BIRIYANI",
    price: 20,
    imgUrl: biriyaniImg1,
    amount: 1,
  },
  {
    id: 5,
    title: "MUTTON BIRIYANI",
    price: 30,
    imgUrl: biriyaniImg2,
    amount: 1,
  },
  {
    id: 4,
    title: "EGG BIRIYANI",
    price: 15,
    imgUrl: biriyaniImg3,
    amount: 1,
  },
];

const PizzaItem = [
  {
    id: 7,
    heading: "PIZZA CATEGORY",
    title: "CHICKEN DOMINATOR",
    price: 40,
    imgUrl: PizzaImg1,
    amount: 1,
  },
  {
    id: 8,
    title: "CHICKEN GOLDEN DELIGHT",
    price: 42,
    imgUrl: PizzaImg2,
    amount: 1,
  },
  {
    id: 9,
    title: "CHICKEN PEPPERONI",
    price: 48,
    imgUrl: PizzaImg3,
    amount: 1,
  },
  {
    id: 10,
    title: "CHICKEN SAUSAGE",
    price: 44,
    imgUrl: PizzaImg4,
    amount: 1,
  },
  {
    id: 11,
    title: "INDI CHICKEN TIKKA",
    price: 50,
    imgUrl: PizzaImg5,
    amount: 1,
  },

  {
    id: 12,
    title: "NON VEG SUPREME",
    price: 50,
    imgUrl: PizzaImg6,
    amount: 1,
  },

  // veg

  {
    id: 13,
    title: "FRESH VEGGIE",
    price: 32,
    imgUrl: vegPizzaImg1,
    amount: 1,
  },
  {
    id: 14,
    title: "MEXICAN GREEN WAVE",
    price: 35,
    imgUrl: vegPizzaImg2,
    amount: 1,
  },
  {
    id: 15,
    title: "INDI TANDOORI PANEER",
    price: 35,
    imgUrl: vegPizzaImg3,
    amount: 1,
  },
  {
    id: 16,
    title: "PEPPY PANEER",
    price: 32,
    imgUrl: vegPizzaImg4,
    amount: 1,
  },
  {
    id: 17,
    title: "DELUXE VEGGIE",
    price: 30,
    imgUrl: vegPizzaImg5,
  },
  {
    id: 18,
    title: "VEG EXTRAVAGANZA",
    price: 30,
    imgUrl: vegPizzaImg6,
    amount: 1,
  },
];

const BurgerItem = [
  {
    id: 19,
    heading: "Burger Category",
    title: "CLASSIC ZINGER BURGER",
    price: 20,
    imgUrl: BurgerImg1,
    amount: 1,
  },
  {
    id: 20,
    title: "Family Feast",
    price: 80,
    imgUrl: BurgerImg2,
    amount: 1,
  },
  {
    id: 21,
    title: "Tandoori Zinger Burger",
    price: 25,
    imgUrl: BurgerImg3,
    amount: 1,
  },
  {
    id: 22,
    title: "Veg Zinger Burger",
    price: 18,
    imgUrl: BurgerImg4,
    amount: 1,
  },
];

const DessertItem = [
  {
    id: 23,
    heading: "Dessert Category",
    title: "CHOCOLATE LAVA CAKE",
    price: 15,
    imgUrl: dessertimg1,
    amount: 1,
  },
  {
    id: 24,
    title: "ICE CREAM",
    price: 12,
    imgUrl: dessertimg2,
    amount: 1,
  },
  {
    id: 25,
    title: "RED VELVET CAKE",
    price: 15,
    imgUrl: dessertimg3,
    amount: 1,
  },
  {
    id: 26,
    title: "BROWNIE",
    price: 10,
    imgUrl: dessertimg4,
    amount: 1,
  },
];

const PopularMenuFood = [
  {
    id: 27,
    title: "Mutton-biriyani",
    price: 30,
    imgUrl: PopularImg1,
    amount: 1,
  },
  {
    id: 28,
    title: "Chicken Dominator",
    price: 40,
    imgUrl: PopularImg2,
    amount: 1,
  },

  {
    id: 29,
    title: "Chicken Zinger Burger",
    price: 20,
    imgUrl: PopularImg3,
    amount: 1,
  },

  {
    id: 30,
    title: "Deluxe veggie",
    price: 30,
    imgUrl: PopularImg4,
    amount: 1,
  },

  {
    id: 31,
    title: "BROWNIE's",
    price: 10,
    imgUrl: PopularImg5,
    amount: 1,
  },
  {
    id: 32,
    title: "Family Feast",
    price: 80,
    imgUrl: PopularImg6,
    amount: 1,
  },
  {
    id: 33,
    title: "NON VEG SUPREME",
    price: 50,
    imgUrl: PopularImg7,
    amount: 1,
  },
  {
    id: 34,
    title: "RED VELVET CAKE",
    price: 15,
    imgUrl: PopularImg8,
    amount: 1,
  },
];

export {
  BiriyaniItem,
  BurgerItem,
  PizzaItem,
  DessertItem,
  PopularMenuFood,
  AllFoodMenu,
};
