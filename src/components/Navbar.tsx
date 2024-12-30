import { useState, useEffect } from 'react';
import { Menu, X, LayoutGrid, User, Package } from 'lucide-react';
import { Button } from './ui/button';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isAfterHero, setIsAfterHero] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isItemsPage = location.pathname === '/items';
  const isProductPage = location.pathname.startsWith('/product/');
  const isSellersPage = location.pathname === '/sellers';

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      setIsAfterHero(window.scrollY > heroHeight - 64);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getNavbarBackground = () => {
    if (isProductPage || isItemsPage || isSellersPage) {
      return 'bg-primary text-primary-foreground';
    }
    return isAfterHero ? 'bg-primary text-primary-foreground' : 'bg-transparent';
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${getNavbarBackground()}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="bg-white/10 text-white px-6 py-2 rounded">
              Logo
            </Link>
          </div>
          
          {/* Desktop Menu */}
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

          {/* Sign In/Up Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-white hover:bg-white/10 flex items-center gap-2">
              <User size={18} />
              Sign In
            </Button>
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium transition-colors">
              Sign Up
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-primary-hover focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        isMobileMenuOpen ? 'max-h-56' : 'max-h-0'
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
    </nav>
  );
};

export default Navbar;