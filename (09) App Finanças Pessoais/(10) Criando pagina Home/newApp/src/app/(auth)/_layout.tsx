import { Stack } from 'expo-router/stack'
import { Text } from 'react-native'
import { AuthProvider } from '../../contexts/auth'

export default function RootLayout() {
   const loading = false
   const signed = false

   return (
      <Stack>
         <Stack.Screen name='index' options={{ headerShown: false }} />
         <Stack.Screen name='signIn' />
         <Stack.Screen name='signUp' options={{
            headerStyle: {
               backgroundColor: '#3B3DBF',
               borderBottomWidth: 1,
               borderColor: '#00B94A',
            },
            headerTintColor: '#FFF',
            headerTitle: 'Voltar',
            headerBackTitleVisible: false,
         }} />
      </Stack>
   )
}