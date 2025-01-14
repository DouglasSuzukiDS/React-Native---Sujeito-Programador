import { useState } from "react"
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"

export type FeedItem = {
   id: string
   nome: string
   descricao: string
   imgperfil: string
   imgPublicacao: string
   likeada: boolean
   likers: number
}

export type Feed = {
   data: FeedItem
}
export const ListItem = ({ data }: Feed) => {
   const [feed, setFeed] = useState<FeedItem>(data)

   return (
      <View style={styles.areaFeed}>
         <View style={styles.viewPerfil}>
            <Image
               source={{ uri: feed.imgperfil }}
               style={styles.fotoPerfil} />

            <Text style={styles.nomeUsuario}>{feed.nome}</Text>
         </View>

         <Image
            source={{ uri: feed.imgPublicacao }}
            resizeMode="cover"
            style={styles.fotoPublicacao} />

         <View style={styles.areaBtn}>
            <TouchableOpacity>
               <Image
                  source={require('../img/like.png')}
                  style={styles.iconeIcon} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnSend}>
               <Image
                  source={require('../img/send.png')}
                  style={styles.iconeIcon} />
            </TouchableOpacity>
         </View>

         <View style={styles.viewRodape}>
            <Text style={styles.nomeRodape}>{feed.nome}</Text>

            <Text style={styles.descRodape}>{feed.descricao}</Text>
         </View>
      </View>
   )
}

const styles = StyleSheet.create({
   areaFeed: {
      flex: 1,
   },

   viewPerfil: {
      flexDirection: 'row',
      flex: 1,
      alignItems: 'center',
      padding: 8,
   },

   fotoPerfil: {
      width: 50,
      height: 50,
      borderRadius: 25,
      marginRight: 5
   },

   nomeUsuario: {
      fontSize: 22,
      textAlign: 'left',
      color: '#000'
   },

   fotoPublicacao: {
      flex: 1,
      height: 400,
      alignItems: 'center',
   },

   areaBtn: {
      flexDirection: 'row',
      padding: 5,
   },

   iconeIcon: {
      width: 30,
      height: 30,
      resizeMode: 'contain',
   },

   btnSend: {
      paddingLeft: 5,
   },

   viewRodape: {
      flexDirection: 'row',
      alignItems: 'center',
   },

   nomeRodape: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#000',
      paddingLeft: 5
   },

   descRodape: {
      paddingLeft: 15,
      fontSize: 15,
      color: '#000'
   }
})