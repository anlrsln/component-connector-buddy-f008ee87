import { Zap, Shield, Sparkles } from 'lucide-react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FeatureCard from '../components/FeatureCard';
import Footer from '../components/Footer';

const Index = () => {
  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Experience blazing fast performance with our optimized platform.'
    },
    {
      icon: Shield,
      title: 'Secure by Default',
      description: 'Your data is protected with enterprise-grade security measures.'
    },
    {
      icon: Sparkles,
      title: 'Beautiful Design',
      description: 'Create stunning interfaces with our modern design system.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      
      {/* Features Section */}
      <section className="py-24 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">Amazing Features</h2>
            <p className="mt-4 text-foreground/80 max-w-2xl mx-auto">
              Discover what makes our platform unique and powerful.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;