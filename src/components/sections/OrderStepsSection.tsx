import React from 'react';
import { orderSteps } from '@/data/processSteps';

const OrderStepsSection = () => {
  return (
    <section className="py-24 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16 text-primary">Buyer Process Steps</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {orderSteps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-24 h-24 mb-6">
                <img src={step.icon} alt={step.title} className="w-full h-full object-contain" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-primary">{step.title}</h3>
              <p className="text-sm text-foreground/70">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OrderStepsSection;