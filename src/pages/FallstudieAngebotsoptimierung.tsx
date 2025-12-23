import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const FallstudieAngebotsoptimierung = () => {
  const appliedServices = [
    "Erfolgstracking",
    "Margenoptimierung",
    "Dynamic Pricing",
    "Gewinntreiberstruktur",
    "Reporting & Analytics"
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
              Fallstudie Angebotsoptimierung
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Goldbach NeXT AG
            </h1>
            <p className="text-xl text-muted-foreground">
              Yield Management & Transparenz für führende Werbevermarkter
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
              Goldbach verantwortete die Vermarktung des Werbeinventars von führenden Nachrichtenportalen 
              wie tagesanzeiger.ch und 20minuten.ch sowie unabhängige Portale über das Goldbach Partner-Netzwerks.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Als stark vertriebsorientierte Organisation herrschte hohe Transparenz über die absoluten 
              Umsatzzahlen, jedoch fehlte ein tiefergehender Einblick in die Qualität des Umsatzes und 
              die spezifischen Gewinntreiber.
            </p>
          </section>

          {/* Die Herausforderung */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Die Herausforderung</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Maximierung der Erträge über alle Verkaufskanäle hinweg
            </p>
            <p className="text-muted-foreground font-medium mb-3">Kernprobleme:</p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                Parallele Vermarktung über mehrere Verkaufskanäle (Direktvertrieb, Programmatic Private Deals, Open Market)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                Interne Kannibalisierung zwischen Verkaufskanälen
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                Suboptimale Preisgestaltung im programmatischen Bereich
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                Fehlende Transparenz über die tatsächliche Performance pro Kanal und Produkt
              </li>
            </ul>
          </section>

          {/* Die Lösung */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Die Lösung</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              360° Transparenz und operatives Yield Management
            </p>

            {/* Phase 1 */}
            <div className="bg-muted rounded-xl p-6 mb-6">
              <h3 className="text-xl font-semibold mb-3">Granulare Transparenz & Reporting</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Dynamische Reports nach Volumen und Marge pro Kanal, Produkt und Inventar</li>
                <li>• Regelmässige Analysen zur Identifikation von Optimierungspotenzialen</li>
              </ul>
            </div>

            {/* Phase 2 */}
            <div className="bg-muted rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">Wöchentliches Pricing-Committee</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Dynamische Anpassung der Floor Prices basierend auf Nachfrage und Auslastung</li>
                <li>• Koordination zwischen Verkaufskanälen zur Vermeidung von Kannibalisierung</li>
              </ul>
            </div>
          </section>

          {/* Die Ergebnisse */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Ergebnis</h2>

            <div className="bg-gradient-to-br from-green-600/10 to-green-700/10 border border-green-600/20 rounded-xl p-6 mb-6">
              <div className="text-green-600 font-semibold flex items-center gap-2">
                <span>📈</span> Vom reinen Verkauf zur strategischen Ertragssteuerung
              </div>
            </div>
            
            <ul className="space-y-2 text-muted-foreground ml-1">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                Vollständige Transparenz über die Profitabilität jedes Verkaufskanals
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                Messbare Reduktion der Kannibalisierung zwischen Vertriebswegen
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                Etablierung einer datengetriebenen Pricing-Kultur im gesamten Verkaufsteam
              </li>
            </ul>
          </section>

          {/* CTA */}
          <section className="bg-muted rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">
              Ähnliche Herausforderung?
            </h2>
            <p className="text-muted-foreground mb-6">
              Lass uns besprechen, wie ich dich bei deiner Angebotsoptimierung unterstützen kann.
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

export default FallstudieAngebotsoptimierung;