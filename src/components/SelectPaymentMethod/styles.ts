import styled from 'styled-components'

export const ContainerSelectPaymentMethod = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 16px;
  background-color: ${(props) => props.theme['base-button']};
  border-radius: 6px;
`

export const TypeMthod = styled.div`
  font-size: 12px;
  color: ${(props) => props.theme['base-text']};
  text-transform: uppercase;
`
