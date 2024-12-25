import { Text, View } from "react-native"

export type Film = {
   id: number
   nome: string
   sinopse: string
   foto: string
}

type Props = {
   data: Film
}
export const FilmesItem = ({ data }: Props) => {
   return (
      <View>
         <Text>{data.nome}</Text>
      </View>
   )
}