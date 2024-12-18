import React from 'react';
import { Shield, CheckSquare, PiggyBank, HeadphonesIcon } from 'lucide-react';

const ValueProposition = () => {
  const values = [
    {
      icon: Shield,
      title: "Trusted and Verified Suppliers",
      description: "We collaborate exclusively with reliable, thoroughly verified local manufacturers to ensure you receive products that meet the highest standards of trust and reliability.",
      id: "trusted-suppliers",
      image: "/lovable-uploads/802fb3b3-9b1f-4b83-a708-73ee83b68c31.png"
    },
    {
      icon: CheckSquare,
      title: "Uncompromising Quality Assurance",
      description: "Every product undergoes strict quality control measures, ensuring durability, precision, and consistency that you can depend on.",
      id: "quality-assurance"
    },
    {
      icon: PiggyBank,
      title: "Competitive Pricing with Transparent Deals",
      description: "Gain access to cost-effective, competitive pricing without compromising on quality, with fully transparent transactions and no hidden fees.",
      id: "competitive-pricing"
    },
    {
      icon: HeadphonesIcon,
      title: "Dedicated Customer Support",
      description: "Our team of professionals is ready to assist you with personalized support, helping you navigate every step of the process smoothly and efficiently.",
      id: "customer-support"
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section className="py-16 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                onClick={() => scrollToSection(value.id)}
                className="flex flex-col items-center text-center p-6 rounded-lg bg-white hover:shadow-lg transition-shadow duration-300 cursor-pointer"
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

      {/* Detailed Sections */}
      {values.map((value, index) => (
        <section
          key={index}
          id={value.id}
          className="py-24 bg-white even:bg-gray-50"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <value.icon className="w-10 h-10 text-primary" />
                </div>
                <h2 className="text-3xl font-bold mb-6 text-primary">{value.title}</h2>
                <p className="text-lg text-foreground/70 mb-8">{value.description}</p>
                <ul className="space-y-4">
                  {[1, 2, 3].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckSquare className="w-5 h-5 text-primary" />
                      <span className="text-foreground/80">
                        Feature point {item} related to {value.title}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1">
                {value.image ? (
                  <img 
                    src={value.image} 
                    alt={value.title}
                    className="w-full h-[400px] object-cover rounded-lg"
                  />
                ) : (
                  <div className="bg-gray-100 rounded-lg p-8 h-[400px] flex items-center justify-center">
                    <span className="text-gray-400">Placeholder for {value.title} illustration</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default ValueProposition;