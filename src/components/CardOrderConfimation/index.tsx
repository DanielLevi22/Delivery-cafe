import { Trash } from 'phosphor-react'
import { Button } from '../Button'
import { CartAccount } from '../CartAccount'
import {
  ContainerButton,
  CotnainerCardOrderConfimation,
  Description,
} from './style'
import { Separator } from '../Separator'
import { useCart } from '../../context/cartContext'

export function CardOrderConfimation() {
  const cafe = useCart()

  return (
    <div>
      {cafe?.cart.map((item) => (
        <div key={item.coffee.id}>
          <CotnainerCardOrderConfimation>
            <img src={item.coffee.image} alt="" width={64} />
            <Description>
              <h1>{item.coffee.title}</h1>
              <ContainerButton>
                <CartAccount cafeId={item.coffee.id} />
                <Button
                  variant="secondary"
                  content="Remover"
                  icon={<Trash size={16} color="#8047F8" />}
                />
              </ContainerButton>
            </Description>
            <div>{item.coffee.price}</div>
          </CotnainerCardOrderConfimation>
          <Separator />
        </div>
      ))}
    </div>
  )
}
