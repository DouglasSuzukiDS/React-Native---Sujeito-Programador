import { TouchableOpacity, View } from "react-native"
import { Text } from "react-native"
import { StyleSheet } from "react-native"
import { ProductType } from "../../types/product"

type Props = {
   data: ProductType
   addToCart: () => void
}
export const Product = ({ data, addToCart }: Props) => {

   return (
      <View style={styles.container}>
         <View>
            <Text style={styles.title}>{data.name}</Text>
            <Text style={styles.price}>R$ {data.price}</Text>
         </View>

         <TouchableOpacity
            style={styles.buttonAdd}
            onPress={addToCart}>
            <Text style={styles.buttonText}>+</Text>
         </TouchableOpacity>
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
      paddingTop: 14,
      paddingBottom: 14,
      flexDirection: 'row',
      alignContent: 'center',
      justifyContent: 'space-between',
   },

   title: {
      fontWeight: 'bold'
   },

   price: {

   },

   buttonAdd: {
      paddingStart: 12,
      paddingEnd: 12,
      backgroundColor: '#168FFF',
      paddingTop: 6,
      paddingBottom: 6,
      borderRadius: 2,
      alignItems: 'center',
      justifyContent: 'center'
   },

   buttonText: {

   }
})