import React from 'react';

interface CategoryCardProps {
  icon: string;
  title: string;
}

const CategoryCard = ({ icon, title }: CategoryCardProps) => {
  return (
    <div className="flex flex-col items-center p-4 space-y-2 rounded-full w-32 h-32 mx-auto">
      <div className="w-16 h-16">
        <img src={icon} alt={title} className="w-full h-full object-contain" />
      </div>
      <p className="text-xs text-center font-medium text-foreground/80 max-w-[80px]">{title}</p>
    </div>
  );
};

export default CategoryCard;