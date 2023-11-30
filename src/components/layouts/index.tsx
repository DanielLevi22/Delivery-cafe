import { Outlet } from 'react-router-dom'
import { Header } from '../Header'
import { ContainerLayout } from './styles'

export function Layout() {
  return (
    <ContainerLayout>
      <Header />
      <Outlet />
    </ContainerLayout>
  )
}
