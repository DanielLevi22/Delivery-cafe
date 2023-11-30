import styled from 'styled-components'

export const ContainerCardCafe = styled.div`
  padding: 0px 20px 0px;
  border-radius: 6px 36px;
  background-color: ${(props) => props.theme['base-card']};
  max-width: 256px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20px;

  img {
    margin-top: -20px;
  }

  h1 {
    margin-top: 20px;
    color: ${(props) => props.theme['base-subtitle']};
    font-family: Baloo 2;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
  }

  p {
    text-align: center;
    margin-top: 6px;
    color: ${(props) => props.theme['base-label']};
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }
`

export const ButtonAddCart = styled.button`
  border: 0;
  background: transparent;
  padding: 8px;
  border-radius: 6px;
  background-color: ${(props) => props.theme['purple-dark']};
  :focus {
    box-shadow: 0 0 0;
  }
`
export const ContainerTypeCaffe = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
`
export const TypeCafe = styled.div`
  padding: 4px 8px;
  margin-top: 16px;
  background-color: ${(props) => props.theme['yellow-light']};
  border-radius: 6px;

  color: ${(props) => props.theme['yellow-dark']};
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  background-color: ${(props) => props.theme['yellow-light']};
`

export const CardCafeValor = styled.div`
  margin-top: 34px;
  display: flex;
  align-items: center;
  gap: 24px;

  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  strong {
    margin-left: 2px;
    font-family: Baloo 2;
    font-size: 24px;
    font-style: normal;
    font-weight: 800;
    line-height: 130%;
  }
`

export const CardCafeAcount = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`
