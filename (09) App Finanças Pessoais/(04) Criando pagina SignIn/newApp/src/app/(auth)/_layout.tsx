import { Stack } from 'expo-router/stack'
import { Text } from 'react-native'

export default function RootLayout() {
   const loading = false
   const signed = false

   return (
      <Stack>
         <Stack.Screen name='index' options={{ headerShown: false }} />
         <Stack.Screen name='signIn' />
         <Stack.Screen name='signUp' />
      </Stack>
   )
}