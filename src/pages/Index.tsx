import { Shield, Globe, CheckSquare, Package, HeadphonesIcon, PiggyBank } from 'lucide-react';
import { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ValueProposition from '../components/ValueProposition';
import Categories from '../components/Categories';
import PopularProducts from '../components/PopularProducts';
import Footer from '../components/Footer';

const Index = () => {
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-up', 'opacity-100');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px'
      }
    );

    // Get all sections except the hero (which should always be visible)
    const sections = sectionsRef.current.filter(Boolean);
    sections.forEach((section) => {
      if (section) {
        section.classList.add('opacity-0');
        observer.observe(section);
      }
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      
      <section ref={el => sectionsRef.current[0] = el}>
        <ValueProposition />
      </section>
      
      <section ref={el => sectionsRef.current[1] = el}>
        <Categories />
      </section>
      
      <section ref={el => sectionsRef.current[2] = el}>
        <PopularProducts />
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;