import { useState, useEffect } from 'react';
import { Menu, X, Search } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import DesktopMenu from './navbar/DesktopMenu';
import MobileMenu from './navbar/MobileMenu';
import AuthButtons from './navbar/AuthButtons';
import { Input } from './ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const Navbar = () => {
  const [isAfterHero, setIsAfterHero] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchCategory, setSearchCategory] = useState('products');
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
    console.log('Searching for:', e.target.value, 'in category:', searchCategory);
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
            <div className="hidden md:flex flex-1 max-w-md">
              <div className="relative w-full flex gap-2">
                <Select
                  defaultValue="products"
                  onValueChange={(value) => setSearchCategory(value)}
                >
                  <SelectTrigger className="w-[140px] bg-white border-white/20 text-primary">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="products">Products</SelectItem>
                    <SelectItem value="sellers">Sellers</SelectItem>
                    <SelectItem value="hexcode">Hex Code</SelectItem>
                  </SelectContent>
                </Select>
                <div className="relative flex-1">
                  <Input
                    type="text"
                    placeholder={`Search ${searchCategory}...`}
                    value={searchQuery}
                    onChange={handleSearch}
                    className="w-full pl-10 pr-4 bg-white border-white/20 text-primary placeholder:text-primary/60 focus:border-primary focus:ring-primary"
                  />
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-primary/60" />
                </div>
              </div>
            </div>
          )}
          
          {/* Desktop Menu - Centered */}
          <div className={`hidden md:flex items-center w-fit ${isAfterHero ? 'ml-8' : ''}`}>
            <DesktopMenu isAfterHero={isAfterHero} />
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center">
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