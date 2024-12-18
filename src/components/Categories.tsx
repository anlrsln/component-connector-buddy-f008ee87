import React from 'react';
import CategoryCard from './CategoryCard';

const categories = [
  {
    icon: "environment",
    title: "Environment"
  },
  {
    icon: "apparel",
    title: "Apparel & Accessories"
  },
  {
    icon: "home-garden",
    title: "Home & Garden"
  },
  {
    icon: "beauty",
    title: "Beauty"
  },
  {
    icon: "packaging",
    title: "Packaging & Printing"
  },
  {
    icon: "toys",
    title: "Mother, Kids & Toys"
  },
  {
    icon: "vehicle",
    title: "Vehicle Parts & Accessories"
  },
  {
    icon: "commercial",
    title: "Commercial Equipment & Supplies"
  },
  {
    icon: "electronics",
    title: "Consumer Electronics"
  },
  {
    icon: "sports",
    title: "Sports & Entertainment"
  },
  {
    icon: "business-services",
    title: "Business Services"
  },
  {
    icon: "shoes",
    title: "Shoes & Accessories"
  },
  {
    icon: "jewelry",
    title: "Jewelry, Eyewear, Watches"
  },
  {
    icon: "furniture",
    title: "Furniture"
  },
  {
    icon: "photography",
    title: "Photography & Video"
  },
  {
    icon: "office",
    title: "Office Supplies"
  }
];

const Categories = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Product Categories</h2>
          <p className="text-foreground/80">Explore our wide range of product categories</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center p-6 rounded-lg bg-white hover:shadow-lg transition-shadow duration-300 cursor-pointer"
            >
              <CategoryCard {...category} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;