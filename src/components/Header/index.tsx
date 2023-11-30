import { Link } from 'react-router-dom'

import { Cart } from '../Cart'
import { StateSelect } from '../StateSelect'
import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
        <img src="/Logo.svg" alt="Logo" />
      </Link>
      <nav>
        <StateSelect />
        <Cart />
      </nav>
    </HeaderContainer>
  )
}
