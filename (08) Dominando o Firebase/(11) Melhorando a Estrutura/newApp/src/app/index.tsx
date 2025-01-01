import { FlatList, Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { db } from '../firebaseConfig';
import { addDoc, collection, doc, getDoc, getDocs, onSnapshot, setDoc, updateDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { UserItem } from '../components/user';
import FormUsers from './FormUsers';


export default function App() {

   return (
      <View style={styles.container}>
         <FormUsers />
      </View>
   );

}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      marginTop: 40,
      marginHorizontal: 8
   },
})