import { Search, X } from 'lucide-react';
import { Input } from './ui/input';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLabel, setSelectedLabel] = useState<'product' | 'companies' | 'hex-code'>('product');
  const [imageLoaded, setImageLoaded] = useState(false);
  const [currentPlaceholder, setCurrentPlaceholder] = useState('Glass');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const placeholders = [
    'Glass',
    'Sofa',
    'Table',
    'Chair',
    'Lamp',
    'Cabinet',
    'Desk'
  ];

  useEffect(() => {
    const img = new Image();
    img.src = "/lovable-uploads/b43e3110-7676-42ec-8147-9741003839ae.png";
    img.onload = () => setImageLoaded(true);
  }, []);

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        currentIndex = (currentIndex + 1) % placeholders.length;
        setCurrentPlaceholder(placeholders[currentIndex]);
        setIsTransitioning(false);
      }, 200);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

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
          className={`w-full h-full object-cover transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          loading="eager"
        />
        <div className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`} />
      </div>

      <div className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 flex items-center min-h-screen transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}>
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
            <div className="flex rounded-t-md overflow-hidden w-full sm:w-1/2">
              {labels.map((label) => (
                <button
                  key={label.id}
                  onClick={() => setSelectedLabel(label.id as typeof selectedLabel)}
                  className={`flex-1 px-2 py-2 text-xs font-medium
                    ${selectedLabel === label.id
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }
                    ${label.id === 'product' ? 'rounded-tl-md' : ''}
                    ${label.id === 'hex-code' ? 'rounded-tr-md' : ''}
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
                placeholder={`Search ${currentPlaceholder}...`}
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="pl-10 pr-10 py-6 w-full bg-white text-gray-900 
                  placeholder:text-gray-500 focus-visible:ring-primary rounded-r-md rounded-tl-none rounded-br-none
                  [&::placeholder]:transition-opacity [&::placeholder]:duration-400"
                style={{
                  '--tw-placeholder-opacity': isTransitioning ? '0.5' : '1'
                } as React.CSSProperties}
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

            {/* Search Button */}
            <button
              onClick={() => handleSearch(searchQuery)}
              className="bg-primary text-primary-foreground h-9 px-4 rounded-b-md flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors w-full sm:w-1/4 ml-auto"
            >
              <Search className="h-4 w-4" />
              <span className="text-sm font-medium">Search</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;