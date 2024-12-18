import React, { useState } from 'react';
import { processSteps } from '@/data/processSteps';

const ProcessSection = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-primary">How It Works</h2>
          <p className="mt-4 text-foreground/70 max-w-2xl mx-auto">
            Follow our simple process to get started with your sourcing journey
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg transition-all duration-300 cursor-pointer
                  ${activeStep === index ? 'bg-primary text-white scale-105' : 'bg-white hover:bg-primary/5'}
                  shadow-lg hover:shadow-xl`}
                onMouseEnter={() => setActiveStep(index)}
                onMouseLeave={() => setActiveStep(null)}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className={`font-semibold ${activeStep === index ? 'text-white' : 'text-primary'}`}>
                      {index + 1}
                    </span>
                  </div>
                  <div>
                    <h3 className={`text-lg font-semibold mb-2 ${activeStep === index ? 'text-white' : 'text-primary'}`}>
                      {step.title}
                    </h3>
                    <p className={activeStep === index ? 'text-white/90' : 'text-foreground/70'}>
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
            {activeStep === null && (
              <div className="absolute inset-0 flex items-center justify-center bg-primary/5 rounded-xl">
                <p className="text-primary font-semibold">Hover over steps to see details</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;