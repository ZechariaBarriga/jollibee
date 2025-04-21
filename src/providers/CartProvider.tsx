import { JollibeeProduct } from "@/assets/products";
import { createContext, useContext, useState } from "react";

export type CartItem = {
   product: JollibeeProduct;
   quantity: number;
   notes: string;
};

type CartContextType = {
   items: CartItem[];
   addItem: (product: JollibeeProduct, quantity: number, notes: string) => void;
   updateQuantity: (productId: number, newQuantity: number) => void;
   updateItem: (productId: number, updatedFields: Partial<CartItem>) => void;
   totalPrice: number;
   totalQuantity: number;
};

const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({children} : {children: React.ReactNode}) => {
   const [items, setItems] = useState<CartItem[]>([]);

   const addItem = (product: JollibeeProduct, quantity: number, notes: string) => {
      setItems((prev) => [...prev, { product, quantity, notes }]);
   };

   const totalPrice = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

   const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);

   const updateQuantity = (productId: number, newQuantity: number) => {
      setItems(
         (prevItems) =>
            prevItems
               .map((item) =>
                  item.product.id === productId
                     ? { ...item, quantity: newQuantity }
                     : item
               )
               .filter((item) => item.quantity > 0) // optional: remove if quantity is 0
      );
   };

   const updateItem = (productId: number, updatedFields: Partial<CartItem>) => {
      setItems((prevItems) =>
         prevItems.map((item) =>
            item.product.id === productId ? { ...item, ...updatedFields } : item
         ).filter((item) => item.quantity > 0)
      );
   };

   return (
      <CartContext.Provider value={{items, addItem, totalPrice, totalQuantity, updateQuantity, updateItem}}>
         {children}
      </CartContext.Provider>
   )
}

export const useCart = () => {
   const context = useContext(CartContext);
   if (!context) {
      throw new Error("useCart must be used within a CartProvider");
   }
   return context;
};
