import React, { useState } from 'react';
import { processSteps } from '@/data/processSteps';
import { CircleIcon, Pencil, PackageSearch, ShieldCheck, ShoppingCart } from 'lucide-react';

const ProcessSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  const getStepIcon = (index: number) => {
    switch(index) {
      case 0:
        return <Pencil className={`w-5 h-5 ${activeStep === index ? 'text-white' : 'text-black'}`} />;
      case 1:
        return <PackageSearch className={`w-5 h-5 ${activeStep === index ? 'text-white' : 'text-black'}`} />;
      case 2:
        return <ShieldCheck className={`w-5 h-5 ${activeStep === index ? 'text-white' : 'text-black'}`} />;
      case 3:
        return <ShoppingCart className={`w-5 h-5 ${activeStep === index ? 'text-white' : 'text-black'}`} />;
      default:
        return <CircleIcon className={`w-5 h-5 ${activeStep === index ? 'text-white' : 'text-black'}`} />;
    }
  };

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-black">How It Works</h2>
          <p className="mt-4 text-black/70 max-w-2xl mx-auto">
            Follow our simple process to get started with your sourcing journey
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg transition-all duration-300 cursor-pointer border-2
                  ${activeStep === index 
                    ? 'bg-primary text-white scale-105 border-primary' 
                    : 'bg-white border-transparent hover:border-accent'}
                  shadow-lg hover:shadow-xl`}
                onMouseEnter={() => setActiveStep(index)}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    {getStepIcon(index)}
                  </div>
                  <div>
                    <h3 className={`text-lg font-semibold mb-2 ${activeStep === index ? 'text-white' : 'text-black'}`}>
                      {step.title}
                    </h3>
                    <p className={activeStep === index ? 'text-white/90' : 'text-black/70'}>
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="relative h-[500px] rounded-xl overflow-hidden">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-500 transform
                  ${activeStep === index ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`}
              >
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;