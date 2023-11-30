import { ShoppingCart } from 'phosphor-react'
import { ButtonCart } from './style'
import { useCart } from '../../context/cartContext'
import { Link } from 'react-router-dom'

export function Cart() {
  const cart = useCart()

  return (
    <Link to={`order`}>
      <ButtonCart>
        <ShoppingCart size={22} weight="fill" color="#C47F17" />
        {cart?.cart.length}
      </ButtonCart>
    </Link>
  )
}
