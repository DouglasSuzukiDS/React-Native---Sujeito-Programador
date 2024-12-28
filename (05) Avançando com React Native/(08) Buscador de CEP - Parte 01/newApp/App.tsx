import { Keyboard, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { api } from './src/services/api';
import { useState } from 'react';

export type CEP = {
  cep: number,
  logradouro: string
  bairro: string
  uf: string
  estado: string
}
export default function App() {
  // https://viacep.com.br/ws/CEP/json  04087-030
  const [cep, setCep] = useState('')

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
        />
      </View>

      <View style={styles.areaBtn}>
        <TouchableOpacity style={[styles.botao, { backgroundColor: '#1D75CD' }]}>
          <Text style={styles.botaoText}>Buscar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.botao, { backgroundColor: '#CD3E1D' }]}>
          <Text style={styles.botaoText}>Limpar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.resultado}>
        <Text style={styles.itemText}>CEP: 00000-000</Text>
        <Text style={styles.itemText}>Locadouro: 00000-000</Text>
        <Text style={styles.itemText}>Bairro: 00000-000</Text>
        <Text style={styles.itemText}>Cidade: 00000-000</Text>
        <Text style={styles.itemText}>Estado: 00000-000</Text>
      </View>
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
  },

  itemText: {
    fontSize: 22,
    color: '#FFF',
  }
})