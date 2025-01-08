import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { Stack } from 'expo-router';

export default function HomeRoutes() {
   return (
      <GestureHandlerRootView>
         <Drawer screenOptions={{ headerShown: false }}>
            <Drawer.Screen name='(home)' options={{ headerShown: false, title: 'App' }} />
         </Drawer>
      </GestureHandlerRootView>
   )
}