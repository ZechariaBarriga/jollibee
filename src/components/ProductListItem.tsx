import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import Colors from "@/src/constants/Colors";
import { JollibeeProduct } from "@/assets/products";
import { Link, useSegments } from "expo-router";
import { useCart } from "../providers/CartProvider";


const ProductListItem = ({ product } : { product: JollibeeProduct }) => {
   const { items } = useCart();

   const itemCount = items
      .filter((item) => item.product.id === product.id)
      .reduce((sum, item) => sum + item.quantity, 0);

   return (
      <Link href={`/menu/${product.id}`} asChild>
         <Pressable style={styles.container}>
            <Image
               source={
                  product.imageUrl
                     ? product.imageUrl
                     : require("@/assets/product_images/no-image.png")
               }
               style={styles.image}
            />
            {itemCount > 0 && (
               <View style={styles.quantityBadge}>
                  <Text style={styles.quantityText}>{itemCount}</Text>
               </View>
            )}
            <Text style={styles.title}>{product.name}</Text>
            <Text style={styles.price}>₱{product.price.toFixed(2)}</Text>
         </Pressable>
      </Link>
   );
};

export default ProductListItem;

const styles = StyleSheet.create({
   container: {
      backgroundColor: "white",
      padding: 10,
      borderRadius: 10,
      flex: 1,
   },
   image: {
      width: "100%",
      height: 150,
      resizeMode: "contain",
   },
   title: {
      fontSize: 18,
      fontWeight: 600,
      marginVertical: 10,
   },
   price: {
      color: Colors.light.text,
      fontSize: 14,
      fontWeight: 500,
   },
   quantityBadge: {
      position: "absolute",
      bottom: 10,
      right: 10,
      backgroundColor: "white",
      borderColor: "red",
      borderWidth: 1,
      width: 28,
      height: 28,
      borderRadius: 24,
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.15,
      shadowRadius: 3.84,
   },
   quantityText: {
      color: "black",
      fontWeight: "bold",
      fontSize: 12,
   },
});
