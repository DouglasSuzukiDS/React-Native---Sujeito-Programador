import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const frases = [
    "A vida trará coisas boas se tiver paciência.",
    "Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.",
    "Não compense na ira o que lhe falta na razão.",
    "Defeitos e virtudes são apenas dois lados da mesma moeda.",
    "A maior de todas as torres começa no solo.",
    "Não há que ser forte. Há que ser flexível.",
    "Gente todo dia arruma os cabelos, por que não o coração?",
    "A única coisa que pode nos deixar tristes é não ter amado nós mesmos."
  ]

  const [textoFrase, setTextoFrase] = useState('Sua frase da sorte é ...')
  const [cookieIMG, setCoockieIMG] = useState(require('./src/biscoito.png'))

  const quebraBiscoito = () => {
    let numeroAleatorio = Math.floor(Math.random() * frases.length)
    setTextoFrase(`" ${frases[numeroAleatorio]} "`)
    setCoockieIMG(require('./src/biscoitoAberto.png'))
  }

  return (
    <View style={styles.container}>
      <Image
        source={cookieIMG}
        style={styles.img}
      />

      <Text style={styles.textoFrase}>{textoFrase}</Text>

      <TouchableOpacity
        style={styles.botao}
        onPress={quebraBiscoito}>
        <View style={styles.btnArea}>
          <Text style={styles.btnTexto}>Abrir Biscoito</Text>
        </View>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  img: {
    height: 250,
    width: 250,
  },

  textoFrase: {
    fontSize: 20,
    color: '#DD7B22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center',
  },

  botao: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#DD7B22',
    borderRadius: 25,
  },

  btnArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  btnTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#DD7B22',
  },
});
