import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { User } from "../app"

type Props = {
   data: User
}
export const UserItem = ({ data }: Props) => {
   const handleDeleteItem = () => {

   }

   return (
      <View style={styles.container}>
         <Text style={styles.item}>Nome: {data.nome}</Text>
         <Text style={styles.item}>Idade: {data.idade}</Text>
         <Text style={styles.item}>Cargo: {data.cargo}</Text>

         <TouchableOpacity
            style={styles.button}
            onPress={handleDeleteItem}>
            <Text style={styles.buttonText}>Deletar</Text>
         </TouchableOpacity>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      backgroundColor: '#F0F0F0',
      padding: 8,
      borderRadius: 4,
      marginBottom: 16,
   },

   item: {
      color: '#000',
      fontSize: 16
   },

   button: {
      backgroundColor: '#B3261A',
      alignSelf: 'flex-start',
      padding: 4,
      borderRadius: 4,
      marginTop: 16
   },

   buttonText: {
      color: '#FFF',
      textAlign: 'center',
      paddingHorizontal: 8
   }
})