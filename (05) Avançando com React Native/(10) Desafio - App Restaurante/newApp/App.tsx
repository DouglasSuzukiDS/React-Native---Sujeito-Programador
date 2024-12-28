import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useRef, useState } from 'react';

export default function App() {
  {/*
      Desafio: Construir um aplicativo de contagem de pessoas para o restaurante.
        - O restaurante suporta até 10 pessoas.
        - Caso o limite seja alcançado:
          - A mensagem de aviso deve ser mostrada.
          - O botão de adicionar deve ser desabilitado 
  */}
  const [count, setCount] = useState(0)
  const [showWarning, setShowWarning] = useState(false)

  const add = () => {
    if (count + 1 < 10) {
      setCount(count + 1)
      setShowWarning(false)
    } else {
      setCount(count + 1)
      setShowWarning(true)
    }
  }

  const remove = () => {
    if (count > 0) {
      setCount(count - 1)
      setShowWarning(false)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view}>
        <Text style={styles.text}>Pessoas no restaurante: </Text>

        <View style={styles.countArea}>
          <Text style={styles.count}>{count}</Text>
        </View>

        {showWarning &&
          <Text style={styles.warning}>Restaurante está no seu limite de pessoas.</Text>
        }

        <View style={styles.btnArea}>
          <TouchableOpacity
            style={[styles.bnt, count === 10 && styles.btnDisabled]}
            onPress={add}
            disabled={count === 10 && true}>
            <Text style={styles.btnText}>Adicionar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.bnt, count === 0 && styles.btnDisabled]}
            onPress={remove}
            disabled={count === 0 && true}>
            <Text style={styles.btnText}>Remover</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24,
  },

  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16
  },

  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  countArea: {
    width: 50,
    height: 50,
    borderRadius: 8,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 16
  },

  count: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: 'bold',
  },

  warning: {
    backgroundColor: '#F6B134',
    padding: 8,
    borderRadius: 8,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 16,
  },

  btnArea: {
    justifyContent: 'center',
    gap: 24,
    flexDirection: 'row',
    width: '100%'
  },

  bnt: {
    backgroundColor: '#1D75CD',
    borderRadius: 8,
    padding: 8
  },

  btnDisabled: {
    backgroundColor: '#AAA'
  },

  btnText: {
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
  }
})