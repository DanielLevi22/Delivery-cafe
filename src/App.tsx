import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { CartProvider } from './context/cartContext'

export function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <ThemeProvider theme={defaultTheme}>
          <Router />
          <GlobalStyle />
        </ThemeProvider>
      </CartProvider>
    </BrowserRouter>
  )
}
