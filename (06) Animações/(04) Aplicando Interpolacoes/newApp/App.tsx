import { useEffect, useRef } from 'react';
import { Animated, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
export default function App() {
  const larAnimada = useRef(new Animated.Value(0)).current
  const altAnimada = useRef(new Animated.Value(50)).current
  const opacidadeAnimada = useRef(new Animated.Value(1)).current

  useEffect(() => {
    Animated.sequence([
      Animated.timing(larAnimada, {
        toValue: 100,
        duration: 4000,
        useNativeDriver: false,
      }),

      Animated.timing(altAnimada, {
        toValue: 100,
        duration: 4000,
        useNativeDriver: false,
      })
    ]).start(({ finished }) => { // Função que sera chamada apenas quando a animação finalizar
      alert('Animação finalizou')
    })
  }, [])

  let porcentagemLargura = larAnimada.interpolate({
    inputRange: [0, 100], // Entrada, vai de quanto até quanto
    outputRange: ['0%', '100%'], // Saída, vai sair de 0% até 100%
  })

  let porcentagemAltura = altAnimada.interpolate({
    inputRange: [50, 100], // Entrada, vai de quanto até quanto
    outputRange: ['5%', '100%'], // Saída, vai sair de 0% até 100%
  })

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={{
        width: porcentagemLargura,
        height: porcentagemAltura,
        backgroundColor: '#4169E1',
        justifyContent: 'center',
        opacity: opacidadeAnimada,
      }}>
      </Animated.View>
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
})