import { View, Text, Platform, FlatList, StyleSheet } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { useCart } from "../providers/CartProvider";
import { CartListItem } from "../components/CartListItem";
import Button from "../components/Button";

const CartScreen = () => {
   const { items, totalPrice } = useCart();

   return (
      <View style={styles.container}>
         <FlatList
            data={items}
            renderItem={({ item }) => <CartListItem item={item} />}
            contentContainerStyle={{ gap: 10 }}
         />
         <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
         <Text style={{ marginTop: 20, fontSize: 16, fontWeight: 600 }}>Total: ₱{totalPrice}</Text>
         <Button text="Checkout" style={styles.button} />
      </View>
   )
};

export default CartScreen;

const styles = StyleSheet.create({
   container: {
      // flex: 1,
      // backgroundColor: "#f5f5f5",
   },
   button: {
      // marginTop: "auto",
   },
})