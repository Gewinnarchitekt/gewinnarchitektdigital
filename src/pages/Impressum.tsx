import Footer from "@/components/Footer";

const Impressum = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 container mx-auto px-6 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-2">Impressum</h1>
        <p className="text-muted-foreground mb-8">18. August 2025</p>

        <div className="space-y-8">
          <section>
            <p className="font-semibold">gewinnarchitekt</p>
            <p>Karl Aschwanden</p>
            <p>Goldbrunnenstrasse 145</p>
            <p>8055 Zürich</p>
            <p>Schweiz</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Kontakt:</h2>
            <p>E-Mail: info@gewinnarchitekt.ch</p>
            <p>Telefon: 076 535 26 04</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Haftungsausschluss:</h2>
            <p className="text-muted-foreground">
              Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, 
              Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Urheberrecht:</h2>
            <p className="text-muted-foreground">
              Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen 
              dem schweizerischen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede 
              Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen 
              Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Datenschutz:</h2>
            <p className="text-muted-foreground">
              Informationen zum Umgang mit personenbezogenen Daten finden Sie in unserer Datenschutzerklärung.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Impressum;
