import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Calendar } from "lucide-react";
interface ContactSectionProps {}
const ContactSection = ({}: ContactSectionProps) => {
  return <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-bold mb-6">
            Lass uns sprechen
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Bereit für den nächsten Schritt? Kontaktiere mich per Email oder buche einen Termin</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Kontaktieren Sie mich direkt</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">E-Mail</div>
                    <div className="text-muted-foreground">karl@gewinnarchitekt.ch</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">Telefon</div>
                    <div className="text-muted-foreground">+41 79 XXX XX XX</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">Standort</div>
                    <div className="text-muted-foreground">Zürich, Schweiz</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">Verfügbarkeit</div>
                    <div className="text-muted-foreground">Mo-Fr, 9:00-18:00 Uhr</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card p-8 rounded-xl card-shadow">
              <h4 className="text-lg font-semibold mb-4">Was Sie erwarten können:</h4>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">
                    Kostenlose 30-minütige Erstberatung
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">
                    Analyse Ihrer aktuellen Angebotsstrategie
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">
                    Konkrete Handlungsempfehlungen
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">
                    Unverbindliche Zusammenarbeitsmöglichkeiten
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-8 rounded-xl card-shadow">
            <h3 className="text-2xl font-semibold mb-6">Nachricht senden</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Vorname *</label>
                  <Input placeholder="Ihr Vorname" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Nachname *</label>
                  <Input placeholder="Ihr Nachname" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">E-Mail *</label>
                <Input type="email" placeholder="ihre.email@beispiel.ch" />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Unternehmen</label>
                <Input placeholder="Ihr Unternehmen" />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Telefon</label>
                <Input placeholder="+41 79 XXX XX XX" />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Nachricht *</label>
                <Textarea placeholder="Beschreiben Sie kurz Ihre Herausforderung oder Ihr Anliegen..." rows={5} />
              </div>
              
              <Button variant="hero" size="lg" className="w-full text-lg py-4 h-auto">
                Nachricht senden
              </Button>
              
              <p className="text-sm text-muted-foreground text-center">
                * Pflichtfelder. Ihre Daten werden vertraulich behandelt und nicht an Dritte weitergegeben.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;