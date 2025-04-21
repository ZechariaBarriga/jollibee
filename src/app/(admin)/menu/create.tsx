import { View, Text, StyleSheet, TextInput, Alert, Image } from "react-native"
import React, { useState } from "react"
import Button from "@/src/components/Button"
import Colors from "@/src/constants/Colors"
import * as ImagePicker from "expo-image-picker"
import { Stack } from "expo-router"

const CreateProductScreen = () => {
   const [name, setName] = useState("")
   const [price, setPrice] = useState("")
   const [errors, setErrors] = useState<{ name?: string; price?: string }>({})
   const [image, setImage] = useState<string | null>(null)

   const handleCreate = () => {
      const newErrors: typeof errors = {}

      if (!name.trim()) {
         newErrors.name = "Name is required"
      }

      const priceValue = parseFloat(price)
      if (!price || isNaN(priceValue) || priceValue <= 0) {
         newErrors.price = "Enter a valid price"
      }

      setErrors(newErrors)

      if (Object.keys(newErrors).length === 0) {
         Alert.alert("Product Created", `${name} - ₱${priceValue.toFixed(2)}`)
         setName("")
         setPrice("")
      }
   }

   const pickImage = async () => {
      // No permissions request is necessary for launching the image library
      let result = await ImagePicker.launchImageLibraryAsync({
         mediaTypes: ["images", "videos"],
         allowsEditing: true,
         aspect: [4, 3],
         quality: 1,
      })

      if (!result.canceled) {
         setImage(result.assets[0].uri)
      }
   }


   return (
      <View style={styles.container}>
         <Stack.Screen options={{ title: 'Create Product' }} />
         <Image
            source={
               image
                  ? { uri: image }
                  : require("@/assets/product_images/no-image.png")
            }
            style={styles.image}
         />

         <Text style={styles.textButton} onPress={pickImage}>
            Select Image
         </Text>

         <Text style={styles.label}>Name</Text>
         <TextInput
            placeholder="Name"
            style={styles.input}
            value={name}
            onChangeText={setName}
         />
         {errors.name && <Text style={styles.error}>{errors.name}</Text>}

         <Text style={styles.label}>Price</Text>
         <TextInput
            placeholder="9.99"
            style={styles.input}
            value={price}
            onChangeText={setPrice}
            keyboardType="numeric"
         />
         {errors.price && <Text style={styles.error}>{errors.price}</Text>}

         <Button
            text="Create"
            onPress={handleCreate}
            style={{
               marginTop: 20,
               backgroundColor: Colors.light.tint,
               width: "50%",
            }}
         />
      </View>
   )
}

export default CreateProductScreen

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: "center",
      padding: 10,
   },
   input: {
      backgroundColor: "white",
      padding: 10,
      borderRadius: 5,
      marginTop: 5,
      marginBottom: 10,
   },
   label: {
      color: "gray",
      fontSize: 16,
   },
   error: {
      color: "red",
      marginBottom: 10,
   },
   image: {
      width: 200,
      height: 200,
      alignSelf: "center",
      aspectRatio: 1,
      marginBottom: 20,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 5 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
   },

   textButton: {
      fontWeight: "bold",
      alignSelf: "center",
      color: Colors.light.tint,
      marginVertical: 10,
   },
})
