import React from 'react';
import ValuesSection from './sections/ValuesSection';
import ProcessSection from './sections/ProcessSection';
import { values } from '@/data/processSteps';

const ValueProposition = () => {
  return (
    <>
      <ValuesSection />
      
      {values.map((value, index) => {
        // Define different background gradients based on index
        const backgroundGradient = index % 3 === 0
          ? 'bg-gradient-to-t from-[#2c3e50] to-[#bdc3c7]'
          : index % 3 === 1
          ? 'bg-gradient-to-br from-[#accbee] to-[#e7f0fd]'
          : 'bg-gradient-to-t from-[#d7d2cc] to-[#304352]';

        return (
          <section
            key={index}
            id={value.id}
            className={`min-h-screen relative w-full ${backgroundGradient}`}
          >
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <h1 className="text-[150px] font-bold text-white/5">
                {value.title}
              </h1>
            </div>
            <div className="w-full h-full flex items-center justify-center relative">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className="flex flex-col md:flex-row items-center gap-12">
                  <div className="flex-1 flex flex-col justify-center">
                    <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                      <value.icon className="w-10 h-10 text-primary" />
                    </div>
                    <h2 className="text-4xl font-bold mb-6 text-primary">{value.title}</h2>
                    <p className="text-lg mb-8 text-foreground/70">{value.description}</p>
                  </div>
                  <div className="flex-1 relative overflow-hidden rounded-lg aspect-video">
                    {value.image && (
                      <img 
                        src={value.image} 
                        alt={value.title}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      <ProcessSection />
    </>
  );
};

export default ValueProposition;