import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Navbar from "@/components/Navbar";

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  rating: number;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Product 1",
    category: "Electronics",
    price: 299.99,
    rating: 4.5,
    image: "https://picsum.photos/400/300",
  },
  {
    id: 2,
    name: "Product 2",
    category: "Clothing",
    price: 49.99,
    rating: 4.0,
    image: "https://picsum.photos/400/301",
  },
  // Add more products as needed
];

const categories = ["Electronics", "Clothing", "Books", "Home & Garden"];
const ratings = [4, 3, 2, 1];

const ItemListing = () => {
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedRatings, setSelectedRatings] = useState<number[]>([]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handleRatingChange = (rating: number) => {
    setSelectedRatings((prev) =>
      prev.includes(rating)
        ? prev.filter((r) => r !== rating)
        : [...prev, rating]
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-foreground">All Items</h1>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="md:hidden">
                <Menu className="h-4 w-4" />
                <span className="ml-2">Filters</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <FilterContent
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                selectedCategories={selectedCategories}
                handleCategoryChange={handleCategoryChange}
                selectedRatings={selectedRatings}
                handleRatingChange={handleRatingChange}
              />
            </SheetContent>
          </Sheet>
        </div>

        <div className="flex gap-6">
          {/* Desktop Filter Sidebar */}
          <div className="hidden md:block w-64 bg-white p-4 rounded-lg shadow-sm h-fit">
            <FilterContent 
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              selectedCategories={selectedCategories}
              handleCategoryChange={handleCategoryChange}
              selectedRatings={selectedRatings}
              handleRatingChange={handleRatingChange}
            />
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-medium text-foreground">{product.name}</h3>
                    <p className="text-sm text-foreground/60 mt-1">
                      {product.category}
                    </p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="font-medium text-primary">
                        ${product.price}
                      </span>
                      <div className="flex items-center">
                        <span className="text-accent">★</span>
                        <span className="text-sm text-foreground/60 ml-1">
                          {product.rating}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
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
  handleCategoryChange: (category: string) => void;
  selectedRatings: number[];
  handleRatingChange: (rating: number) => void;
}

const FilterContent = ({
  priceRange,
  setPriceRange,
  selectedCategories,
  handleCategoryChange,
  selectedRatings,
  handleRatingChange,
}: FilterContentProps) => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-medium mb-4">Price Range</h3>
        <Slider
          defaultValue={[0, 1000]}
          max={1000}
          step={1}
          value={priceRange}
          onValueChange={setPriceRange}
          className="w-full"
        />
        <div className="flex justify-between mt-2">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>

      <div>
        <h3 className="font-medium mb-4">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <div key={category} className="flex items-center">
              <Checkbox
                id={category}
                checked={selectedCategories.includes(category)}
                onCheckedChange={() => handleCategoryChange(category)}
              />
              <label
                htmlFor={category}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ml-2"
              >
                {category}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-medium mb-4">Minimum Rating</h3>
        <div className="space-y-2">
          {ratings.map((rating) => (
            <div key={rating} className="flex items-center">
              <Checkbox
                id={`rating-${rating}`}
                checked={selectedRatings.includes(rating)}
                onCheckedChange={() => handleRatingChange(rating)}
              />
              <label
                htmlFor={`rating-${rating}`}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ml-2"
              >
                {rating}+ Stars
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItemListing;