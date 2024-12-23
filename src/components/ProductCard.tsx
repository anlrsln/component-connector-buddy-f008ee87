import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { Card, CardContent, CardFooter } from './ui/card';
import { Badge } from './ui/badge';

interface ProductCardProps {
  id?: string;
  title: string;
  price: number;
  image: string;
  category: string;
  rating: number;
}

const ProductCard = ({ id = "1", title, price, image, category, rating }: ProductCardProps) => {
  const navigate = useNavigate();
  const minPrice = (price * 0.5).toFixed(2);
  const maxPrice = (price * 1.5).toFixed(2);

  return (
    <Card className="overflow-hidden group">
      <CardContent className="p-0">
        <div className="relative overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <Badge className="absolute top-2 right-2 bg-accent text-accent-foreground">
            {rating} ★
          </Badge>
        </div>
        <div className="p-4">
          <h3 className="font-medium text-sm line-clamp-2 mb-2 min-h-[40px]">{title}</h3>
          <p className="text-sm text-foreground/60 mb-2">{category}</p>
          <p className="text-lg font-bold text-primary">${minPrice} - ${maxPrice}</p>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button 
          className="w-full" 
          variant="outline"
          onClick={() => navigate(`/product/${id}`)}
        >
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;