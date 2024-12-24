import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Star, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";

const sellers = [
  {
    id: 1,
    name: "Tech Solutions Inc",
    rating: 4.8,
    location: "Mumbai, Maharashtra",
    categories: ["Electronics", "Software"],
    description: "Leading provider of tech solutions and software products.",
    memberSince: "2019",
    responseRate: "98%",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
  },
  {
    id: 2,
    name: "VCARE MEDICINES",
    rating: 4.9,
    location: "Delhi, India",
    categories: ["Healthcare", "Pharmaceuticals"],
    description: "Trusted pharmaceutical distributor with nationwide presence.",
    memberSince: "2015",
    responseRate: "95%",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
  },
  {
    id: 3,
    name: "Global Trade Partners",
    rating: 4.7,
    location: "Bangalore, Karnataka",
    categories: ["Import/Export", "Wholesale"],
    description: "International trading company specializing in B2B solutions.",
    memberSince: "2018",
    responseRate: "92%",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e"
  }
];

const SellerListing = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-background pt-20">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8">Featured Sellers</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sellers.map((seller) => (
              <Card key={seller.id} className="overflow-hidden">
                <div className="aspect-video relative">
                  <img 
                    src={seller.image} 
                    alt={seller.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="p-6 space-y-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-semibold">{seller.name}</h3>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{seller.rating}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{seller.location}</span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {seller.categories.map((category) => (
                      <span 
                        key={category}
                        className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                      >
                        {category}
                      </span>
                    ))}
                  </div>

                  <p className="text-sm text-muted-foreground">{seller.description}</p>

                  <div className="flex justify-between items-center text-sm text-muted-foreground">
                    <span>Member since {seller.memberSince}</span>
                    <span>{seller.responseRate} response rate</span>
                  </div>

                  <Button className="w-full gap-2">
                    <Mail className="w-4 h-4" />
                    Contact Seller
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SellerListing;