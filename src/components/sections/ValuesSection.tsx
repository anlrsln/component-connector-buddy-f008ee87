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
    <section className="relative py-16 w-full bg-primary overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              onClick={() => scrollToSection(value.id)}
              className="flex flex-col items-center text-center p-6 rounded-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer border border-white/20 bg-white/[0.05] backdrop-blur-sm"
            >
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <value.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-white">{value.title}</h3>
              <p className="text-sm text-white">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;