import { Button } from '../ui/button';
import { UserRound } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AuthButtons = () => {
  const navigate = useNavigate();

  return (
    <div className="hidden md:flex items-center ml-auto">
      <Button 
        onClick={() => navigate('/seller-panel')}
        className="bg-accent hover:bg-accent/90 text-white font-semibold transition-colors px-2 rounded-sm flex items-center justify-center"
      >
        <UserRound className="text-white" />
        Become a Seller
      </Button>
    </div>
  );
};

export default AuthButtons;