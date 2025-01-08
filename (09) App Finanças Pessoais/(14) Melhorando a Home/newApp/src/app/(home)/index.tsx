import { StatusBar, Text, View } from "react-native";
import { useAuth } from "../../contexts/auth";
import { Background } from "./styles/styles";
import { Title } from "../../components/Header/styles";
import { Header } from "../../components/Header";

export default function Home() {
   const { user, signOut } = useAuth()

   return (
      <Background>
         <StatusBar backgroundColor={'#F0F4FF'} barStyle={'dark-content'} />
         <Header title="Minha movimentações" />
      </Background>
   )
}