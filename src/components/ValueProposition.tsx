import React from 'react';
import ValuesSection from './sections/ValuesSection';
import ProcessSection from './sections/ProcessSection';
import { values } from '@/data/processSteps';

const ValueProposition = () => {
  return (
    <>
      <ValuesSection />
      
      {values.map((value, index) => {
        const backgroundClass = value.title === "Trusted and Verified Suppliers"
          ? 'bg-[url("/lovable-uploads/802fb3b3-9b1f-4b83-a708-73ee83b68c31.png")] bg-cover bg-center bg-no-repeat'
          : index % 2 === 0 
          ? 'bg-gray-100' 
          : 'bg-white';

        const shouldReverse = value.title === "Uncompromising Quality Assurance" || value.title === "İletişime Geçin";
        const shouldMoveTextToEnd = value.title === "Products" || value.title === "Customer Support";

        return (
          <section
            key={index}
            id={value.id}
            className={`h-[60vh] relative w-full ${backgroundClass}`}
          >
            <div className="w-full h-full flex items-center justify-center relative">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className={`flex flex-col md:flex-row items-center gap-12 ${shouldReverse ? 'md:flex-row-reverse' : ''}`}>
                  <div className={`flex-1 flex flex-col justify-center ${shouldMoveTextToEnd ? 'order-2' : ''}`}>
                    <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                      <value.icon className="w-10 h-10 text-primary" />
                    </div>
                    <h2 className="text-4xl font-bold mb-6 text-primary">{value.title}</h2>
                    <p className="text-lg mb-8 text-foreground/70">{value.description}</p>
                  </div>
                  <div className={`flex-1 relative overflow-hidden rounded-lg aspect-video ${shouldMoveTextToEnd ? 'order-1' : ''}`}>
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