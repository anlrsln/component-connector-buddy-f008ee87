import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const GetStartedCTA = () => {
  return (
    <section className="bg-primary py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Ready to Get Started?
        </h2>
        <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
          Join our platform today and experience seamless trading with verified partners worldwide.
        </p>
        <div className="flex justify-center gap-4">
          <Button
            variant="secondary"
            size="lg"
            className="font-semibold"
          >
            Start Trading Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GetStartedCTA;