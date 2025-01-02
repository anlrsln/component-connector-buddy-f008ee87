import { Button } from '../ui/button';
import { UserRound } from 'lucide-react';

const AuthButtons = () => {
  return (
    <div className="hidden md:flex items-center space-x-4">
      <Button className="bg-primary hover:bg-primary/90 text-white font-medium transition-colors px-2 rounded-sm flex items-center justify-center">
        <UserRound className="mr-1 text-white" />
        Become a Seller
      </Button>
    </div>
  );
};

export default AuthButtons;