import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from "react";
import { ProductType } from "../types/product";

type CartContextType = {
   cart: Cart[]
   setCart: Dispatch<SetStateAction<Cart[]>>
   addItemCart: (newItem: ProductType) => void
}

type Props = {
   children: ReactNode
}

type Cart = ProductType & {
   amount: number,
   total: number
}

export const CartContext = createContext<CartContextType | null>(null)

export const CartProvider = ({ children }: Props) => {
   const [cart, setCart] = useState<Cart[]>([])

   const addItemCart = (newItem: ProductType) => {
      const indexItem = cart.findIndex(item => item.id === newItem.id)

      // Caso não exista
      if (indexItem !== -1) {
         // console.log('Este item ja existe')

         // let cartList = cart => Codigo original mas a quantia de itens no carrinho nao e somada
         let cartList = [...cart]

         cartList[indexItem].amount = cartList[indexItem].amount + 1

         cartList[indexItem].total = cartList[indexItem].amount * cartList[indexItem].price

         setCart(cartList)
         console.log(cartList)
         return
      }

      // Caso existir
      let data = {
         ...newItem,
         amount: 1,
         total: newItem.price
      }

      setCart(products => [...products, data])
      console.log([...cart, data])
   }

   return (
      <CartContext.Provider value={{ cart, setCart, addItemCart }}>
         {children}
      </CartContext.Provider>
   )
}

export const useCart = () => {
   const cart = useContext(CartContext)

   if (!cart) throw new Error('useCart must be used within a CartProvider')

   return cart
}