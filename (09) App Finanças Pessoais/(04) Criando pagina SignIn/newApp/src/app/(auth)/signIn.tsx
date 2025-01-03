import { StatusBar, TextInput } from 'react-native';
import { AreaInput, Background, Container, Logo } from './styles/signIn';

export default function SignIn() {
   return (
      <Background>
         <StatusBar backgroundColor={'#F0F4FF'} barStyle={'dark-content'} />

         <Container>
            <Logo
               source={require('../../assets/Logo.png')}
            />

            <AreaInput>
               <TextInput
                  placeholder={'Seu email'}
               />
            </AreaInput>
         </Container>
      </Background>
   )
}