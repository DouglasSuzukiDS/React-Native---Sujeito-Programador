import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from "react";
import { ProductType } from "../types/product";
import { Cart } from "../types/cartItem";

type CartContextType = {
   cart: Cart[]
   setCart: Dispatch<SetStateAction<Cart[]>>
   addItemCart: (newItem: ProductType) => void
   removeCartItem: (item: Cart) => void
}

type Props = {
   children: ReactNode
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

   const removeCartItem = (product: ProductType) => {
      const indexItem = cart.findIndex(item => item.id === product.id)

      if (cart[indexItem]?.amount > 1) {
         let cartList = [...cart]

         cartList[indexItem].amount = cartList[indexItem].amount - 1

         cartList[indexItem].total = cartList[indexItem].total * cartList[indexItem].price

         setCart(cartList)
         // console.log(cartList)
         return
      }

      const removeItem = cart.filter(item => item.id !== product.id)

      setCart(removeItem)
      // console.log(removeItem)
   }

   return (
      <CartContext.Provider value={{ cart, setCart, addItemCart, removeCartItem }}>
         {children}
      </CartContext.Provider>
   )
}

export const useCart = () => {
   const cart = useContext(CartContext)

   if (!cart) throw new Error('useCart must be used within a CartProvider')

   return cart
}