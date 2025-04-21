import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { useCart } from "../providers/CartProvider";


export const Basket = () => {
   const { items, totalPrice, totalQuantity } = useCart();
   const router = useRouter();

   if (items.length === 0) return null;

   return (
      <TouchableOpacity
         style={styles.container}
         onPress={() => router.push("/cart")}
      >
         <View style={styles.leftSection}>
            
            <Text style={styles.itemText}>
               Basket     •     {totalQuantity} {totalQuantity === 1 ? "Item" : "Items"}
            </Text>
         </View>
         <Text style={styles.totalText}>₱{totalPrice.toFixed(2)}</Text>
      </TouchableOpacity>
   );
};

const styles = StyleSheet.create({
   container: {
      position: "absolute",
      bottom: 20,
      left: 20,
      right: 20,
      backgroundColor: 'red',
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      padding: 16,
      borderRadius: 8,
      elevation: 3,
   },
   leftSection: {
      flexDirection: "row",
      alignItems: "center",
      gap: 10,
   },
   badgeText: {
      color: 'red',
      fontWeight: "bold",
      fontSize: 12,
   },
   itemText: {
      color: "white",
      fontWeight: "bold",
      fontSize: 16,
   },
   totalText: {
      color: "white",
      fontWeight: "bold",
      fontSize: 16,
   },
});
