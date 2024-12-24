import { Dispatch, SetStateAction } from "react"
import { Button, StyleSheet, Text, View } from "react-native"

type Props = {
   setModalVisible: Dispatch<SetStateAction<boolean>>
}

export const ModalEntrar = ({ setModalVisible }: Props) => {
   const sair = (visible: boolean) => {
      setModalVisible(visible);
   }

   return (
      <View style={styles.modalView}>
         <Text style={styles.modalText}>Seja Bem-Vindo</Text>

         <Button title='Sair' onPress={() => sair(false)} />
      </View>
   )
}

const styles = StyleSheet.create({
   modalView: {
      width: '100%',
      height: 350,
      backgroundColor: '#292929',
      borderRadius: 15,
   },

   modalText: {
      color: '#FFF',
      fontSize: 25,
      textAlign: 'center',
      padding: 20
   }
})