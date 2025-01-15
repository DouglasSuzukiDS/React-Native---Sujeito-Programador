import { StatusBar, TouchableOpacity, View } from "react-native";
import { useAuth } from "../../contexts/auth";
import { Area, Background, List, ListBalance, Title } from "./styles/styles";
import { Header } from "../../components/Header";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { format } from "date-fns";
import { api } from "../../services/api";
import { useIsFocused } from "@react-navigation/native";
import { BalanceItem } from "../../components/BalanceItem";
import Icon from '@expo/vector-icons/MaterialIcons'
import { HistoricoList } from "../../components/HistoricoList";

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

export type Movement = {
   id: string
   description: string
   value: number
   type: string
   date: string
   created_at: string
   updated_at: string
   user_id: string
}

type GetMovements = {
   dateMovements: Date,
   isActive: boolean
   setListBalance: Dispatch<SetStateAction<Balance>>
}

export default function Home() {
   const { user, signOut } = useAuth()
   const [listBalance, setListBalance] = useState<Balance[]>([])
   // const [isActive, setIsActive] = useState(true)
   const [movements, setMovements] = useState<Movement[]>([])

   let isActive = true

   const [dateMovements, setDateMovements] = useState(new Date())

   const isFocused = useIsFocused() // Caso o elemento estiver em focus

   const getMovements = async () => {
      let dateFormated = format(dateMovements, 'dd/MM/yyyy')

      const balance = await api.get('/balance', {
         params: {
            date: dateFormated
         }
      })

      const receives = await api.get('/receives', {
         params: {
            date: dateFormated
         }
      })

      // console.log(balance.data)
      if (isActive) {
         setListBalance(balance.data)
         setMovements(receives.data)
      }
   }

   const handleDelete = async (id: string) => {
      try {
         await api.delete('/receives/delete', {
            params: { item_id: id }
         })

         setDateMovements(new Date())
      } catch (err) {
         console.log(err)
      }
   }


   useEffect(() => {
      getMovements()
      // alert('Ok')
      //setIsActive(false)

      return () => { isActive = false }
   }, [isFocused, dateMovements])

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

         <Area>
            <TouchableOpacity>
               <Icon name="event" color={'#121212'} size={30} />
            </TouchableOpacity>

            <Title>Últimas movimentações</Title>
         </Area>

         <List
            data={movements}
            keyExtractor={(item: Movement) => item.id}
            renderItem={({ item }: { item: Movement }) => <HistoricoList data={item} deleteItem={() => handleDelete(item.id)} />}
            showVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 10 }}
         />
      </Background>
   )
}