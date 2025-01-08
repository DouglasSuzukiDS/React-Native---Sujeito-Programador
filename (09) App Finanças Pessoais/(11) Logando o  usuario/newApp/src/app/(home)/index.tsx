import { useContext } from "react";
import { StatusBar, Text, View } from "react-native";
import { AuthContext, useAuth } from "../../contexts/auth";

export default function Home() {
   const { user } = useAuth()

   return (
      <View>
         <StatusBar backgroundColor={'#F0F4FF'} barStyle={'dark-content'} />
         <Text>Home Page - {user?.name}</Text>
      </View>
   )
}