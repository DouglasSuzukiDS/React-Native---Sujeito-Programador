import Slider from '@react-native-community/slider';
import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';
import { Pressable, StyleSheet, Switch, Text, TextInput, View } from 'react-native';

export default function App() {
  /* Desafio
    - Banco RN
      - Nome (TextInput)
      - Idade (TextInput)
      - Sexo (Picker)
      - Limite (Slider)
      - Estudante (Switch)
      - Botao (Abrir Conta)
        - Mostrar todos os dados em um alerta. Não pode deixar dados em branco
        - Ou mostrar dos dados na tela mesmo.
  */
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [sex, setSex] = useState('');
  const [limit, setLimit] = useState(0);
  const [studant, setStudant] = useState(false);

  const handleClick = () => {
    if (name === '' && age === '' && limit === 0) {
      alert('Todos os dados precisam ser preenchidos!')
    } else {
      alert(`
        Conta criada!
        Nome: ${name}
        Idade: ${age}
        Sexo: ${sex === 'H' ? 'Homem' : 'Mulher'}
        Limite: R$ ${limit.toFixed(2)}
        Estudante: ${studant ? 'Sim' : 'Não'}
      `)
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro Banco RN</Text>

      <TextInput
        placeholder="Nome"
        value={name}
        onChangeText={(text) => setName(text)}
      />

      <TextInput
        placeholder="Idade"
        keyboardType='numeric'
        value={age}
        onChangeText={(num) => setAge(num)}
      />

      <Picker
        selectedValue={sex}
        onValueChange={(itemValue) => setSex(itemValue)}>
        <Picker.Item label="Homem" value="H" />
        <Picker.Item label="Mulher" value="M" />
      </Picker>

      <Slider
        value={limit}
        onValueChange={(value) => setLimit(value)}
        minimumValue={0}
        maximumValue={1000}
        step={10} />

      <Text style={styles.limit}>{limit.toFixed(2)}</Text>

      <View style={styles.studantArea}>
        <Text>Estudante: {studant ? 'Sim' : 'Não'}</Text>

        <Switch
          value={studant}
          onValueChange={(value) => setStudant(value)} />
      </View>

      <Pressable style={styles.button} onPress={handleClick}>
        <Text style={styles.btnText}>Abrir contar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24,
  },

  title: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  limit: {
    textAlign: 'center',
  },

  studantArea: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
  },

  button: {
    backgroundColor: '#00AEEF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },

  btnText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  }
})