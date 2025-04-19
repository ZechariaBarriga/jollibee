interface JollibeeProduct {
   id: number;
   name: string;
   category:
      | "Chicken"
      | "Burgers"
      | "Spaghetti"
      | "Rice Meals"
      | "Desserts"
      | "Beverages";
   price: number;
   description: string;
   isPopular: boolean;
   calories: number;
   available: boolean;
}

export const jollibeeMenu: JollibeeProduct[] = [
   {
      id: 1,
      name: "Chickenjoy (1pc)",
      category: "Chicken",
      price: 85.0,
      description: "Crispylicious, juicylicious Chickenjoy",
      isPopular: true,
      calories: 320,
      available: true,
   },
   {
      id: 2,
      name: "Chickenjoy (2pc)",
      category: "Chicken",
      price: 150.0,
      description: "2 pieces of crispylicious, juicylicious Chickenjoy",
      isPopular: true,
      calories: 640,
      available: true,
   },
   {
      id: 3,
      name: "Jolly Spaghetti",
      category: "Spaghetti",
      price: 65.0,
      description: "Sweet-style spaghetti with hotdog slices and cheese",
      isPopular: true,
      calories: 420,
      available: true,
   },
   {
      id: 4,
      name: "Yumburger",
      category: "Burgers",
      price: 45.0,
      description: "Classic Jollibee burger with special dressing",
      isPopular: true,
      calories: 280,
      available: true,
   },
   {
      id: 5,
      name: "Cheesy Yumburger",
      category: "Burgers",
      price: 55.0,
      description: "Yumburger with cheese",
      isPopular: false,
      calories: 320,
      available: true,
   },
   {
      id: 6,
      name: "Palabok Fiesta",
      category: "Rice Meals",
      price: 95.0,
      description: "Rice noodles with shrimp sauce, toppings, and chicharon",
      isPopular: false,
      calories: 480,
      available: true,
   },
   {
      id: 7,
      name: "Peach Mango Pie",
      category: "Desserts",
      price: 35.0,
      description: "Crispy pie with sweet peach-mango filling",
      isPopular: true,
      calories: 180,
      available: true,
   },
   {
      id: 8,
      name: "Jolly Hotdog",
      category: "Burgers",
      price: 60.0,
      description: "Juicy hotdog in a bun with special dressing",
      isPopular: false,
      calories: 310,
      available: true,
   },
   {
      id: 9,
      name: "Tuna Pie",
      category: "Desserts",
      price: 35.0,
      description: "Crispy pie with savory tuna filling",
      isPopular: false,
      calories: 190,
      available: true,
   },
   {
      id: 10,
      name: "Iced Tea (Regular)",
      category: "Beverages",
      price: 30.0,
      description: "Refreshing iced tea",
      isPopular: false,
      calories: 120,
      available: true,
   },
];
