import './App.css';
import Store from './components/Store';   //Component
import ProductContextProvider from './context/ProductContextProvider';  //Context
import CartContextProvider from './context/CartContextProvider';  //Context

function App() {
  return (
    <ProductContextProvider>
      <CartContextProvider>
        <Store />
      </CartContextProvider>
    </ProductContextProvider>
  );
}

export default App;
