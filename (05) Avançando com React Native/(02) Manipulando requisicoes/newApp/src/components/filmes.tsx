import { useState } from "react"
import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { Detalhes } from "./Detalhes"

export type Film = {
   id: number
   nome: string
   sinopse: string
   foto: string
}

type Props = {
   data: Film
}
export const FilmesItem = ({ data }: Props) => {
   const [modalVisible, setModalVisible] = useState(false)

   return (
      <View>
         <View style={styles.card}>
            <Text style={styles.titulo}>{data.nome}</Text>

            <Image
               source={{ uri: data.foto }}
               style={styles.capa} />

            <View style={styles.areaBotao}>
               <TouchableOpacity
                  style={styles.botao}
                  onPress={() => setModalVisible(true)}>
                  <Text
                     style={styles.textoBtn}>Detalhes</Text>
               </TouchableOpacity>
            </View>

            <Modal
               animationType="slide"
               visible={modalVisible}
               transparent={true}>
               <Detalhes
                  voltar={() => setModalVisible(false)}
                  data={data}
               />
            </Modal>
         </View>
      </View>
   )
}

const styles = StyleSheet.create({
   card: {
      backgroundColor: '#FFF',
      margin: 5,
      elevation: 2
   },

   titulo: {
      padding: 15,
      fontSize: 18,
      fontWeight: 'bold'
   },

   capa: {
      height: 250,
      zIndex: 2
   },

   areaBotao: {
      alignItems: 'flex-end',
      marginTop: -45,
      zIndex: 9
   },

   botao: {
      width: 100,
      backgroundColor: '#09A6ff',
      opacity: 1,
      padding: 8,
      borderTopLeftRadius: 5,
      borderBottomLeftRadius: 5,

   },

   textoBtn: {
      color: '#FFF',
      fontWeight: 'bold',
      fontSize: 16,
      textAlign: 'center'
   }
})
