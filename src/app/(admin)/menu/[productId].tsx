import {
   View,
   Text,
   Image,
   StyleSheet,
   TouchableOpacity,
   TextInput,
   ScrollView,
} from "react-native";
import React, { useState } from "react";
import { Stack, useRouter, useLocalSearchParams } from "expo-router";
import { products } from "@/assets/products";
import NotFoundScreen from "@/src/app/+not-found";
import Button from "@/src/components/Button";
import { useCart } from "@/src/providers/CartProvider";
import Colors from "@/src/constants/Colors";

const ProductDetailsScreen = () => {
   const { productId } = useLocalSearchParams();
   // const [quantity, setQuantity] = useState(1);
   // const [notes, setNotes] = useState("");
   const router = useRouter();
   const { items, addItem, updateQuantity, updateItem } = useCart();

   const product = products.find((p) => p.id.toString() === productId);

   if (!product) return NotFoundScreen;

   const existingItem = items.find((item) => item.product.id === product.id);

   const [quantity, setQuantity] = useState(existingItem?.quantity || 1);
   const [notes, setNotes] = useState(existingItem?.notes || "");

   const handleQuantityChange = (newQty: number) => { 
      setQuantity(newQty);
      if (existingItem) {
         updateItem(product.id, { quantity: newQty, notes });
      }
   };


   const handleAddToCart = () => {
      if (existingItem) {
         updateItem(product.id, { quantity, notes });
      } else {
         addItem(product, quantity, notes);
      }
      router.back();
   };


   return (
      <ScrollView contentContainerStyle={styles.container}>
         <Stack.Screen />
         

         <Image
            style={styles.image}
            source={
               product.imageUrl
                  ? product.imageUrl
                  : require("@/assets/product_images/no-image.png")
            }
         />

         <View style={styles.namePriceContainer}>
            <Text style={styles.name}>{product.name}</Text>
            <Text style={styles.price}>₱{product.price.toFixed(2)}</Text>
            <View style={styles.divider} />
         </View>

         

         
      </ScrollView>
   );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({
   container: {
      backgroundColor: "white",
      flex: 1,
      minHeight: '100%',
      padding: 10,
   },
   image: {
      width: "100%",
      height: 225,
      resizeMode: "cover",
      backgroundColor: "transparent",
      transform: [{ scale: 1.2 }],
      marginTop: 40,
   },
   namePriceContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      paddingTop: 40,
      paddingBottom: 20,
   },
   name: {
      fontWeight: "bold",
      fontSize: 20,
   },
   price: {
      fontWeight: "bold",
      fontSize: 20,
   },
   divider: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      height: 1,
      backgroundColor: "#e0e0e0",
   },
   closeButton: {
      position: "absolute",
      top: 40,
      left: 20,
      zIndex: 1,
      backgroundColor: "white",
      borderRadius: 20,
      width: 40,
      height: 40,
      justifyContent: "center",
      alignItems: "center",
   },
   closeButtonText: {
      fontSize: 18,
      fontWeight: "bold",
   },
   section: {
      marginVertical: 16,
      width: "100%",
      paddingTop: 10,
   },
   sectionTitle: {
      fontSize: 16,
      fontWeight: "bold",
      marginBottom: 16,
   },
   optional: {
      color: "#888",
   },
   notesInput: {
      borderWidth: 1,
      borderColor: "#ddd",
      borderRadius: 8,
      padding: 12,
      minHeight: 100,
      textAlignVertical: "top",
   },
   quantityContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      marginVertical: 16,
   },
   quantityButton: {
      backgroundColor: "#f0f0f0",
      borderRadius: 60,
      width: 40,
      height: 40,
      justifyContent: "center",
      alignItems: "center",
   },
   quantityText: {
      fontSize: 20,
      fontWeight: "bold",
      paddingHorizontal: 10,

      textAlign: "center",
   },
   quantity: {
      marginHorizontal: 32,
      fontSize: 18,
      fontWeight: "600",
   },
   addButton: {
      marginTop: "auto", // Pushes to bottom
      marginHorizontal: 16,
      marginBottom: 20,
   },
   addButtonText: {
      color: "white",
      fontWeight: "bold",
      fontSize: 16,
   },
});
