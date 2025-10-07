import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Check } from "lucide-react";
import { useState } from "react";
interface ContactSectionProps {}
const ContactSection = ({}: ContactSectionProps) => {
  const [copyToSelf, setCopyToSelf] = useState(false);
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Lass uns sprechen</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Bereit für den nächsten Schritt? Kontaktiere mich per Email oder buche einen Termin
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left Column - Erstgespräch */}
          <div className="bg-muted/50 p-8 md:p-12 rounded-xl flex flex-col h-full">
            <div className="space-y-8 flex-1">
            <h3 className="text-3xl font-bold mb-8">Erstgespräch</h3>

            {/* Benefits List */}
            <div className="space-y-6 mb-10">
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
                  Passende Lösung finden - Welches Angebot passt am besten zu deinen Zielen?
                </p>
              </div>
            </div>

            {/* Details */}
            <div className="space-y-3 mb-8">
              <div className="text-sm">
                <span className="font-semibold text-foreground">Dauer:</span>{" "}
                <span className="text-muted-foreground">30-45 Minuten</span>
              </div>
              <div className="text-sm">
                <span className="font-semibold text-foreground">Format:</span>{" "}
                <span className="text-muted-foreground">Video-Call</span>
              </div>
              <div className="text-sm">
                <span className="font-semibold text-foreground">Kosten:</span>{" "}
                <span className="text-muted-foreground">Kostenlos, keine Verpflichtungen</span>
              </div>
            </div>

            {/* CTA Button */}
            <Button variant="outline" size="lg" className="w-full text-lg py-3 h-auto">
              Jetzt Gewinnpotential abklären!
            </Button>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-accent p-8 md:p-12 rounded-xl flex flex-col h-full">
            <h3 className="text-3xl font-bold mb-8 text-white">Nachricht senden</h3>

            <form className="space-y-6 flex-1 flex flex-col">
              {/* Email */}
              <Input
                type="email"
                placeholder="Email*"
                required
                className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
              />

              {/* First and Last Name */}
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  placeholder="Vorname*"
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
                />
                <Input
                  placeholder="Nachname*"
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
                />
              </div>

              {/* Company Name */}
              <Input
                placeholder="Firmenname"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
              />

              {/* Phone */}
              <Input
                type="tel"
                placeholder="Telefonnummer"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
              />

              {/* Message */}
              <Textarea
                placeholder="Nachricht*"
                required
                rows={6}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/70 resize-none"
              />

              {/* Copy Checkbox */}
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="copy"
                  checked={copyToSelf}
                  onCheckedChange={(checked) => setCopyToSelf(checked as boolean)}
                  className="border-white/40 data-[state=checked]:bg-white data-[state=checked]:text-accent"
                />
                <label htmlFor="copy" className="text-sm text-white cursor-pointer">
                  Kopie erhalten
                </label>
              </div>

              {/* Submit Button */}
              <div className="mt-auto">
                <Button
                  type="submit"
                  size="lg"
                  className="w-full text-lg py-3 h-auto bg-accent-foreground hover:bg-accent-foreground/90 text-accent font-semibold"
                >
                  senden
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactSection;
