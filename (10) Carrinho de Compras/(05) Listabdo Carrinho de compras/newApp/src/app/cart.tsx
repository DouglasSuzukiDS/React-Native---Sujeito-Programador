import { FlatList, StyleSheet, Text, View } from "react-native";
import { useCart } from "../contexts/cart";
import { CartItem } from "../components/cartItem";

export default function Cart() {
   const { cart, addItemCart, removeCartItem } = useCart()

   return (
      <View style={styles.container}>
         <FlatList
            data={cart}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => String(item.id)}
            ListEmptyComponent={() => <Text>Nenhum item no carrinho ...</Text>}
            renderItem={({ item }) => (
               <CartItem
                  data={item}
                  addAmount={() => addItemCart(item)}
                  removeAmount={() => removeCartItem(item)} />
            )}
         />
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#FAFAFA',
      paddingStart: 14,
      paddingEnd: 14,
      paddingTop: 14,
   },
});