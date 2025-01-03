import { router } from 'expo-router';
import { Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { AreaInput, Background, Container, Input, SubmitButton, SubmitText } from './styles/signIn';

export default function SignUp() {

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

            <SubmitButton>
               <SubmitText>Cadastrar</SubmitText>
            </SubmitButton>
         </Container>
      </Background>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
   }
})