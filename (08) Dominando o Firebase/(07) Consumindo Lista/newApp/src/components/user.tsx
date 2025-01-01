import { StyleSheet, Text, View } from "react-native"
import { User } from "../app"

type Props = {
   data: User
}
export const UserItem = ({ data }: Props) => {
   return (
      <View style={styles.container}>
         <Text>Nome: {data.nome}</Text>
         <Text>Idade: {data.idade}</Text>
         <Text>Cargo: {data.cargo}</Text>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      backgroundColor: '#F0F0F0',
      padding: 8,
      borderRadius: 4,
      marginBottom: 16,
   }
})