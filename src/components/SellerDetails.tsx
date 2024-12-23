import { User, Calendar, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SellerDetails = () => {
  return (
    <div className="bg-white rounded-lg p-6 space-y-6">
      <div className="space-y-4">
        <h2 className="text-[#1A5F7A] text-xl font-semibold">Seller Details</h2>
        
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-lg border flex items-center justify-center">
            <img 
              src="/placeholder.svg" 
              alt="VCARE MEDICINES"
              className="w-10 h-10 object-contain"
            />
          </div>
          <div>
            <h3 className="font-bold text-lg">VCARE MEDICINES</h3>
          </div>
        </div>

        <div className="flex justify-between items-center text-sm">
          <div className="text-gray-600">GST</div>
          <div className="font-medium">27AEKPB3528C1ZX</div>
        </div>

        <div className="flex gap-2">
          <div className="flex items-center gap-1 text-sm bg-green-50 text-green-700 px-3 py-1 rounded-full">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            Trusted Seller
          </div>
          <div className="flex items-center gap-1 text-sm bg-blue-50 text-blue-700 px-3 py-1 rounded-full">
            SUPER BONANZA
          </div>
        </div>

        <div className="space-y-4 text-gray-600">
          <div className="flex gap-3">
            <User className="w-5 h-5 text-gray-400" />
            <div>
              <div className="text-sm font-medium">Director</div>
              <div className="text-sm">Mr Suneet Bhutta</div>
            </div>
          </div>

          <div className="flex gap-3">
            <Calendar className="w-5 h-5 text-gray-400" />
            <div>
              <div className="text-sm font-medium">Member Since</div>
              <div className="text-sm">9 Years</div>
            </div>
          </div>

          <div className="flex gap-3">
            <MapPin className="w-5 h-5 text-gray-400" />
            <div>
              <div className="text-sm font-medium">Address</div>
              <div className="text-sm">
                Shop No : C-13, First Floor, Shree Ram Industrial Estate, GD Ambekar Marg, Wadala, Mumbai, Maharashtra, 400031, India
              </div>
            </div>
          </div>
        </div>

        <div className="text-[#1A5F7A] text-sm hover:underline cursor-pointer">
          Cosmetic Chemicals In Mumbai
        </div>

        <div className="flex gap-3">
          <Button 
            variant="outline" 
            className="flex-1 text-[#1A5F7A] border-[#1A5F7A]"
          >
            View Number
          </Button>
          <Button 
            variant="outline"
            className="flex-1 text-[#1A5F7A] border-[#1A5F7A]"
          >
            Contact Seller
          </Button>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="text-lg font-medium text-[#1A5F7A]">
            Get the Best Price for
          </div>
          <div className="font-medium">
            ETHYL HEXYL RESORCINOL VCARE MEDICINES
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerDetails;