import { useEffect, useRef } from 'react';
import { Animated, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
export default function App() {
  const larAnimada = useRef(new Animated.Value(150)).current
  const altAnimada = useRef(new Animated.Value(50)).current
  const opacidadeAnimada = useRef(new Animated.Value(1)).current

  useEffect(() => {
    /*Animated.sequence([ // Assim é possivel realizar mais animações em sequencia

      Animated.timing(larAnimada, { // Animação unica
        toValue: 300,
        duration: 2000,
        useNativeDriver: false,
      }),

      Animated.timing(altAnimada, {
        toValue: 150,
        duration: 2000,
        useNativeDriver: false,
      }),

      Animated.timing(opacidadeAnimada, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: false,
      })

    ]).start()*/

    /*Animated.parallel([ // Assim é possivel realizar mais animações em paralelo

      Animated.timing(larAnimada, {
        toValue: 300,
        duration: 2000,
        useNativeDriver: false,
      }),

      Animated.timing(altAnimada, {
        toValue: 150,
        duration: 2000,
        useNativeDriver: false,
      }),

    ]).start()*/

    Animated.sequence([
      Animated.timing(opacidadeAnimada, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: false,
      }),

      Animated.parallel([
        Animated.timing(larAnimada, {
          toValue: 300,
          duration: 2000,
          useNativeDriver: false,
        }),

        Animated.timing(altAnimada, {
          toValue: 300,
          duration: 2000,
          useNativeDriver: false,
        }),
      ]),

      Animated.timing(opacidadeAnimada, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: false,
      }),

    ]).start()

  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={{
        width: larAnimada,
        height: altAnimada,
        backgroundColor: '#4169E1',
        justifyContent: 'center',
        opacity: opacidadeAnimada
      }}>
        <Text style={{
          textAlign: 'center', fontSize: 22, color: '#FFF'
        }}>Carregando...</Text>
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