import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import {
  Bairro,
  Cep,
  ContainerFormAddresses,
  ContainerFormConfirmationOrder,
  ContainerFormPagato,
  ContainerFormPagatoDescription,
  ContainerFormPagatoHeader,
  ContainerForms,
  ContainerOrderConfirmation,
  ContainerSection1,
  ContainerSection2,
  ContainerTotalItem,
  ContentFormAddresses,
  FormAddressesHeader,
  FormAddressesfooter,
  Numero,
  SelectPagato,
  TaxaEntrega,
  TotalAcount,
  TotalItem,
} from './style'
import { Input } from '../../components/Input'
import { SelectPaymentMethod } from '../../components/SelectPaymentMethod'
import { CardOrderConfimation } from '../../components/CardOrderConfimation'
import { Button } from '../../components/Button'

export function OrderConfirmation() {
  return (
    <ContainerOrderConfirmation>
      <ContainerForms>
        <ContainerSection1>
          <h1>Complete seu pedido</h1>
          <ContainerFormAddresses>
            <FormAddressesHeader>
              <MapPinLine size={22} color="#C47F17" weight="fill" />
              <ContentFormAddresses>
                <span>Endereço de Entrega</span>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </ContentFormAddresses>
            </FormAddressesHeader>

            <FormAddressesfooter>
              <Cep>
                <Input />
              </Cep>
              <Input />
              <Numero>
                <Input />
                <Input />
              </Numero>
              <Bairro>
                <Input />
                <Input />
                <Input />
              </Bairro>
            </FormAddressesfooter>
          </ContainerFormAddresses>

          <ContainerFormPagato>
            <ContainerFormPagatoHeader>
              <CurrencyDollar size={22} color="#8047F8" weight="fill" />
              <ContainerFormPagatoDescription>
                <span>Pagamento</span>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </ContainerFormPagatoDescription>
            </ContainerFormPagatoHeader>

            <SelectPagato>
              <SelectPaymentMethod />
              <SelectPaymentMethod />
              <SelectPaymentMethod />
            </SelectPagato>
          </ContainerFormPagato>
        </ContainerSection1>

        <ContainerSection2>
          <h1>Cafés selecionados</h1>
          <ContainerFormConfirmationOrder>
            <CardOrderConfimation />
            <CardOrderConfimation />

            <ContainerTotalItem>
              <TotalItem>
                <div>Total de itens</div>
                <span>R$ 29,70</span>
              </TotalItem>
              <TaxaEntrega>
                <div>Entrega</div>
                <span>R$ 3,50</span>
              </TaxaEntrega>
              <TotalAcount>
                <div>Total</div>
                <span>R$ 33,20</span>
              </TotalAcount>
            </ContainerTotalItem>

            <Button variant="primary" content="confirmar pedido" />
          </ContainerFormConfirmationOrder>
        </ContainerSection2>
      </ContainerForms>
    </ContainerOrderConfirmation>
  )
}
