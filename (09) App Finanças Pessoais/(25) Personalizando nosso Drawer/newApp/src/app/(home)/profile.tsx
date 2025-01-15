import { Header } from "../../components/Header";
import { Container, LogoutButton, LogoutText, Message, Name, NewLink, NewLinkText, UserInfos } from "./styles/profile";
import { useAuth } from "../../contexts/auth";
import { router } from "expo-router";

export default function Profile() {
   const { user, signOut } = useAuth()

   return (
      <Container>
         <Header title="Meu Perfil" />

         <UserInfos>
            <Message>Hey, bem vindo de volta!</Message>

            <Name numberOfLine={1}> {/*Garante que o capo tera apenas uma linha e caso não couber na tela aparecerá ...*/}
               {user?.name}
            </Name>

            <NewLink onPress={() => router.navigate('/register')}>
               <NewLinkText>Fazer Registro</NewLinkText>
            </NewLink>

            <LogoutButton onPress={() => signOut()}>
               <LogoutText>Sair</LogoutText>
            </LogoutButton>
         </UserInfos>

      </Container>
   )
}