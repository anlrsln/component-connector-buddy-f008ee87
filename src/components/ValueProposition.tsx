import React from 'react';
import { Shield, CheckSquare, PiggyBank, HeadphonesIcon } from 'lucide-react';

const ValueProposition = () => {
  const values = [
    {
      icon: Shield,
      title: "Trusted and Verified Suppliers",
      description: "We collaborate exclusively with reliable, thoroughly verified local manufacturers to ensure you receive products that meet the highest standards of trust and reliability."
    },
    {
      icon: CheckSquare,
      title: "Uncompromising Quality Assurance",
      description: "Every product undergoes strict quality control measures, ensuring durability, precision, and consistency that you can depend on."
    },
    {
      icon: PiggyBank,
      title: "Competitive Pricing with Transparent Deals",
      description: "Gain access to cost-effective, competitive pricing without compromising on quality, with fully transparent transactions and no hidden fees."
    },
    {
      icon: HeadphonesIcon,
      title: "Dedicated Customer Support",
      description: "Our team of professionals is ready to assist you with personalized support, helping you navigate every step of the process smoothly and efficiently."
    }
  ];

  return (
    <section className="py-16 bg-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-lg bg-white hover:shadow-lg transition-shadow duration-300"
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
    </section>
  );
};

export default ValueProposition;