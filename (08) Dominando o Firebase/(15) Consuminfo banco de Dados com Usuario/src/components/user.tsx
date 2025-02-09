import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { db } from "../firebaseConfig"
import { deleteDoc, doc } from "firebase/firestore"
import { User } from "../app/FormUsers"

type Props = {
   data: User
   handleEdit: (user: User) => void
}
export const UserItem = ({ data, handleEdit }: Props) => {
   const handleDeleteItem = async () => {
      const docRef = doc(db, 'users', data.id)

      await deleteDoc(docRef)
         .then(() => alert('Usuário deletado com sucesso'))
         .catch(err => console.log(err))
   }

   const handleEditUser = async () => {
      handleEdit(data)
   }

   return (
      <View style={styles.container}>
         <Text style={styles.item}>Nome: {data.nome}</Text>
         <Text style={styles.item}>Idade: {data.idade}</Text>
         <Text style={styles.item}>Cargo: {data.cargo}</Text>

         <View style={styles.viewButton}>
            <TouchableOpacity
               style={styles.button}
               onPress={handleDeleteItem}>
               <Text style={styles.buttonText}>Deletar Usuário</Text>
            </TouchableOpacity>

            <TouchableOpacity
               style={styles.buttonEdit}
               onPress={handleEditUser}>
               <Text style={styles.buttonText}>Editar Usuário</Text>
            </TouchableOpacity>
         </View>
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

   viewButton: {
      flexDirection: 'row',
      gap: 16,
   },

   button: {
      backgroundColor: '#B3261A',
      alignSelf: 'flex-start',
      padding: 4,
      borderRadius: 4,
      marginTop: 16
   },

   buttonEdit: {
      backgroundColor: '#000',
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