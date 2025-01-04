import { ActivityIndicator, Platform } from 'react-native';
import { AreaInput, Background, Container, Input, SubmitButton, SubmitText } from './styles/signIn';
import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/auth';

export default function SignUp() {
   const user = useContext(AuthContext)

   const [name, setName] = useState('')
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')

   const handleSignUp = () => {
      if (name === '' || email === '' || password === '') return

      user?.signUp(name, email, password)
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
                  onChangeText={text => setName(text)}
               />
            </AreaInput>

            <AreaInput>
               <Input
                  placeholder='Seu email'
                  value={email}
                  onChangeText={text => setEmail(text)}
               />
            </AreaInput>

            <AreaInput>
               <Input
                  placeholder='Sua senha'
                  value={password}
                  onChangeText={text => setPassword(text)}
                  secureTextEntry={true}
               />
            </AreaInput>

            <SubmitButton onPress={handleSignUp}>
               {user?.loadingAuth ?
                  <ActivityIndicator size={20} color={'#FFF'} /> :

                  <SubmitText>Cadastrar</SubmitText>
               }
            </SubmitButton>
         </Container>
      </Background>
   )
}