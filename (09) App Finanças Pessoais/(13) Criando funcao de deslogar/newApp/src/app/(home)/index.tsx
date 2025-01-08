import { useContext } from "react";
import { StatusBar, Text, View } from "react-native";
import { AuthContext, useAuth } from "../../contexts/auth";
import { Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";

export default function Home() {
   const { user, signOut } = useAuth()

   return (
      <View>
         <StatusBar backgroundColor={'#F0F4FF'} barStyle={'dark-content'} />
         <Text>Home Page</Text>
         <Text>Nome: {user?.name}</Text>

         <Button title='Sair da conta' onPress={signOut} />
      </View>
   )
}