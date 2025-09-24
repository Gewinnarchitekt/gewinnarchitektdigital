import { Button } from "@/components/ui/button";

interface HeroSectionProps {}

const HeroSection = ({}: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary-light/10" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Main headline */}
          <h1 className="font-bold mb-6 leading-tight">
            Verschenke kein Gewinnpotential aufgrund der falschen Angebote
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Mit datenbasierten Insights helfe ich dir, kundenorientierte Angebote zu entwickeln, die Gewinn und Cashflow nachhaltig steigern
          </p>
          
          {/* CTA Button */}
          <div className="flex justify-center">
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