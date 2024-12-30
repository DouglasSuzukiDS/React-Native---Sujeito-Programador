import { router } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Home() {

   return (
      <View>
         <Text>Home</Text>

         <Button title="Ir para Detalhes" onPress={() => router.navigate('/detalhes')} />
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