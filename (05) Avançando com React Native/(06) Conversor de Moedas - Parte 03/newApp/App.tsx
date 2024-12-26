import { ActivityIndicator, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { PickerItem } from './src/Picker';
import { useEffect, useState } from 'react';
import { api } from './src/services/api';


export type CurrencyKey = {
  key: string,
  label: string,
  value: string
}
export default function App() {
  // https://economia.awesomeapi.com.br/json/all

  const [loading, setLoading] = useState(true)
  const [moedas, setMoedas] = useState<CurrencyKey[]>([])
  const [moedaSelecionada, setMoedaSelecionada] = useState<string>('')

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
      setMoedaSelecionada(arrayMoedas[0].key)
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

          <PickerItem
            moedas={moedas}
            moedaSelecionada={moedaSelecionada}
            onChange={(moeda: string) => setMoedaSelecionada(moeda)} />
        </View>

        <View style={styles.areaValor}>
          <Text style={styles.titulo}>Digite um valor para converter em R$</Text>

          <TextInput
            keyboardType='numeric'
            style={styles.input}
            placeholder="EX: 1.50"
          />
        </View>

        <TouchableOpacity style={styles.botaoArea}>
          <Text style={styles.botaoTexto}>
            Converter
          </Text>
        </TouchableOpacity>
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
    padding: 8,
    marginBottom: 1
  },

  titulo: {
    fontSize: 16,
    color: '#000',
    fontWeight: '500',
    paddingLeft: 5,
    paddingRight: 5
  },

  areaValor: {
    width: '90%',
    backgroundColor: '#F9F9F9',
    paddingVertical: 8,
  },

  input: {
    width: '100%',
    padding: 8,
    fontSize: 18,
    color: '#000',
  },

  botaoArea: {
    width: '90%',
    backgroundColor: '#FB4B57',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },

  botaoTexto: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold'
  }
})