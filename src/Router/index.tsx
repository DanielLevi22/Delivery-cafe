import { Routes, Route } from 'react-router-dom'
import { Home } from '../page/Home'
import { OrderConfirmation } from '../page/OrderConfirmation'
import { Sucess } from '../page/Sucess'
import { Layout } from '../components/layouts'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<OrderConfirmation />} />
        <Route path="/order/sucess" element={<Sucess />} />
      </Route>
    </Routes>
  )
}
