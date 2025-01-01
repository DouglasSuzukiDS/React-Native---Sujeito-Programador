import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { db } from '../firebaseConfig';
import { addDoc, collection, doc, getDoc, onSnapshot, setDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';

export default function App() {
   const [nome, setNome] = useState('')
   const [idade, setIdade] = useState('')
   const [cargo, setCargo] = useState('')

   const [showForm, setShowForm] = useState(true)

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
         .catch(err => console.log(err)) */

      // Adiciona de forma em que o 'ID' do documento sera de forma dinamica   
      await addDoc(collection(db, 'users'), {
         nome: nome,
         idade: idade,
         cargo: cargo
      })
         .then(() => {
            alert('Cadastrado com sucesso.')
            setNome('')
            setIdade('')
            setCargo('')
         })
         .catch((err) => console.log(err))
   }

   const handleToogle = () => {
      setShowForm(!showForm)
   }

   useEffect(() => {
      // getData()
   }, [])

   return (
      <View style={styles.container}>
         {showForm && (
            <View>
               <Text style={styles.label}>Nome: </Text>
               <TextInput
                  style={styles.input}
                  placeholder='Digite seu nome ...'
                  value={nome}
                  onChangeText={text => setNome(text)}
               />

               <Text style={styles.label}>Idade: </Text>
               <TextInput
                  style={styles.input}
                  placeholder='Digite sua idade ...'
                  value={idade}
                  onChangeText={text => setIdade(text)}
               />

               <Text style={styles.label}>Cargo: </Text>
               <TextInput
                  style={styles.input}
                  placeholder='Digite seu cargo ...'
                  value={cargo}
                  onChangeText={text => setCargo(text)}
               />

               <TouchableOpacity
                  style={styles.button}
                  onPress={handleRegister}>
                  <Text style={styles.buttonText}>Adicionar</Text>
               </TouchableOpacity>
            </View>
         )}

         <TouchableOpacity
            style={{ marginTop: 8 }}
            onPress={handleToogle}>
            <Text style={{ textAlign: 'center', color: '#000' }}>
               {showForm ? 'Esconder Formulário' : 'Mostrar Formulário'}
            </Text>
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
      marginBottom: 8
   },

   button: {
      backgroundColor: '#000',
   },

   buttonText: {
      padding: 8,
      color: '#FFF',
      textAlign: 'center',
   }
})