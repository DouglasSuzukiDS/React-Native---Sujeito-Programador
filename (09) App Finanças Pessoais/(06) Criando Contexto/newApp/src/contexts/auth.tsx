import { createContext, ReactNode, useState } from "react";

export type User = {
   nome: string
};

type AuthContextType = {
   user: User
   setUser: (user: User) => void
};

export const AuthContext = createContext<AuthContextType | null>(null);

type Props = {
   children: ReactNode
};

export const AuthProvider = ({ children }: Props) => {
   const [user, setUser] = useState<User>({ nome: 'Test' });

   return (
      <AuthContext.Provider value={{ user, setUser }}>
         {children}
      </AuthContext.Provider>
   )
}