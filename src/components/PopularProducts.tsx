import React from 'react';
import ProductCard from './ProductCard';

const products = [
  {
    title: "Professional Laptop Stand",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
    category: "Electronics",
    rating: 4.8
  },
  {
    title: "Ergonomic Office Chair",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    category: "Furniture",
    rating: 4.9
  },
  {
    title: "Wireless Keyboard and Mouse Combo",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
    category: "Electronics",
    rating: 4.7
  },
  {
    title: "LED Desk Lamp with USB Port",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80",
    category: "Lighting",
    rating: 4.6
  }
];

const PopularProducts = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Popular Products</h2>
          <p className="text-foreground/80">Discover our most loved items</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;