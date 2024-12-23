import Slider from '@react-native-community/slider';
import { useState } from 'react';
import { StyleSheet, Switch, Text, View } from 'react-native';

export default function App() {
  const [status, setStatus] = useState(false);

  return (
    <View style={styles.container}>
      <Switch
        value={status}
        onValueChange={st => setStatus(st)}
        thumbColor={'#F00'}
      />

      <Text style={styles.texto}>{status ? 'Ativo' : 'Inativo'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24,
  },

  texto: {
    fontSize: 20,
    textAlign: 'center',
  }
})