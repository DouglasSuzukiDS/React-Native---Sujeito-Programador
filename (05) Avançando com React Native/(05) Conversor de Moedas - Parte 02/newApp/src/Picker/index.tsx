import { Picker } from "@react-native-picker/picker"
import { StyleSheet, View } from "react-native"

export const PickerItem = () => {
   return (
      <Picker>
         <Picker.Item key={0} label="BTC" value="BTC" />
      </Picker>
   )
}

const styles = StyleSheet.create({

})