import { useEffect } from 'react';
import { router, Stack } from 'expo-router';
import { AuthProvider, useAuth } from '../contexts/auth';

function RootNavigator() {
   const { signed, loading } = useAuth();

   useEffect(() => {
      loading && router.push('/loading')

      signed ? router.push('(home)') : router.push('(auth)')
   }, []);

   return (
      <Stack screenOptions={{ headerShown: false }}>
         <Stack.Screen name="(home)" />
         <Stack.Screen name="(auth)" />
         <Stack.Screen name="loading" />
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