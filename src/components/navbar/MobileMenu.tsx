import { Package } from 'lucide-react';
import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';

interface MobileMenuProps {
  isOpen: boolean;
  isItemsPage: boolean;
  isAfterHero: boolean;
}

const MobileMenu = ({ isOpen, isItemsPage, isAfterHero }: MobileMenuProps) => {
  const navigate = useNavigate();

  return (
    <div className={`md:hidden transition-all duration-300 ease-in-out ${
      isOpen ? 'max-h-56' : 'max-h-0'
    } overflow-hidden ${isItemsPage ? 'bg-primary' : isAfterHero ? 'bg-primary' : 'bg-primary/95 backdrop-blur-md'}`}>
      <div className="px-4 pt-2 pb-3 space-y-1">
        <button
          onClick={() => navigate('/items')}
          className="block px-3 py-2 text-white hover:text-primary-hover transition-colors w-full text-left"
        >
          Categories
        </button>
        <button
          onClick={() => navigate('/sellers')}
          className="block px-3 py-2 text-white/80 hover:text-primary-hover transition-colors w-full text-left"
        >
          Seller
        </button>
        <button
          onClick={() => navigate('/items')}
          className="block px-3 py-2 text-white/80 hover:text-primary-hover transition-colors w-full text-left"
        >
          Products
        </button>
        <a href="#" className="block px-3 py-2 text-white/80 hover:text-primary-hover transition-colors">
          About Us
        </a>
        <div className="flex flex-col space-y-2 px-3 py-2">
          <Button variant="ghost" className="w-full text-white hover:bg-white/10">
            Sign In
          </Button>
          <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground transition-colors">
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;