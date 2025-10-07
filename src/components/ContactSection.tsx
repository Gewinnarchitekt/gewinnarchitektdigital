import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
interface ContactSectionProps {}

const ContactSection = ({}: ContactSectionProps) => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <div className="bg-card p-8 md:p-12 rounded-xl card-shadow">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Erstgespräch</h2>
            
            {/* Benefits List */}
            <div className="space-y-6 mb-10">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 text-accent" />
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Analyse eurer aktuellen Angebote - Wo steht Ihr heute und wo sind die grössten Hebel?
                </p>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 text-accent" />
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Konkrete Handlungsempfehlungen - Sofort umsetzbare Tipps für mehr Gewinn
                </p>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 text-accent" />
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Passende Lösung finden - Welches Angebot passt am besten zu euren Zielen?
                </p>
              </div>
            </div>

            {/* Details */}
            <div className="space-y-3 mb-8 text-sm">
              <div>
                <span className="font-semibold">Dauer:</span>{" "}
                <span className="text-muted-foreground">30-45 Minuten</span>
              </div>
              <div>
                <span className="font-semibold">Format:</span>{" "}
                <span className="text-muted-foreground">Video-Call</span>
              </div>
              <div>
                <span className="font-semibold">Kosten:</span>{" "}
                <span className="text-muted-foreground">Kostenlos, keine Verpflichtungen</span>
              </div>
            </div>

            {/* CTA Button */}
            <Button 
              variant="hero" 
              size="lg" 
              className="w-full text-lg py-6 h-auto"
            >
              Jetzt Gewinnpotential abklären!
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;