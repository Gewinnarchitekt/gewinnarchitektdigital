import { Button } from "@/components/ui/button";
import heroDataBackground from "@/assets/hero-data-background.jpg";

interface HeroSectionEnProps {}

const HeroSectionEn = ({}: HeroSectionEnProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Modern data background */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${heroDataBackground})` }} />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/50" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl text-left text-white opacity-0 animate-fadeIn">
          {/* Tagline */}
          <p className="text-lg md:text-xl mb-3 text-white/80 uppercase tracking-wider font-medium">
            Pricing & Controlling as a Service
          </p>
          
          {/* Main headline */}
          <h1 className="font-bold mb-8 leading-tight max-w-3xl">
            Data-Driven Profit Optimization for Digital Business Models
          </h1>
          
          {/* CTA Button */}
          <div className="flex justify-start">
            <a href="https://tidycal.com/gewinnarchitekt/angebotscheck" target="_blank" rel="noopener noreferrer">
              <Button 
                variant="hero" 
                size="lg"
                className="text-lg px-8 py-4 h-auto"
              >
                Clarify Your Profit Potential Now!
              </Button>
            </a>
          </div>
        </div>
      </div>
      
      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-20">
          <path d="M0,120L1200,0L1200,120Z" fill="hsl(var(--background))" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSectionEn;
