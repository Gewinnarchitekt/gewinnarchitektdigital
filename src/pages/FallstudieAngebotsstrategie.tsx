import { ArrowLeft, Target } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const FallstudieAngebotsstrategie = () => {
  const services = [
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
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Back Link */}
          <Link 
            to="/#leistungen" 
            className="inline-flex items-center text-muted-foreground hover:text-primary smooth-transition mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück zur Übersicht
          </Link>

          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-lg bg-gradient-to-r from-green-600 to-green-700 mr-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                Fallstudie Angebotsstrategie
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Sunrise Communications AG
            </h1>
            <p className="text-xl text-muted-foreground">
              Pricingstrategy für Handsets
            </p>
          </div>

          {/* Services Tags */}
          <div className="mb-12">
            <h2 className="text-lg font-semibold text-foreground mb-4">Angewandte Services</h2>
            <div className="flex flex-wrap gap-2">
              {services.map((service, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>

          {/* Content Sections */}
          <div className="space-y-12">
            {/* Die Ausgangslage */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Die Ausgangslage</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Sunrise Communications AG, der zweitgrösste Telekommunikationsanbieter der Schweiz, hatte zuvor starkes Wachstum durch die Bündelung von subventionierten Premium-Smartphones mit hochpreisigen Tarifen erzielt. Doch die Wettbewerbssituation hatte sich verändert:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Konkurrenten boten mittlerweile vergleichbare Bundle-Angebote an
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Subventionierte Premium-Smartphones trieben die Neukundenakquisitionskosten SAC und Retention-Kosten massiv in die Höhe
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Die ursprünglichen Vorteile bei den Bruttozugängen waren nicht mehr vorhanden
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Ein bevorstehender IPO durfte nicht gefährdet werden
                  </li>
                </ul>
              </div>
            </section>

            {/* Die Herausforderung */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Die Herausforderung</h2>
              <div className="bg-muted rounded-xl p-6 mb-6">
                <p className="text-lg text-foreground font-medium">
                  Reduktion der Akquisitions- und Retention-Kosten durch Preiserhöhungen bei Handsets – ohne Marktanteilsverluste.
                </p>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Die zentrale Fragestellung: Wie können wir die Handset-Preise erhöhen und gleichzeitig unsere Marktposition und die Unterstützung des Vertriebsteams sicherstellen?
              </p>
              <div className="bg-card rounded-xl p-6 border border-border">
                <h3 className="font-semibold text-foreground mb-3">Kritische Erfolgsfaktoren:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Preiserhöhungen bei Handsets durchsetzen
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Marktanteile halten trotz höherer Preise
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Vertriebsorganisation erfolgreich durch die Transformation führen
                  </li>
                </ul>
              </div>
            </section>

            {/* Die Lösung */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Die Lösung</h2>
              <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-xl p-6 mb-6">
                <p className="text-lg text-white font-medium">
                  Ganzheitliche Preisstrategie mit datenbasierter Wettbewerbsanalyse und dynamischem Forecasting
                </p>
              </div>
              <h3 className="font-semibold text-foreground mb-4">Implementierte Massnahmen:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-card rounded-xl p-5 border border-border">
                  <h4 className="font-semibold text-foreground mb-2">Dynamisches Forecasting-Tool</h4>
                  <p className="text-muted-foreground text-sm">
                    Entwicklung eines Tools zur automatischen Berechnung von SAC- und Retention-Kosten basierend auf ausgewählten Preisniveaus
                  </p>
                </div>
                <div className="bg-card rounded-xl p-5 border border-border">
                  <h4 className="font-semibold text-foreground mb-2">Kontinuierliches Preis-Tracking</h4>
                  <p className="text-muted-foreground text-sm">
                    Permanente Überwachung relevanter Geräte über verschiedene Vertriebskanäle hinweg
                  </p>
                </div>
                <div className="bg-card rounded-xl p-5 border border-border">
                  <h4 className="font-semibold text-foreground mb-2">Marktpreis-Visualisierung</h4>
                  <p className="text-muted-foreground text-sm">
                    Aufbereitung der Marktpreisentwicklung zur schnellen Entscheidungsfindung
                  </p>
                </div>
                <div className="bg-card rounded-xl p-5 border border-border">
                  <h4 className="font-semibold text-foreground mb-2">Segmentspezifische Preisdarstellung</h4>
                  <p className="text-muted-foreground text-sm">
                    Visualisierung der Preisniveaus nach Kundensegmenten (Low, Mid, High)
                  </p>
                </div>
              </div>
            </section>

            {/* Die Ergebnisse */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Die Ergebnisse</h2>
              
              {/* Highlight Box */}
              <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-xl p-8 mb-8 text-center">
                <p className="text-3xl md:text-4xl font-bold text-white mb-2">
                  💰 CHF 15 Millionen
                </p>
                <p className="text-lg text-white/90">
                  Kosteneinsparung ohne Marktanteilsverluste
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Finanzielle Erfolge */}
                <div className="bg-card rounded-xl p-6 border border-border">
                  <h3 className="font-semibold text-foreground mb-4 flex items-center">
                    <span className="text-2xl mr-2">📊</span>
                    Finanzielle Erfolge
                  </h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      CHF 5 Millionen Reduktion der Neukundenakquisitionskosten (SAC)
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      CHF 10 Millionen Reduktion der Retention-Kosten
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      Keine Marktanteilsverluste trotz Preiserhöhungen
                    </li>
                  </ul>
                </div>

                {/* Operative Erfolge */}
                <div className="bg-card rounded-xl p-6 border border-border">
                  <h3 className="font-semibold text-foreground mb-4 flex items-center">
                    <span className="text-2xl mr-2">⚙️</span>
                    Operative Erfolge
                  </h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      Erfolgreiche Umsetzung gradueller Preiserhöhungen
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      Vermeidung kritischer Preisdifferenzen zu Hauptwettbewerbern
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      Vertriebsorganisation konnte dank transparenter Daten und Tools erfolgreich mitgenommen werden
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <div className="bg-muted rounded-xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Ähnliche Herausforderungen?
              </h2>
              <p className="text-muted-foreground mb-6">
                Lassen Sie uns besprechen, wie ich auch Ihrem Unternehmen helfen kann.
              </p>
              <Link 
                to="/#kontakt"
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white font-medium rounded-lg hover:from-green-700 hover:to-green-800 smooth-transition"
              >
                Jetzt Kontakt aufnehmen
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FallstudieAngebotsstrategie;
