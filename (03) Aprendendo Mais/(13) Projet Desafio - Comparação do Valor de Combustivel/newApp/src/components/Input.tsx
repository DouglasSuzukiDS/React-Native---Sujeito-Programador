import { Dispatch, SetStateAction } from "react"
import { StyleSheet, Text, TextInput, View } from "react-native"

type Props = {
   label: string
   placeholder: string
   value: string
   onChangeText: Dispatch<SetStateAction<string>>
}
export const Input = ({ label, placeholder, value, onChangeText }: Props) => {
   return (
      <View style={styles.container}>
         <Text style={styles.label}>{label}</Text>

         <TextInput
            style={styles.input}
            placeholder={placeholder}
            value={value}
            keyboardType="numeric"
            onChangeText={price => onChangeText(price)}
         />
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      width: "100%",
   },

   label: {
      fontSize: 16,
      color: '#FFF',
      marginBottom: 8,
   },

   input: {
      width: '100%',
      height: 40,
      backgroundColor: '#FFF',
      borderRadius: 8,
      padding: 10,
      marginBottom: 16
   }
})