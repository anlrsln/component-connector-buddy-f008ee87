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
    // Here you would implement the actual search logic based on the selected label
    console.log(`Searching for ${query} in category: ${selectedLabel}`);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/b43e3110-7676-42ec-8147-9741003839ae.png" 
          alt="Warehouse workers walking past forklift" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white animate-fade-up">
          Create something
          <span className="block text-accent">beautiful today</span>
        </h1>

        <div className="mt-8 max-w-md mx-auto animate-fade-up">
          {/* Label Buttons */}
          <div className="flex rounded-t-lg overflow-hidden">
            {labels.map((label) => (
              <button
                key={label.id}
                onClick={() => setSelectedLabel(label.id as typeof selectedLabel)}
                className={`flex-1 px-2 py-1 text-xs font-medium border-x border-t border-gray-600
                  ${selectedLabel === label.id
                    ? 'bg-gray-500 text-white'
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
              className="pl-10 pr-10 py-6 w-full bg-white border-2 border-black text-gray-900 
                placeholder:text-gray-500 focus-visible:ring-primary rounded-b-lg rounded-t-none"
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
  );
};

export default Hero;