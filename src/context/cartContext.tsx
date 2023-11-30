import {
  Dispatch,
  ReactNode,
  createContext,
  useContext,
  useReducer,
} from 'react'
import { CartActions, CartItem, cartReducer } from '../reducers/CartReducer'

interface CartContextProps {
  cart: CartItem[]
  dispatch: Dispatch<CartActions>
}

export const CartContext = createContext<CartContextProps | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, dispatch] = useReducer(cartReducer, [])
  // (cartState) => {
  //   const storedStateAsJSON = localStorage.getItem(
  //     '@coffee-delivery:cart-state-1.0.0',
  //   )
  //   if (storedStateAsJSON) {
  //     return JSON.parse(storedStateAsJSON)
  //   }
  //   return cartState
  // })

  // useEffect(() => {
  //   if (cart) {
  //     const stateJSON = JSON.stringify(cart)

  //     localStorage.setItem('@coffee-delivery:cart-state-1.0.0', stateJSON)
  //   }
  // }, [cart])
  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}
