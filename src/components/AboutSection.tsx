import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import karlPortrait from "@/assets/karl-portrait.jpg";
interface AboutSectionProps {}
const AboutSection = ({}: AboutSectionProps) => {
  return <section className="py-20 bg-muted">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-bold mb-6">
            Warum man mir vertraut
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Karl Aschwanden – Partner für profitable Angebotsstrategien
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <img 
                src={karlPortrait} 
                alt="Karl Aschwanden Portrait" 
                className="rounded-2xl w-full max-w-md h-auto object-cover card-shadow"
              />
              {/* Decorative gradient border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl -z-10 opacity-20"></div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Mit 20 Jahren Erfahrung in der Entwicklung von national bekannten Produkten 
                verstehe ich genau, worauf es bei der kundenorientierten Angebotsgestaltung ankommt.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ich verfolge einen datengetriebenen Ansatz, der Kundenbedürfnisse priorisiert und 
                gleichzeitig den Geschäftserfolg sicherstellt. Zur Anwendung kommen u.a. 
                Kundenbefragungen, Konkurrenzauswertungen, Marktforschung, Finanz-/Treibermodelle, 
                Datenanalysen und dynamische Reportings.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ich entwickle mit euch fundierte Strategien für langfristig stabile Erträge und 
                ein profitables, wachsendes Unternehmen.
              </p>
            </div>

            {/* Expandable Sections */}
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="experience" className="bg-card rounded-lg px-6 card-shadow">
                <AccordionTrigger className="text-left font-semibold text-lg hover:text-primary">
                  Erfahrung (Auszug)
                </AccordionTrigger>
                <AccordionContent className="pt-4 space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-lg text-muted-foreground">
                        Pricing für 20minuten.ch und tagesanzeiger.ch
                      </span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-lg text-muted-foreground">
                        Entwicklung Cashback Cards (Testsieger bei Moneyland)
                      </span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-lg text-muted-foreground">
                        Mehrere Angebote für Sunrise (Prepaid, Postpaid, Handsets)
                      </span>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="qualifications" className="bg-card rounded-lg px-6 card-shadow">
                <AccordionTrigger className="text-left font-semibold text-lg hover:text-primary">
                  Qualifikationen (Auszug)
                </AccordionTrigger>
                <AccordionContent className="pt-4">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-lg text-muted-foreground">
                        Master of Science in Business Administration (Universität Zürich)
                      </span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-lg text-muted-foreground">
                        Spezialisierung auf Pricing & Revenue Management
                      </span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-lg text-muted-foreground">
                        Zertifizierungen in Business Analytics & Customer Research
                      </span>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="pt-4">
              <Button variant="cta" size="lg" className="text-lg px-8 py-4 h-auto">
                Kostenloses Erstgespräch vereinbaren
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;