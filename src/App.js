import './App.css';
import Store from './components/Store';   //Component
import Navbar from './components/Navbar'; //Component
import ProductContextProvider from './context/ProductContextProvider';  //Context
import CartContextProvider from './context/CartContextProvider';  //Context
import { Route, Routes, Navigate } from "react-router-dom";
import ShopCart from './components/ShopCart';
import UserDetails from './components/UserDetails';
import UserContextProvider from './context/UserContextProvider';

function App() {
  return (
    <ProductContextProvider>
      <CartContextProvider>
        <UserContextProvider>
          <Navbar />
          <div className='mt-[90px] p-3 pb-32 bg-white'>
            <Routes>
              <Route path="/products" element={<Store />} />
              <Route path="/userdetails" element={<UserDetails />} />
              <Route path="/cart" element={<ShopCart />} />
              <Route path="/*" element={<Navigate to="/products" />} />
            </Routes>
          </div>
        </UserContextProvider>
      </CartContextProvider>
    </ProductContextProvider>
  );
}

export default App;
