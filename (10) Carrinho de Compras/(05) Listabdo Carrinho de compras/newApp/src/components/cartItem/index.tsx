import { StyleSheet, Text, TouchableOpacity } from "react-native"
import { Cart } from "../../types/cartItem"
import { View } from "react-native"
import { useState } from "react"

type Props = {
   data: Cart
   addAmount: (item: Cart) => void
   removeAmount: (item: Cart) => void
}
export const CartItem = ({ data, addAmount, removeAmount }: Props) => {
   const [amount, setAmount] = useState(data?.amount)

   const handleIncrease = () => {
      setAmount(item => item + 1)
      addAmount(data)
   }

   const handleDecrease = () => {
      removeAmount(data)

      if (amount === 0) {
         setAmount(0)
         return
      }

      setAmount(item => item - 1)
   }

   return (
      <View style={styles.container}>
         <View>
            <Text style={styles.title}>{data.name}</Text>
            <Text style={styles.price}>R$ {data.price}</Text>
         </View>

         <View style={styles.amountContainer}>
            <TouchableOpacity
               style={styles.buttonAdd}
               onPress={handleDecrease}>
               <Text>-</Text>
            </TouchableOpacity>

            <Text style={styles.amount}>{amount}</Text>

            <TouchableOpacity
               style={styles.buttonAdd}
               onPress={handleIncrease}>
               <Text>+</Text>
            </TouchableOpacity>
         </View>

      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      borderWidth: 1,
      borderColor: '#DFDFDF',
      borderRadius: 2,
      marginBottom: 14,
      padding: 8,
   },

   title: {
      fontWeight: 'bold',
      fontSize: 18
   },

   price: {
      fontSize: 16
   },

   amountContainer: {
      marginTop: 14,
      marginBottom: 14,
      flexDirection: 'row',
      alignItems: 'center'
   },

   buttonAdd: {
      backgroundColor: '#168FFF',
      padding: 6,
      paddingLeft: 14,
      paddingRight: 14,
      borderRadius: 2,
   },

   amount: {
      marginLeft: 14,
      marginRight: 14
   }
})