import { FlatList, StyleSheet, Text, View } from 'react-native';
import { api } from './src/services/api';
import { useEffect, useState } from 'react';
import { Film, FilmesItem } from './src/components/filmes';
export default function App() {
  // https://sujeitoprogramador.com/r-api/?api=filmes
  const [filmes, setFilmes] = useState<Film[]>([])

  const loadFilms = async () => {
    const response = await api.get('/r-api/?api=filmes')
    setFilmes(response.data)
  }

  useEffect(() => {
    loadFilms()
  }, [])

  return (
    <View style={styles.container}>
      <FlatList
        data={filmes}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <FilmesItem data={item} />}
      />
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 48,
  },
})