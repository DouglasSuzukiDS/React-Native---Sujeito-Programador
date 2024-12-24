import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useMemo, useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
export default function App() {
  const [nome, setNome] = useState('')
  const [input, setInput] = useState('')

  const alterarNome = () => {
    setNome(input)
    setInput('')
  }

  const saveStorage = async () => {
    await AsyncStorage.setItem('nome', nome)
  }

  const getStorage = async () => {
    const nomeStorage = await AsyncStorage.getItem('nome')

    if (nomeStorage !== null) {
      setNome(nomeStorage)
    }
  }

  const letrasNome = useMemo(() => {
    alert(nome)
  }, [nome])

  useEffect(() => {
    getStorage()
  }, [])

  useEffect(() => {
    saveStorage()
  }, [nome])

  return (
    <View style={styles.container}>
      <TextInput
        placeholder='Seu nome'
        value={input}
        onChangeText={txt => setInput(txt)}
      />

      <TouchableOpacity
        style={styles.btn}
        onPress={alterarNome}>
        <Text style={styles.btnText}>Alterar nome</Text>
      </TouchableOpacity>

      <Text style={styles.text}>{nome}</Text>

      <Text style={styles.text}>Tem {nome.length} letras</Text>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 48,
  },

  btn: {
    width: '100%',
    backgroundColor: '#222',
    alignItems: 'center',
  },

  btnText: {
    color: '#FFF',
    fontSize: 20,
  },

  text: {
    fontSize: 35,
  }
})