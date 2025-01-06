import { MapPin, Building, Globe } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const SellerDetail = () => {
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
              <Badge variant="secondary" className="bg-green-100 text-green-800 hover:bg-green-200">
                Verified company
              </Badge>
              <Button className="bg-teal-600 hover:bg-teal-700">
                FİRMAYLA İLETİŞİME GEÇ
              </Button>
              <Button variant="outline">
                ASK FOR A QUOTE
              </Button>
            </div>
          </div>

          <div className="flex gap-4 mt-6">
            <Button variant="ghost" className="text-primary">About us</Button>
            <Button variant="ghost">Our Products</Button>
            <Button variant="ghost">Blog</Button>
            <Button variant="ghost">Special Offer</Button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="col-span-2 space-y-6">
            {/* Management Section */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Yöneticiler IMMA Global Sanayi Mamulleri İmalat Ve Ticaret A.S</h2>
              <div className="space-y-4">
                {[
                  { name: 'Bay Murat Ilica', position: 'Chairman' },
                  { name: 'Bayan Hatice Senoglu', position: 'Export Representative' },
                  { name: 'Mr. Hasan Akin', position: 'Kidemli Satin Almaci' },
                  { name: 'Bay Kasım Dogu', position: 'Procurement Specialist' }
                ].map((manager, index) => (
                  <div key={index} className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-lg">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                      <Building className="w-6 h-6 text-gray-500" />
                    </div>
                    <div>
                      <p className="font-medium">{manager.name}</p>
                      <p className="text-gray-600 text-sm">{manager.position}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

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
                  <a href="http://www.immaglobal.com" className="text-blue-500 hover:underline">
                    http://www.immaglobal.com
                  </a>
                </div>
              </div>
            </div>

            {/* Company Info Section */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Legal Information</h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Type</span>
                  <span>Genel merkez - Dağıtım merkezi</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Kuruluş yılı</span>
                  <span>2006</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Registration no</span>
                  <span>582781</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Çalışan</span>
                  <span>23 çalışan</span>
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