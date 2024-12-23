import { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Person, PersonItem } from './src/components/PersonItem';

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
        renderItem={item => <PersonItem data={item.item} />}
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
})