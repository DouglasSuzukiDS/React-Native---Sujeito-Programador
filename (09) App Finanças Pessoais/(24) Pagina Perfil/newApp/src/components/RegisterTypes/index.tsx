import { Dispatch, SetStateAction, useState } from "react"
import { RegisterButton, RegisterContainer, RegisterLabel } from "./styles"
import Feather from '@expo/vector-icons/Feather'

type Props = {
   type: string
   sendTypeChanged: Dispatch<SetStateAction<string>>
}
export const RegisterTypes = ({ type, sendTypeChanged }: Props) => {
   const [typeChecked, setTypeChecked] = useState(type)

   const changeType = (name: string) => {
      if (name === 'receita') {
         setTypeChecked('receita')
         sendTypeChanged('receita')
      } else {
         setTypeChecked('despesa')
         sendTypeChanged('despesa')
      }
   }

   return (
      <RegisterContainer>
         <RegisterButton
            checked={typeChecked === 'receita' ? true : false}
            onPress={() => changeType('receita')}>
            <Feather name={'arrow-up'} size={25} color="#121212" />
            <RegisterLabel>Receita</RegisterLabel>
         </RegisterButton>

         <RegisterButton
            checked={typeChecked === 'despesa' ? true : false}
            onPress={() => changeType('despesa')}>
            <Feather name={'arrow-down'} size={25} color="#121212" />
            <RegisterLabel>Despesa</RegisterLabel>
         </RegisterButton>
      </RegisterContainer>
   )
}