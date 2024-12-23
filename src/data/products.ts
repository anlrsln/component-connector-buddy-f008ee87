export interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
  category: string;
  rating: number;
}

export const products: Product[] = [
  // Environment
  {
    id: "env1",
    title: "Solar Panel Kit",
    price: 599.99,
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276",
    category: "Environment",
    rating: 4.8,
  },
  {
    id: "env2",
    title: "Smart Thermostat",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1567925086590-a8ed23246b17",
    category: "Environment",
    rating: 4.7,
  },
  
  // Apparel & Accessories
  {
    id: "app1",
    title: "Designer Handbag",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3",
    category: "Apparel & Accessories",
    rating: 4.9,
  },
  {
    id: "app2",
    title: "Premium Sunglasses",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f",
    category: "Apparel & Accessories",
    rating: 4.6,
  },

  // Home & Garden
  {
    id: "hg1",
    title: "Garden Tool Set",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b",
    category: "Home & Garden",
    rating: 4.7,
  },
  {
    id: "hg2",
    title: "Smart Plant Pot",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411",
    category: "Home & Garden",
    rating: 4.5,
  },

  // Beauty
  {
    id: "beauty1",
    title: "Luxury Skincare Set",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b",
    category: "Beauty",
    rating: 4.8,
  },
  {
    id: "beauty2",
    title: "Professional Hair Dryer",
    price: 159.99,
    image: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da",
    category: "Beauty",
    rating: 4.6,
  },

  // Packaging & Printing
  {
    id: "pack1",
    title: "Eco-Friendly Packaging Set",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f",
    category: "Packaging & Printing",
    rating: 4.5,
  },
  {
    id: "pack2",
    title: "Label Printer",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338",
    category: "Packaging & Printing",
    rating: 4.7,
  },

  // Mother, Kids & Toys
  {
    id: "toy1",
    title: "Educational Building Blocks",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b",
    category: "Mother, Kids & Toys",
    rating: 4.9,
  },
  {
    id: "toy2",
    title: "Baby Care Kit",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4",
    category: "Mother, Kids & Toys",
    rating: 4.8,
  },

  // Vehicle Parts & Accessories
  {
    id: "vehicle1",
    title: "Car LED Lights Kit",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1600661653561-629509216228",
    category: "Vehicle Parts & Accessories",
    rating: 4.6,
  },
  {
    id: "vehicle2",
    title: "Premium Car Cover",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341",
    category: "Vehicle Parts & Accessories",
    rating: 4.5,
  },

  // Commercial Equipment
  {
    id: "comm1",
    title: "Professional Coffee Machine",
    price: 999.99,
    image: "https://images.unsplash.com/photo-1587516053309-bae3d3b6a0f3",
    category: "Commercial Equipment & Supplies",
    rating: 4.9,
  },
  {
    id: "comm2",
    title: "Industrial Food Processor",
    price: 799.99,
    image: "https://images.unsplash.com/photo-1591261730799-ee4e6c2d16d7",
    category: "Commercial Equipment & Supplies",
    rating: 4.8,
  }
];