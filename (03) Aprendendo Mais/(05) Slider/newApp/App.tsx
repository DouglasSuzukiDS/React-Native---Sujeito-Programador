import Slider from '@react-native-community/slider';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [value, setValue] = useState(0);

  return (
    <View style={styles.container}>
      <Slider
        minimumValue={0}
        maximumValue={100}
        onValueChange={valueSelected => setValue(valueSelected)}
        value={value}
        minimumTrackTintColor='#0F0'
        maximumTrackTintColor='#F00'
      />

      <Text style={styles.valor}>{value.toFixed(1)} kg</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24,
  },

  valor: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  }
})