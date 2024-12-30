
import Feather from '@expo/vector-icons/Feather'
import { Stack } from 'expo-router'


export default function RootLayout() {
   return (
      <Stack screenOptions={{
         headerShown: true,
         headerTitleAlign: 'center',

      }}>
         <Stack.Screen name='index'
            options={{
               title: 'Home',

               headerStyle: {
                  backgroundColor: '#121212'
               },
               headerTintColor: '#FFF',
            }} />

         <Stack.Screen name='detalhes'
            options={{
               title: 'Detalhes',

            }} />
      </Stack>
   )
}