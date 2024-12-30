import { User } from 'lucide-react';
import { Button } from '../ui/button';

const AuthButtons = () => {
  return (
    <div className="hidden md:flex items-center space-x-4">
      <Button variant="ghost" className="text-white hover:bg-white/10 flex items-center gap-2">
        <User size={18} />
        Sign In
      </Button>
      <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium transition-colors">
        Sign Up
      </Button>
    </div>
  );
};

export default AuthButtons;