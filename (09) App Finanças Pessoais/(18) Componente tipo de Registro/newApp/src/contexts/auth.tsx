import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { router } from "expo-router";
import AsyncStorage from '@react-native-async-storage/async-storage';

export type User = {
   id: string
   name: string
   email: string
};

type AuthContextType = {
   signed: boolean
   user: User | null
   setUser: Dispatch<SetStateAction<User | null>>
   loadingAuth: boolean
   loading: boolean
   signUp: (name: string, email: string, password: string) => void
   signIn: (email: string, password: string) => void
   signOut: () => void
   loadStorage: () => void
};

export const AuthContext = createContext<AuthContextType | null>(null);

type Props = {
   children: ReactNode
};

export const AuthProvider = ({ children }: Props) => {
   const initialValue = {
      id: 'rgjmtrtf4185',
      name: 'James',
      email: 'james@email.com',
   };

   const [user, setUser] = useState<User | null>(null)
   const [loadingAuth, setLoadingAuth] = useState(false)
   const [loading, setLoading] = useState(true)

   const signUp = async (name: string, email: string, password: string) => {
      setLoadingAuth(true)

      try {
         const response = await api.post('/users', {
            name,
            email,
            password
         })

         console.log(response.data)
         setLoadingAuth(false)
         router.navigate('/')
      } catch (err) {
         setLoadingAuth(false)
         console.log('Erro ao cadastrar', err)
      }
   }

   const signIn = async (email: string, password: string) => {
      setLoadingAuth(true)

      const response = await api.post('/login', { email, password })

      const { id, name, token } = response.data

      try {
         await AsyncStorage.setItem('finToken', token)
            .then(() => {
               //alert('Salvado no Storage')

               api.defaults.headers['Authorization'] = `Bearer ${token}`

               setUser({ id, name, email })

               setLoadingAuth(false)

               router.navigate('(home)')
            })
            .catch((error) => {
               console.log(error)
            })
      } catch (err) {
         setLoadingAuth(false)
         console.log('Erro ao salvar token', err)
      }

      setLoading(false)
   }

   const signOut = async () => {
      await AsyncStorage.clear()
         .then(() => {
            setUser(null)

            router.navigate('(auth)')
         })
   }

   const loadStorage = async () => {
      const storageUser = await AsyncStorage.getItem('finToken')

      if (storageUser !== null) {
         const response = await api.get('/me', {
            headers: {
               'Authorization': `Bearer ${storageUser}`
            }
         })
            .catch(err => {
               setUser(null)
               console.log(err)
            })

         api.defaults.headers['Authorization'] = `Bearer ${storageUser}`

         if (response) {
            const { id, name, email } = response.data

            setUser({ id, name, email })

            setLoading(false)

            router.push('(home)')
         }
      }

      setLoading(false)
   }

   useEffect(() => {
      loadStorage()
   }, [])

   return (
      // signed: !!user => Converte a varivel para um boolean, se possui dados vira true, se não tiver vira false
      <AuthContext.Provider value={{ signed: !!user, user, setUser, loadingAuth, loading, signUp, signIn, signOut, loadStorage }}>
         {children}
      </AuthContext.Provider>
   )
}

export const useAuth = () => {
   const context = useContext(AuthContext)

   if (!context) throw new Error('useAuth must be used within an AuthProvider')

   return context as AuthContextType
}