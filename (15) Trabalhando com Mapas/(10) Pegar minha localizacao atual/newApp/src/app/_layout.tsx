import { Stack } from 'expo-router'
import { SafeAreaView, StatusBar } from 'react-native';


export default function RootLayout() {
   return (
      <SafeAreaView style={{ flex: 1 }}>
         <StatusBar barStyle={'dark-content'} backgroundColor={'#FAFAFA'} />

         <Stack>
            <Stack.Screen name="index" options={{
               title: 'Home',
               headerShown: false
            }} />
         </Stack>
      </SafeAreaView>
   )
}