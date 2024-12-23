import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  type Pizza = {
    key: number
    nome: string
    valor: number
  }
  const [pizza, setPizza] = useState<number | null>(null)
  const [pizzas, setPizzas] = useState<Pizza[]>([
    { key: 1, nome: 'Strogonoff', valor: 35.90 },
    { key: 2, nome: 'Calebresa', valor: 59 },
    { key: 3, nome: 'Quatro Queijos', valor: 37 },
    { key: 4, nome: 'Brigadeiro', valor: 25.70 },
  ])

  const pizzaItem = pizzas.map((v, k) => {
    return <Picker.Item key={k} value={k} label={v.nome} />
  })

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Menu Pizza</Text>

      <Picker
        selectedValue={pizza}
        onValueChange={(itemValue, itemIndex) => setPizza(itemValue)}>
        {pizzaItem}
      </Picker>

      <Text style={styles.pizza}>Você escolheu: {pizza === null ? '' : pizzas[pizza].nome}</Text>
      <Text style={styles.pizza}>R$: {pizza === null ? '' : pizzas[pizza].valor.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24,
  },

  logo: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
  },

  pizza: {
    marginTop: 15,
    fontSize: 25,
    textAlign: 'center',
  }
})