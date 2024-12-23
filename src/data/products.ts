export interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  description?: string;
}

export const products: Product[] = [
  // Environment
  {
    id: "env1",
    title: "Solar Panel Kit 400W",
    price: 599.99,
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276",
    category: "Environment",
    rating: 4.8,
    description: "Complete solar panel kit with inverter and mounting hardware"
  },
  {
    id: "env2",
    title: "Smart Thermostat Pro",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1567925086590-a8ed23246b17",
    category: "Environment",
    rating: 4.7,
    description: "Energy-efficient smart thermostat with mobile app control"
  },
  {
    id: "env3",
    title: "Home Wind Turbine",
    price: 799.99,
    image: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51",
    category: "Environment",
    rating: 4.5,
    description: "Residential wind power generator with battery storage"
  },
  
  // Apparel & Accessories
  {
    id: "app1",
    title: "Designer Leather Handbag",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3",
    category: "Apparel & Accessories",
    rating: 4.9,
    description: "Genuine leather designer handbag with gold hardware"
  },
  {
    id: "app2",
    title: "Premium Aviator Sunglasses",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f",
    category: "Apparel & Accessories",
    rating: 4.6,
    description: "UV protection aviator sunglasses with polarized lenses"
  },
  {
    id: "app3",
    title: "Cashmere Scarf Set",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26",
    category: "Apparel & Accessories",
    rating: 4.7,
    description: "Luxurious cashmere scarf and gloves set"
  },

  // Home & Garden
  {
    id: "hg1",
    title: "Professional Garden Tool Set",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b",
    category: "Home & Garden",
    rating: 4.7,
    description: "Complete set of professional-grade garden tools"
  },
  {
    id: "hg2",
    title: "Smart Plant Monitor",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411",
    category: "Home & Garden",
    rating: 4.5,
    description: "WiFi-enabled plant monitor with soil moisture sensing"
  },
  {
    id: "hg3",
    title: "Automatic Plant Watering System",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1585664811087-47f65abbad64",
    category: "Home & Garden",
    rating: 4.6,
    description: "Smart irrigation system for indoor and outdoor plants"
  },

  // Beauty
  {
    id: "beauty1",
    title: "Premium Skincare Collection",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b",
    category: "Beauty",
    rating: 4.8,
    description: "Complete luxury skincare routine set"
  },
  {
    id: "beauty2",
    title: "Professional Hair Styling Kit",
    price: 159.99,
    image: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da",
    category: "Beauty",
    rating: 4.6,
    description: "Professional-grade hair dryer and styling tools"
  },
  {
    id: "beauty3",
    title: "Organic Makeup Set",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796",
    category: "Beauty",
    rating: 4.7,
    description: "Natural and organic makeup collection"
  },

  // Packaging & Printing
  {
    id: "pack1",
    title: "Eco-Friendly Packaging Bundle",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f",
    category: "Packaging & Printing",
    rating: 4.5,
    description: "Sustainable packaging materials set"
  },
  {
    id: "pack2",
    title: "Commercial Label Printer",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338",
    category: "Packaging & Printing",
    rating: 4.7,
    description: "High-speed commercial grade label printer"
  },
  {
    id: "pack3",
    title: "Custom Box Making Machine",
    price: 899.99,
    image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc",
    category: "Packaging & Printing",
    rating: 4.8,
    description: "Automated custom box manufacturing system"
  },

  // Mother, Kids & Toys
  {
    id: "toy1",
    title: "Educational Building Set",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b",
    category: "Mother, Kids & Toys",
    rating: 4.9,
    description: "STEM learning building blocks set"
  },
  {
    id: "toy2",
    title: "Premium Baby Care Kit",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4",
    category: "Mother, Kids & Toys",
    rating: 4.8,
    description: "Complete newborn care essentials kit"
  },
  {
    id: "toy3",
    title: "Interactive Learning Tablet",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4",
    category: "Mother, Kids & Toys",
    rating: 4.7,
    description: "Educational tablet with parental controls"
  },

  // Vehicle Parts & Accessories
  {
    id: "vehicle1",
    title: "LED Car Light Kit",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1600661653561-629509216228",
    category: "Vehicle Parts & Accessories",
    rating: 4.6,
    description: "Complete LED lighting upgrade kit"
  },
  {
    id: "vehicle2",
    title: "Premium Car Cover",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341",
    category: "Vehicle Parts & Accessories",
    rating: 4.5,
    description: "All-weather protective car cover"
  },
  {
    id: "vehicle3",
    title: "Smart Car Diagnostic Tool",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1562273138-f46be4ebdf33",
    category: "Vehicle Parts & Accessories",
    rating: 4.8,
    description: "Professional OBD2 diagnostic scanner"
  },

  // Commercial Equipment
  {
    id: "comm1",
    title: "Commercial Coffee Machine",
    price: 999.99,
    image: "https://images.unsplash.com/photo-1587516053309-bae3d3b6a0f3",
    category: "Commercial Equipment & Supplies",
    rating: 4.9,
    description: "Professional espresso machine for cafes"
  },
  {
    id: "comm2",
    title: "Industrial Food Processor",
    price: 799.99,
    image: "https://images.unsplash.com/photo-1591261730799-ee4e6c2d16d7",
    category: "Commercial Equipment & Supplies",
    rating: 4.8,
    description: "Heavy-duty commercial food processor"
  },
  {
    id: "comm3",
    title: "Commercial Display Freezer",
    price: 1499.99,
    image: "https://images.unsplash.com/photo-1591261730799-ee4e6c2d16d7",
    category: "Commercial Equipment & Supplies",
    rating: 4.7,
    description: "Glass door display freezer for retail"
  }
];