import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Filter, SlidersHorizontal } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import Navbar from "@/components/Navbar";
import { useSearchParams } from "react-router-dom";
import { products } from "@/data/products";

const categories = [
  "Environment",
  "Apparel & Accessories",
  "Home & Garden",
  "Beauty",
  "Packaging & Printing",
  "Mother, Kids & Toys",
  "Vehicle Parts & Accessories",
  "Commercial Equipment & Supplies",
  "Consumer Electronics",
  "Sports & Entertainment",
  "Business Services",
  "Shoes & Accessories",
  "Jewelry, Eyewear, Watches",
  "Furniture",
  "Photography & Video",
  "Office Supplies"
];

const ItemListing = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  const [priceRange, setPriceRange] = useState<number[]>([0, 1500]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    categoryParam ? [categoryParam] : []
  );

  // Filter products based on selected categories and price range
  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.category);
    const matchesPrice =
      product.price >= priceRange[0] && product.price <= priceRange[1];
    return matchesCategory && matchesPrice;
  });

  // Update selected categories when URL parameter changes
  useEffect(() => {
    if (categoryParam && !selectedCategories.includes(categoryParam)) {
      setSelectedCategories([categoryParam]);
    }
  }, [categoryParam]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 pt-20">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">
            {categoryParam ? `${categoryParam} Products` : 'All Products'}
          </h1>
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
          <div className="hidden md:block w-64 bg-white p-4 rounded-lg shadow-sm h-fit">
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
              {filteredProducts.map((product) => (
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