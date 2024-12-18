import React from 'react';
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

const orderSteps = [
  {
    icon: "//s.alicdn.com/@img/imgextra/i4/O1CN015t37vw1Dd37SPrbRN_!!6000000000238-2-tps-96-96.png",
    title: "Search for matches",
    description: "Search and filter products and suppliers to find the ones that are right for your business."
  },
  {
    icon: "//s.alicdn.com/@img/imgextra/i4/O1CN015lgvwy1md3g5nlS9C_!!6000000004976-2-tps-96-96.png",
    title: "Doğru olanı bulun",
    description: "Doğrulanmış denetimler ve dijital tedarik araçlarıyla ürün kalitesini ve tedarikçi kapasitesini hem kolay hem verimli bir şekilde değerlendirin."
  },
  {
    icon: "//s.alicdn.com/@img/imgextra/i3/O1CN01HZd7ME1fEbDXenc3M_!!6000000003975-2-tps-96-96.png",
    title: "Güvenle ödeme yapın",
    description: "Esnek ödeme koşulları dahil 20'den fazla güvenli ödeme yöntemiyle siparişlerinizi 20'den fazla para birimi kullanarak ödeyin."
  },
  {
    icon: "//s.alicdn.com/@img/imgextra/i3/O1CN01Q2EI0L1iqYtRZh1gI_!!6000000004464-2-tps-96-96.png",
    title: "Siparişleri şeffaf bir şekilde yerine getirin",
    description: "Lojistik ihtiyaçlarınızı, tamamı Alibaba.com Logistics tarafından desteklenen, 220 ülke ve bölgede 26.000'den fazla rota için gerçek zamanlı izleme ile karşılayın."
  },
  {
    icon: "//s.alicdn.com/@img/imgextra/i4/O1CN01bw2aFV1obnp2vp772_!!6000000005244-2-tps-96-96.png",
    title: "Kolayca yönetin",
    description: "Alibaba Hesabım aracılığıyla sipariş durumunu kontrol edin, tedarikçileri yönetin, ödemelerle gönderimleri takip edin ve satış sonrası destek almak için iletişime geçin."
  }
];

const ValueProposition = () => {
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
                className="group relative flex flex-col items-center text-center p-6 rounded-lg bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
              >
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-primary">{value.title}</h3>
                  <p className="text-sm text-foreground/70">{value.description}</p>
                </div>
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
