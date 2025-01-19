import { useEffect, useRef, useState } from "react";
import { Button, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MapView, { Callout, Marker } from 'react-native-maps'
import { getCurrentPositionAsync, LocationObject, requestForegroundPermissionsAsync } from 'expo-location'
import { Pin } from "../components/pin";

export default function Home() {
   // Referencia https://www.youtube.com/watch?v=7DY1tHHudtM&ab_channel=Rocketseat
   const [location, setLocation] = useState<LocationObject | null>(null)
   /*const getPermission = async () => {
      const { granted } = await requestForegroundPermissionsAsync()

      if (granted) {
         const curretPossion = await getCurrentPositionAsync()
         setLocation(curretPossion)
         console.log(curretPossion.coords)
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
   //const [region, setRegion] = useState<Region | null>(null)
   /*{ // Dados iniciais
      latitude: 23.5492243,
      longitude: -46.5813785,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
   }*/

   const [markers, setMarkers] = useState([
      { key: 0, aviso: 'Cuidado', coods: { latitude: -15.8080374, longitude: -47.8750231 }, pinColor: '#F00' },

      { key: 1, aviso: 'Tranquilo', coods: { latitude: -15.8380374, longitude: -47.8850231 }, pinColor: '#0F0' },

      { key: 2, aviso: 'Cuidado', coods: { latitude: -15.8480374, longitude: -47.8950231 }, pinColor: '#00F' },

      { key: 3, aviso: 'Tranquilo', coods: { latitude: -23.5492243, longitude: -46.5813785 }, pinColor: '#0FF' },

      { key: 4, aviso: 'Tranquilo', coods: { latitude: -23.606966982022893, longitude: -46.66390204888366 }, pinColor: '#0F0' },
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
      setMarkers([...markers, {
         key: markers.length,
         // image: require('../assets/carro.png'),
         aviso: 'Tranquilo',
         coods: {
            latitude: e.nativeEvent.coordinate.latitude,
            longitude: e.nativeEvent.coordinate.longitude,
         },
         pinColor: '#F00',
      }])
   }

   const [region, setRegion] = useState<LocationObject | null>(null)
   const map = useRef<MapView>(null)
   const getPosition = async () => {
      // Referencia https://www.youtube.com/watch?v=7DY1tHHudtM&ab_channel=Rocketseat
      // Talvez por conta Expo, pegar a localização só funcionou com o codigo abaixo
      const { granted } = await requestForegroundPermissionsAsync()

      if (granted) {
         const curretPossion = await getCurrentPositionAsync()

         setRegion(curretPossion)
         // console.log(curretPossion.coords)
      }

      // Codigo usado na aula nao funcionou
      /*await navigator.geolocation.getCurrentPosition(
         async ({ coords: { latitude, longitude } }) => {
            setRegion({
               latitude,
               longitude,
               latitudeDelta: 0.0922,
               longitudeDelta: 0.0421,
            })
         },
         () => { }, // Caso der erro
         {
            timeout: 2000,
            maximumAge: 1000,
         }
      )*/
   }

   useEffect(() => {
      getPosition()
   }, [])

   return (
      <SafeAreaView style={styles.container}>
         <Text>Maps</Text>

         {region && (
            <MapView
               ref={map}
               style={styles.maps}
               region={{
                  latitude: region.coords.latitude,
                  longitude: region.coords.longitude,
                  latitudeDelta: 0.0015,
                  longitudeDelta: 0.0121,
               }}
               showsUserLocation
               loadingEnabled>
               {markers.map(marker => (
                  <Marker
                     key={marker.key}
                     coordinate={marker.coods}>
                     <Pin aviso={marker.aviso} corFundo={marker.pinColor} />

                     <Callout tooltip={true}>
                        <View style={{ backgroundColor: '#DDD', width: 200, height: 150 }}>
                           <Text style={{ fontSize: 18 }}>Hello World</Text>
                        </View>
                     </Callout>

                  </Marker>
               ))}
            </MapView>
         )}

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