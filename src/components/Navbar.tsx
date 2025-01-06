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

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Search query:', searchQuery);
    // Add your search logic here
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 bg-primary text-primary-foreground ${
      isAfterHero ? 'shadow-md' : ''
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="bg-white/10 text-white px-6 py-2 rounded">
              Logo
            </Link>
          </div>

          {/* Search Bar - Only visible after hero section */}
          {isAfterHero && location.pathname === '/' && (
            <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <Input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:ring-accent"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/60" />
              </div>
            </form>
          )}
          
          {/* Desktop Menu - Moved to the right when search is visible */}
          <div className={`hidden md:flex items-center ${isAfterHero ? 'ml-auto' : ''}`}>
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