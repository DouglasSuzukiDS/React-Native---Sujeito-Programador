import Drawer from 'expo-router/drawer'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import Feather from '@expo/vector-icons/Feather'

export default function RootLayout() {
   return (
      <GestureHandlerRootView>
         <Drawer>
            <Drawer.Screen
               name="index"
               options={{
                  title: 'Home',
                  drawerIcon: ({ size, color }) => (
                     <Feather name="home" size={size} color={color} />
                  )
               }} />

            <Drawer.Screen
               name="sobre"
               options={{
                  title: 'Sobre',
                  drawerIcon: ({ size, color }) => (
                     <Feather name="paperclip" size={size} color={color} />
                  )
               }} />

            <Drawer.Screen
               name="contato"
               options={{
                  title: 'Contato',
                  drawerIcon: ({ size, color }) => (
                     <Feather name="phone-call" size={size} color={color} />
                  )
               }} />

            <Drawer.Screen
               name="detalhes"
               options={{
                  title: 'Detalhes',
                  headerShown: false,
                  drawerIcon: ({ size, color }) => (
                     <Feather name="alert-triangle" size={size} color={color} />
                  ),
                  // Oculta o Drawer da listagem
                  drawerItemStyle: { display: 'none' }
               }} />
         </Drawer>
      </GestureHandlerRootView>
   )
}