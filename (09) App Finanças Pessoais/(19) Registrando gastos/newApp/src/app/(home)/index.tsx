import { StatusBar } from "react-native";
import { useAuth } from "../../contexts/auth";
import { Background, ListBalance } from "./styles/styles";
import { Header } from "../../components/Header";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { format } from "date-fns";
import { api } from "../../services/api";
import { useIsFocused } from "@react-navigation/native";
import { BalanceItem } from "../../components/BalanceItem";
import { useFocusEffect } from "expo-router";

export type Balance = {
   description: string
   value: number,
   type: string,
   date: string,
}

export type BalanceInfo = {
   tag: string
   saldo: number,
}

type GetMovements = {
   dateMovements: Date,
   isActive: boolean
   setListBalance: Dispatch<SetStateAction<Balance>>
}

export default function Home() {
   const { user, signOut } = useAuth()
   const [listBalance, setListBalance] = useState<Balance[]>([])
   const [isActive, setIsActive] = useState(true)

   // let isActive = true

   const [dateMovements, setDateMovements] = useState(new Date())

   const isFocused = useIsFocused() // Caso o elemento estiver em focus

   const getMovements = async () => {
      let dateFormated = format(dateMovements, 'dd/MM/yyyy')

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
      // alert('Ok')
      // setIsActive(false)

      // return () => { isActive = false }
   }, [isFocused])

   return (
      <Background>
         {/* <StatusBar backgroundColor={'#F0F4FF'} barStyle={'dark-content'} /> */}
         <Header title="Minha movimentações" />

         <ListBalance
            data={listBalance}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item: BalanceInfo) => item.tag}
            renderItem={({ item }: { item: BalanceInfo }) => (
               <BalanceItem data={item} />
            )}
         />
      </Background>
   )
}