import styled from 'styled-components'

export const ContainerInput = styled.div`
  position: relative;
`

export const Label = styled.label`
  position: absolute;
  top: 50%;
  left: 10px;

  transform: translateY(-50%);
  pointer-events: none;
  font-family: Roboto;
  font-size: 14px;
  color: ${(props) => props.theme['base-label']};
  line-height: 130%;
`

export const Input = styled.input`
  border: 0;
  padding: 12px;
  border-radius: 4px;

  width: 100%;
  text-align: right;
  background-color: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-text']};

  &:focus {
    text-align: left;
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme['yellow-dark']};

    &::placeholder {
      color: transparent;
    }
  }
  &:not(:placeholder-shown) {
    text-align: left;
  }

  &:focus + ${Label}, &:not(:placeholder-shown) + ${Label} {
    opacity: 0;
  }
`
