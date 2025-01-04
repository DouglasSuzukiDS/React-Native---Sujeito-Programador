import { Platform } from 'react-native';
import { AreaInput, Background, Container, Input, SubmitButton, SubmitText } from './styles/signIn';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/auth';

export default function SignUp() {
   const user = useContext(AuthContext)

   const handleSignUp = () => {
      console.log(user)
   }

   return (
      <Background>
         <Container
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            enabled>
            <AreaInput>
               <Input
                  placeholder='Seu nome'
               />
            </AreaInput>

            <AreaInput>
               <Input
                  placeholder='Seu email'
               />
            </AreaInput>

            <AreaInput>
               <Input
                  placeholder='Sua senha'
               />
            </AreaInput>

            <SubmitButton onPress={handleSignUp}>
               <SubmitText>Cadastrar</SubmitText>
            </SubmitButton>
         </Container>
      </Background>
   )
}