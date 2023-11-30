import { ShoppingCart } from 'phosphor-react'
import { CartAccount } from '../CartAccount'
import {
  ButtonAddCart,
  CardCafeAcount,
  CardCafeValor,
  ContainerCardCafe,
  ContainerTypeCaffe,
  TypeCafe,
} from './style'
import { Coffee } from '../../types/Coffe'
import { useCart } from '../../context/cartContext'

interface CardCafeProps {
  coffe: Coffee[]
}

export function CardCafe({ coffe }: CardCafeProps) {
  const Cofe = useCart()

  function handleAddCofetoCart(coffee: Coffee) {
    Cofe?.dispatch({
      type: 'add',
      payload: coffee,
    })
  }
  console.log(Cofe?.cart.length)

  return (
    <>
      {coffe?.map((item) => {
        return (
          <ContainerCardCafe key={item.id}>
            <img src={item.image} alt="cafe" />
            <ContainerTypeCaffe>
              <TypeCafe>{item.tags[0]}</TypeCafe>
              {item.tags[1] && <TypeCafe>{item.tags[1]}</TypeCafe>}
              {item.tags[2] && <TypeCafe>{item.tags[2]}</TypeCafe>}
            </ContainerTypeCaffe>

            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <CardCafeValor>
              <div>
                R$
                <strong>{item.price}</strong>
              </div>
              <CardCafeAcount>
                <CartAccount cafeId={item.id} />
                <ButtonAddCart onClick={() => handleAddCofetoCart(item)}>
                  <ShoppingCart weight="fill" size={16} color="#fff" />
                </ButtonAddCart>
              </CardCafeAcount>
            </CardCafeValor>
          </ContainerCardCafe>
        )
      })}
    </>
  )
}
