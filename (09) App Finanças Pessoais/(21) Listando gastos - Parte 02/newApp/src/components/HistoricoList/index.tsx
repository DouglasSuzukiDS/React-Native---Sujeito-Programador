import { useEffect } from "react"
import { Movement } from "../../app/(home)"
import { Container, IconView, Tipo, TipoText, ValorText } from "./styles"
import Icon from '@expo/vector-icons/Feather'

type Props = {
   data: Movement
}
export const HistoricoList = ({ data }: Props) => {
   return (
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
   )
}