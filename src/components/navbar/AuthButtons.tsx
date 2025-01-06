import { Button } from '../ui/button';
import { UserRound } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AuthButtons = () => {
  const navigate = useNavigate();

  return (
    <div className="hidden md:flex items-center space-x-4">
      <Button 
        onClick={() => navigate('/seller-panel')}
        className="bg-primary hover:bg-primary/90 text-white font-medium transition-colors px-2 rounded-sm flex items-center justify-center"
      >
        <UserRound className="mr-1 text-white" />
        Become a Seller
      </Button>
    </div>
  );
};

export default AuthButtons;