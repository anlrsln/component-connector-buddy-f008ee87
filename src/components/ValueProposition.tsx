import React from 'react';
import ValuesSection from './sections/ValuesSection';
import ProcessSection from './sections/ProcessSection';
import { values } from '@/data/processSteps';

const ValueProposition = () => {
  return (
    <>
      <ValuesSection />
      
      {values.map((value, index) => {
        const backgroundClass = value.title === "Trust"
          ? 'bg-[url("/lovable-uploads/802fb3b3-9b1f-4b83-a708-73ee83b68c31.png")] bg-cover bg-center bg-no-repeat'
          : index % 2 === 0 
          ? 'bg-gray-100' 
          : 'bg-white';

        const shouldReverse = value.title === "Products" || value.title === "Customer Support";

        return (
          <React.Fragment key={index}>
            <section
              id={value.id}
              className={`min-h-screen relative w-full ${backgroundClass}`}
            >
              <div className="w-full h-full flex items-center justify-center relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                  <div className={`flex flex-col md:flex-row items-center gap-12 ${shouldReverse ? 'md:flex-row-reverse' : ''}`}>
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
            {index < values.length - 1 && (
              <div className="relative h-24">
                <div className="absolute w-full overflow-hidden leading-[0]">
                  <svg
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                    className={`relative block w-full h-24 ${
                      index % 2 === 0 ? 'fill-gray-100' : 'fill-white'
                    }`}
                  >
                    <path
                      d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                    ></path>
                  </svg>
                </div>
              </div>
            )}
          </React.Fragment>
        );
      })}

      <ProcessSection />
    </>
  );
};

export default ValueProposition;