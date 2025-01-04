import { Stack } from 'expo-router/stack'
import { StatusBar, Text, View } from 'react-native'
import AuthRoutes from '../routes/authRoutes'
import { AuthProvider } from '../contexts/auth'
export default function RootLayout() {
   const loading = false
   const signed = false

   return (
      <AuthProvider>
         {signed ?
            <Text>OK</Text> :
            <AuthRoutes />}
      </AuthProvider>

   )
}