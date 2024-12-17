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
      isScrolled ? 'bg-background/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="bg-[#2D3748] text-white px-6 py-2 rounded">
              Logo
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-foreground hover:text-foreground/80 transition-colors font-medium">
              Kategoriler
            </a>
            <a href="#" className="text-foreground/60 hover:text-foreground/80 transition-colors font-medium">
              Seller
            </a>
            <a href="#" className="text-foreground/60 hover:text-foreground/80 transition-colors font-medium">
              Brands of Turkey
            </a>
          </div>

          {/* Sign In/Up Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="font-medium">
              Sign In
            </Button>
            <Button className="bg-[#2D3748] hover:bg-[#2D3748]/90 text-white font-medium">
              Sign Up
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-foreground/80 focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        isMobileMenuOpen ? 'max-h-56' : 'max-h-0'
      } overflow-hidden bg-background/80 backdrop-blur-md`}>
        <div className="px-4 pt-2 pb-3 space-y-1">
          <a href="#" className="block px-3 py-2 text-foreground hover:text-foreground/80 transition-colors">
            Kategoriler
          </a>
          <a href="#" className="block px-3 py-2 text-foreground/60 hover:text-foreground/80 transition-colors">
            Seller
          </a>
          <a href="#" className="block px-3 py-2 text-foreground/60 hover:text-foreground/80 transition-colors">
            Brands of Turkey
          </a>
          <div className="flex flex-col space-y-2 px-3 py-2">
            <Button variant="outline" className="w-full">
              Sign In
            </Button>
            <Button className="w-full bg-[#2D3748] hover:bg-[#2D3748]/90">
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;