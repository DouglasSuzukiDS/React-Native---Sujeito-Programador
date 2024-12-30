import { useEffect, useRef } from 'react';
import { Animated, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
export default function App() {
  const larAnimada = useRef(new Animated.Value(150)).current
  const altAnimada = useRef(new Animated.Value(50)).current

  useEffect(() => {
    Animated.timing(altAnimada, {
      toValue: 300,
      duration: 2000,
      useNativeDriver: false,
    }).start()
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={{
        width: larAnimada,
        height: altAnimada,
        backgroundColor: '#4169E1',
        justifyContent: 'center',
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