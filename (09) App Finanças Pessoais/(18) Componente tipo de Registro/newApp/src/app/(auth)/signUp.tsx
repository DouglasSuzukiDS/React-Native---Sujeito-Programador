import { ActivityIndicator, Platform } from 'react-native';
import { AreaInput, Background, Container, Input, SubmitButton, SubmitText } from './styles/signIn';
import { useContext, useState } from 'react';
import { AuthContext, useAuth } from '../../contexts/auth';

export default function SignUp() {
   const { signUp, loadingAuth } = useAuth()

   const [name, setName] = useState('')
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')

   const handleSignUp = async () => {
      if (name === '' || email === '' || password === '') return

      await signUp(name, email, password)
   }

   return (
      <Background>
         <Container
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            enabled>
            <AreaInput>
               <Input
                  placeholder='Seu nome'
                  value={name}
                  onChangeText={(text: string) => setName(text)}
               />
            </AreaInput>

            <AreaInput>
               <Input
                  placeholder='Seu email'
                  value={email}
                  onChangeText={(text: string) => setEmail(text)}
               />
            </AreaInput>

            <AreaInput>
               <Input
                  placeholder='Sua senha'
                  value={password}
                  onChangeText={(text: string) => setPassword(text)}
                  secureTextEntry={true}
               />
            </AreaInput>

            <SubmitButton onPress={handleSignUp}>
               {loadingAuth ?
                  <ActivityIndicator size={20} color={'#FFF'} /> :

                  <SubmitText>Cadastrar</SubmitText>
               }
            </SubmitButton>
         </Container>
      </Background>
   )
}