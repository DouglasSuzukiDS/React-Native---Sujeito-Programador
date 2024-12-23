import { useState } from 'react';
import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [feed, setFeed] = useState<Person[]>([
    { id: 1, name: 'Nick', age: 20, email: 'nick@email.com' },
    { id: 2, name: 'James', age: 30, email: 'james@email.com' },
    { id: 3, name: 'Tonho', age: 40, email: 'tonho@email.com' },
    { id: 4, name: 'Mike', age: 50, email: 'mike@email.com' },
    { id: 5, name: 'Tonhao', age: 60, email: 'tonhao@email.com' },
  ])

  return (
    <View style={styles.container}>
      <FlatList
        data={feed}
        renderItem={item => <Pessoa data={item.item} />}
        keyExtractor={item => (item.id).toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24,
  },

  pessoaArea: {
    backgroundColor: '#222',
    height: 250,
    marginBottom: 15,
  },

  pessoa: {
    color: '#FFF',
    fontSize: 20
  },
});

type Person = {
  id: number
  name: string
  age: number
  email: string
}

type Data = {
  data: Person
}

export function Pessoa({ data }: Data) {
  return (
    <View style={styles.pessoaArea}>
      <Text style={styles.pessoa}>Nome: {data.name}</Text>
      <Text style={styles.pessoa}>Idade: {data.age}</Text>
      <Text style={styles.pessoa}>Email: {data.email}</Text>
    </View>
  )
}
