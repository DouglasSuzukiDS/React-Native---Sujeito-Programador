import { Button, StyleSheet, Text, View } from "react-native";

export default function Contato() {

   return (
      <View style={styles.container}>
         <Text>Página de Contato</Text>

      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
   },
})