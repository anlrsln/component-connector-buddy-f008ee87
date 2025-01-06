import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import ItemListing from './pages/ItemListing';
import ProductDetail from './pages/ProductDetail';
import SellerListing from './pages/SellerListing';
import SellerPanel from './pages/SellerPanel';
import CreateProduct from './pages/CreateProduct';

function App() {
  return (
    <Router basename="/">
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/items" element={<ItemListing />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/sellers" element={<SellerListing />} />
        <Route path="/seller-panel" element={<SellerPanel />} />
        <Route path="/create-product" element={<CreateProduct />} />
      </Routes>
    </Router>
  );
}

export default App;