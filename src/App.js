import './App.css';
import Store from './components/Store';   //Component
import ProductContextProvider from './context/ProductContextProvider';  //Context

function App() {
  return (
    <ProductContextProvider>
      <Store />
    </ProductContextProvider>
  );
}

export default App;
