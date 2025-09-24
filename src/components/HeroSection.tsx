import { Button } from "@/components/ui/button";

interface HeroSectionProps {}

const HeroSection = ({}: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary-light/10" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
            <span className="text-sm font-medium">Pricing Expertise auf Abruf</span>
          </div>
          
          {/* Main headline */}
          <h1 className="font-bold mb-6 leading-tight">
            Gewinn dank mehr kundenorientierter Angebote
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Steigern Sie Ihren Erfolg mit Angeboten, die Ihre Kunden wirklich wollen
          </p>
          
          {/* Benefits list */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
              <span className="font-medium">Angebote, die deine Kunden wirklich wollen</span>
            </div>
            <div className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
              <span className="font-medium">Datenbasierte Entscheidungen statt Bauchgefühl</span>
            </div>
            <div className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
              <span className="font-medium">Langfristige stabile Erträge und Liquidität</span>
            </div>
          </div>
          
          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="hero" 
              size="lg"
              className="text-lg px-8 py-4 h-auto"
            >
              Jetzt Gewinnpotential abklären!
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg px-8 py-4 h-auto border-white/30 text-white hover:bg-white/10 hover:text-white"
            >
              Mehr erfahren
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