import { Dispatch, SetStateAction } from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { Film } from "./filmes"

type Props = {
   voltar: () => void
   data: Film
}
export const Detalhes = ({ voltar, data }: Props) => {
   return (
      <View style={styles.container}>
         <View style={styles.modalContainer}>
            <TouchableOpacity
               style={styles.btnVoltar}
               onPress={voltar}>
               <Text style={styles.modalText}>
                  Voltar
               </Text>
            </TouchableOpacity>

            <Text style={styles.titulo}>
               {data.nome}
            </Text>

            <Text style={styles.sinopse} >
               Sinopse:
            </Text>

            <Text style={styles.descricao}>
               {data.sinopse}
            </Text>
         </View>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      marginLeft: 10,
      marginRight: 10,
      justifyContent: 'flex-end',
      alignItems: 'center',
   },

   modalContainer: {
      height: '80%',
      backgroundColor: '#121212',
      borderTopLeftRadius: '5px',
      borderTopRightRadius: '5px',
   },

   btnVoltar: {
      backgroundColor: '#E52246',
      padding: 10,
      borderTopLeftRadius: 5,
      borderTopRightRadius: 5
   },

   titulo: {
      textAlign: 'center',
      color: '#FFF',
      padding: 10,
      fontSize: 28,
      fontWeight: 'bold',
   },

   sinopse: {
      color: '#FFF',
      fontSize: 18,
      marginBottom: 8,
      marginLeft: 8
   },

   descricao: {
      color: '#FFF',
      marginLeft: 10,
      marginRight: 10
   },

   modalText: {
      color: '#FFF',
      fontSize: 16
   }
})