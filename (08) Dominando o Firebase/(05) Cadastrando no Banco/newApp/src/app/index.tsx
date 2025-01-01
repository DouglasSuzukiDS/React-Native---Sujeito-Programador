import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { db } from '../firebaseConfig';
import { addDoc, collection, doc, getDoc, onSnapshot, setDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';

export default function App() {
   const [nome, setNome] = useState('')

   const getData = async () => {
      const docRef = doc(db, 'users', '1') // Conexão, Tabela, Usuario Id

      // snapShot => Busca uma vez e encerra a conexão
      // onSnapShot => Monitora as mudanças do banco de dados 

      /*await getDoc(docRef)
         .then(snapShot => {
            setNome(snapShot.data()?.nome)
         })
         .catch(err => console.log(err))*/

      onSnapshot(doc(db, 'users', '1'), doc => {
         setNome(doc.data()?.nome)
      })
   }

   const handleRegister = async () => {
      // Adiciona de forma manual
      /*await setDoc(doc(db, 'users', '3'), {
         nome: 'Nick',
         idade: 30,
         cargo: 'Backend'
      })
         .then(() => {
            alert('Registrado com sucesso')
         })
         .catch(err => console.log(err))*/

      // Adiciona de forma em que o 'ID' do documento sera de forma dinamica   
      await addDoc(collection(db, 'users'), {
         nome: 'Tonhao',
         idade: 40,
         cargo: 'Designer'
      })
   }

   useEffect(() => {
      getData()
   }, [])

   return (
      <View style={styles.container}>
         <Text>Hello World</Text>
         <Text>{nome}</Text>

         <TouchableOpacity
            style={styles.button}
            onPress={handleRegister}>
            <Text style={styles.buttonText}>Adicionar</Text>
         </TouchableOpacity>
      </View>
   );

}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      marginTop: 24,
      justifyContent: 'center',
      alignItems: 'center',
   },

   button: {
      backgroundColor: '#000',
   },

   buttonText: {
      padding: 8,
      color: '#FFF',
   }
})