import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";
import { ProductType } from "../types/product";

type CartContextType = {
   cart: ProductType[]
   setCart: Dispatch<SetStateAction<ProductType[]>>
}

export const CartContext = createContext<CartContextType | null>(null)

type Props = {
   children: ReactNode
}
export const CartProvider = ({ children }: Props) => {
   const [cart, setCart] = useState<ProductType[]>([])

   return (
      <CartContext.Provider value={{ cart, setCart }}>
         {children}
      </CartContext.Provider>
   )
}

export const useCart = () => {
   const cart = useContext(CartContext)

   if (!cart) throw new Error('useCart must be used within a CartProvider')

   return cart
}