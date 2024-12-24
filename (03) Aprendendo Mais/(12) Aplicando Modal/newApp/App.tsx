import { useState } from 'react';
import { Button, Modal, StyleSheet, Text, View } from 'react-native';
import { ModalEntrar } from './src/components/Modal';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  const entrar = () => {
    setModalVisible(true)
  }

  return (
    <View style={styles.container}>
      <Button title='Entrar' onPress={entrar} />

      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}>
        <View style={styles.modalView}>
          <ModalEntrar setModalVisible={setModalVisible} />
        </View>
      </Modal >
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DDD'
  },

  modalView: {
    margin: 15,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})