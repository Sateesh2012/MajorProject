
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";





import Nopage from './pages/nopage/Nopage';
import Dashboard from './pages/admin/dashboard/Dashboard';
import Cart from './pages/cart/Cart';
import Order from './pages/order/Order';
import Home from './pages/home/Home';
import MyState from './context/data/MyState';
import Login from './pages/registration/Login';
import Signup from './pages/registration/Signup';
import ProductInfo from './pages/productInfo/ProductInfo';
import AddProduct from './pages/admin/dashboard/page/AddProduct';
import UpdateProduct from './pages/admin/dashboard/page/UpdateProduct';
import Allproducts from './pages/allProducts/AllProducts';


function App() {
  return (
    <MyState>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allproducts" element={<Allproducts />} />
        <Route path="/order" element={
            <ProtectedRoutes>
             <Order />
            </ProtectedRoutes>
          } />
        <Route path="/cart" element={<Cart />} />
        <Route path="/dashboard" element={
            <ProtectedRoutesForAdmin><Dashboard /></ProtectedRoutesForAdmin>
          } />
        <Route path="/*" element={<Nopage />} />
        <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/productinfo/:id" element={<ProductInfo />} />
          <Route path="/addproduct" element={ <ProtectedRoutesForAdmin><AddProduct /> </ProtectedRoutesForAdmin>} />
          <Route path="/updateproduct" element={<UpdateProduct />} />
          
      </Routes>
    </Router>
    </MyState>
  )
}

export default App;

export const ProtectedRoutes = ({ children }) => {
  if (localStorage.getItem('user')) {
    return children
  }
  else {
    return <Navigate to='/login' />
  }
}

export const ProtectedRoutesForAdmin = ({children}) => {
  const admin = JSON.parse(localStorage.getItem('user'))
  console.log(admin.user.email)
  if (admin.user.email === 'singh2012@gmail.com') {
    return children
  }
  else {
    return <Navigate to='/login' />
  }
}