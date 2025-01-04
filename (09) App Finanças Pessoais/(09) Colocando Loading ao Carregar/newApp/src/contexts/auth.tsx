import { createContext, ReactNode, useState } from "react";
import { api } from "../services/api";
import { router } from "expo-router";
import axios from "axios";

export type User = {
   name: string
   email: string
   password: string
};

type AuthContextType = {
   user: User
   setUser: (user: User) => void
   loadingAuth: boolean
   signUp: (name: string, email: string, password: string) => void
};

export const AuthContext = createContext<AuthContextType | null>(null);

type Props = {
   children: ReactNode
};

export const AuthProvider = ({ children }: Props) => {
   const initialValue = {
      name: '',
      email: '',
      password: ''
   };

   const [user, setUser] = useState<User>(initialValue)
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

   return (
      <AuthContext.Provider value={{ user, setUser, loadingAuth, signUp }}>
         {children}
      </AuthContext.Provider>
   )
}