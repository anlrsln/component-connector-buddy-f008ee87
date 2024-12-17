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
        <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white animate-fade-up">
          Create something
          <span className="block text-accent">beautiful today</span>
        </h1>
      </div>
    </div>
  );
};

export default Hero;