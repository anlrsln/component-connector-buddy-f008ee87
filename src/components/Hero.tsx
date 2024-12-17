import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/b43e3110-7676-42ec-8147-9741003839ae.png" 
          alt="Warehouse workers walking past forklift" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" /> {/* Dark overlay */}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <span className="inline-block animate-fade-down">
          <span className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-primary/10 text-white ring-1 ring-inset ring-primary/20">
            New Release
          </span>
        </span>
        
        <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white animate-fade-up">
          Create something
          <span className="block text-accent">beautiful today</span>
        </h1>
        
        <p className="mt-6 text-lg sm:text-xl text-white/80 max-w-3xl mx-auto animate-fade-up">
          Transform your ideas into reality with our powerful platform. Build, create, and inspire with unmatched simplicity.
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-fade-up">
          <button className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-primary hover:bg-primary/90 transition-colors">
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
          <button className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-full text-white bg-transparent hover:bg-white/10 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;