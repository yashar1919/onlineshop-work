import './App.css';
import Store from './components/Store';   //Component
import Navbar from './components/Navbar'; //Component
import ProductContextProvider from './context/ProductContextProvider';  //Context
import CartContextProvider from './context/CartContextProvider';  //Context
import { Route, Switch, Redirect } from "react-router-dom";
import ShopCart from './components/ShopCart';

function App() {
  return (
    /*     <ProductContextProvider>
          <CartContextProvider>
            <Navbar />
            <Store />
          </CartContextProvider>
        </ProductContextProvider> */



    <ProductContextProvider>
      <CartContextProvider>
        <Navbar />
        <Switch>
          {/*   <Route path="/products/:id" component={ProductDetails} /> */}
          <Route path="/products" component={Store} />
          <Route path="/cart" component={ShopCart} />
          <Redirect to="/products" />
        </Switch>
      </CartContextProvider>
    </ProductContextProvider>
  );
}

export default App;
