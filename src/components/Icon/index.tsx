import { ReactNode } from 'react'
import { ContainerBeneficio, STATUS_COLOR } from './style'

interface IconProps {
  icon: ReactNode
  variant: keyof typeof STATUS_COLOR
}

export function Icon({ icon: Icon, variant }: IconProps) {
  return <ContainerBeneficio statuscolor={variant}>{Icon}</ContainerBeneficio>
}
