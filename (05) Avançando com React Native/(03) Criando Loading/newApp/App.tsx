import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import { api } from './src/services/api';
import { useEffect, useState } from 'react';
import { Film, FilmesItem } from './src/components/filmes';
export default function App() {
  // https://sujeitoprogramador.com/r-api/?api=filmes
  const [filmes, setFilmes] = useState<Film[]>([])
  const [loading, setLoading] = useState(true)

  const loadFilms = async () => {
    const response = await api.get('/r-api/?api=filmes')
    setFilmes(response.data)
    setLoading(false)
  }

  useEffect(() => {
    loadFilms()
  }, [])

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator
          color={'#121212'}
          size={48} />
      </View>
    )
  } else {

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

}

const styles = StyleSheet.create({
  loadingContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },

  container: {
    flex: 1,
    marginTop: 48,
  },
})