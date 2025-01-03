import { Stack } from 'expo-router/stack'
import { Text } from 'react-native'

export default function RootLayout() {
   const loading = false
   const signed = false

   return (
      <Stack>
         <Stack.Screen name='index' options={{ title: 'signIn' }} />
         <Stack.Screen name='signIn' />
         <Stack.Screen name='signUp' />
      </Stack>
   )
}