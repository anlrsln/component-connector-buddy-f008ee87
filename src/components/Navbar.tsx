import { useState, useEffect } from 'react';
import { Menu, X, Search } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import DesktopMenu from './navbar/DesktopMenu';
import MobileMenu from './navbar/MobileMenu';
import AuthButtons from './navbar/AuthButtons';
import { Input } from './ui/input';

const Navbar = () => {
  const [isAfterHero, setIsAfterHero] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
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

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    // Add your search logic here
    console.log('Searching for:', e.target.value);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isAfterHero ? 'bg-primary shadow-lg' : 'bg-primary'
    } text-primary-foreground`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="bg-white/10 text-white px-6 py-2 rounded">
              Logo
            </Link>
          </div>

          {/* Search Bar - Only visible after hero section */}
          {isAfterHero && (
            <div className="hidden md:flex flex-1 justify-center px-8 max-w-md mx-auto">
              <div className="relative w-full">
                <Input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={handleSearch}
                  className="w-full pl-10 pr-4 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-white focus:ring-white"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-white/60" />
              </div>
            </div>
          )}
          
          {/* Desktop Menu - Centered when in hero, shifted right when search is visible */}
          <div className={`hidden md:flex items-center ${isAfterHero ? 'ml-4' : 'flex-1 justify-center'}`}>
            <DesktopMenu />
            <AuthButtons />
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

      <MobileMenu 
        isOpen={isMobileMenuOpen}
        isItemsPage={isItemsPage}
        isAfterHero={isAfterHero}
      />
    </nav>
  );
};

export default Navbar;