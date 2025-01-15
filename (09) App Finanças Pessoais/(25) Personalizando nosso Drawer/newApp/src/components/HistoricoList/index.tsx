import { Movement } from "../../app/(home)"
import { Container, IconView, Tipo, TipoText, ValorText } from "./styles"
import Icon from '@expo/vector-icons/Feather'
import { TouchableWithoutFeedback } from "react-native-gesture-handler"
import { Alert } from "react-native"

type Props = {
   data: Movement
   deleteItem: (id: string) => void
}
export const HistoricoList = ({ data, deleteItem }: Props) => {
   const handleDeleteItem = () => {
      // Simulate delete item
      Alert.alert(
         'Atenção',
         'Você tem certeza que deseja deletar esse registro?',
         [
            {
               text: 'Cancelar',
               style: 'cancel'
            },
            {
               text: 'Continuar',
               onPress: () => deleteItem(data.id),
            }
         ]
      )
   }

   return (
      <TouchableWithoutFeedback onLongPress={handleDeleteItem}>
         <Container>
            <Tipo>
               <IconView tipo={data.type}>
                  <Icon
                     name={data.type === 'despesa' ? 'arrow-down' : 'arrow-up'}
                     size={28}
                     color={'#FFF'} />

                  <TipoText>{data.type}</TipoText>
               </IconView>

               <ValorText>
                  R$ {data.value}
               </ValorText>
            </Tipo>
         </Container>
      </TouchableWithoutFeedback>
   )
}