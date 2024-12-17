import React from 'react';
import { Headphones, Shirt, Coffee, Sparkles, Package, Footprints, Car, Sprout, Headset, Dumbbell, FileBox, Baby, Gem, Armchair } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface CategoryCardProps {
  icon: string;
  title: string;
}

const iconMap: { [key: string]: LucideIcon } = {
  'business-services': Headphones,
  'apparel': Shirt,
  'home-garden': Coffee,
  'beauty': Sparkles,
  'packaging': Package,
  'shoes': Footprints,
  'vehicle': Car,
  'environment': Sprout,
  'electronics': Headset,
  'sports': Dumbbell,
  'commercial': FileBox,
  'toys': Baby,
  'jewelry': Gem,
  'furniture': Armchair
};

const CategoryCard = ({ icon, title }: CategoryCardProps) => {
  const IconComponent = iconMap[icon.replace('/', '').replace('.svg', '')];

  return (
    <div className="flex flex-col items-center justify-center bg-white rounded-full w-32 h-32 mx-auto transition-all duration-300 hover:shadow-lg group border border-gray-200">
      <div className="w-16 h-16 flex items-center justify-center relative">
        <div className="absolute inset-0 bg-transparent group-hover:bg-[#F97316] rounded-full transition-colors duration-300" />
        {IconComponent && (
          <IconComponent
            size={32}
            className="relative z-10 transition-colors duration-300 text-foreground/80 group-hover:text-white"
            strokeWidth={1.5}
          />
        )}
      </div>
      <p className="text-[9px] leading-tight text-center font-medium text-foreground/80 px-4 max-w-full line-clamp-2">{title}</p>
    </div>
  );
};

export default CategoryCard;