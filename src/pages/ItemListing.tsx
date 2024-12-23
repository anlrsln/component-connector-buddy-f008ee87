import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Filter, SlidersHorizontal } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

const sampleProducts = [
  {
    id: 1,
    title: "Professional Camera",
    price: 899.99,
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    category: "Electronics",
    rating: 4.8,
  },
  {
    id: 2,
    title: "Developer Laptop",
    price: 1299.99,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    category: "Electronics",
    rating: 4.9,
  },
  {
    id: 3,
    title: "Smart Watch Pro",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    category: "Electronics",
    rating: 4.7,
  },
  {
    id: 4,
    title: "Code Editor License",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    category: "Software",
    rating: 4.6,
  },
  {
    id: 5,
    title: "Wireless Keyboard",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    category: "Electronics",
    rating: 4.5,
  },
  {
    id: 6,
    title: "Ergonomic Chair",
    price: 399.99,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    category: "Furniture",
    rating: 4.8,
  },
  {
    id: 7,
    title: "UX Design Course",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    category: "Education",
    rating: 4.7,
  },
  {
    id: 8,
    title: "Cloud Storage Plan",
    price: 9.99,
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    category: "Software",
    rating: 4.4,
  },
  {
    id: 9,
    title: "LED Monitor",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    category: "Electronics",
    rating: 4.6,
  },
  {
    id: 10,
    title: "Project Management Tool",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    category: "Software",
    rating: 4.5,
  },
  {
    id: 11,
    title: "Standing Desk",
    price: 499.99,
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    category: "Furniture",
    rating: 4.9,
  },
  {
    id: 12,
    title: "Web Development Course",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c",
    category: "Education",
    rating: 4.8,
  },
  {
    id: 13,
    title: "Noise-Canceling Headphones",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    category: "Electronics",
    rating: 4.7,
  },
  {
    id: 14,
    title: "Version Control System",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    category: "Software",
    rating: 4.6,
  },
  {
    id: 15,
    title: "Desk Organizer",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b",
    category: "Office Supplies",
    rating: 4.3,
  },
  {
    id: 16,
    title: "Code Repository",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    category: "Software",
    rating: 4.5,
  },
];

const categories = [
  "Electronics",
  "Clothing",
  "Books",
  "Home & Garden",
  "Sports",
  "Toys",
];

const ItemListing = () => {
  const [priceRange, setPriceRange] = useState<number[]>([0, 1500]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Products</h1>
          <div className="md:hidden">
            <Drawer>
              <DrawerTrigger asChild>
                <Button variant="outline" size="icon">
                  <SlidersHorizontal className="h-4 w-4" />
                </Button>
              </DrawerTrigger>
              <DrawerContent>
                <div className="p-4">
                  <FilterContent 
                    priceRange={priceRange}
                    setPriceRange={setPriceRange}
                    selectedCategories={selectedCategories}
                    setSelectedCategories={setSelectedCategories}
                  />
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </div>

        <div className="flex gap-6">
          {/* Desktop Filter Sidebar */}
          <div className="hidden md:block w-64 bg-white p-4 rounded-lg shadow-sm">
            <FilterContent 
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              selectedCategories={selectedCategories}
              setSelectedCategories={setSelectedCategories}
            />
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {sampleProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface FilterContentProps {
  priceRange: number[];
  setPriceRange: (value: number[]) => void;
  selectedCategories: string[];
  setSelectedCategories: React.Dispatch<React.SetStateAction<string[]>>;
}

const FilterContent = ({ 
  priceRange, 
  setPriceRange,
  selectedCategories,
  setSelectedCategories 
}: FilterContentProps) => {
  const handleCategoryChange = (category: string) => {
    setSelectedCategories(selectedCategories.includes(category) 
      ? selectedCategories.filter(c => c !== category)
      : [...selectedCategories, category]
    );
  };

  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Filter className="h-4 w-4" />
          <h3 className="font-semibold">Filters</h3>
        </div>
        <Separator className="mb-4" />
        
        <div className="space-y-4">
          <div>
            <h4 className="font-medium mb-2">Price Range</h4>
            <Slider
              defaultValue={priceRange}
              max={1500}
              step={10}
              value={priceRange}
              onValueChange={setPriceRange}
              className="mb-2"
            />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>${priceRange[0]}</span>
              <span>${priceRange[1]}</span>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-2">Categories</h4>
            <div className="space-y-2">
              {categories.map((category) => (
                <div key={category} className="flex items-center space-x-2">
                  <Checkbox
                    id={category}
                    checked={selectedCategories.includes(category)}
                    onCheckedChange={() => handleCategoryChange(category)}
                  />
                  <Label htmlFor={category}>{category}</Label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemListing;