import React from 'react';
import ProductCard from './ProductCard';

const products = [
  {
    id: "1",
    title: "Professional Camera Kit",
    price: 899.99,
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    category: "Photography",
    rating: 4.8
  },
  {
    id: "2",
    title: "Developer Laptop Pro",
    price: 1299.99,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    category: "Electronics",
    rating: 4.9
  },
  {
    id: "3",
    title: "Smart Watch Elite",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    category: "Wearables",
    rating: 4.7
  },
  {
    id: "4",
    title: "Development Tools Suite",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    category: "Software",
    rating: 4.6
  },
  {
    id: "5",
    title: "Wireless Keyboard",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    category: "Accessories",
    rating: 4.5
  },
  {
    id: "6",
    title: "Ergonomic Office Chair",
    price: 399.99,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    category: "Furniture",
    rating: 4.8
  }
];

const SellerProductList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default SellerProductList;