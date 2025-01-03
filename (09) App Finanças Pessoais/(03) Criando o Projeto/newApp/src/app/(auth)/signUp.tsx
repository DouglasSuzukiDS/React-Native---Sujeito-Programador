import { router } from 'expo-router';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function SignUp() {

   return (
      <View style={styles.container}>
         <Text>SignUp</Text>

         <TouchableOpacity onPress={() => router.navigate('/signIn')}>
            <Text>Ir para SignIn</Text>
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