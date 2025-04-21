import { products } from "./products";

interface OrderItem {
   productId: number;
   quantity: number;
   specialInstructions?: string;
}

interface JollibeeOrder {
   orderId: string;
   customerName: string;
   orderDate: Date;
   items: OrderItem[];
   totalAmount: number;
   status: "Pending" | "Preparing" | "Ready" | "Completed" | "Cancelled";
   branch: string;
   paymentMethod: "Cash" | "Credit Card" | "GCash" | "GrabPay";
   isTakeout: boolean;
}

function calculateOrderTotal(items: OrderItem[]): number {
   return items.reduce((total, item) => {
      const product = products.find((p) => p.id === item.productId);
      return total + (product ? product.price * item.quantity : 0);
   }, 0);
}

export const jollibeeOrders: JollibeeOrder[] = [
   {
      orderId: "JB-2023-001",
      customerName: "Juan Dela Cruz",
      orderDate: new Date("2023-05-15T10:30:00"),
      items: [
         { productId: 2, quantity: 1 }, // 2pc Chickenjoy
         { productId: 3, quantity: 1 }, // Jolly Spaghetti
         { productId: 10, quantity: 2 }, // Iced Tea
      ],
      totalAmount: calculateOrderTotal([
         { productId: 2, quantity: 1 },
         { productId: 3, quantity: 1 },
         { productId: 10, quantity: 2 },
      ]),
      status: "Completed",
      branch: "SM Megamall",
      paymentMethod: "Cash",
      isTakeout: false,
   },
   {
      orderId: "JB-2023-002",
      customerName: "Maria Santos",
      orderDate: new Date("2023-05-15T11:15:00"),
      items: [
         { productId: 1, quantity: 2, specialInstructions: "Extra gravy" }, // 1pc Chickenjoy
         { productId: 7, quantity: 3 }, // Peach Mango Pie
      ],
      totalAmount: calculateOrderTotal([
         { productId: 1, quantity: 2 },
         { productId: 7, quantity: 3 },
      ]),
      status: "Ready",
      branch: "Glorietta 2",
      paymentMethod: "GCash",
      isTakeout: true,
   },
   {
      orderId: "JB-2023-003",
      customerName: "Pedro Bautista",
      orderDate: new Date("2023-05-15T12:45:00"),
      items: [
         { productId: 4, quantity: 1 }, // Yumburger
         { productId: 8, quantity: 1 }, // Jolly Hotdog
         { productId: 10, quantity: 1 }, // Iced Tea
      ],
      totalAmount: calculateOrderTotal([
         { productId: 4, quantity: 1 },
         { productId: 8, quantity: 1 },
         { productId: 10, quantity: 1 },
      ]),
      status: "Preparing",
      branch: "Robinson Place Manila",
      paymentMethod: "Credit Card",
      isTakeout: false,
   },
   {
      orderId: "JB-2023-004",
      customerName: "Lorna Tolentino",
      orderDate: new Date("2023-05-15T13:20:00"),
      items: [
         { productId: 6, quantity: 1 }, // Palabok Fiesta
         { productId: 9, quantity: 2 }, // Tuna Pie
      ],
      totalAmount: calculateOrderTotal([
         { productId: 6, quantity: 1 },
         { productId: 9, quantity: 2 },
      ]),
      status: "Pending",
      branch: "Trinoma",
      paymentMethod: "GrabPay",
      isTakeout: true,
   },
   {
      orderId: "JB-2023-005",
      customerName: "Ramon Gutierrez",
      orderDate: new Date("2023-05-15T14:00:00"),
      items: [
         { productId: 2, quantity: 2 }, // 2pc Chickenjoy
         { productId: 3, quantity: 2 }, // Jolly Spaghetti
         { productId: 7, quantity: 4 }, // Peach Mango Pie
      ],
      totalAmount: calculateOrderTotal([
         { productId: 2, quantity: 2 },
         { productId: 3, quantity: 2 },
         { productId: 7, quantity: 4 },
      ]),
      status: "Preparing",
      branch: "SM North EDSA",
      paymentMethod: "Cash",
      isTakeout: false,
   },
];
