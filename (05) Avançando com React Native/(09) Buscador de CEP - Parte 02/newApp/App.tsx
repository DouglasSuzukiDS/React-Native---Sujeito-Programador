import { Keyboard, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { api } from './src/services/api';
import { useRef, useState } from 'react';

export type CEP = {
  cep: number,
  logradouro: string
  bairro: string
  localidade: string
  uf: string
}
export default function App() {
  // https://viacep.com.br/ws/CEP/json  04087030
  const [cep, setCep] = useState('')
  const [cepUser, setCepUser] = useState<CEP | null>(null)

  const inputRef = useRef<TextInput>(null)

  const buscar = async () => {
    if (cep === '') {
      alert('CEP inválido!')
      setCep('')
      return
    }

    try {
      const response = await api.get(`/${cep}/json`)

      setCepUser(response.data)

      Keyboard.dismiss()
    } catch (error) {
      console.log(error)
    }

  }

  const limpar = () => {
    setCep('')
    inputRef.current && inputRef.current.focus()
    setCepUser(null)
  }

  return (
    <SafeAreaView style={styles.container} >
      <View style={{ alignItems: 'center' }}>
        <Text style={styles.text}>Digite o CEP desejado</Text>

        <TextInput
          style={styles.input}
          placeholder='Ex: 12345-678'
          value={cep}
          onChangeText={num => setCep(num)}
          keyboardType='numeric'
          ref={inputRef}
        />
      </View>

      <View style={styles.areaBtn}>
        <TouchableOpacity
          style={[styles.botao, { backgroundColor: '#1D75CD' }]}
          onPress={buscar}
        >
          <Text style={styles.botaoText}>Buscar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.botao, { backgroundColor: '#CD3E1D' }]}
          onPress={limpar}>
          <Text style={styles.botaoText}>Limpar</Text>
        </TouchableOpacity>
      </View>

      {cepUser &&
        <View style={styles.resultado}>
          <Text style={styles.itemText}>CEP: {cepUser.cep}</Text>
          <Text style={styles.itemText}>Logradouro: {cepUser.logradouro}</Text>
          <Text style={styles.itemText}>Bairro: {cepUser.bairro}</Text>
          <Text style={styles.itemText}>Cidade: {cepUser.localidade}</Text>
          <Text style={styles.itemText}>Estado: {cepUser.uf}</Text>
        </View>
      }

    </SafeAreaView>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24,
    backgroundColor: '#101215',
  },

  text: {
    marginTop: 25,
    marginBottom: 15,
    fontSize: 25,
    fontWeight: 'bold',
    color: '#FFF'
  },

  input: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 5,
    width: '90%',
    padding: 10,
    fontSize: 18
  },

  areaBtn: {
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginTop: 15,
    width: '100%',
  },

  botao: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    borderRadius: 5,
    backgroundColor: '#F00'
  },

  botaoText: {
    fontSize: 22,
    color: '#FFF'
  },

  resultado: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15
  },

  itemText: {
    fontSize: 22,
    color: '#FFF',
  }
})