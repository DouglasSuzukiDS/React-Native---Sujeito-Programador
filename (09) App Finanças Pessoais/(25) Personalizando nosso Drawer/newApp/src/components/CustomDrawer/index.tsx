import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer"
import { Image, StyleSheet, Text, View } from "react-native"
import { useAuth } from "../../contexts/auth"
import { router } from "expo-router"

export const CustomDrawer = (props: DrawerContentComponentProps) => {
   const { user, signOut } = useAuth()

   return (
      <DrawerContentScrollView {...props}>
         <View style={styles.view}>
            <Image
               source={require('../../assets/Logo.png')}
               style={styles.image}
               resizeMode="contain"
            />

            <Text style={styles.welcome}>
               Bem vindo
            </Text>

            <Text
               numberOfLines={1}
               style={styles.text}>
               {user && user?.name}
            </Text>
         </View>

         <DrawerItemList {...props} />

         <DrawerItem
            label={'Sair do App'}
            onPress={() => signOut()}
            {...props} />
      </DrawerContentScrollView>
   )
}

const styles = StyleSheet.create({
   view: {
      alignItems: "center",
      justifyContent: "center",
      marginTop: 25
   },

   image: {
      width: 90,
      height: 90,
   },

   welcome: {
      fontSize: 18,
      marginTop: 14
   },

   text: {
      fontSize: 17,
      fontWeight: 'bold',
      marginBottom: 14,
      paddingHorizontal: 20
   }
})