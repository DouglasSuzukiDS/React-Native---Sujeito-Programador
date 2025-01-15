import { Dispatch, SetStateAction } from "react"
import { ButtonFilter, ButtonFilterText, Container, ModalContent } from "./styles"
import { TouchableWithoutFeedback } from "react-native-gesture-handler"
import { Text, View } from "react-native"

type Props = {
   setVisible: Dispatch<SetStateAction<boolean>>
}
export const CalendarModal = ({ setVisible }: Props) => {
   return (
      <Container>
         <TouchableWithoutFeedback onPress={() => setVisible(false)}>
            <View style={{ flex: 1 }}></View>
         </TouchableWithoutFeedback>

         <ModalContent>
            <ButtonFilter onPress={() => setVisible(false)}>
               <ButtonFilterText >
                  Fechar
               </ButtonFilterText>
            </ButtonFilter>
         </ModalContent>
      </Container >
   )
}