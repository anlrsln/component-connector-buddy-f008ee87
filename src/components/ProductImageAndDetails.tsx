import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MinusCircle, PlusCircle } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useState } from "react";

interface ProductImageAndDetailsProps {
  product: {
    image: string;
    images?: string[];
    title: string;
    price: number;
    description: string;
    specifications: string[];
  };
  quantity: number;
  onQuantityChange: (value: number) => void;
  handleIncrement: () => void;
  handleDecrement: () => void;
}

const ProductImageAndDetails = ({
  product,
  quantity,
  onQuantityChange,
  handleIncrement,
  handleDecrement
}: ProductImageAndDetailsProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Default images array including the main image and additional sample images
  const images = product.images || [
    product.image,
    "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80",
    "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80",
    "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80"
  ];

  const handleSliderChange = (value: number[]) => {
    setCurrentSlide(value[0]);
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 bg-white p-6 rounded-lg shadow-sm">
      {/* Product Image Carousel */}
      <div className="md:w-1/2">
        <div className="relative">
          <Carousel className="w-full">
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <img 
                      src={image} 
                      alt={`${product.title} - View ${index + 1}`}
                      className="w-full rounded-lg object-cover aspect-square"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="absolute inset-0 flex items-center justify-between p-4">
              <CarouselPrevious className="relative left-0 translate-x-0" />
              <CarouselNext className="relative right-0 translate-x-0" />
            </div>
          </Carousel>
          <div className="mt-4 px-2">
            <Slider
              value={[currentSlide]}
              max={images.length - 1}
              step={1}
              onValueChange={handleSliderChange}
              className="w-full"
            />
          </div>
        </div>
      </div>

      {/* Product Details */}
      <div className="md:w-1/2 space-y-6">
        <div>
          <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
          <Badge variant="secondary" className="text-xs">
            Accepts only Foreign inquiries
          </Badge>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-lg font-semibold">Price:</span>
            <span className="text-xl font-bold text-primary">
              ${product.price.toFixed(2)} / Unit
            </span>
          </div>
          <div className="text-sm text-muted-foreground">
            <div>1 Pack Contains 1</div>
            <div>Minimum Pack Size: {quantity}</div>
          </div>
          <Badge variant="secondary" className="bg-green-100 text-green-800">
            In Stock
          </Badge>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center border rounded-md">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={handleDecrement}
            >
              <MinusCircle className="h-4 w-4" />
            </Button>
            <input
              type="number"
              value={quantity}
              onChange={(e) => onQuantityChange(Number(e.target.value))}
              className="w-16 text-center border-x"
            />
            <Button 
              variant="ghost" 
              size="icon"
              onClick={handleIncrement}
            >
              <PlusCircle className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="flex gap-3">
          <Button className="flex-1">
            Buy Now
          </Button>
          <Button variant="outline" className="flex-1">
            Send Inquiry
          </Button>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Description</h2>
          <p className="text-muted-foreground">{product.description}</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Specifications</h2>
          <ul className="list-disc list-inside space-y-2">
            {product.specifications.map((spec, index) => (
              <li key={index} className="text-muted-foreground">{spec}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductImageAndDetails;