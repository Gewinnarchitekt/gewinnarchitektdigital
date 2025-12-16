import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import heroDataBackground from "@/assets/hero-data-background.jpg";

interface HeroSectionEnProps {}

const HeroSectionEn = ({}: HeroSectionEnProps) => {
  const benefits = [
    "Continuous expertise instead of one-off projects",
    "Fixed monthly price – transparently calculable",
    "Flexibly tailored to your needs"
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Modern data background */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${heroDataBackground})` }} />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/60" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl text-left text-white opacity-0 animate-fadeIn">
          {/* Tagline with green line */}
          <div className="flex items-center mb-6">
            <div className="w-12 h-0.5 bg-accent mr-4"></div>
            <span className="text-sm uppercase tracking-widest text-white/80 font-medium">
              Pricing & Analytics As A Service
            </span>
          </div>
          
          {/* Main headline */}
          <h1 className="font-bold mb-8 leading-tight">
            Your <span className="text-accent italic">All-in-One</span> Partner for Profitable Offer Design
          </h1>
          
          {/* Benefits list */}
          <div className="space-y-3 mb-8">
            {benefits.map((benefit, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-lg text-white/90">{benefit}</span>
              </div>
            ))}
          </div>
          
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
