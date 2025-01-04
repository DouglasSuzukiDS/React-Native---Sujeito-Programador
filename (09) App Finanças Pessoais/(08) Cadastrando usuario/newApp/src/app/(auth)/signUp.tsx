import { Platform } from 'react-native';
import { AreaInput, Background, Container, Input, SubmitButton, SubmitText } from './styles/signIn';
import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/auth';

export default function SignUp() {
   const user = useContext(AuthContext)

   const [nome, setNome] = useState('')
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')

   const handleSignUp = () => {
      user?.signUp(nome, email, password)
   }

   return (
      <Background>
         <Container
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            enabled>
            <AreaInput>
               <Input
                  placeholder='Seu nome'
                  value={nome}
                  onChangeText={text => setNome(text)}
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
               <SubmitText>Cadastrar</SubmitText>
            </SubmitButton>
         </Container>
      </Background>
   )
}