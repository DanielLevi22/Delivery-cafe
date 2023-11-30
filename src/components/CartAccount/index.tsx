import { Minus, Plus } from 'phosphor-react'
import { ContainerCartAccount } from './styles'
import { useCart } from '../../context/cartContext'

interface CartAccountProps {
  cafeId?: number
}

export function CartAccount({ cafeId }: CartAccountProps) {
  const cart = useCart()

  function handleDecrementCofeInToCart() {
    cart?.dispatch({
      type: 'decrement',
      payload: {
        id: cafeId ?? 0,
      },
    })
  }
  function handleIncrementCofeInToCart() {
    cart?.dispatch({
      type: 'increment',
      payload: {
        id: cafeId ?? 0,
      },
    })
  }

  return (
    <ContainerCartAccount>
      <button onClick={handleDecrementCofeInToCart}>
        <Minus size={14} weight="fill" color="#8047F8" />s
      </button>
      <span>0</span>
      <button onClick={handleIncrementCofeInToCart}>
        <Plus size={14} weight="fill" color="#8047F8" />
      </button>
    </ContainerCartAccount>
  )
}
