import { useNavigation } from "expo-router"
import { ButtonMenu, Container, Title } from "./styles"
import Icon from '@expo/vector-icons/Feather'
import { DrawerActions } from "@react-navigation/native"

type Props = {
   title: string
}
export const Header = ({ title }: Props) => {
   const navigation = useNavigation()
   return (
      <Container>
         <ButtonMenu onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
            <Icon name='menu' size={35} color={'#121212'} />
         </ButtonMenu>

         {title && <Title>{title}</Title>}
      </Container>
   )
}