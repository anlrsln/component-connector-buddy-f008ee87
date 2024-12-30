import { LayoutGrid, Package } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const categories = [
  "Environment",
  "Apparel & Accessories",
  "Home & Garden",
  "Beauty",
  "Packaging & Printing",
  "Mother, Kids & Toys",
  "Vehicle Parts & Accessories",
  "Commercial Equipment & Supplies",
  "Consumer Electronics",
  "Sports & Entertainment",
  "Business Services",
  "Shoes & Accessories",
  "Jewelry, Eyewear, Watches",
  "Furniture",
  "Photography & Video",
  "Office Supplies"
];

const DesktopMenu = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="hidden md:flex items-center space-x-8">
      <div className="relative">
        <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
          <div 
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <DropdownMenuTrigger asChild>
              <button
                className="text-white hover:text-primary-hover transition-colors font-medium flex items-center gap-2"
              >
                <LayoutGrid size={18} />
                Categories
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent 
              className="w-56 bg-white"
              style={{
                position: 'fixed',
                zIndex: 50,
                marginTop: '0.5rem',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
              }}
              sideOffset={5}
            >
              <DropdownMenuGroup>
                {categories.map((category, index) => (
                  <DropdownMenuItem
                    key={index}
                    className="cursor-pointer hover:bg-gray-100"
                    onClick={() => console.log(`Selected category: ${category}`)}
                  >
                    {category}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </div>
        </DropdownMenu>
      </div>
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