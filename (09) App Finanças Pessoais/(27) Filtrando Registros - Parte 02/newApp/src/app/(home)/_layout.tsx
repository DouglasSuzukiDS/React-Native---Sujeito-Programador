import Drawer from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { CustomDrawer } from "../../components/CustomDrawer";

export default function RootLayout() {
   return (
      <GestureHandlerRootView>
         <Drawer
            drawerContent={(props) => <CustomDrawer {...props} />}
            screenOptions={{
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
            <Drawer.Screen name='register' options={{ title: 'Registrar' }} />

            <Drawer.Screen name='profile' options={{ title: 'Perfil' }} />
         </Drawer>
      </GestureHandlerRootView >
   )
}
