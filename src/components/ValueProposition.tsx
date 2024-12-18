import React from 'react';
import ValuesSection from './sections/ValuesSection';
import ProcessSection from './sections/ProcessSection';
import OrderStepsSection from './sections/OrderStepsSection';
import { values } from '@/data/processSteps';
import { CheckSquare } from 'lucide-react';

const ValueProposition = () => {
  return (
    <>
      <ValuesSection />
      
      {values.map((value, index) => (
        <section
          key={index}
          id={value.id}
          className={`min-h-screen relative w-full ${index === 0 ? 'bg-cover bg-center bg-no-repeat' : 'bg-white even:bg-gray-50'}`}
          style={index === 0 ? { backgroundImage: `url(${value.image})` } : undefined}
        >
          <div className={`absolute inset-0 ${index === 0 ? 'bg-black/50' : ''}`}></div>
          <div className="w-full h-full flex items-center justify-center relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
              <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1 flex flex-col justify-center">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <value.icon className="w-10 h-10 text-primary" />
                  </div>
                  <h2 className={`text-4xl font-bold mb-6 ${index === 0 ? 'text-white' : 'text-primary'}`}>{value.title}</h2>
                  <p className={`text-lg mb-8 ${index === 0 ? 'text-white/90' : 'text-foreground/70'}`}>{value.description}</p>
                  {index !== 0 && (
                    <ul className="space-y-4">
                      {[1, 2, 3].map((item) => (
                        <li key={item} className="flex items-center gap-3 text-foreground/80">
                          <CheckSquare className="w-5 h-5 text-primary" />
                          <span>
                            Feature point {item} related to {value.title}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
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
      ))}

      <ProcessSection />
      <OrderStepsSection />
    </>
  );
};

export default ValueProposition;