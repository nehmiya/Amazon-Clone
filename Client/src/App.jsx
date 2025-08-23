import './App.css'
import Layout from './Components/Layout/Layout'
import { Route ,Routes} from 'react-router'
import Landing from './Pages/Landing/Landing'
import Auth from './Pages/Auth/Auth'
import Cart from './Pages/Cart/Cart'
import Payment from './Pages/Payment/Payment'
import Orders from './Pages/Orders/Orders'
import Results from './Pages/Results/Results'
import ProductDetail from './Pages/ProductDetail/ProductDetail'
import Signup from './Pages/Auth/Signup'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Landing />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/category/:categoryName" element={<Results />}></Route>
          <Route path="/products/:productId" element={<ProductDetail />} />
        </Route>
        <Route path="/auth/signin" element={<Auth />} />
        <Route path="/auth/signup" element={<Signup />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </>
  );
}

export default App
