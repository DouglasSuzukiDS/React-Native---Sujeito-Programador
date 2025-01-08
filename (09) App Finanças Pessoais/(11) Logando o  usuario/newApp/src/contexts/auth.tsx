import { createContext, ReactNode, useContext, useState } from "react";
import { api } from "../services/api";
import { router } from "expo-router";
import axios from "axios";

export type User = {
   id: string
   name: string
   email: string
};

type AuthContextType = {
   signed: boolean
   user: User | null
   setUser: (user: User) => void
   loadingAuth: boolean
   signUp: (name: string, email: string, password: string) => void
   signIn: (email: string, password: string) => void
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

      try {
         const response = await api.post('/login', {
            email,
            password
         })

         const { id, name, token } = response.data

         const data = {
            id,
            name,
            email,
            token
         }

         // Seta o token nas requisições da API
         api.defaults.headers['Authorization'] = `Bearer ${token}`

         setUser({
            id,
            name,
            email
         })

         setLoadingAuth(false)

         // router.navigate('(home)')
      } catch (err) {
         setLoadingAuth(false)
         console.log('Erro ao logar', err)
         alert('Email/Senha inválido(s).')
      }
   }

   return (
      // signed: !!user => Converte a varivel para um boolean, se possui dados vira true, se não tiver vira false
      <AuthContext.Provider value={{ signed: !!user, user, setUser, loadingAuth, signUp, signIn }}>
         {children}
      </AuthContext.Provider>
   )
}

export const useAuth = () => {
   const context = useContext(AuthContext)

   if (!context) throw new Error('useAuth must be used within an AuthProvider')

   return context as AuthContextType
}