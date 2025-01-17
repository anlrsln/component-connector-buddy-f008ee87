import { MapPin, Building, Globe, Linkedin, Instagram, Twitter, Phone, Package } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import CompanyDetails from '@/components/CompanyDetails';
import SellerProductList from '@/components/SellerProductList';
import { useState } from 'react';

const SellerDetail = () => {
  const [activeTab, setActiveTab] = useState('about');

  const renderContent = () => {
    switch (activeTab) {
      case 'products':
        return (
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Our Products</h2>
            <SellerProductList />
          </div>
        );
      default:
        return <CompanyDetails />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 pt-20">
        {/* Header Section */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <div className="flex justify-between items-start">
            <div className="flex gap-4">
              <div className="w-16 h-16">
                <img 
                  src="/placeholder.svg" 
                  alt="Company Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold">IMMA GLOBAL SANAYİ MAMULLERİ İMALAT VE TİCARET A.S</h1>
                <div className="flex items-center gap-2 mt-2">
                  <MapPin className="w-4 h-4 text-gray-500" />
                  <p className="text-gray-600">
                    Barbaros Bulvarı, 102/5, Zincirlikuyu, 34340, İstanbul, Türkiye
                  </p>
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <Button className="bg-accent hover:bg-accent/90">
                <Phone className="w-5 h-5" />
                FİRMAYLA İLETİŞİME GEÇ
              </Button>
              <Button variant="outline">
                <Package className="w-5 h-5" />
                ASK FOR A QUOTE
              </Button>
            </div>
          </div>

          <div className="flex gap-4 mt-6">
            <Button 
              variant={activeTab === 'about' ? 'default' : 'ghost'} 
              className={activeTab === 'about' ? 'bg-accent text-white hover:bg-accent/90' : ''}
              onClick={() => setActiveTab('about')}
            >
              About us
            </Button>
            <Button 
              variant={activeTab === 'products' ? 'default' : 'ghost'}
              className={activeTab === 'products' ? 'bg-accent text-white hover:bg-accent/90' : ''}
              onClick={() => setActiveTab('products')}
            >
              Our Products
            </Button>
            <Button variant="ghost">Blog</Button>
            <Button variant="ghost">Special Offer</Button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="col-span-2 space-y-6">
            {renderContent()}

            {/* Certificates Section */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Sertifikalar</h2>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'ISO 14001',
                  'ISO 31000',
                  'CE - Crane, Hoist, Winch, Lift',
                  'ISO 10002',
                  'ISO 45001',
                  'ISO 9001',
                  'CE - Mining Equipment'
                ].map((cert, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 border rounded-lg">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                      <img src="/placeholder.svg" alt={cert} className="w-8 h-8" />
                    </div>
                    <span className="font-medium">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Follow Us Section */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Follow us - IMMA Global</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-gray-500" />
                  <a href="http://www.immaglobal.com" className="text-blue-500 hover:underline font-semibold">
                    http://www.immaglobal.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Linkedin className="w-5 h-5 text-[#0A66C2]" />
                  <a href="#" className="text-blue-500 hover:underline font-semibold">
                    LinkedIn Profile
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Instagram className="w-5 h-5 text-[#E4405F]" />
                  <a href="#" className="text-blue-500 hover:underline font-semibold">
                    Instagram Profile
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Twitter className="w-5 h-5 text-[#1DA1F2]" />
                  <a href="#" className="text-blue-500 hover:underline font-semibold">
                    X (Twitter) Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerDetail;