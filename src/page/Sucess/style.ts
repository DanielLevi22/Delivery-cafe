import styled from 'styled-components'

export const ContainerSucess = styled.div`
  width: 1120px;
  margin: auto;
  padding-bottom: 50px;
`

export const SectionSucess = styled.section``

export const SucessTitle = styled.div`
  h1 {
    color: ${(props) => props.theme['yellow-dark']};
    font-family: Baloo 2;
    font-size: 32px;
    font-style: normal;
    font-weight: 800;
    line-height: 130%;
  }

  p {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }
`

export const ContainerCard = styled.div`
  display: flex;
  gap: 100px;
  margin-top: 40px;

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  li {
    display: flex;
    align-items: center;
    gap: 12px;
    font-family: Roboto;
    font-size: 16px;

    line-height: 130%;

    strong {
      font-weight: 700;
      color: ${(props) => props.theme['base-text']};
    }
  }
`
export const ContainerContent = styled.div`
  color: ${(props) => props.theme['base-text']};
`

export const CardSucess = styled.div`
  padding: 40px;
  border-radius: 6px 36px;
  border: 1px solid ${(props) => props.theme['yellow-light']};
`
