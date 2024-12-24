import { Dispatch, SetStateAction, useState } from "react"
import { Button, Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native"

type Props = {
   alcoholPrice: string
   gasPrice: string
   result: number
   showModal: boolean
   setShowModal: Dispatch<SetStateAction<boolean>>
}
export const CustomModal = ({ alcoholPrice, gasPrice, result, showModal, setShowModal }: Props) => {
   /* Desafio: Comparação de Valores dos Combustível
     - Como calcular:
       - Dividimos o valor do Listro do álcool pelo da gasolina,
       - Quando o resultado é menos que 0.7 a recomendação é abastacer com álcool.
       - Quando o resultado é maior que 0.7 a recomendação é abastecer com gasolina.
       
     Exemplo: Se o álcool custa R$ 3.29 e a gasolina R$ 4,92, o resultado da divisão do primeiro pelo segundo é menor que 0.7. Portanto, a recomendação é abastecer com álcool.
   */

   return (
      <View style={styles.modalView}>
         <Image source={require('../img/gas.png')} />

         <Text style={styles.modalTitle}>Compensa usar {result <= 0.7 ? 'Álcool' : 'Gasolina'}</Text>

         <View style={styles.modalDescription}>
            <Text style={[styles.modalText, styles.modalSubtitle]}>Com os preços:</Text>

            <Text style={styles.modalText}>Álcool: R$: {parseFloat(alcoholPrice)}</Text>

            <Text style={styles.modalText}>Gasolina: R$: {parseFloat(gasPrice).toFixed(2)}</Text>

         </View>

         <Pressable
            style={styles.modalBtn}
            onPress={() => setShowModal(!showModal)}>
            <Text style={styles.modalBtnText}>Calcular novamente</Text>
         </Pressable>
      </View>
   )
}

const styles = StyleSheet.create({
   modalView: {
      width: '100%',
      alignItems: 'center',
      backgroundColor: '#292929',
      borderRadius: 15,
   },

   modalTitle: {
      textAlign: 'center',
      color: '#37C061',
      fontSize: 28,
      fontWeight: 'bold',
      marginTop: 24,
      marginBottom: 48,
   },

   modalDescription: {
      gap: 8
   },

   modalSubtitle: {
      fontSize: 24,
      fontWeight: 'bold',
   },

   modalText: {
      color: '#FFF',
      fontSize: 18,
      textAlign: 'center',
   },

   modalBtn: {
      borderWidth: 1,
      borderColor: '#FF512E',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 8,
      marginTop: 24
   },

   modalBtnText: {
      color: '#FF512E',
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
   }
})