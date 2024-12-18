import { LucideIcon } from 'lucide-react';

interface CategoryCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const CategoryCard = ({ icon: Icon, title, description }: CategoryCardProps) => {
  return (
    <div className="group relative p-6 rounded-2xl bg-background border border-border hover:border-primary/20 transition-all duration-300">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="relative">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-foreground/80 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default CategoryCard;