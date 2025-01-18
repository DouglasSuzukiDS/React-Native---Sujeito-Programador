import { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as ImagePicker from 'expo-image-picker'

export default function Home() {
   const [photo, setPhoto] = useState<string | null>(null)

   const openAlbum = async () => {
      const options = {
         mediaType: 'photo',
         quality: 1,
         selectionLimit: 1
      }

      await ImagePicker.launchImageLibraryAsync(options)
         .then(response => {
            if (response.canceled) {
               console.log('Imagem picker cancelado')
               return
            } else {
               console.log(response.assets)
               setPhoto(response.assets[0].uri)
            }
         })
         .catch(error => console.log(`Gerou erro: ${error.message}`))
   }

   const openCamera = async () => {
      const options = {
         mediaType: 'photo',
         quality: 1,
      }

      await ImagePicker.launchCameraAsync(options)
         .then(response => {
            if (response.canceled) {
               console.log('Imagem capturada cancelada')
               return
            } else {
               console.log(response.assets)
               setPhoto(response.assets[0].uri)
            }
         })
         .catch(error => console.log(`Gerou erro: ${error.message}`))
   }

   return (
      <SafeAreaView style={styles.container}>
         <View style={styles.buttons}>
            <TouchableOpacity
               style={styles.button}
               onPress={openAlbum}>
               <Text style={styles.text}>Abrir Album</Text>
            </TouchableOpacity>

            <TouchableOpacity
               style={styles.button}
               onPress={openCamera}>
               <Text style={styles.text}>Abrir Camera</Text>
            </TouchableOpacity>
         </View>

         {photo !== null && <Image style={styles.imagem} source={{ uri: photo }} />}
      </SafeAreaView>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: 'center',
   },

   buttons: {
      marginTop: 44,
      flexDirection: 'row',
      gap: 14,
      marginBottom: 24
   },

   button: {
      backgroundColor: '#121212',
      padding: 4,
      paddingLeft: 16,
      paddingRight: 16,
      borderRadius: 4
   },

   text: {
      color: '#FFF'
   },

   imagem: {
      width: 300,
      height: 300,
      objectFit: 'cover',
   }
});