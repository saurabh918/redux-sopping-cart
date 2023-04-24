import './App.scss';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductListing from './components/ProductListing';
import ProductDetail from './components/ProductDetail';
import Cartlist from './components/Cartlist';
import { Cart } from './components/Cart';

function App() {
  return (
    <>
      
      <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<ProductListing />} />
        <Route exact path="/product/:productId" element={<ProductDetail />} />
        <Route exact path="/cartItems/" element={<Cartlist />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
