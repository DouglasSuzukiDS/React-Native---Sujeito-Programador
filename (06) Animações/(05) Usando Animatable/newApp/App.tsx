import { useRef } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import * as Animatable from 'react-native-animatable'

const ButtonAnimared = Animatable.createAnimatableComponent(TouchableOpacity) // Cria o componente animado

export default function App() {
  const buttonRef = useRef<Animatable.AnimatableComponent<TouchableOpacityProps, {}>>(null);

  const handleClick = () => {
    if (buttonRef.current) {
      buttonRef.current?.shake?.();
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Animatable.Text
        style={styles.title}
        animation='shake' // Tipo da animação
      // iterationCount={2} // Numero de iterações
      // duration={5000}
      >
        Hello World
      </Animatable.Text>

      <ButtonAnimared
        style={styles.button}
        ref={buttonRef}
        onPress={handleClick}
        animation={'pulse'}>
        <Text style={styles.buttonText}>Animar</Text>
      </ButtonAnimared>
    </SafeAreaView>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  button: {
    width: '70%',
    height: 30,
    backgroundColor: '#121212',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 20
  },

  buttonText: {
    color: '#FFF'
  }
})