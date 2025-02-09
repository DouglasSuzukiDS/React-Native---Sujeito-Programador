import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Feather from '@expo/vector-icons/Feather'

export default function Home() {
   const [products, setProducts] = useState([
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
      },
   ])

   return (
      <SafeAreaView style={styles.container}>
         <View style={styles.cartContent}>
            <Text style={styles.title}>Lista de Produtos</Text>

            <TouchableOpacity style={styles.cartButton}>
               <View style={styles.dot}>
                  <Text style={styles.dotText}>3</Text>
               </View>

               <Feather name='shopping-cart' size={30} color={'#000'} />
            </TouchableOpacity>
         </View>
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
   }
});