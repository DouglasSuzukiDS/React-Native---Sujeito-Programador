import { StyleSheet, Text, View } from "react-native"

type Props = {
   aviso: string
   corFundo: string
}
export const Pin = ({ aviso, corFundo }: Props) => {
   return (
      <View style={[styles.viewMarker, { backgroundColor: corFundo }]}>
         <Text style={styles.textMarker}>{aviso}</Text>
      </View>
   )
}

const styles = StyleSheet.create({
   viewMarker: {
      height: 40,
      padding: 5,
      alignContent: 'center',
      justifyContent: 'center',
      borderRadius: 5
   },

   textMarker: {
      color: '#FFF'
   }
});