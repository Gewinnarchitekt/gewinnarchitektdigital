import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const FallstudieAngebotsgestaltung = () => {
  const appliedServices = [
    "Konkurenzauswertung",
    "Kundenbefragung",
    "Value Proposition",
    "Conjoint Analyse",
    "Preisarchitektur",
    "Packaging & Bundling",
    "Preispunktoptimierung"
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
            <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">
              Fallstudie Angebotsgestaltung
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Swisscard GmbH
            </h1>
            <p className="text-xl text-muted-foreground">
              Strategische Angebotsgestaltung bei Partnerschaftsauflösung
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
            <p className="text-muted-foreground leading-relaxed">
              Swisscard GmbH, ein Joint Venture von American Express und Credit Suisse, betrieb 
              erfolgreich Co-Branding-Kreditkarten für verschiedene Schweizer Unternehmen, darunter 
              eine langjährige Partnerschaft mit Coop. Im Rahmen einer strategischen Neuausrichtung 
              wurde die Zusammenarbeit mit Coop aufgelöst, wodurch Swisscard vor der Herausforderung 
              stand, bestehende Kunden auf neue Produkte zu migrieren.
            </p>
          </section>

          {/* Die Herausforderung */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Die Herausforderung</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Die Entwicklung einer Profit-Sicherungsstrategie, die bestehende Coop-Kreditkarten-Kunden 
              mit neuen, attraktiven Produktangeboten überzeugt – unter Berücksichtigung folgender 
              kritischer Rahmenbedingungen:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                Zeitdruck durch vertraglich fixiertes Ablaufdatum
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                Heterogene Kundenbasis mit unterschiedlichen Nutzungsprofilen
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                Notwendigkeit der Differenzierung gegenüber Konkurrenzangeboten
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                Balance zwischen Kundenattraktivität und Profitabilität
              </li>
            </ul>
          </section>

          {/* Die Lösung */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Die Lösung</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Implementierung einer zweiphasigen Strategie basierend auf fundierter Markt- und 
              Kundenanalyse:
            </p>

            {/* Phase 1 */}
            <div className="bg-muted rounded-xl p-6 mb-6">
              <h3 className="text-xl font-semibold mb-3">Phase 1: Kundenbindung</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  Segmentierung der Kundenbasis nach Nutzungsverhalten und Wertbeitrag
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  Entwicklung massgeschneiderter Migrationsangebote pro Segment
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  Implementierung eines mehrstufigen Kommunikationskonzepts
                </li>
              </ul>
            </div>

            {/* Phase 2 */}
            <div className="bg-muted rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">Phase 2: Produktinnovation</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  Analyse der Wettbewerbslandschaft und Identifikation von Marktlücken
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  Entwicklung neuer Produktvarianten mit differenzierenden Features
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  Optimierung der Preisarchitektur basierend auf Conjoint-Analyse
                </li>
              </ul>
            </div>
          </section>

          {/* Die Ergebnisse */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Die Ergebnisse</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-green-600/10 to-green-700/10 border border-green-600/20 rounded-xl p-6">
                <div className="text-green-600 font-semibold mb-2">🎯 Retention</div>
                <p className="text-muted-foreground">
                  Retention-Ziele übertroffen – erfolgreiche Migration der profitabelsten Kundensegmente
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-600/10 to-green-700/10 border border-green-600/20 rounded-xl p-6">
                <div className="text-green-600 font-semibold mb-2">🏆 Top-Positionierungen</div>
                <p className="text-muted-foreground">
                  Mehrere Top-Positionierungen auf moneyland.ch in verschiedenen Kreditkarten-Kategorien
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-muted rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">
              Ähnliche Herausforderung?
            </h2>
            <p className="text-muted-foreground mb-6">
              Lass uns besprechen, wie ich dich bei deiner Angebotsgestaltung unterstützen kann.
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

export default FallstudieAngebotsgestaltung;
