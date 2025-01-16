import { Stack } from 'expo-router'
import { SafeAreaView, StatusBar } from 'react-native';
import { CartProvider } from '../contexts/cart';

export default function RootLayout() {
   return (
      <CartProvider>
         <SafeAreaView style={{ flex: 1 }}>
            <StatusBar barStyle={'dark-content'} backgroundColor={'#FAFAFA'} />

            <Stack>
               <Stack.Screen name="index" options={{
                  title: 'Home',
                  headerShown: false
               }} />
               <Stack.Screen name="cart" options={{ title: 'Carrinho' }} />
            </Stack>
         </SafeAreaView>
      </CartProvider>
   )
}