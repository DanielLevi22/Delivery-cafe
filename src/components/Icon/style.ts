import styled from 'styled-components'

export const STATUS_COLOR = {
  primary: 'yellow-dark',
  secondary: 'yellow',
  tertiary: 'purple',
  quaternary: 'base-text',
} as const

interface IconProps {
  statuscolor: keyof typeof STATUS_COLOR
}

export const ContainerBeneficio = styled.div<IconProps>`
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.theme[STATUS_COLOR[props.statuscolor]] || STATUS_COLOR.primary};
`
