import { Link } from "react-router-dom";
import { ArrowLeft, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const FallstudieAngebotsstrategie = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-card border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <Link 
            to="/#leistungen" 
            className="inline-flex items-center text-muted-foreground hover:text-primary smooth-transition"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück zu Leistungen
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-background to-muted">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <span className="text-green-600 font-medium text-sm uppercase tracking-wider">
              Fallstudie Angebotsstrategie
            </span>
            <h1 className="mt-4 mb-4">Sunrise Communications AG</h1>
            <p className="text-xl text-muted-foreground">
              Pricingstrategie für Smartphones
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            
            {/* Angewandte Services */}
            <div className="mb-12">
              <h2 className="text-lg font-semibold text-muted-foreground mb-4">Angewandte Services</h2>
              <div className="flex flex-wrap gap-2">
                {[
                  "Wettbewerbsanalyse",
                  "Kundensegmentierung", 
                  "Financial Modeling",
                  "Preisoptimierung",
                  "Forecasting-Tools",
                  "Preismonitoring",
                  "Data Visualization"
                ].map((service, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-muted rounded-full text-muted-foreground border border-border text-sm"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>

            {/* Die Ausgangslage */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">Die Ausgangslage</h2>
              <div className="bg-card rounded-xl p-6 card-shadow">
                <p className="text-muted-foreground mb-4">
                  Als zweitgrösster Telekommunikationsanbieter der Schweiz stand Sunrise vor einem fundamentalen 
                  Wandel in der Wettbewerbslandschaft für Mobilfunkgeräte.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Neue aggressive Wettbewerber mit disruptiven Verkaufsmodellen</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Steigende SAC (Subscriber Acquisition Costs) bei gleichzeitigem Margendruck</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Bevorstehender IPO erforderte nachhaltige Profitabilitätssteigerung</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Die Herausforderung */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">Die Herausforderung</h2>
              <div className="bg-card rounded-xl p-6 card-shadow">
                <p className="text-muted-foreground mb-4">
                  Das primäre Ziel war klar definiert: <strong className="text-foreground">signifikante Kostenreduktion 
                  ohne Marktanteilsverluste</strong>.
                </p>
                <p className="text-sm font-medium text-muted-foreground mb-3">Kritische Erfolgsfaktoren:</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Balance zwischen Kostenoptimierung und Wettbewerbsfähigkeit</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Schnelle Reaktionsfähigkeit auf Marktveränderungen</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Alignment aller Stakeholder im Pricing-Prozess</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Nachhaltige Verankerung der neuen Pricing-Governance</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Die Lösung */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">Die Lösung</h2>
              <div className="bg-card rounded-xl p-6 card-shadow">
                <p className="text-muted-foreground mb-6">
                  Entwicklung und Implementierung einer ganzheitlichen Preisstrategie für das gesamte 
                  Smartphone-Portfolio mit folgenden Kernmassnahmen:
                </p>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-green-600 pl-4">
                    <h4 className="font-semibold text-foreground mb-1">Forecasting-Tool</h4>
                    <p className="text-muted-foreground text-sm">
                      Entwicklung eines datenbasierten Tools zur Vorhersage von Absatzmengen und 
                      Marktentwicklungen pro Gerätekategorie.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-green-600 pl-4">
                    <h4 className="font-semibold text-foreground mb-1">Wettbewerbs-Monitoring</h4>
                    <p className="text-muted-foreground text-sm">
                      Etablierung eines systematischen Preismonitorings aller relevanten Wettbewerber 
                      mit wöchentlicher Aktualisierung.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-green-600 pl-4">
                    <h4 className="font-semibold text-foreground mb-1">Stakeholder-Alignierung</h4>
                    <p className="text-muted-foreground text-sm">
                      Einführung eines cross-funktionalen Pricing-Komitees mit klaren 
                      Entscheidungsprozessen und Eskalationswegen.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-green-600 pl-4">
                    <h4 className="font-semibold text-foreground mb-1">Vertriebsbefähigung</h4>
                    <p className="text-muted-foreground text-sm">
                      Schulung und Enablement des Vertriebs zur überzeugenden Kommunikation 
                      der neuen Preispositionierung.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Die Ergebnisse */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">Die Ergebnisse</h2>
              
              {/* Hauptergebnis */}
              <div className="bg-gradient-to-br from-green-600/10 to-green-700/10 border border-green-600/20 rounded-xl p-8 mb-6">
                <div className="text-green-600 font-bold text-xl flex items-center gap-3">
                  <span>💰</span> Kosteneinsparung im zweistelligen Millionenbereich ohne Marktanteilsverluste
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Finanzielle Erfolge */}
                <div className="bg-card rounded-xl p-6 card-shadow">
                  <h3 className="text-lg font-semibold text-muted-foreground mb-4">Finanzielle Erfolge</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Signifikante Reduktion der SAC-Kosten</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Optimierte Retention-Kosten ohne Churn-Anstieg</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Stabile Marktanteile trotz Preisanpassungen</span>
                    </li>
                  </ul>
                </div>

                {/* Operative Erfolge */}
                <div className="bg-card rounded-xl p-6 card-shadow">
                  <h3 className="text-lg font-semibold text-muted-foreground mb-4">Operative Erfolge</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Erfolgreiche Preiserhöhungen im Markt durchgesetzt</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Vermeidung schädlicher Preisdifferenzen zwischen Kanälen</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Vertrieb vollständig auf neue Strategie ausgerichtet</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Bereit für Ihre Pricing-Transformation?
              </h3>
              <p className="text-green-100 mb-6 max-w-2xl mx-auto">
                Lassen Sie uns gemeinsam analysieren, wie Sie mit einer datenbasierten Preisstrategie 
                nachhaltige Profitabilität erreichen können.
              </p>
              <Link to="/#kontakt">
                <Button className="bg-white text-green-700 hover:bg-green-50 font-semibold px-8 py-3">
                  <Phone className="w-4 h-4 mr-2" />
                  Kontakt aufnehmen
                </Button>
              </Link>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default FallstudieAngebotsstrategie;
