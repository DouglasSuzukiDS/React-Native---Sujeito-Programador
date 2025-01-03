import { Stack } from 'expo-router/stack'
import { StatusBar, Text, View } from 'react-native'
import AuthRoutes from '../routes/authRoutes'
export default function RootLayout() {
   const loading = false
   const signed = false

   return (
      signed ?
         <Text>OK</Text> :
         <AuthRoutes />

   )
}