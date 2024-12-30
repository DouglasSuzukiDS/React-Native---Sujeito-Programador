import { router, useNavigation } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Detalhes() {

   return (
      <View>
         <Text>Detalhes</Text>

         <Button title="Ir para Home" onPress={() => router.navigate('/')} />
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