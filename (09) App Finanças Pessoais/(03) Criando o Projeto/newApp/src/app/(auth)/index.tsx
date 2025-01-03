import { router, Stack } from 'expo-router';
import { useEffect } from 'react';
import { StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function SignIn() {
   return (
      <View style={styles.container}>
         <StatusBar backgroundColor={'#F0F4FF'} barStyle={'dark-content'} />

         <Text>SignIn</Text>

         <TouchableOpacity onPress={() => router.navigate('/signUp')}>
            <Text>Ir para SignUp</Text>
         </TouchableOpacity>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
   }
})
