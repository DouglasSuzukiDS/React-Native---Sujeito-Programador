import { FlatList, Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import FormUsers from './FormUsers';
import { auth } from '../firebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@firebase/auth';
import { useState } from 'react';

type AuthUser = {
   email: string,
   uid: string
}

export default function App() {
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')

   const [authUser, setAuthUser] = useState<AuthUser | null>(null)

   const handleLogin = async () => {
      await signInWithEmailAndPassword(auth, email, password)
         .then(user => {
            console.log('Usuário logado')
            console.log(user)

            setAuthUser({
               email: user.user.email!,
               uid: user.user.uid
            })


            Keyboard.dismiss() // Fecha o teclado quando o login for realizado
         })
         .catch(err => {
            console.log(err)
            if (err.code === 'auth/missing-password') {
               console.log('A senha é obrigatória')
               return
            }

            console.log(err.code)
         })

   }

   const handleCreateUser = async () => {
      const user = await createUserWithEmailAndPassword(auth, email, password)

      console.log(user)
   }

   return (
      <View style={styles.container}>
         {/* <FormUsers /> */}
         <Text>Usuário Logado: { authUser && authUser.email }</Text>

         <Text style={styles.label}>Email: </Text>
         <TextInput
            style={styles.input}
            placeholder='Digite seu email ...'
            value={email}
            onChangeText={text => setEmail(text)} />

         <Text style={styles.label}>Senha: </Text>
         <TextInput
            style={styles.input}
            placeholder='Digite sua senha ...'
            value={password}
            onChangeText={text => setPassword(text)}
            secureTextEntry={true} />

         <TouchableOpacity
            style={[styles.button, { marginBottom: 8 }]}
            onPress={handleLogin}>
            <Text style={styles.buttonText}>Fazer Login</Text>
         </TouchableOpacity>

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