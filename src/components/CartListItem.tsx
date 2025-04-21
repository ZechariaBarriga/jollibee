import { View, Text, Image, TouchableOpacity, StyleSheet, Pressable } from "react-native";
import { CartItem, useCart } from "../providers/CartProvider";
import { Link } from "expo-router";

export const CartListItem = ({ item }: { item: CartItem }) => {
   const { product, quantity } = item;
   const { updateItem } = useCart();

   return (
      <Link href={`/menu/${product.id}`} asChild>
         <Pressable style={styles.container}>
            <Image
               source={
                  typeof product.imageUrl === "string"
                     ? { uri: product.imageUrl }
                     : product.imageUrl
               }
               style={styles.image}
            />

            <View style={styles.middleSection}>
               <Text style={styles.title}>{product.name}</Text>
               <Text style={styles.price}>₱{product.price.toFixed(2)}</Text>
            </View>
            <Text>{item.product.price}</Text>
               
            <View style={styles.quantityContainer}>
               <TouchableOpacity
                  style={[
                     styles.quantityButton,
                     { backgroundColor: "#ededed" },
                  ]}
                  onPress={() =>
                     updateItem(product.id, {
                        quantity: Math.max(0, quantity - 1),
                     })
                  }
               >
                  <Text style={styles.quantityText}>—</Text>
               </TouchableOpacity>
               <Text style={styles.quantity}>{quantity}</Text>
               <TouchableOpacity
                  style={styles.quantityButton}
                  onPress={() =>
                     updateItem(product.id, { quantity: quantity + 1 })
                  }
               >
                  <Text style={styles.quantityText}>+</Text>
               </TouchableOpacity>
            </View>
         </Pressable>
      </Link>
   );
};

const styles = StyleSheet.create({
   container: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "white",
      padding: 12,
      marginVertical: 4,
      borderRadius: 10,
      shadowColor: "#000",
      shadowOpacity: 0.05,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 4,
      elevation: 3,
   },
   image: {
      width: 60,
      height: 60,
      borderRadius: 30,
      marginRight: 12,
   },
   middleSection: {
      flex: 1,
   },
   title: {
      fontWeight: "bold",
      fontSize: 16,
      marginBottom: 4,
   },
   price: {
      color: "red", // or "#0a84ff"
      fontWeight: "600",
   },
   size: {
      fontSize: 12,
      color: "#777",
   },
   quantityContainer: {
      flexDirection: "row",
      alignItems: "center",
      gap: 8,
   },
   quantityButton: {
      fontSize: 20,
      fontWeight: "bold",
      paddingHorizontal: 6,
   },
   quantity: {
      fontSize: 16,
      fontWeight: "600",
   },
   quantityText: {
      color: "black",
      fontWeight: "bold",
      fontSize: 12,
   },
});
