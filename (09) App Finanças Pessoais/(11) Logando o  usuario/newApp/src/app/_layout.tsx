import { useEffect } from 'react';
import { Text } from 'react-native';
import { router, Stack } from 'expo-router';
import { AuthProvider, useAuth } from '../contexts/auth';

function RootNavigator() {
   const { signed } = useAuth();

   useEffect(() => {
      if (signed) {
         router.push('(home)');
      } else {
         router.push('(auth)');
      }
   }, [signed]);

   return (
      <Stack screenOptions={{ headerShown: false }}>
         <Stack.Screen name="(home)" />
         <Stack.Screen name="(auth)" />
      </Stack>
   );
}

export default function RootLayout() {
   return (
      <AuthProvider>
         <RootNavigator />
      </AuthProvider>
   );
}