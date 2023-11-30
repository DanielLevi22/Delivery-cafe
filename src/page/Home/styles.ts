import styled from 'styled-components'

export const ContainerHome = styled.div`
  width: 1120px;
  margin: auto;
  padding-bottom: 50px;
`

export const FirstSesscionHome = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 56px;
`
export const SessionTitles = styled.h1`
  font-family: 'Baloo 2', sans-serif;
  color: ${(props) => props.theme['base-title']};
  font-weight: 800;
  font-size: 48px;
  line-height: 130%;
`
export const SessionSubtitle = styled.h1`
  color: ${(props) => props.theme['base-subtitle']};
  margin-top: 16px;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
`
export const ContainerItem = styled.div`
  margin-top: 66px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px 40px;
`
export const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
`

export const Banner = styled.div`
  justify-self: end;
`

export const SecondSessesion = styled.section`
  margin-top: 140px;
`
export const SecondSessesionTitle = styled.h1`
  font-family: 'Baloo 2', sans-serif;
  font-size: 32px;
  font-weight: 800;
  line-height: 130%;
  color: ${(props) => props.theme['base-subtitle']};
`

export const SessionCardsCafe = styled.div`
  margin-top: 54px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px 32px;
  div {
    border-radius: 6px;
  }
`
