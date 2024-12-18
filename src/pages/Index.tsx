import { Shield, Globe, CheckSquare, Package, HeadphonesIcon, PiggyBank } from 'lucide-react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ValueProposition from '../components/ValueProposition';
import FeatureCard from '../components/FeatureCard';
import Categories from '../components/Categories';
import PopularProducts from '../components/PopularProducts';
import Footer from '../components/Footer';

const Index = () => {
  const features = [
    {
      icon: Shield,
      title: 'Trusted and Verified Suppliers',
      description: 'We collaborate exclusively with reliable, thoroughly verified local manufacturers to ensure you receive products that meet the highest standards of trust and reliability.'
    },
    {
      icon: Globe,
      title: 'Global Access to Premium Products',
      description: 'Explore a wide range of high-quality products across multiple categories, carefully curated to meet the needs of international markets and businesses.'
    },
    {
      icon: CheckSquare,
      title: 'Uncompromising Quality Assurance',
      description: 'Every product undergoes strict quality control measures, ensuring durability, precision, and consistency that you can depend on.'
    },
    {
      icon: Package,
      title: 'Fast, Secure, and Hassle-Free Delivery',
      description: 'Enjoy seamless, timely, and secure shipping solutions tailored to meet the demands of international clients and partners.'
    },
    {
      icon: HeadphonesIcon,
      title: 'Dedicated Customer Support',
      description: 'Our team of professionals is ready to assist you with personalized support, helping you navigate every step of the process smoothly and efficiently.'
    },
    {
      icon: PiggyBank,
      title: 'Competitive Pricing with Transparent Deals',
      description: 'Gain access to cost-effective, competitive pricing without compromising on quality, with fully transparent transactions and no hidden fees.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ValueProposition />
      <Categories />
      <PopularProducts />
      <Footer />
    </div>
  );
};

export default Index;