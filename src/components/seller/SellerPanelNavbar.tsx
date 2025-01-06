import { Search, Store, ExternalLink, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../ui/button';

const SellerPanelNavbar = () => {
  const navigate = useNavigate();

  return (
    <div className="h-16 bg-white border-b flex items-center justify-between px-4 lg:px-8">
      {/* Left section with logo */}
      <div className="flex items-center gap-2">
        <Store className="w-6 h-6 text-emerald-600" />
        <span className="text-xl font-semibold">Pixer</span>
      </div>

      {/* Center section with search */}
      <div className="hidden md:flex flex-1 max-w-2xl mx-8">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search your route..."
            className="w-full px-4 py-2 pl-10 bg-gray-50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
        </div>
      </div>

      {/* Right section with buttons */}
      <div className="flex items-center gap-4">
        <Button 
          variant="outline" 
          className="hidden md:flex items-center gap-2 text-emerald-600 border-emerald-600 hover:bg-emerald-50"
          onClick={() => navigate('/')}
        >
          <ExternalLink size={18} />
          Visit Site
        </Button>
        <div className="flex items-center gap-2">
          <div className="text-right hidden md:block">
            <div className="font-medium">Jhon Doe</div>
            <div className="text-sm text-gray-500">Super Admin</div>
          </div>
          <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
            <User size={20} className="text-gray-600" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerPanelNavbar;