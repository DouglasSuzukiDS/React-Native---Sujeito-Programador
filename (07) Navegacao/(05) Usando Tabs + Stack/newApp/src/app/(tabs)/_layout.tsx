import { Tabs } from "expo-router";
import Feather from '@expo/vector-icons/Feather'


export default function RootLayout() {
   return (
      <Tabs screenOptions={{
         headerShown: false,
         headerTitleAlign: 'center',
         tabBarHideOnKeyboard: true, // Quanto o teclado estiver aberto, a tabBar não aparece
         tabBarActiveTintColor: '#F00',

         tabBarStyle: {
            backgroundColor: '#202225',
            borderWidth: 0
         }
      }}>
         <Tabs.Screen name='(home)'
            options={{
               title: 'Home',
               headerStyle: {
                  backgroundColor: '#121212'
               },
               headerTintColor: '#FFF',
               tabBarIcon: ({ color, size }) => <Feather name='home' size={size} color={color} />
            }} />

         <Tabs.Screen name='sobre'
            options={{
               headerShown: true,
               title: 'Sobre',
               tabBarIcon: ({ color, size }) => <Feather name='file-text' size={size} color={color} />
            }} />

         <Tabs.Screen name='contato'
            options={{
               headerShown: true,
               title: 'Contato',
               tabBarIcon: ({ color, size }) => <Feather name='phone-call' size={size} color={color} />
            }} />
      </Tabs>
   )
}