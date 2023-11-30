import styled from 'styled-components'

export const CotnainerCardOrderConfimation = styled.div`
  padding: 8px 4px;
  display: flex;
  align-items: start;
`
export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-left: 20px;
  margin-right: 50px;

  h1 {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 16px;
  }
`

export const ContainerButton = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`
