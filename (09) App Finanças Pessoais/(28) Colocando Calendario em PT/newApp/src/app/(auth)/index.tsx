import { Platform, StatusBar, Text } from 'react-native';
import { AreaInput, Background, Container, Input, Link, LinkText, Logo, SubmitButton, SubmitText } from './styles/signIn';
import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { useAuth } from '../../contexts/auth';
import { ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function SignIn() {
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')

   const { signIn, loadingAuth, user } = useAuth()

   const handleLogin = async () => {
      await signIn(email, password)
   }

   useEffect(() => {
      // getStorage()
      // alert('AUTH')
   }, [])

   // SignIn Page
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

            <AreaInput>
               <Input
                  placeholder={'Seu email'}
                  value={email}
                  onChangeText={(text: string) => setEmail(text)}
               />
            </AreaInput>

            <AreaInput>
               <Input
                  placeholder={'Sua senha'}
                  value={password}
                  onChangeText={(text: string) => setPassword(text)}
                  secureTextEntry={true}
               />
            </AreaInput>

            <SubmitButton
               activeOpacity={0.8}
               onPress={handleLogin}>
               {loadingAuth ?
                  <ActivityIndicator size={20} color={'#FFF'} /> :
                  <SubmitText>Acessar</SubmitText>
               }
            </SubmitButton>

            <Link onPress={() => router.navigate('/signUp')}>
               <LinkText>Criar uma conta</LinkText>
            </Link>

         </Container>
      </Background>
   )
}