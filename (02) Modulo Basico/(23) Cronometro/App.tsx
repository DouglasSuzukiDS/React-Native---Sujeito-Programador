import { useRef, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [numero, setNumero] = useState(0);
  const [botao, setBotao] = useState('Vai');
  const [ultimo, setUltimo] = useState(0)

  const timer = useRef<NodeJS.Timeout | null>(null);

  const vai = () => {
    if (timer.current !== null) {
      clearInterval(timer.current as NodeJS.Timeout);

      timer.current = null;

      setBotao('Vai');
    } else {
      timer.current = setInterval(() => {
        setNumero(numero => numero + 0.1);
      }, 100)

      setBotao('Parar');
    }
  }

  const limpar = () => {
    if (timer.current !== null) {
      clearInterval(timer.current as NodeJS.Timeout);

      timer.current = null;
    }

    setUltimo(numero)
    setNumero(0)
    setBotao('Vai')
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={require('./src/cronometro.png')} />

      <Text style={styles.timer}>{numero.toFixed(1)}</Text>

      <View style={styles.btnArea}>
        <TouchableOpacity
          style={styles.btn}
          onPress={vai}>
          <Text style={styles.btnText}>{botao}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btn}
          onPress={limpar}>
          <Text style={styles.btnText}>Limpar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.areaUltimo}>
        <Text style={styles.textoTempo}>
          {ultimo > 0 ? `Ultimo tempo: ${ultimo.toFixed(1)}s` : ''}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00AEEF',
  },

  img: {
  },

  timer: {
    marginTop: -160,
    color: '#FFF',
    fontSize: 65,
    fontWeight: 'bold',
  },

  btnArea: {
    flexDirection: 'row',
    marginTop: 70,
    height: 40,
  },

  btn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    height: 40,
    margin: 17,
    borderRadius: 9,
  },

  btnText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00AEEF',
  },

  areaUltimo: {
    marginTop: 40
  },

  textoTempo: {
    fontSize: 25,
    color: '#FFF',
    fontStyle: 'italic',
  }
});
