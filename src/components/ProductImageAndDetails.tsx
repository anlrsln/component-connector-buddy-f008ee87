import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MinusCircle, PlusCircle } from "lucide-react";

interface ProductImageAndDetailsProps {
  product: {
    image: string;
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
  return (
    <div className="flex flex-col md:flex-row gap-6 bg-white p-6 rounded-lg shadow-sm">
      {/* Product Image */}
      <div className="md:w-1/2">
        <img 
          src={product.image} 
          alt={product.title}
          className="w-full rounded-lg object-cover aspect-square"
        />
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