import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MinusCircle, PlusCircle, Heart, Maximize2, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
  const images = product.images || [
    product.image,
    "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80",
    "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80",
    "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80"
  ];

  const specificationData = [
    { label: "Mop", value: "200" },
    { label: "Currency", value: "INR" },
    { label: "Unit Type", value: "Piece/Pieces" },
    { label: "Price", value: "890.00 INR (Approx.)" },
    { label: "Brand Name", value: "ETHYL HEXYL GLYCERIN" },
    { label: "Price Type", value: "fixed" },
    { label: "Minimum Order Quantity", value: "200" },
    { label: "Moq", value: "200" },
    { label: "Packsize", value: "1" },
    { label: "Product Unit", value: "200 Piece/Pieces" },
    { label: "Stock Quantity", value: "1000" },
    { label: "Returnable", value: "No" },
    { label: "Minimum Ordered Packs", value: "200" },
    { label: "GSTIN", value: "0%" }
  ];

  return (
    <>
      <div className="flex flex-col md:flex-row gap-6 bg-white p-6 rounded-lg shadow-sm">
        {/* Product Image Carousel */}
        <div className="md:w-1/2">
          <div className="relative group">
            <Carousel className="w-full">
              <CarouselContent>
                {images.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative">
                      <img 
                        src={image} 
                        alt={`${product.title} - View ${index + 1}`}
                        className="w-full rounded-lg object-cover aspect-square"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              
              {/* Navigation Arrows */}
              <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between">
                <CarouselPrevious className="relative h-10 w-10 rounded-full bg-white opacity-0 group-hover:opacity-80 transition-opacity duration-200 -translate-x-2">
                  <ChevronLeft className="h-6 w-6" />
                </CarouselPrevious>
                <CarouselNext className="relative h-10 w-10 rounded-full bg-white opacity-0 group-hover:opacity-80 transition-opacity duration-200 translate-x-2">
                  <ChevronRight className="h-6 w-6" />
                </CarouselNext>
              </div>

              {/* Action Buttons */}
              <div className="absolute top-4 right-4 flex gap-2">
                <Button 
                  variant="secondary" 
                  size="icon" 
                  className="rounded-full bg-white hover:bg-white/90"
                >
                  <Heart className="h-5 w-5 text-gray-600" />
                </Button>
                <Button 
                  variant="secondary" 
                  size="icon" 
                  className="rounded-full bg-white hover:bg-white/90"
                >
                  <Maximize2 className="h-5 w-5 text-gray-600" />
                </Button>
              </div>
            </Carousel>
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

      {/* Product Specifications Section */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold mb-4">Product Specifications</h2>
        <div className="bg-gray-50 rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {specificationData.map((spec, index) => (
              <div key={index} className="border-b border-gray-200 py-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">{spec.label}</span>
                  <span className="font-medium text-gray-900">{spec.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductImageAndDetails;