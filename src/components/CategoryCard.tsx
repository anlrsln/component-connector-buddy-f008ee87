import React from 'react';
import { Headphones, Shirt, Coffee, Sparkles, Package, Footprints, Car, Sprout, Headset, Dumbbell, FileBox, Baby, Gem, Armchair, Camera, Briefcase } from 'lucide-react';
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
  'furniture': Armchair,
  'photography': Camera,
  'office': Briefcase
};

const CategoryCard = ({ icon, title }: CategoryCardProps) => {
  const IconComponent = iconMap[icon.replace('/', '').replace('.svg', '')];

  return (
    <div className="w-full h-full">
      <div className="flex flex-col items-center justify-center gap-2">
        {IconComponent && (
          <IconComponent
            size={32}
            className="text-foreground/80"
            strokeWidth={1.5}
          />
        )}
        <p className="text-[9px] leading-tight text-center font-medium text-foreground/80 px-2 max-w-full line-clamp-2">{title}</p>
      </div>
    </div>
  );
};

export default CategoryCard;