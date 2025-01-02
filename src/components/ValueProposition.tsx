import React from 'react';
import ValuesSection from './sections/ValuesSection';
import ProcessSection from './sections/ProcessSection';
import { values } from '@/data/processSteps';

const backgroundImages = [
  'photo-1721322800607-8c38375eef04',
  'photo-1472396961693-142e6e269027',
  'photo-1466721591366-2d5fba72006d',
  'photo-1493962853295-0fd70327578a',
  'photo-1535268647677-300dbf3d78d1'
];

const ValueProposition = () => {
  return (
    <>
      <ValuesSection />
      
      {values.map((value, index) => {
        const randomImage = backgroundImages[index % backgroundImages.length];
        const backgroundClass = value.title === "Trusted and Verified Suppliers"
          ? 'bg-[url("/lovable-uploads/802fb3b3-9b1f-4b83-a708-73ee83b68c31.png")] bg-cover bg-center bg-no-repeat'
          : `bg-[url('https://images.unsplash.com/${randomImage}')] bg-cover bg-center bg-no-repeat bg-fixed`;

        const shouldReverse = value.title === "Uncompromising Quality Assurance" || value.title === "İletişime Geçin";

        return (
          <section
            key={index}
            id={value.id}
            className={`h-[60vh] relative w-full ${backgroundClass}`}
          >
            <div className="w-full h-full flex items-center justify-center relative">
              {/* Add a semi-transparent overlay */}
              <div className="absolute inset-0 bg-black/50" />
              
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
                <div className={`flex flex-col md:flex-row items-center gap-12 ${shouldReverse ? 'md:flex-row-reverse' : ''}`}>
                  <div className="flex-1 flex flex-col justify-center">
                    <div className="w-20 h-20 rounded-full bg-primary/10 backdrop-blur-sm flex items-center justify-center mb-6">
                      <value.icon className="w-10 h-10 text-white" />
                    </div>
                    <h2 className="text-4xl font-bold mb-6 text-white">{value.title}</h2>
                    <p className="text-lg mb-8 text-white/90">{value.description}</p>
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