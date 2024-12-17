import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-primary/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="bg-white/10 text-white px-6 py-2 rounded">
              Logo
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-white hover:text-primary-hover transition-colors font-medium">
              Categories
            </a>
            <a href="#" className="text-white/80 hover:text-primary-hover transition-colors font-medium">
              Seller
            </a>
            <a href="#" className="text-white/80 hover:text-primary-hover transition-colors font-medium">
              About Us
            </a>
          </div>

          {/* Sign In/Up Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-white hover:bg-white/10">
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
      } overflow-hidden bg-primary/95 backdrop-blur-md`}>
        <div className="px-4 pt-2 pb-3 space-y-1">
          <a href="#" className="block px-3 py-2 text-white hover:text-primary-hover transition-colors">
            Kategoriler
          </a>
          <a href="#" className="block px-3 py-2 text-white/80 hover:text-primary-hover transition-colors">
            Seller
          </a>
          <a href="#" className="block px-3 py-2 text-white/80 hover:text-primary-hover transition-colors">
            Brands of Turkey
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