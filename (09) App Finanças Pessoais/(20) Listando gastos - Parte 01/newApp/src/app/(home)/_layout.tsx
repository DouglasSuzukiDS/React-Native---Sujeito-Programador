import Drawer from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
   return (
      <GestureHandlerRootView>
         <Drawer screenOptions={{
            headerShown: false,

            //drawerType: 'permanent',

            drawerStyle: {
               backgroundColor: '#FFF',
               paddingTop: 20
            },

            drawerActiveBackgroundColor: '#3B3DBF',
            drawerActiveTintColor: '#FFF',

            drawerInactiveBackgroundColor: '#F0F2FF',
            drawerInactiveTintColor: '#121212',

            drawerItemStyle: {
               borderRadius: 4
            }
         }}>
            <Drawer.Screen name='index' options={{ title: 'Home' }} />
            <Drawer.Screen name='new' options={{ title: 'Registrando' }} />
         </Drawer>
      </GestureHandlerRootView >
   )
}