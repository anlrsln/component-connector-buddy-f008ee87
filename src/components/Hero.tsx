import { Search, X } from 'lucide-react';
import { Input } from './ui/input';
import { useState } from 'react';

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLabel, setSelectedLabel] = useState<'product' | 'companies' | 'hex-code' | null>(null);

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
          <div className="flex gap-2 mb-4 justify-center">
            {labels.map((label) => (
              <button
                key={label.id}
                onClick={() => setSelectedLabel(label.id as typeof selectedLabel)}
                className={`px-4 py-2 rounded-md transition-colors ${
                  selectedLabel === label.id
                    ? 'bg-white text-black'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {label.name}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative">
            <Input
              type="text"
              placeholder={`Search ${selectedLabel || 'anything'}...`}
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="pl-10 pr-10 py-6 w-full bg-white/10 text-white placeholder:text-white/60 border-white/20 focus-visible:ring-primary"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-white/60" />
            {searchQuery && (
              <button
                onClick={() => handleSearch('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white"
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