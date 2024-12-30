import { Button } from '../ui/button';
import { UserRound } from 'lucide-react';

const AuthButtons = () => {
  return (
    <div className="hidden md:flex items-center space-x-4">
      <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium transition-colors px-3">
        <UserRound className="mr-2" />
        Become a Seller
      </Button>
    </div>
  );
};

export default AuthButtons;