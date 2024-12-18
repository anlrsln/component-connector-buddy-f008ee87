import React from 'react';
import { Grid, Shield, CreditCard, BarChart } from 'lucide-react';

const ValueProposition = () => {
  const values = [
    {
      icon: Grid,
      title: "Millions of Business Opportunities",
      description: "Discover products and suppliers that match your needs from millions of offers worldwide."
    },
    {
      icon: Shield,
      title: "Guaranteed Quality and Operations",
      description: "Benefit from the production quality of verified suppliers with protection from payment to delivery."
    },
    {
      icon: CreditCard,
      title: "One-Stop Trading Solution",
      description: "Place orders seamlessly from supplier search to order management, payment, and fulfillment."
    },
    {
      icon: BarChart,
      title: "Custom Trading Experience",
      description: "Get special advantages like exclusive discounts, enhanced protection, and extra support to help grow your business."
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