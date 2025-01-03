import { router } from 'expo-router';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function SignIn() {

   return (
      <View style={styles.container}>
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