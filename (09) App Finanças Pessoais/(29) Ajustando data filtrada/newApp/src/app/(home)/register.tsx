import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "../../components/Header";
import { Background, Input, SubmitButton, SubmitText } from "./styles/register";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { Alert, Keyboard } from "react-native";
import { useState } from "react";
import { RegisterTypes } from "../../components/RegisterTypes";
import { api } from "../../services/api";
import { format } from "date-fns";
import { router } from "expo-router";

export default function Register() {
   const [labelInput, setLabelInput] = useState('')
   const [valueInput, setValueInput] = useState('')
   const [type, setType] = useState('receita')

   const handleSubmit = async () => {
      Keyboard.dismiss()

      if (isNaN(parseFloat(valueInput)) || type === null) {
         alert('Preencha todos os campos.')
         return
      }

      Alert.alert(
         'Confirmando dados',
         `Tipo: ${type} - Valor: ${parseFloat(valueInput)}`,
         [
            {
               text: 'Cancelar',
               style: 'cancel'
            },

            {
               text: 'Continuar',
               onPress: () => handleAdd()
            }
         ]
      )
   }

   const handleAdd = async () => {
      Keyboard.dismiss()

      const response = await api.post('/receive', {
         description: labelInput,
         value: Number(valueInput),
         type,
         date: format(new Date(), 'dd/MM/yyyy')
      })

      setLabelInput('')
      setValueInput('')

      router.navigate('/')
   }

   return (
      // Quando se clica fora 'da interface' realiza uma ação. No caso abaixo, fecha o Keyboard
      // <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}></TouchableWithoutFeedback>
      <Background>
         <Header title="Registrando" />

         <SafeAreaView style={{ marginTop: 14, alignItems: 'center' }}>
            <Input
               placeholder='Descrição desse registro'
               value={labelInput}
               onChangeText={(text: string) => setLabelInput(text)}
            />

            <Input
               placeholder='Valor desejado'
               keyboardType='numeric'
               value={valueInput}
               onChangeText={(text: string) => setValueInput(text)}
            />

            <RegisterTypes
               type={type}
               sendTypeChanged={item => setType(item)} />

            <SubmitButton onPress={handleSubmit}>
               <SubmitText>Registrar</SubmitText>
            </SubmitButton>
         </SafeAreaView>
      </Background>

   )
}