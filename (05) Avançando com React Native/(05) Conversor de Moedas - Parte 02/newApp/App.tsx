import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { PickerItem } from './src/Picker';
import { useEffect, useState } from 'react';
import { api } from './src/services/api';

export default function App() {
  // https://economia.awesomeapi.com.br/json/all

  type CurrencyKey = {
    key: string,
    label: string,
    value: string
  }

  const [moedas, setMoedas] = useState<CurrencyKey[]>([])
  const [loading, setLoading] = useState(true)

  const loadMoedas = async () => {
    const response = await api.get('/all')

    let arrayMoedas: CurrencyKey[] = []

    Object.keys(response.data).map(key => {
      arrayMoedas.push({
        key: key,
        label: key,
        value: key
      })

      setMoedas(arrayMoedas)
      setLoading(false)
    })
  }
  useEffect(() => {
    loadMoedas()
  }, [])

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator color={'#FFF'} size={'large'} />
      </View>
    )
  } else {
    return (
      < View style={styles.container} >
        <View style={styles.areaMoeda}>
          <Text style={styles.titulo}>Seleciona sua moeda</Text>

          <PickerItem />
        </View>
      </View >
    );
  }


}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#101215',
  },

  container: {
    flex: 1,
    marginTop: 48,
    backgroundColor: '#101215',
    paddingTop: 40,
    alignItems: 'center'
  },

  areaMoeda: {
    backgroundColor: '#F9F9F9',
    width: '90%',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    padding: 8
  },

  titulo: {
    fontSize: 16,
    color: '#000',
    fontWeight: '500',
    paddingLeft: 5,
    paddingRight: 5
  },
})