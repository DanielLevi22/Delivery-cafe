import styled from 'styled-components'

export const ContainerOrderConfirmation = styled.div`
  width: 1120px;
  margin: auto;
  padding-bottom: 50px;
`

export const ContainerForms = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
`

export const ContainerFormAddresses = styled.div`
  padding: 40px;
  border-radius: 6px;
  background-color: ${(props) => props.theme['base-card']};
`
export const FormAddressesHeader = styled.div`
  display: flex;
  gap: 8px;
`

export const ContainerSection1 = styled.section`
  > h1 {
    color: ${(props) => props.theme['base-subtitle']};
    font-family: Baloo 2;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
    margin-bottom: 15px;
  }
`
export const ContainerSection2 = styled.section`
  > h1 {
    color: ${(props) => props.theme['base-subtitle']};
    font-family: Baloo 2;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
    margin-bottom: 15px;
  }
`
export const FormAddressesfooter = styled.div``

export const ContentFormAddresses = styled.div`
  div span {
    color: ${(props) => props.theme['base-subtitle']};
  }

  p {
    font-size: 14px;
    color: ${(props) => props.theme['base-text']};
  }
`

export const Cep = styled.div`
  margin-top: 32px;
  max-width: 200px;
  margin-bottom: 16px;
`

export const Numero = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: center;
  gap: 12px;

  & > :first-child {
    max-width: 200px;
  }

  & > :last-child {
    flex: 1;
  }
`

export const Bairro = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: center;
  gap: 12px;

  & > :first-child {
    max-width: 200px;
  }

  & > :last-child {
    max-width: 60px;
  }
`

export const ContainerFormPagato = styled.div`
  margin-top: 12px;
  border-radius: 6px;
  background-color: ${(props) => props.theme['base-card']};
  padding: 40px;
`
export const ContainerFormPagatoHeader = styled.div`
  display: flex;
  gap: 8px;
`

export const ContainerFormPagatoDescription = styled.div`
  div span {
    color: ${(props) => props.theme['base-subtitle']};
  }

  p {
    font-size: 14px;
    color: ${(props) => props.theme['base-text']};
  }
`

export const SelectPagato = styled.div`
  margin-top: 32px;
  display: flex;
  align-items: center;
  gap: 12px;
`

export const ContainerFormConfirmationOrder = styled.div`
  padding: 40px;
  border-radius: 6px 44px;
  background-color: ${(props) => props.theme['base-card']};
`

export const ContainerTotalItem = styled.div`
  margin-bottom: 24px;
`
export const TotalItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${(props) => props.theme['base-text']};
`
export const TaxaEntrega = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${(props) => props.theme['base-text']};
`

export const TotalAcount = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${(props) => props.theme['base-subtitle']};
  font-size: 20px;
  font-weight: 700;
`
