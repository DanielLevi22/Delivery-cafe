import { ReactNode } from 'react'
import { ButtonStatus, ContainerButton } from './style'

interface ButtonProps {
  icon?: ReactNode
  content?: ReactNode
  variant: keyof typeof ButtonStatus
}

export function Button({ content, icon: Icon, variant }: ButtonProps) {
  return (
    <div>
      <ContainerButton variant={variant}>
        {Icon && Icon}
        {content && content}
      </ContainerButton>
    </div>
  )
}
