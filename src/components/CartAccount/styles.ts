import styled from 'styled-components'

export const ContainerCartAccount = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 8px;

  background-color: ${(props) => props.theme['base-button']};
  border-radius: 6px;

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    :hover {
      svg {
        color: black;
      }
    }
  }
`
