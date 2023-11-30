import cafe from '../../../public/images/Type=Café com Leite.png'
import { CardCafeAcount } from '../CardCafe/style'

export function CardCafeChekout() {
  return (
    <div>
      <img src={cafe} alt="cafe" width={64} />
      <div>
        <span>Expresso Tradicional</span>
        <div>
          <CardCafeAcount />
        </div>
      </div>
    </div>
  )
}
