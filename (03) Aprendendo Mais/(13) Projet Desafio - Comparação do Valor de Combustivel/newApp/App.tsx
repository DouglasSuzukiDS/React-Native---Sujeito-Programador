import React from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { CustomModal } from './src/components/Modal';
import { useState } from 'react';
import { Input } from './src/components/Input';
export default function App() {
  /* Desafio: Comparação de Valores dos Combustível
    - Como calcular:
      - Dividimos o valor do Listro do álcool pelo da gasolina,
      - Quando o resultado é menos que 0.7 a recomendação é abastacer com álcool.
      - Quando o resultado é maior que 0.7 a recomendação é abastecer com gasolina.
      
    Exemplo: Se o álcool custa R$ 3.29 e a gasolina R$ 4,92, o resultado da divisão do primeiro pelo segundo é menor que 0.7. Portanto, a recomendação é abastecer com álcool.
  */

  const [alcoholPrice, setAlcoholPrice] = useState('')
  const [gasPrice, setGasPrice] = useState('')
  const [result, setResult] = useState(0)
  const [showModal, setShowModal] = useState(true)

  const calculate = () => {
    if (alcoholPrice === '' || gasPrice === '') {
      alert('Preencha todos os campos.')
      return
    }

    if (alcoholPrice.includes(',')) {
      setAlcoholPrice(alcoholPrice.replace(',', '.'))
    }

    if (gasPrice.includes(',')) {
      setGasPrice(gasPrice.replace(',', '.'))
    }

    const division = parseFloat(alcoholPrice) / parseFloat(gasPrice)

    setResult(division)

    // alert(division)

    setShowModal(!showModal)
  }

  return (
    <View style={styles.container}>
      {!showModal ? <>
        <Image source={require('./src/img/logo.png')} />

        <Text style={styles.title}>Qual a melhor opção?</Text>

        <View style={styles.inputArea}>
          <Input
            label='Álcool (preço por litro)'
            placeholder='Preço do álcool'
            value={alcoholPrice}
            onChangeText={setAlcoholPrice} />

          <Input
            label='Gasolina (preço por litro)'
            placeholder='Preço da gasolina'
            value={gasPrice}
            onChangeText={setGasPrice} />

        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={calculate}>
          <Text style={styles.btnText}>Calcular</Text>
        </TouchableOpacity>
      </> :
        <CustomModal
          alcoholPrice={alcoholPrice}
          gasPrice={gasPrice}
          result={result}
          showModal={showModal}
          setShowModal={setShowModal}
        />}

    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#292929',
    padding: 16
  },

  title: {
    color: '#FFF',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 24,
    marginBottom: 48,
  },

  inputArea: {
    width: '100%',
    gap: 8,
    marginTop: 24,
  },

  button: {
    width: '100%',
    margin: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF512E',
    padding: 10,
    borderRadius: 8,
  },

  btnText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  }
})