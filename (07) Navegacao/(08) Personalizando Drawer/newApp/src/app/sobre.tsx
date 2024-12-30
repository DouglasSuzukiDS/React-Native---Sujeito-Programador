import { useLayoutEffect } from "react";
import { Button, StyleSheet, Text, View } from "react-native"

export default function Sobre() {


   return (
      <View style={styles.container}>
         <Text>Página Sobre</Text>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8
   },
})