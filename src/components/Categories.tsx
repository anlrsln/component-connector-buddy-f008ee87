import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CategoryCard from './CategoryCard';

const categories = [
  {
    icon: "/business-services.svg",
    title: "Business Services"
  },
  {
    icon: "/apparel.svg",
    title: "Apparel & Accessories"
  },
  {
    icon: "/home-garden.svg",
    title: "Home & Garden"
  },
  {
    icon: "/beauty.svg",
    title: "Beauty"
  },
  {
    icon: "/packaging.svg",
    title: "Packaging & Printing"
  },
  {
    icon: "/shoes.svg",
    title: "Shoes & Accessories"
  },
  {
    icon: "/vehicle.svg",
    title: "Vehicle Parts & Accessories"
  },
  {
    icon: "/environment.svg",
    title: "Environment"
  },
  {
    icon: "/electronics.svg",
    title: "Consumer Electronics"
  },
  {
    icon: "/sports.svg",
    title: "Sports & Entertainment"
  },
  {
    icon: "/commercial.svg",
    title: "Commercial Equipment & Supplies"
  },
  {
    icon: "/toys.svg",
    title: "Mother, Kids & Toys"
  },
  {
    icon: "/jewelry.svg",
    title: "Jewelry, Eyewear, Watches"
  },
  {
    icon: "/furniture.svg",
    title: "Furniture"
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
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {categories.map((category, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/4 lg:basis-1/6">
                <CategoryCard {...category} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Categories;