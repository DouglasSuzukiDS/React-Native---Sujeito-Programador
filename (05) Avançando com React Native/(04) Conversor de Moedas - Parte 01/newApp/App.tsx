import { StyleSheet, Text, View } from 'react-native';
import { PickerItem } from './src/Picker';

export default function App() {
  // https://economia.awesomeapi.com.br/json/all
  return (
    < View style={styles.container} >
      <View style={styles.areaMoeda}>
        <Text style={styles.titulo}>Seleciona sua moeda</Text>

        <PickerItem />
      </View>
    </View >
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 48,
    backgroundColor: '#101215',
    paddingTop: 40,
    alignItems: 'center'
  },

  areaMoeda: {
    backgroundColor: '#F9F9F9',
    width: '90%',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    padding: 8
  },

  titulo: {
    fontSize: 16,
    color: '#000',
    fontWeight: '500',
    paddingLeft: 5,
    paddingRight: 5
  },
})