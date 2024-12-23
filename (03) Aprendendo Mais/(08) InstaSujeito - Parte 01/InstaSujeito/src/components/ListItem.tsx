import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"

export type feedItem = {
   id: string
   nome: string
   descricao: string
   imgperfil: string
   imgPublicacao: string
   likeada: boolean
   likers: number
}

export type Feed = {
   data: feedItem
}
export const ListItem = ({ data }: Feed) => {
   return (
      <View style={styles.container}>
         <View style={styles.header}>
            <Image source={{ uri: data.imgperfil }} style={styles.profileImage} />

            <Text style={styles.profileName}>{data.nome}</Text>
         </View>

         <Image source={{ uri: data.imgPublicacao }} style={styles.publicationImage} />

         <View style={styles.footer}>
            <TouchableOpacity>
               <Image source={require('../img/like.png')} style={styles.icon} />
            </TouchableOpacity>

            <TouchableOpacity>
               <Image source={require('../img/send.png')} style={styles.icon} />
            </TouchableOpacity>
         </View>

         <Text style={styles.likes}>{data.likers} curtidas</Text>
         
         <Text style={styles.description}>{data.descricao}</Text>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
   },

   header: {

   },

   profileImage: {
      width: 50,
      height: 50,
      borderRadius: 25,
      marginLeft: 20,
   },

   profileName: {
      fontSize: 18,
      fontWeight: 'bold',
      marginLeft: 80,
   },

   publicationImage: {
      height: 400,
      alignItems: 'center',
   },


   footer: {
      flexDirection: 'row',
      padding: 5,
   },

   icon: {
      width: 30,
      height: 30,
      resizeMode: 'contain',
   },

   likes: {
      fontWeight: 'bold',
      marginLeft: 20,
   },

   description: {
      marginLeft: 20,
      marginRight: 20,
      marginBottom: 20,
   }
})