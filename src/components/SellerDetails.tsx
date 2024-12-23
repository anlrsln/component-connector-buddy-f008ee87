import { BadgeCheck, Phone, MessageSquare, MapPin } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const SellerDetails = () => {
  const [showPhone, setShowPhone] = useState(false);

  const handleShowPhone = () => {
    setShowPhone(true);
    toast.success("Phone number revealed!");
  };

  const handleMessage = () => {
    toast.success("Message sent to seller!");
  };

  return (
    <div className="bg-background border rounded-lg p-4 space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-bold">VCARE MEDICINES</h2>
          <Badge variant="secondary" className="flex items-center gap-1">
            <BadgeCheck className="w-4 h-4" />
            4.2 ★
          </Badge>
        </div>
        <div className="text-sm text-muted-foreground">
          Member since 2015
        </div>
      </div>

      <div className="flex gap-3">
        <Button
          variant="outline"
          className="flex-1"
          onClick={handleShowPhone}
        >
          <Phone className="w-4 h-4 mr-2" />
          {showPhone ? "+1 (555) 123-4567" : "Show Phone"}
        </Button>
        <Button
          variant="outline"
          className="flex-1"
          onClick={handleMessage}
        >
          <MessageSquare className="w-4 h-4 mr-2" />
          Message Seller
        </Button>
      </div>

      <div className="space-y-2 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          <span>Shop No. C-13, First Floor, Shree Ram Industrial Estate, GD Ambekar Marg, Wadala, Mumbai, Maharashtra, 400031, India</span>
        </div>
        <div>
          <span className="font-medium">GST Number:</span> 27AABFN3528C1ZX
        </div>
      </div>
    </div>
  );
};

export default SellerDetails;