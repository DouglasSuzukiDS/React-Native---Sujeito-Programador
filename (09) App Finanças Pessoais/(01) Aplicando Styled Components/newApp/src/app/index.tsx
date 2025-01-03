import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Container, CustomButton, Name, TextButton, Title } from '../styled';


export default function App() {

   return (
      <Container>
         <Title cor='#F00'>Hello World</Title>

         <Name>Nick</Name>

         <CustomButton onPress={() => alert('Clicou')}>
            <TextButton>Entrar</TextButton>
         </CustomButton>
      </Container>
   );

}


