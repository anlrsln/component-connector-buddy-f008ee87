import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import ItemListing from './pages/ItemListing';
import ProductDetail from './pages/ProductDetail';
import SellerListing from './pages/SellerListing';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/items" element={<ItemListing />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/sellers" element={<SellerListing />} />
      </Routes>
    </Router>
  );
}

export default App;