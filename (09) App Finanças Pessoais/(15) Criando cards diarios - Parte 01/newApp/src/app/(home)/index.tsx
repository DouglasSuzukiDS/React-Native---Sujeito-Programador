import { StatusBar } from "react-native";
import { useAuth } from "../../contexts/auth";
import { Background } from "./styles/styles";
import { Header } from "../../components/Header";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import { api } from "../../services/api";

export type Balance = {
   description: string
   value: number,
   type: string,
   date: string,
}

export default function Home() {
   const { user, signOut } = useAuth()
   const [listBalance, setListBalance] = useState<Balance[]>([])
   const [isActive, setIsActive] = useState(true)

   const [dateMivements, setDateMivements] = useState(new Date())

   const getMovements = async () => {
      let dateFormated = format(dateMivements, 'dd/MM/yyyy')

      const balance = await api.get('/balance', {
         params: {
            date: dateFormated
         }
      })

      // console.log(balance.data)
      if (isActive) setListBalance(balance.data)
   }

   useEffect(() => {
      getMovements()

      setIsActive(false)
   }, [])

   return (
      <Background>
         {/* <StatusBar backgroundColor={'#F0F4FF'} barStyle={'dark-content'} /> */}
         <Header title="Minha movimentações" />
      </Background>
   )
}