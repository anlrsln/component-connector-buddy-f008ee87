import React from 'react';
import { Button } from './ui/button';
import { Send } from 'lucide-react';
import { Card, CardContent } from './ui/card';

interface Product {
  id: string;
  title: string;
  image: string;
  seller: string;
  featured?: boolean;
}

const moreProducts: Product[] = [
  {
    id: "2",
    title: "Full Sleeve Males Reversible Safari Suit",
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea",
    seller: "NEW AASHI RAINWEAR",
    featured: true
  },
  {
    id: "3",
    title: "Polyester Fabric Full Sleeve Mens Raincoat",
    image: "https://images.unsplash.com/photo-1578681994506-b8f463449011",
    seller: "NEW AASHI RAINWEAR",
    featured: true
  },
  {
    id: "4",
    title: "XL Size Full Sleeve Mens Raincoat",
    image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a",
    seller: "NEW AASHI RAINWEAR"
  },
  {
    id: "5",
    title: "Full Sleeve Mens Reversible Safari Suit",
    image: "https://images.unsplash.com/photo-1578681994680-d5f1668c6388",
    seller: "NEW AASHI RAINWEAR"
  }
];

const MoreProductsFromSeller = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm space-y-6 mt-8">
      <h2 className="text-2xl font-semibold text-gray-800">More Products From This Seller</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {moreProducts.map((product) => (
          <Card key={product.id} className="overflow-hidden group">
            <CardContent className="p-0">
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-48 object-cover"
                />
                {product.featured && (
                  <div className="absolute top-2 right-2">
                    <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                      Featured
                    </span>
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-medium text-sm line-clamp-2 mb-2 min-h-[40px]">
                  {product.title}
                </h3>
                <p className="text-sm text-foreground/60 mb-4">{product.seller}</p>
                <Button 
                  variant="outline" 
                  className="w-full flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Send Inquiry
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MoreProductsFromSeller;