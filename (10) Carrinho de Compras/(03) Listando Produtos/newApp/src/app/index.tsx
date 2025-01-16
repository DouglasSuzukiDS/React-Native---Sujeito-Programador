import { useState } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Feather from '@expo/vector-icons/Feather'
import { Product } from "../components/product";
import { router } from "expo-router";
import { ProductType } from "../types/product";
import { useCart } from "../contexts/cart";

export default function Home() {
   const [products, setProducts] = useState<ProductType[]>([
      {
         id: '1', name: 'Coca Cola', price: 19.90
      },
      {
         id: '2', name: 'Chocolate', price: 6.50
      },
      {
         id: '4', name: 'Queijo 500g', price: 15
      },
      {
         id: '5', name: 'Batata frita', price: 23.90
      },
      {
         id: '6', name: 'Guarana lata', price: 6.00
      }
   ])

   const { cart } = useCart()

   return (
      <SafeAreaView style={styles.container}>
         <View style={styles.cartContent}>
            <Text style={styles.title}>Lista de Produtos</Text>

            <TouchableOpacity
               style={styles.cartButton}
               onPress={() => router.push('/cart')}>
               <View style={styles.dot}>
                  <Text style={styles.dotText}>{cart?.length}</Text>
               </View>

               <Feather name='shopping-cart' size={30} color={'#000'} />
            </TouchableOpacity>
         </View>

         <FlatList
            data={products}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <Product data={item} />}
         />
      </SafeAreaView>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#FAFAFA',
      paddingEnd: 14,
      paddingStart: 14
   },

   cartContent: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 24,
      marginBottom: 24
   },

   title: {
      fontSize: 24,
      fontWeight: 'bold'
   },

   cartButton: {

   },

   dot: {
      alignContent: 'center',
      justifyContent: 'center',
      backgroundColor: '#F00',
      width: 20,
      height: 20,
      borderRadius: 12,
      position: 'absolute',
      zIndex: 99,
      bottom: -2,
      left: -4
   },

   dotText: {
      fontSize: 12,
      fontWeight: 'bold',
      textAlign: 'center'
   },

   list: {

   }
});