import { Image, StyleSheet, Text, View } from "react-native"
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'

export const CustomDrawer = (props: DrawerContentComponentProps) => {
   return (
      <DrawerContentScrollView {...props}>
         <View style={styles.drawerContainer}>
            <Image
               source={require('../../assets/perfil.png')}
               style={styles.img}
            />

            <Text style={styles.text}>Bem-Vindo!</Text>
         </View>

         <DrawerItemList {...props} />
      </DrawerContentScrollView>
   )
}

const styles = StyleSheet.create({
   drawerContainer: {
      width: '100%',
      height: 85,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 30,
      marginBottom: 16
   },

   img: {
      width: 65,
      height: 65,
   },

   text: {
      color: '#000',
      fontSize: 18,
   },

})