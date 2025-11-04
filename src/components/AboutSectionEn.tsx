import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Linkedin } from "lucide-react";
import karlPortrait from "@/assets/karl-portrait.jpg";

interface AboutSectionEnProps {}

const AboutSectionEn = ({}: AboutSectionEnProps) => {
  return (
    <section id="about" className="py-20 bg-muted">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-bold mb-6">
            Karl Aschwanden
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Structured methodology, clear communication, and measurable results
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="relative">
              <img 
                src={karlPortrait} 
                alt="Karl Aschwanden Portrait" 
                className="rounded-2xl w-full max-w-xs h-auto object-cover card-shadow"
              />
              {/* LinkedIn icon overlay */}
              <a 
                href="https://www.linkedin.com/in/karlaschwanden/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:scale-110 hover:text-accent transition-all duration-300 text-primary"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={24} />
              </a>
              {/* Decorative gradient border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl -z-10 opacity-20"></div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                With 20 years of experience in developing nationally known products, 
                I understand exactly what matters in customer-oriented offer design.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                I pursue a data-driven approach that prioritizes customer needs while 
                ensuring business success. Methods include customer surveys, competitive 
                analyses, market research, financial/driver models, data analytics, and 
                dynamic reporting.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                I develop well-founded strategies with you for long-term stable returns 
                and a profitable, growing company.
              </p>
            </div>

            {/* Expandable Sections */}
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="experience" className="bg-card rounded-lg px-6 card-shadow">
                <AccordionTrigger className="text-left font-semibold text-lg hover:text-primary">
                  Experience (Excerpt)
                </AccordionTrigger>
                <AccordionContent className="pt-4 space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-lg text-muted-foreground">
                        Pricing for 20minuten.ch and tagesanzeiger.ch
                      </span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-lg text-muted-foreground">
                        Development of Cashback Cards (test winner at Moneyland)
                      </span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-lg text-muted-foreground">
                        Multiple offers for Sunrise (Prepaid, Postpaid, Handsets)
                      </span>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="qualifications" className="bg-card rounded-lg px-6 card-shadow">
                <AccordionTrigger className="text-left font-semibold text-lg hover:text-primary">
                  Qualifications (Excerpt)
                </AccordionTrigger>
                <AccordionContent className="pt-4">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-lg text-muted-foreground">
                        MBA (IE Business School)
                      </span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-lg text-muted-foreground">
                        Advanced Financial Modeler (FMI)
                      </span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-lg text-muted-foreground">
                        Applied Data Science Program (MIT)
                      </span>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionEn;
