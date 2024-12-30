import { StyleSheet, Text, View } from "react-native"

export const Home = () => {
   return (
      <View style={styles.container}>
         <Text>Home</Text>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
   },
})