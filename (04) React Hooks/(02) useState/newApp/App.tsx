import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
export default function App() {
  const [nome, setNome] = useState('Tonho')
  const [input, setInput] = useState('')

  const alterarNome = () => {
    setNome(input)
    setInput('')
  }

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