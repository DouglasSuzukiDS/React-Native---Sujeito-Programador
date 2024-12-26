import { Picker } from "@react-native-picker/picker"
import { StyleSheet, View } from "react-native"
import { CurrencyKey } from "../../App"

type Props = {
   moedas: CurrencyKey[]
   moedaSelecionada: string
   onChange: (moeda: string) => void
}

export const PickerItem = ({ moedas, moedaSelecionada, onChange }: Props) => {
   const moedasItem = moedas.map((item, index) => {
      return (
         <Picker.Item key={index} label={item.key} value={item.key} />
      )
   })

   return (
      <Picker
         selectedValue={moedaSelecionada}
         onValueChange={valor => onChange(valor)}>
         {moedasItem}
      </Picker>
   )
}

const styles = StyleSheet.create({

})