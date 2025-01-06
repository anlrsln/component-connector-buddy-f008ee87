import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-muted-foreground hover:text-foreground mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </button>

        <h1 className="text-4xl font-bold tracking-tight text-foreground mb-8">About Us</h1>
        
        <div className="prose prose-lg max-w-none">
          <p>
            Welcome to our marketplace! We are dedicated to connecting buyers with trusted sellers,
            offering a wide range of high-quality products across multiple categories.
          </p>

          <h2>Our Mission</h2>
          <p>
            Our mission is to create a seamless and reliable platform where businesses can thrive
            and customers can find exactly what they're looking for. We believe in fostering
            strong relationships between buyers and sellers, ensuring transparency, and maintaining
            high standards of quality.
          </p>

          <h2>What Sets Us Apart</h2>
          <ul>
            <li>Carefully vetted sellers and products</li>
            <li>Secure and transparent transactions</li>
            <li>Exceptional customer support</li>
            <li>Wide range of product categories</li>
            <li>Competitive pricing</li>
          </ul>

          <h2>Contact Us</h2>
          <p>
            Have questions or feedback? We'd love to hear from you! Our customer support team
            is available to assist you with any inquiries you may have.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;