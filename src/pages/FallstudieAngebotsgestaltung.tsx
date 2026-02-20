import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import ogImage from "@/assets/solution-angebotsgestaltung.jpg";

const FallstudieAngebotsgestaltung = () => {
  const appliedServices = [
    "Einzelkundenanalyse",
    "Kundensegmentierung",
    "Marktforschung",
    "Conjoint Analyse",
    "Value Proposition Design",
    "Financial Modeling",
    "Szenario Analyse",
    "Preispunktoptimierung",
    "Kundenmigration"
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Fallstudie Swisscard – Angebotsgestaltung – gewinnarchitekt.ch"
        description="Strategische Angebotsgestaltung nach Partnerschaftsauflösung bei Swisscard GmbH."
        canonical="https://gewinnarchitekt.ch/fallstudie/angebotsgestaltung"
        ogImage={ogImage}
      />
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
              Fallstudie Angebotsgestaltung
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Swisscard GmbH
            </h1>
            <p className="text-xl text-muted-foreground">
              Strategische Angebotsgestaltung nach Partnerschaftsauflösung
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
              Swisscard, ein Joint Venture zwischen American Express und Credit Suisse, betrieb eine 
              erfolgreiche Kreditkarten-Partnerschaft mit Coop, dem zweitgrössten Detailhändler der 
              Schweiz. Als beide Parteien die Beendigung dieser mehrjährigen Zusammenarbeit beschlossen, 
              sah sich Swisscard mit der strategischen Aufgabe konfrontiert, sämtliche Bestandeskunden 
              in ein neues Produktportfolio zu überführen.
            </p>
          </section>

          {/* Die Herausforderung */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Die Herausforderung</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Entwicklung einer Profit-Sicherungsstrategie mit nahtloser Kundenmigration und neuem 
              Produktportfolio. Die zentrale Fragestellung: Wie können die wertvollsten Kunden gehalten 
              werden, wenn diese ihre Karten primär als "Coop-Produkte" wahrnehmen?
            </p>
            <p className="text-muted-foreground font-medium mb-3">Kritische Rahmenbedingungen:</p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                Höchste Vertraulichkeit erforderlich – nur kleinstes Projektteam möglich
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                Coop verfügte über deutlich höhere Markenbekanntheit als Swisscard
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                Verlust des Superpoints-Programms für zukünftige Produkte
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
              Implementierung einer zweiphasigen Strategie zur Kundenbindung und Marktpositionierung:
            </p>

            {/* Phase 1 */}
            <div className="bg-muted rounded-xl p-6 mb-6">
              <h3 className="text-xl font-semibold mb-3">Phase 1: Kundenbindung durch nahtlose Migration</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Entwicklung eines Ersatzprodukts mit Apple Pay und Cashback statt Treuepunkten</li>
                <li>• Automatische Kartenmigration ohne Kundenaufwand ("Zero-Friction")</li>
                <li>• Temporär erhöhtes Cashback zur Bindung während der Übergangsphase</li>
              </ul>
            </div>

            {/* Phase 2 */}
            <div className="bg-muted rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">Phase 2: Produktinnovation für Marktführerschaft</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Conjoint-Analyse zur Identifikation bevorzugter Produktattribute</li>
                <li>• Nutzung der höheren AMEX-Discountrates als Wettbewerbsvorteil</li>
                <li>• Simulieren der Produktplatzierung auf den führenden Vergleichsportalen</li>
              </ul>
            </div>
          </section>

          {/* Die Ergebnisse */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Die Ergebnisse</h2>
            
            {/* Kundenbindung */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-muted-foreground mb-3">Kundenbindung</h3>
              <div className="bg-gradient-to-br from-green-600/10 to-green-700/10 border border-green-600/20 rounded-xl p-6 mb-4">
                <div className="text-green-600 font-semibold flex items-center gap-2">
                  <span>🎯</span> Retention-Ziele um über 30% übertroffen
                </div>
              </div>
              <ul className="space-y-2 text-muted-foreground ml-1">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  Erfolgreiche Bindung der Mehrheit der Kunden, insbesondere hochwertige Segmente
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  Nahtlose Migration ohne nennenswerte operationelle Probleme
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  Migrationsprodukt (Cashback Single Card) zeigte starke Kundenakzeptanz mit minimaler Abwanderung
                </li>
              </ul>
            </div>

            {/* Produktexzellenz */}
            <div>
              <h3 className="text-lg font-semibold text-muted-foreground mb-3">Produktexzellenz</h3>
              <div className="bg-gradient-to-br from-green-600/10 to-green-700/10 border border-green-600/20 rounded-xl p-6 mb-4">
                <div className="text-green-600 font-semibold flex items-center gap-2">
                  <span>🏆</span> Top-Positionierungen auf den führenden Vergleichsplattformen
                </div>
              </div>
              <ul className="space-y-2 text-muted-foreground ml-1">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  Positive Medienberichterstattung zur neuen Produktpalette
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  Höhere Profitabilitätsmarge im Vergleich zum vorherigen gebührenfreien Produkt
                </li>
              </ul>
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
