import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "../../components/Header";
import { Background, Input, SubmitButton, SubmitText } from "./styles/new-styles";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { Keyboard } from "react-native";
import { useState } from "react";

export default function New() {
   const [labelInput, setLabelInput] = useState('')
   const [valueInput, setValueInput] = useState('')
   const [value, setValue] = useState('')

   return (
      // Quando se clica fora 'da interface' realiza uma ação. No caso abaixo, fecha o Keyboard
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
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

               <SubmitButton>
                  <SubmitText>Registrar</SubmitText>
               </SubmitButton>
            </SafeAreaView>
         </Background>
      </TouchableWithoutFeedback>
   )
}