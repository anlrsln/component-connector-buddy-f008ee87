import { useParams } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import SellerDetails from '@/components/SellerDetails';
import { Share2, MinusCircle, PlusCircle } from 'lucide-react';
import { useState } from 'react';

const getProductById = (id: string) => {
  const products = [
    {
      id: "1",
      title: "Professional Camera",
      price: 899.99,
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      category: "Electronics",
      rating: 4.8,
      description: "High-quality professional camera perfect for photography enthusiasts and professionals alike. Features advanced imaging technology and versatile shooting modes.",
      specifications: [
        "24.2MP Full-Frame Sensor",
        "4K Video Recording",
        "5-Axis Image Stabilization",
        "Dual SD Card Slots"
      ]
    },
    {
      id: "2",
      title: "Developer Laptop",
      price: 1299.99,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      category: "Electronics",
      rating: 4.9,
      description: "A powerful laptop designed for developers with high performance and portability.",
      specifications: [
        "16GB RAM",
        "512GB SSD",
        "Intel i7 Processor",
        "15.6 inch Display"
      ]
    },
    {
      id: "3",
      title: "Smart Watch Pro",
      price: 299.99,
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      category: "Electronics",
      rating: 4.7,
      description: "A smart watch with health tracking features and customizable watch faces.",
      specifications: [
        "Heart Rate Monitor",
        "GPS Tracking",
        "Water Resistant",
        "Long Battery Life"
      ]
    },
    {
      id: "4",
      title: "Code Editor License",
      price: 199.99,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      category: "Software",
      rating: 4.6,
      description: "A license for a popular code editor with advanced features for developers.",
      specifications: [
        "Syntax Highlighting",
        "Code Completion",
        "Version Control Integration",
        "Custom Themes"
      ]
    }
  ];
  
  return products.find(p => p.id === id);
};

const ProductDetail = () => {
  const { id } = useParams();
  const product = getProductById(id || "");
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleIncrement = () => {
    setQuantity(prev => prev + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 pt-20">
        <div className="flex justify-between items-center mb-6">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/items">Products</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{product.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <Button variant="ghost" size="icon">
            <Share2 className="h-5 w-5" />
          </Button>
        </div>

        <div className="grid md:grid-cols-12 gap-6">
          {/* Left Column - Product Image */}
          <div className="md:col-span-5">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <img 
                src={product.image} 
                alt={product.title}
                className="w-full rounded-lg object-cover aspect-square"
              />
            </div>
          </div>

          {/* Middle Column - Product Details */}
          <div className="md:col-span-4 space-y-6">
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
                  onChange={(e) => setQuantity(Number(e.target.value))}
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

          {/* Right Column - Seller Details */}
          <div className="md:col-span-3">
            <SellerDetails />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
