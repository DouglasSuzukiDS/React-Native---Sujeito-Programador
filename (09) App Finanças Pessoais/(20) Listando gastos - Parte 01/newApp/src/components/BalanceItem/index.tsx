import { useMemo } from "react"
import { BalanceInfo } from "../../app/(home)"
import { Balance, Container, Label } from "./styles"

type Props = {
   data: BalanceInfo
}
export const BalanceItem = ({ data }: Props) => {
   const labelName = useMemo(() => {
      if (data.tag === 'saldo') {
         return {
            label: 'Saldo atual',
            color: '3D3DBF'
         }
      } else if (data.tag === 'receita') {
         return {
            label: 'Entradas de hoje',
            color: '0DB94A'
         }
      } else {
         return {
            label: 'Saídas de hoje',
            color: 'EF463A'
         }
      }
   }, [data])

   return (
      <Container bg={labelName.color}>
         <Label>{labelName.label}</Label>
         <Balance>R$ {data.saldo}</Balance>
      </Container>
   )
}