import { useEffect } from 'react';
import { ActivityIndicator, Text } from 'react-native';
import { router, Stack } from 'expo-router';
import { AuthProvider, useAuth } from '../contexts/auth';
import { View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

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