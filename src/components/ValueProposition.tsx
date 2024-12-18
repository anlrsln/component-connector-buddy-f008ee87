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
      <section className="py-16 bg-white w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                onClick={() => scrollToSection(value.id)}
                className="flex flex-col items-center text-center p-6 rounded-lg bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
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
    </>
  );
};

export default ValueProposition;