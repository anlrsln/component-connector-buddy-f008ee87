import React from 'react';
import { values } from '@/data/processSteps';

const ValuesSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-16 w-full bg-[#1A5F7A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              onClick={() => scrollToSection(value.id)}
              className="flex flex-col items-center text-center p-6 rounded-lg bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <value.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-primary">{value.title}</h3>
              <p className="text-sm text-foreground/70">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full overflow-hidden" style={{ height: '50%' }}>
        <svg
          viewBox="0 0 1440 320"
          className="absolute bottom-0 w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            d="M0,160L48,144C96,128,192,96,288,90.7C384,85,480,107,576,122.7C672,139,768,149,864,144C960,139,1056,117,1152,106.7C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default ValuesSection;