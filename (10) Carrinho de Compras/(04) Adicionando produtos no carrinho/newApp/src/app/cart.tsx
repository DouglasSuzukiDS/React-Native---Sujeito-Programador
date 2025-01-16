import { StyleSheet, Text, View } from "react-native";
import { useCart } from "../contexts/cart";

export default function Cart() {
   const { cart } = useCart()
   return (
      <View style={styles.container}>
         {cart.map(item => (
            <Text>{item.name} - {item.amount}</Text>
         ))}
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#FFF',
      alignItems: 'center',
      justifyContent: 'center',
   },
});