import { useParams } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import SellerDetails from '@/components/SellerDetails';
import CompanyDetails from '@/components/CompanyDetails';
import MoreProductsFromSeller from '@/components/MoreProductsFromSeller';
import { Share2 } from 'lucide-react';
import { useState } from 'react';
import ProductImageAndDetails from '@/components/ProductImageAndDetails';

const getProductById = (id: string) => {
  const products = [
    {
      id: "1",
      title: "Professional Camera",
      price: 899.99,
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      images: [
        "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
        "https://images.unsplash.com/photo-1518770660439-4636190af475",
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
      ],
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
        {/* Breadcrumb section */}
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

        {/* Main product section */}
        <div className="grid md:grid-cols-12 gap-6">
          <div className="md:col-span-9">
            <ProductImageAndDetails
              product={product}
              quantity={quantity}
              onQuantityChange={setQuantity}
              handleIncrement={handleIncrement}
              handleDecrement={handleDecrement}
            />
          </div>

          {/* Right Column - Seller Details */}
          <div className="md:col-span-3">
            <SellerDetails />
          </div>
        </div>

        {/* Company Details Section */}
        <CompanyDetails />
        
        {/* More Products Section */}
        <MoreProductsFromSeller />
      </div>
    </div>
  );
};

export default ProductDetail;