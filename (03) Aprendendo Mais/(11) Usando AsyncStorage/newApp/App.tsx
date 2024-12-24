import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [nome, setNome] = useState('')
  const [input, setInput] = useState('')

  const gravarNome = () => {
    setNome(input)
    setInput('')
    Keyboard.dismiss() // Fecha o teclado

    alert('Gravado com Sucesso')
  }

  // ComponentDidMount (useEffect) => Quando o componente é montado na tela
  const pegarNome = async () => {
    await AsyncStorage.getItem('nome')
      .then(value => {
        if (value !== null) {
          setNome(value);
        }
      })
  }
  useEffect(() => {
    pegarNome()
  }, [])

  // ComponentDidUpdate (useEffect) => Quando o componente é atualizado
  const setarNome = async () => {
    if (nome !== null) {
      await AsyncStorage.setItem('nome', nome)
    }
  }

  useEffect(() => {
    setarNome()
  }, [nome])

  return (
    <View style={styles.container}>
      <View style={styles.viewInput}>
        <TextInput
          value={input}
          onChangeText={text => setInput(text)}
          style={styles.input}
          underlineColorAndroid='transparent' />

        <TouchableOpacity onPress={gravarNome}>
          <Text style={styles.botao}>+</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.nome}>{nome}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24,
    alignItems: 'center',
  },

  viewInput: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  input: {
    width: 350,
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    padding: 10
  },

  botao: {
    backgroundColor: '#222',
    color: '#FFF',
    height: 40,
    padding: 10,
    marginLeft: 4
  },

  nome: {
    marginTop: 30,
    fontSize: 20,
    textAlign: 'center'
  }
})