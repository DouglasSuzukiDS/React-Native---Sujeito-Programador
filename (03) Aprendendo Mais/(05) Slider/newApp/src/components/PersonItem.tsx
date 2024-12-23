import { StyleSheet, Text, View } from "react-native";

export type Person = {
   id: number
   name: string
   age: number
   email: string
}

export type Data = {
   data: Person
}

export function PersonItem({ data }: Data) {
   return (
      <View style={styles.pessoaArea}>
         <Text style={styles.textoPessoa}>Nome: {data.name}</Text>
         <Text style={styles.textoPessoa}>Idade: {data.age}</Text>
         <Text style={styles.textoPessoa}>Email: {data.email}</Text>
      </View>
   )
}

const styles = StyleSheet.create({
   pessoaArea: {
      backgroundColor: '#222',
      height: 250,
      marginBottom: 15,
   },

   textoPessoa: {
      color: '#FFF',
      fontSize: 20
   },
})
