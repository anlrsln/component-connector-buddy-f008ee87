import { useParams } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import SellerDetails from '@/components/SellerDetails';

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

  if (!product) {
    return <div>Product not found</div>;
  }

  const minPrice = (product.price * 0.5).toFixed(2);
  const maxPrice = (product.price * 1.5).toFixed(2);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 pt-20">
        <Breadcrumb className="mb-6">
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

        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative">
            <img 
              src={product.image} 
              alt={product.title}
              className="w-full rounded-lg object-cover aspect-square"
            />
            <Badge className="absolute top-4 right-4 text-lg">
              {product.rating} ★
            </Badge>
          </div>

          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
                <p className="text-muted-foreground">{product.category}</p>
                <p className="text-2xl font-bold text-primary mt-4">
                  ${minPrice} - ${maxPrice}
                </p>
              </div>
              <SellerDetails />
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

            <Button size="lg" className="w-full">Add to Cart</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
