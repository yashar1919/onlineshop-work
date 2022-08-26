import './App.css';
import Store from './components/Store';   //Component
import Navbar from './components/Navbar'; //Component
import ProductContextProvider from './context/ProductContextProvider';  //Context
import CartContextProvider from './context/CartContextProvider';  //Context
import { Route, Routes, Navigate } from "react-router-dom";
import ShopCart from './components/ShopCart';

function App() {
  return (
    <ProductContextProvider>
      <CartContextProvider>
        <Navbar />
        <Routes>
          <Route path="/products" element={<Store />} />
          <Route path="/cart" element={<ShopCart />} />
          <Route path="/*" element={<Navigate to="/products" />} />
        </Routes>
      </CartContextProvider>
    </ProductContextProvider>
  );
}

export default App;
