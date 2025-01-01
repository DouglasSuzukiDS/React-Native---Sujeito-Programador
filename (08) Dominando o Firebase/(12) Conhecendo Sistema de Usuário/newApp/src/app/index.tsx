import { FlatList, Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import FormUsers from './FormUsers';
import { auth } from '../firebaseConfig';
import { createUserWithEmailAndPassword } from '@firebase/auth';


export default function App() {
   const handleCreateUser = async () => {
      const user = await createUserWithEmailAndPassword(auth, 'email@test.com', '123123')

      console.log(user)
   }

   return (
      <View style={styles.container}>
         {/* <FormUsers /> */}
         <Text style={styles.label}>Email: </Text>
         <TextInput
            style={styles.input}
            placeholder='Digite seu email ...' />

         <Text style={styles.label}>Senha: </Text>
         <TextInput
            style={styles.input}
            placeholder='Digite sua senha ...' />

         <TouchableOpacity
            style={styles.button}
            onPress={handleCreateUser}>
            <Text style={styles.buttonText}>Criar uma conta</Text>
         </TouchableOpacity>
      </View>
   );

}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      marginTop: 40,
      marginHorizontal: 8
   },

   label: {
      color: '#000',
      fontSize: 18,
      marginBottom: 4,
   },

   input: {
      borderWidth: 1,
      marginBottom: 16
   },

   button: {
      backgroundColor: '#000',
      padding: 8
   },

   buttonText: {
      color: '#FFF',
      textAlign: 'center',
   }
})