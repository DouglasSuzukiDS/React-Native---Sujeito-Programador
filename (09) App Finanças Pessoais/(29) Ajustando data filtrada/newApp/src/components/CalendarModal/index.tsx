import { Dispatch, SetStateAction, useState } from "react"
import { ButtonFilter, ButtonFilterText, Container, ModalContent } from "./styles"
import { TouchableWithoutFeedback } from "react-native-gesture-handler"
import { View } from "react-native"
import { Calendar, LocaleConfig } from "react-native-calendars"
import { ptBR } from "./localeCalendar"

type Props = {
   setVisible: Dispatch<SetStateAction<boolean>>
   handleFilter: (date: Date) => void
}

type MarkedDates = {
   [key: string]: {
      selected: boolean
      selectedColor: string
      textColor: string
   }
}

LocaleConfig.locales['pt-br'] = ptBR
LocaleConfig.defaultLocale = 'pt-br'

export const CalendarModal = ({ setVisible, handleFilter }: Props) => {
   const [dateNow, setDateNow] = useState(new Date())
   const [markedDates, setMarkedDates] = useState<MarkedDates>({})

   const hanleOnDayPress = (date: { dateString: string }) => {
      // console.log(date.dateString)
      setDateNow(new Date(date.dateString))
      let markedDay: MarkedDates = {}

      markedDay[date.dateString] = {
         selected: true,
         selectedColor: '#3B3DBF',
         textColor: '#FFF'
      }

      setMarkedDates(markedDay)
   }

   const handleFilterDate = () => {
      handleFilter(dateNow)
      setVisible(false)
   }

   return (
      <Container>
         <TouchableWithoutFeedback onPress={() => setVisible(false)}>
            <View style={{ flex: 1 }}></View>
         </TouchableWithoutFeedback>

         <ModalContent>
            <Calendar
               onDayPress={hanleOnDayPress}
               markedDates={markedDates}
               enableSwipeMonths={true}
               theme={{
                  todayTextColor: '#F00',
                  selectedBackgroundColor: '#00ADF5',
                  selectedDayTextColor: '#FFF'
               }}
            />

            <ButtonFilter onPress={handleFilterDate}>
               <ButtonFilterText>Filtrar</ButtonFilterText>
            </ButtonFilter>
         </ModalContent>
      </Container >
   )
}