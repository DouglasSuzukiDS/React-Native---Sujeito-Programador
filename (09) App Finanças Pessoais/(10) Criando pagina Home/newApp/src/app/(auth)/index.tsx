import { Platform, StatusBar, Text } from 'react-native';
import { AreaInput, Background, Container, Input, Link, LinkText, Logo, SubmitButton, SubmitText } from './styles/signIn';
import { router } from 'expo-router';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/auth';
export default function SignIn() {
   const { signed } = useContext(AuthContext) || {}

   return (
      <Background>
         <StatusBar backgroundColor={'#F0F4FF'} barStyle={'dark-content'} />

         {/* // Empurra o conteúdo pra cima quando o teclado é aberto */}
         <Container
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            enabled
         >
            <Logo
               source={require('../../assets/Logo.png')}
            />

            {/* Empurra o conteúdo pra cima quando o teclado é aberto */}
            <AreaInput>
               <Input
                  placeholder={'Seu email'}
               />
            </AreaInput>

            <AreaInput>
               <Input
                  placeholder={'Sua senha'}
               />
            </AreaInput>

            <SubmitButton activeOpacity={0.8}>
               <SubmitText>Acessar</SubmitText>
            </SubmitButton>

            <Link onPress={() => router.navigate('/signUp')}>
               <LinkText>Criar uma conta</LinkText>
            </Link>
         </Container>
      </Background>
   )
}