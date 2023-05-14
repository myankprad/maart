import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from "./component/Navbar"
import ProductCart from "./component/ProductCart"
import CartPage from './component/cartpage';

function App() {
  return (
   <BrowserRouter>
    <div>
     <Navbar />
     <Routes>
     <Route path='/' element={<ProductCart />}/>
     </Routes>
     <Routes>
     <Route path='/cart' element={<CartPage/>}/>
     </Routes>
     
    
     </div>
   </BrowserRouter>
   
  );
}

export default App;
