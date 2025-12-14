import { Button } from "@/components/ui/button";
import heroDataBackground from "@/assets/hero-data-background.jpg";

interface HeroSectionProps {}

const HeroSection = ({}: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Modern data background */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${heroDataBackground})` }} />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/50" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl text-left text-white opacity-0 animate-fadeIn">
          {/* Tagline/Eyebrow */}
          <p className="text-lg md:text-xl uppercase tracking-wider font-medium text-white/80 mb-4">
            Pricing & Controlling as a Service
          </p>
          
          {/* Main headline */}
          <h1 className="font-bold mb-8 leading-tight">
            Datengetriebene Gewinnoptimierung<br className="hidden md:block" /> für digitale Geschäftsmodelle
          </h1>
          
          {/* CTA Button */}
          <div className="flex justify-start">
            <a href="https://tidycal.com/gewinnarchitekt/angebotscheck" target="_blank" rel="noopener noreferrer">
              <Button 
                variant="hero" 
                size="lg"
                className="text-lg px-8 py-4 h-auto"
              >
                Jetzt Gewinnpotential abklären!
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

export default HeroSection;