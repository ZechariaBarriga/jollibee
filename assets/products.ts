import { ImageSourcePropType } from "react-native";

export interface JollibeeProduct {
   id: number;
   name: string;
   category:
      | "Chicken"
      | "Burgers"
      | "Spaghetti"
      | "Palabok"
      | "Desserts"
      | "Beverages";
   price: number;
   description: string;
   isPopular: boolean;
   imageUrl: ImageSourcePropType; // string if migrating to supabase
   available: boolean;
}

export const products: JollibeeProduct[] = [
   {
      id: 1,
      name: "Chickenjoy (1pc)",
      category: "Chicken",
      price: 85.00,
      description: "Crispylicious, juicylicious Chickenjoy",
      isPopular: true,
      imageUrl: require("./product_images/1pc-Chickenjoy-Solo.png"),
      // imageUrl: "../assets/product_images/1pc-Chickenjoy-Solo.png",
      available: true,
   },
   {
      id: 2,
      name: "Chickenjoy (2pc)",
      category: "Chicken",
      price: 150.00,
      description: "2 pieces of crispylicious, juicylicious Chickenjoy",
      isPopular: true,
      imageUrl: require("./product_images/2pc-Chickenjoy-Solo.png"),
      // imageUrl: "./product_images/2pc-Chickenjoy-Solo.png",
      available: true,
   },
   {
      id: 3,
      name: "Jolly Spaghetti",
      category: "Spaghetti",
      price: 65.00,
      description: "Sweet-style spaghetti with hotdog slices and cheese",
      isPopular: true,
      imageUrl: require("./product_images/Jolly-Spaghetti-Solo.png"),
      // imageUrl: "./product_images/Jolly-Spaghetti-Solo.png",
      available: true,
   },
   {
      id: 4,
      name: "Yumburger",
      category: "Burgers",
      price: 45.00,
      description: "Classic Jollibee burger with special dressing",
      isPopular: true,
      imageUrl: require("./product_images/Yumburger-Solo.png"),
      // imageUrl: "./product_images/Yumburger-Solo.png",
      available: true,
   },
   {
      id: 5,
      name: "Cheesy Yumburger",
      category: "Burgers",
      price: 55.00,
      description: "Yumburger with cheese",
      isPopular: false,
      imageUrl: require("./product_images/Cheesy-Yumburger-Solo.png"),
      // imageUrl: "./product_images/Cheesy-Yumburger-Solo.png",
      available: true,
   },
   {
      id: 6,
      name: "Palabok Solo",
      category: "Palabok",
      price: 95.00,
      description: "Rice noodles with shrimp sauce, toppings, and chicharon",
      isPopular: false,
      imageUrl: require("./product_images/Palabok-Solo.png"),
      // imageUrl: "./product_images/Palabok-Solo.png",
      available: true,
   },
   {
      id: 7,
      name: "Peach Mango Pie",
      category: "Desserts",
      price: 35.00,
      description: "Crispy pie with sweet peach-mango filling",
      isPopular: true,
      imageUrl: require("./product_images/Peach-Mango-Pie.png"),
      // imageUrl: "./product_images/Peach-Mango-Pie.png",
      available: true,
   },
   {
      id: 8,
      name: "Jolly Hotdog",
      category: "Burgers",
      price: 60.00,
      description: "Juicy hotdog in a bun with special dressing",
      isPopular: false,
      imageUrl: require("./product_images/Cheesy-Classic-Jolly-Hotdog-Solo.png"),
      // imageUrl: "./product_images/Cheesy-Classic-Jolly-Hotdog-Solo.png",
      available: true,
   },
   {
      id: 9,
      name: "Tuna Pie",
      category: "Desserts",
      price: 35.00,
      description: "Crispy pie with savory tuna filling",
      isPopular: false,
      imageUrl: require("./product_images/Tuna-Pie-Solo.png"),
      // imageUrl: "./product_images/Tuna-Pie-Solo.png",
      available: true,
   },
   {
      id: 10,
      name: "Iced Tea (Regular)",
      category: "Beverages",
      price: 30.00,
      description: "Refreshing iced tea",
      isPopular: false,
      imageUrl: require("./product_images/Ice-Tea-Regular.png"),
      // imageUrl: "./product_images/Ice-Tea-Regular.png",
      available: true,
   },
];
