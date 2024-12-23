import { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false} // Barra de rolagem
        scrollEnabled={true} // Permite ou não a rolagem
      // horizontal // Rolagem horizontal
      >
        <View style={styles.box1}></View>
        <View style={styles.box2}></View>
        <View style={styles.box3}></View>
        <View style={styles.box4}></View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  box1: {
    height: 350,
    width: 250,
    backgroundColor: 'red',
  },

  box2: {
    height: 350,
    width: 250,
    backgroundColor: 'green',
  },

  box3: {
    height: 350,
    width: 250,
    backgroundColor: 'blue',
  },

  box4: {
    height: 350,
    width: 250,
    backgroundColor: 'yellow',
  },
});
