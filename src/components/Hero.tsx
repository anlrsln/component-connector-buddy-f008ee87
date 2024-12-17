import { Search, X } from 'lucide-react';
import { Input } from './ui/input';
import { useState } from 'react';

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLabel, setSelectedLabel] = useState<'product' | 'companies' | 'hex-code'>('product');

  const labels = [
    { id: 'product', name: 'Product' },
    { id: 'companies', name: 'Companies' },
    { id: 'hex-code', name: 'Hex Code' },
  ];

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    console.log(`Searching for ${query} in category: ${selectedLabel}`);
  };

  return (
    <div className="relative min-h-screen">
      {/* Hero Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/b43e3110-7676-42ec-8147-9741003839ae.png" 
          alt="Warehouse workers walking past forklift" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 flex items-center min-h-screen">
        <div className="max-w-2xl">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white text-left animate-fade-up">
            Discover Top-Quality Products
          </h1>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-accent text-left animate-fade-up mt-2">
            from Trusted Local Manufacturers
          </h2>

          {/* Search Section */}
          <div className="mt-8 animate-fade-up">
            {/* Label Buttons */}
            <div className="flex rounded-t-lg overflow-hidden w-full sm:w-1/2">
              {labels.map((label) => (
                <button
                  key={label.id}
                  onClick={() => setSelectedLabel(label.id as typeof selectedLabel)}
                  className={`flex-1 px-2 py-0.5 text-xs font-medium
                    ${selectedLabel === label.id
                      ? 'bg-accent text-accent-foreground'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }
                    ${label.id === 'product' ? 'rounded-tl-lg' : ''}
                    ${label.id === 'hex-code' ? 'rounded-tr-lg' : ''}
                  `}
                >
                  {label.name}
                </button>
              ))}
            </div>

            {/* Search Bar */}
            <div className="relative">
              <Input
                type="text"
                placeholder={`Search ${selectedLabel}...`}
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="pl-10 pr-10 py-6 w-full bg-white text-gray-900 
                  placeholder:text-gray-500 focus-visible:ring-primary rounded-r-lg rounded-tl-none rounded-bl-lg"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
              {searchQuery && (
                <button
                  onClick={() => handleSearch('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  <X className="h-5 w-5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;