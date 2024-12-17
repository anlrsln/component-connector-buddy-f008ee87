import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-background to-primary/10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <span className="inline-block animate-fade-down">
          <span className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-primary/10 text-primary ring-1 ring-inset ring-primary/20">
            New Release
          </span>
        </span>
        
        <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight animate-fade-up">
          Create something
          <span className="block text-primary">beautiful today</span>
        </h1>
        
        <p className="mt-6 text-lg sm:text-xl text-foreground/80 max-w-3xl mx-auto animate-fade-up">
          Transform your ideas into reality with our powerful platform. Build, create, and inspire with unmatched simplicity.
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-fade-up">
          <button className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-primary hover:bg-primary/90 transition-colors">
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
          <button className="inline-flex items-center justify-center px-6 py-3 border border-foreground/20 text-base font-medium rounded-full text-foreground bg-background hover:bg-foreground/5 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;