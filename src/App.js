import './App.css';
import Navbar from "./component/Navbar"
import ProductCart from "./component/ProductCart"
import CartPage from './component/cartpage';

function App() {
  return (
    <div className="App">
     <Navbar />
     <ProductCart />
     <CartPage />
    </div>
  );
}

export default App;
