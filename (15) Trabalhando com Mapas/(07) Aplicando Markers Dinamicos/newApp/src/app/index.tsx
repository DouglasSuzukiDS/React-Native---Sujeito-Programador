import { useEffect, useState } from "react";
import { Button, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MapView, { Marker } from 'react-native-maps'

export default function Home() {
   // Referencia https://www.youtube.com/watch?v=7DY1tHHudtM&ab_channel=Rocketseat
   /*const [location, setLocation] = useState<LocationObject | null>(null)
   const getPermission = async () => {
      const { granted } = await requestForegroundPermissionsAsync()

      if (granted) {
         const curretPossion = await getCurrentPositionAsync()
         setLocation(curretPossion)
         console.log(curretPossion)
      }

      console.log('Permissão para usar a localização concedida')
   }

   useEffect(() => {
      getPermission()
   }, [])*/

   type Region = {
      latitude: number,
      longitude: number,
      latitudeDelta: number,
      longitudeDelta: number,
   }
   const [region, setRegion] = useState<Region>({
      latitude: -23.5492243,
      longitude: -46.5813785,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
   })

   const [markers, setMarkers] = useState([
      { key: 0, coods: { latitude: -15.8080374, longitude: -47.8750231 }, pinColor: '#F00' },
      { key: 1, coods: { latitude: -15.8380374, longitude: -47.8850231 }, pinColor: '#0F0' },
      { key: 2, coods: { latitude: -15.8480374, longitude: -47.8950231 }, pinColor: '#00F' },
      { key: 3, coods: { latitude: -23.5492243, longitude: -46.5813785 }, pinColor: '#0F0' },
      { key: 4, coods: { latitude: -23.606966982022893, longitude: -46.66390204888366 }, pinColor: '#0F0' },
   ])

   // SP => -23.5492243 -46.5813785
   // DF => -15.8080374 -47.8750231
   // CG => -20.4695225 -54.6016767
   // latitudeDelta: 0.0922,
   // longitudeDelta: 0.0421

   const moverCidade = (latitude: number, longitude: number) => {
      setRegion({
         latitude,
         longitude,
         latitudeDelta: 0.0922,
         longitudeDelta: 0.0421,
      })
   }

   const newMarker = (e: any) => {
      e.stopPropagation()
      markers.push({
         key: markers.length,
         coods: {
            latitude: e.nativeEvent.coordinate.latitude,
            longitude: e.nativeEvent.coordinate.longitude,
         },
         pinColor: '#F00',
      })
   }

   return (
      <SafeAreaView style={styles.container}>
         <Text>Maps</Text>

         <Text>{region.latitude | region.latitude}</Text>

         <View style={{ flexDirection: 'row' }}>
            <Button
               title="Brasilia"
               onPress={() => moverCidade(-15.8080374, -47.8750231)} />

            <Button
               title="São Paulo"
               onPress={() => moverCidade(-23.5492243, -46.5813785)} />
         </View>

         <MapView
            style={styles.maps}
            region={region}
            onPress={e => newMarker(e)}
            onPoiClick={(e) => console.log('dd')}>
            {markers.map(marker => (
               <Marker
                  key={marker.key}
                  coordinate={marker.coods}
                  pinColor={marker.pinColor} />
            ))}
         </MapView>

      </SafeAreaView>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: 'center',
   },

   maps: {
      flex: 1,
      width: '100%',
   }
});