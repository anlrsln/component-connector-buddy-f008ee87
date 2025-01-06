import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import DesktopMenu from './navbar/DesktopMenu';
import MobileMenu from './navbar/MobileMenu';
import AuthButtons from './navbar/AuthButtons';

const Navbar = () => {
  const [isAfterHero, setIsAfterHero] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

  return (
    <nav className="fixed w-full z-50 transition-all duration-300 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="bg-white/10 text-white px-6 py-2 rounded">
              Logo
            </Link>
          </div>
          
          <DesktopMenu />
          <AuthButtons />

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