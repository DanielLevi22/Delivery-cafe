import styled from 'styled-components'

export const ButtonStatus = {
  primary: 'primary',
  secondary: 'secondary',
  state: 'state',
} as const

export interface ButtonPropsVariant {
  variant: keyof typeof ButtonStatus
}

export const ContainerButton = styled.button<ButtonPropsVariant>`
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 6px;
  text-transform: uppercase;

  padding: ${(props) => props.variant === 'primary' && '12px 8px'};
  padding: ${(props) => props.variant === 'state' && '8px'};

  color: ${(props) => props.variant === 'primary' && props.theme.white};

  font-weight: ${(props) => props.variant === 'primary' && 'bold'};

  background-color: ${(props) =>
    props.variant === 'primary' && props.theme.yellow};
  background-color: ${(props) =>
    props.variant === 'state' && props.theme['purple-dark']};
  &:focus {
    box-shadow: 0 0 0;
  }
  &:hover {
    background-color: ${(props) =>
      props.variant === 'secondary' && props.theme['base-hover']};
    background-color: ${(props) =>
      props.variant === 'primary' && props.theme['yellow-dark']};
    background-color: ${(props) =>
      props.variant === 'state' && props.theme.purple};
  }

  padding: ${(props) => props.variant === 'secondary' && '6.5px 8px'};
  background-color: ${(props) =>
    props.variant === 'secondary' && props.theme['base-button']};
`
