import React, { useState } from 'react';
import { ShieldCheck, CheckSquare, PiggyBank, HeadphonesIcon } from 'lucide-react';

const values = [
  {
    icon: ShieldCheck,
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
    title: "İletişime Geçin",
    description: "Our team of professionals is ready to assist you with personalized support, helping you navigate every step of the process smoothly and efficiently.",
    id: "customer-support"
  }
];

const processSteps = [
  {
    title: "Initial Consultation",
    description: "Schedule a meeting with our experts to discuss your specific needs and requirements.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
  },
  {
    title: "Product Selection",
    description: "Browse through our curated selection of verified suppliers and products.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
  },
  {
    title: "Quality Verification",
    description: "Our team conducts thorough quality checks to ensure products meet your standards.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf"
  },
  {
    title: "Order Processing",
    description: "Place your order with confidence through our secure platform.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0"
  }
];

const ValueProposition = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section className="relative py-16 w-full bg-[#1A5F7A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
        <div className="absolute bottom-0 left-0 w-full overflow-hidden" style={{ height: '50%' }}>
          <svg
            viewBox="0 0 1440 320"
            className="absolute bottom-0 w-full h-full"
            preserveAspectRatio="none"
          >
            <path
              fill="#ffffff"
              d="M0,160L48,144C96,128,192,96,288,90.7C384,85,480,107,576,122.7C672,139,768,149,864,144C960,139,1056,117,1152,106.7C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
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
    </>
  );
};

export default ValueProposition;
