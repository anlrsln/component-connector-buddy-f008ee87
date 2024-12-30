import { Button } from '../ui/button';

const AuthButtons = () => {
  return (
    <div className="hidden md:flex items-center space-x-4">
      <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium transition-colors">
        Sign Up
      </Button>
    </div>
  );
};

export default AuthButtons;