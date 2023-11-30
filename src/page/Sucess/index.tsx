import {
  CardSucess,
  ContainerCard,
  ContainerContent,
  ContainerSucess,
  SectionSucess,
  SucessTitle,
} from './style'
import motoca from '../../../public/moqueiro.svg'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { Icon } from '../../components/Icon'
export function Sucess() {
  return (
    <ContainerSucess>
      <SectionSucess>
        <SucessTitle>
          <h1>Uhu! Pedido confirmado</h1>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </SucessTitle>

        <ContainerCard>
          <CardSucess>
            <ul>
              <li>
                <Icon icon={<MapPin size={16} />} variant="primary" />
                <ContainerContent>
                  <div>
                    Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
                  </div>
                  <p>Farrapos - Porto Alegre, RS</p>
                </ContainerContent>
              </li>
              <li>
                <Icon icon={<CurrencyDollar size={16} />} variant="secondary" />
                <ContainerContent>
                  <div>Previsão de entrega</div>
                  <strong>20 min - 30 min </strong>
                </ContainerContent>
              </li>
              <li>
                <Icon icon={<Timer size={16} />} variant="tertiary" />
                <ContainerContent>
                  <div>Pagamento na entrega</div>
                  <strong>Cartão de Crédito</strong>
                </ContainerContent>
              </li>
            </ul>
          </CardSucess>
          <div>
            <img src={motoca} alt="" />
          </div>
        </ContainerCard>
      </SectionSucess>
    </ContainerSucess>
  )
}
