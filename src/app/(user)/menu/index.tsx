
import { products } from "@/assets/products";
import { Basket } from "@/src/components/Basket";
import ProductListItem from "@/src/components/ProductListItem";
import { View, FlatList, StyleSheet } from "react-native";


export default function MenuScreen() {
   
   return (
      <View style={styles.container}>
         {/* Product List */}
         <FlatList
            data={products}
            renderItem={({ item }) => <ProductListItem product={item} />}
            numColumns={2}
            contentContainerStyle={{ gap: 10, padding: 10, paddingBottom: 80 }}
            columnWrapperStyle={{ gap: 10 }}
         />
         
         {/* Basket Button */}
         <Basket />
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#f5f5f5",
   },
   basketButton: {
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
   basketLeft: {
      flexDirection: "row",
      alignItems: "center",
      gap: 10,
   },
   basketBadge: {
      backgroundColor: "white",
      width: 24,
      height: 24,
      borderRadius: 12,
      justifyContent: "center",
      alignItems: "center",
   },
   badgeText: {
      color: 'red',
      fontWeight: "bold",
      fontSize: 12,
   },
   basketText: {
      color: "white",
      fontWeight: "bold",
      fontSize: 16,
   },
   basketTotal: {
      color: "white",
      fontWeight: "bold",
      fontSize: 16,
   },
});
