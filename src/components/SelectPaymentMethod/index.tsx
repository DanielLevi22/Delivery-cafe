import { CreditCard } from 'phosphor-react'
import { ContainerSelectPaymentMethod, TypeMthod } from './styles'

export function SelectPaymentMethod() {
  return (
    <ContainerSelectPaymentMethod>
      <div>
        <CreditCard size={16} color="#8047F8" />
      </div>
      <TypeMthod>Cartão de crédito</TypeMthod>
    </ContainerSelectPaymentMethod>
  )
}
