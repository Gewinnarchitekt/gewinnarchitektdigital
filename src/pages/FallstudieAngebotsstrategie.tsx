import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const FallstudieAngebotsstrategie = () => {
  const appliedServices = [
    "Wettbewerbsanalyse",
    "Kundensegmentierung",
    "Financial Modeling",
    "Preisoptimierung",
    "Forecasting-Tools",
    "Preismonitoring",
    "Data Visualization"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-6">
        <Link to="/#leistungen">
          <Button variant="ghost" className="gap-2">
            <ArrowLeft className="w-4 h-4" />
            Zurück zur Übersicht
          </Button>
        </Link>
      </nav>

      {/* Content */}
      <main className="container mx-auto px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <p className="text-sm text-green-600 font-medium uppercase tracking-wider mb-2">
              Fallstudie Angebotsstrategie
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Sunrise Communications AG
            </h1>
            <p className="text-xl text-muted-foreground">
              Pricingstrategie für Smartphones
            </p>
          </div>

          {/* Applied Services */}
          <div className="mb-12">
            <p className="font-medium text-muted-foreground mb-3">Angewandte Services</p>
            <div className="flex flex-wrap gap-2">
              {appliedServices.map((service, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-muted rounded-full text-muted-foreground border border-border"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>

          {/* Die Ausgangslage */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Die Ausgangslage</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Als zweitgrösster Telekommunikationsanbieter der Schweiz stand Sunrise vor einem fundamentalen 
              Wandel in der Wettbewerbslandschaft für Mobilfunkgeräte.
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                Intensiver Preiswettbewerb im Schweizer Mobilfunkmarkt
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                Steigende SAC (Subscriber Acquisition Costs) bei gleichzeitigem Margendruck
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                Bevorstehender IPO erforderte nachhaltige Profitabilitätssteigerung
              </li>
            </ul>
          </section>

          {/* Die Herausforderung */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Die Herausforderung</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Das primäre Ziel war klar definiert: <strong className="text-foreground">signifikante Kostenreduktion 
              ohne Marktanteilsverluste</strong>.
            </p>
            <p className="text-muted-foreground font-medium mb-3">Kritische Erfolgsfaktoren:</p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                Balance zwischen Kostenoptimierung und Wettbewerbsfähigkeit
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                Schnelle Reaktionsfähigkeit auf Marktveränderungen
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                Alignment aller Stakeholder im Pricing-Prozess
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                Nachhaltige Verankerung der neuen Pricing-Governance
              </li>
            </ul>
          </section>

          {/* Die Lösung */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Die Lösung</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Entwicklung und Implementierung einer ganzheitlichen Preisstrategie für das gesamte 
              Smartphone-Portfolio mit folgenden Kernmassnahmen:
            </p>

            {/* Massnahmen */}
            <div className="bg-muted rounded-xl p-6 mb-6">
              <h3 className="text-xl font-semibold mb-3">Forecasting-Tool</h3>
              <p className="text-muted-foreground">
                Entwicklung eines datenbasierten Tools zur Vorhersage von Absatzmengen und 
                Marktentwicklungen pro Gerätekategorie.
              </p>
            </div>

            <div className="bg-muted rounded-xl p-6 mb-6">
              <h3 className="text-xl font-semibold mb-3">Wettbewerbs-Monitoring</h3>
              <p className="text-muted-foreground">
                Etablierung eines systematischen Preismonitorings aller relevanten Wettbewerber 
                mit wöchentlicher Aktualisierung.
              </p>
            </div>

            <div className="bg-muted rounded-xl p-6 mb-6">
              <h3 className="text-xl font-semibold mb-3">Stakeholder-Alignierung</h3>
              <p className="text-muted-foreground">
                Verbesserung der internen Abstimmung durch zentrale Datentransparenz 
                und einheitliche Entscheidungsgrundlagen.
              </p>
            </div>

            <div className="bg-muted rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">Pricing-Governance</h3>
              <p className="text-muted-foreground">
                Etablierung klarer Pricing-Richtlinien und Prozesse für konsistente 
                Preisentscheidungen über alle Kanäle hinweg.
              </p>
            </div>
          </section>

          {/* Die Ergebnisse */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Die Ergebnisse</h2>
            
            {/* Finanzielle Erfolge */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-muted-foreground mb-3">Finanzielle Erfolge</h3>
              <div className="bg-gradient-to-br from-green-600/10 to-green-700/10 border border-green-600/20 rounded-xl p-6 mb-4">
                <div className="text-green-600 font-semibold flex items-center gap-2">
                  <span>💰</span> Kosteneinsparung im zweistelligen Millionenbereich ohne Marktanteilsverluste
                </div>
              </div>
              <ul className="space-y-2 text-muted-foreground ml-1">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  Signifikante Reduktion der SAC-Kosten
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  Optimierte Retention-Kosten ohne Churn-Anstieg
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  Stabile Marktanteile trotz Preisanpassungen
                </li>
              </ul>
            </div>

            {/* Operative Erfolge */}
            <div>
              <h3 className="text-lg font-semibold text-muted-foreground mb-3">Operative Erfolge</h3>
              <div className="bg-gradient-to-br from-green-600/10 to-green-700/10 border border-green-600/20 rounded-xl p-6 mb-4">
                <div className="text-green-600 font-semibold flex items-center gap-2">
                  <span>🎯</span> Erfolgreiche Preiserhöhungen im Markt durchgesetzt
                </div>
              </div>
              <ul className="space-y-2 text-muted-foreground ml-1">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  Vermeidung schädlicher Preisdifferenzen zwischen Kanälen
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  Vertrieb vollständig auf neue Strategie ausgerichtet
                </li>
              </ul>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-muted rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">
              Bereit für Ihre Pricing-Transformation?
            </h2>
            <p className="text-muted-foreground mb-6">
              Lassen Sie uns gemeinsam analysieren, wie Sie mit einer datenbasierten Preisstrategie 
              nachhaltige Profitabilität erreichen können.
            </p>
            <a href="https://tidycal.com/gewinnarchitekt/angebotscheck" target="_blank" rel="noopener noreferrer">
              <Button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white">
                Kontakt aufnehmen
              </Button>
            </a>
          </section>
        </div>
      </main>
    </div>
  );
};

export default FallstudieAngebotsstrategie;
