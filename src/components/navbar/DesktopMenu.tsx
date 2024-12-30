import { LayoutGrid, Package, User } from 'lucide-react';
import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';

const DesktopMenu = () => {
  const navigate = useNavigate();

  return (
    <div className="hidden md:flex items-center space-x-8">
      <button
        onClick={() => navigate('/items')}
        className="text-white hover:text-primary-hover transition-colors font-medium flex items-center gap-2"
      >
        <LayoutGrid size={18} />
        Categories
      </button>
      <button
        onClick={() => navigate('/sellers')}
        className="text-white/80 hover:text-primary-hover transition-colors font-medium"
      >
        Seller
      </button>
      <button
        onClick={() => navigate('/items')}
        className="text-white/80 hover:text-primary-hover transition-colors font-medium flex items-center gap-2"
      >
        <Package size={18} />
        Products
      </button>
      <a href="#" className="text-white/80 hover:text-primary-hover transition-colors font-medium">
        About Us
      </a>
    </div>
  );
};

export default DesktopMenu;