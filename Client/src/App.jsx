import './App.css'
import Layout from './Components/Layout/Layout'
import { Route ,Routes} from 'react-router'
import Landing from './Pages/Landing/Landing'
import SignIn from './Pages/Auth/SignIn'
import Cart from './Pages/Cart/Cart'
import Payment from './Pages/Payment/Payment'
import Orders from './Pages/Orders/Orders'

function App() {
  return (
    <>
    
     <Routes>
       <Route path='/' element={<Layout />}>
          <Route path='/' element={<Landing />}/>
          <Route path='/auth' element={<SignIn />}/>
          <Route path='/cart' element={<Cart />}/>
          <Route path='/payment' element={<Payment />}/>
          <Route path='/orders' element={<Orders />}/>
       </Route>
     </Routes>

    </>
  )
}

export default App
