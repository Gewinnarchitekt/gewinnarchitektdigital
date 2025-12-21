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
              Sunrise Communications AG, der zweitgrösste Telekommunikationsanbieter der Schweiz, hatte zuvor 
              starkes Wachstum durch die Bündelung von subventionierten Premium-Smartphones mit hochpreisigen 
              Tarifen erzielt. Doch die Wettbewerbssituation hatte sich verändert:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                Konkurrenten boten mittlerweile vergleichbare Bundle-Angebote an
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                Subventionierte Premium-Smartphones trieben die Neukundenakquisitionskosten (SAC) und Retention-Kosten massiv in die Höhe
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                Die ursprünglichen Vorteile bei den Bruttozugängen waren nicht mehr vorhanden
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                Ein bevorstehender IPO durfte nicht gefährdet werden
              </li>
            </ul>
          </section>

          {/* Die Herausforderung */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Die Herausforderung</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Das primäre Ziel war klar definiert: <strong className="text-foreground">Reduktion der Akquisitions- 
              und Retention-Kosten durch Preiserhöhungen bei Handsets – ohne Marktanteilsverluste</strong>.
            </p>
            <p className="text-muted-foreground font-medium mb-3">Kritische Erfolgsfaktoren:</p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                Preiserhöhungen bei Handsets durchsetzen
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                Marktanteile halten trotz höherer Preise
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                Vertriebsorganisation erfolgreich durch die Transformation führen
              </li>
            </ul>
          </section>

          {/* Die Lösung */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Die Lösung</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Ganzheitliche Preisstrategie mit datenbasierter Wettbewerbsanalyse und dynamischem Forecasting:
            </p>

            {/* Massnahmen */}
            <div className="bg-muted rounded-xl p-6 mb-6">
              <h3 className="text-xl font-semibold mb-3">Forecasting-Tool</h3>
              <p className="text-muted-foreground">
                Dynamisches Forecasting-Tool, welches zukünftige Kosten automatisch abhängig von der 
                Preisgestaltung simulierte.
              </p>
            </div>

            <div className="bg-muted rounded-xl p-6 mb-6">
              <h3 className="text-xl font-semibold mb-3">Wettbewerbs-Monitoring</h3>
              <p className="text-muted-foreground">
                Grafische Darstellung und Monitoring der Marktpreise, um die Wettbewerbsposition sichtbar 
                zu machen und kritische Preislücken zu vermeiden.
              </p>
            </div>

            <div className="bg-muted rounded-xl p-6 mb-6">
              <h3 className="text-xl font-semibold mb-3">Stakeholder-Alignierung</h3>
              <p className="text-muted-foreground">
                Alignierung der Stakeholder durch Schaffung einer objektiven Datengrundlage, welche die 
                internen Diskussionen versachlichte.
              </p>
            </div>

            <div className="bg-muted rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">Vertriebsbefähigung</h3>
              <p className="text-muted-foreground">
                Befähigung des Vertriebs durch die Bereitstellung aktueller Marktdaten, um die Preiserhöhungen 
                sicher zu vertreten.
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
                  Erfolgreiche Umsetzung gradueller Preiserhöhungen
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  Vermeidung kritischer Preisdifferenzen zu Hauptwettbewerbern
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  Vertriebsorganisation konnte dank transparenter Daten und Tools erfolgreich mitgenommen werden
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
