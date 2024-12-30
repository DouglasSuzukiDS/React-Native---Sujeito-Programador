import { DrawerActions } from "@react-navigation/native";
import { router, useNavigation } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Detalhes() {
   const navigation = useNavigation()
   return (
      <View style={styles.container}>
         <Text>Detalhes</Text>

         <Button title="Ir para Home" onPress={() => router.navigate('/')} />

         <Button title="Abrir Drawer" onPress={() => navigation.dispatch(DrawerActions.openDrawer())} />
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      gap: 16
   },
})