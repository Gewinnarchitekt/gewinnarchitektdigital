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
          {/* Main headline */}
          <h1 className="font-bold mb-6 leading-tight">
            Hole mehr aus deinen digitalen Angeboten
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl leading-relaxed">
            Mit datenbasierten Insights helfe ich dir, kundenorientierte Angebote zu entwickeln, die Gewinn und Cashflow nachhaltig steigern
          </p>
          
          {/* CTA Button */}
          <div className="flex justify-start">
            <Button 
              variant="hero" 
              size="lg"
              className="text-lg px-8 py-4 h-auto"
            >
              Jetzt Gewinnpotential abklären!
            </Button>
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