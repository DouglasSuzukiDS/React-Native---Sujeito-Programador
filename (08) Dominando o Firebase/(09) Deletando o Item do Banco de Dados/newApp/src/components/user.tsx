import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { User } from "../app"
import { db } from "../firebaseConfig"
import { deleteDoc, doc } from "firebase/firestore"

type Props = {
   data: User
}
export const UserItem = ({ data }: Props) => {
   const handleDeleteItem = async () => {
      const docRef = doc(db, 'users', data.id)

      await deleteDoc(docRef)
         .then(() => alert('Usuário deletado com sucesso'))
         .catch(err => console.log(err))
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