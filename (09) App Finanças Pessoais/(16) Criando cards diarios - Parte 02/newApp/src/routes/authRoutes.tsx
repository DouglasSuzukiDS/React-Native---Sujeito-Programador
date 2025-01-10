import { Stack } from "expo-router";
import { StatusBar } from "react-native";

export default function AuthRoutes() {
   return (
      <Stack screenOptions={{ headerShown: false }}>
         <Stack.Screen name='(auth)' options={{ headerShown: false }} />
      </Stack>
   )
}