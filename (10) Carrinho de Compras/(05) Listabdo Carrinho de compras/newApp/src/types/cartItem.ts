import { ProductType } from "./product"

export type Cart = ProductType & {
   amount: number,
   total: number
}