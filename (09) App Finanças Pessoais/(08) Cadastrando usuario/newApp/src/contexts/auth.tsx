import { createContext, ReactNode, useState } from "react";
import { api } from "../services/api";
import { router } from "expo-router";

export type User = {
   nome: string
   email: string
   password: string
};

type AuthContextType = {
   user: User
   setUser: (user: User) => void
   signUp: (nome: string, email: string, password: string) => void
};

export const AuthContext = createContext<AuthContextType | null>(null);

type Props = {
   children: ReactNode
};

export const AuthProvider = ({ children }: Props) => {
   const initialValue = {
      nome: '',
      email: '',
      password: ''
   };

   const [user, setUser] = useState<User>(initialValue);

   const signUp = async (nome: string, email: string, password: string) => {
      try {
         api.post('/users', {
            nome,
            email,
            password
         })

         router.navigate('/')
      } catch (err) {
         console.log('Erro ao cadastrar', err)
      }
   }

   return (
      <AuthContext.Provider value={{ user, setUser, signUp }}>
         {children}
      </AuthContext.Provider>
   )
}