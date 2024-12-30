import { LayoutGrid, Package } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
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

  return (
    <div className="hidden md:flex items-center space-x-8">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            className="text-white hover:text-primary-hover transition-colors font-medium flex items-center gap-2"
          >
            <LayoutGrid size={18} />
            Categories
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 bg-white">
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
      </DropdownMenu>
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