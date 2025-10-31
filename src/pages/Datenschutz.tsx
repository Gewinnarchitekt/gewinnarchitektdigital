import Footer from "@/components/Footer";

const Datenschutz = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 container mx-auto px-6 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-2">Datenschutzerklärung</h1>
        
        <div className="space-y-8">
          <section>
            <p className="font-semibold">gewinnarchitekt</p>
            <p>Karl Aschwanden</p>
            <p className="mt-4 text-muted-foreground">Stand: 18. August 2025</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Verantwortliche Stelle</h2>
            <p className="mb-2">Verantwortlich für die Datenverarbeitung:</p>
            <p>Karl Aschwanden</p>
            <p>Goldbrunnenstrasse 145</p>
            <p>8055 Zürich</p>
            <p>Schweiz</p>
            <p className="mt-4 mb-2">Kontakt:</p>
            <p>E-Mail: info@gewinnarchitekt.ch</p>
            <p>Telefon: 076 535 26 04</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Allgemeine Hinweise</h2>
            <p className="text-muted-foreground mb-3">
              Gestützt auf Artikel 13 der schweizerischen Bundesverfassung und den datenschutzrechtlichen 
              Bestimmungen des Bundes (Datenschutzgesetz, DSG) hat jede Person Anspruch auf Schutz ihrer 
              Privatsphäre sowie auf Schutz vor Missbrauch ihrer persönlichen Daten.
            </p>
            <p className="text-muted-foreground">
              Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst und behandeln Ihre personenbezogenen 
              Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser 
              Datenschutzerklärung.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Erfassung und Verarbeitung personenbezogener Daten</h2>
            
            <h3 className="text-xl font-semibold mb-3 mt-6">3.1 Arten der erfassten Daten</h3>
            <p className="text-muted-foreground mb-2">Wir können folgende personenbezogene Daten erfassen:</p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
              <li>Kontaktdaten: Name, E-Mail-Adresse, Telefonnummer, Adresse</li>
              <li>Kommunikationsdaten: Inhalt Ihrer Anfragen, Nachrichten und Korrespondenz</li>
              <li>Nutzungsdaten: IP-Adresse, Browser-Informationen, besuchte Seiten, Zugriffszeiten</li>
              <li>Geschäftsdaten: Unternehmensinformationen, Projekdetails, Beratungsanfragen</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">3.2 Zwecke der Datenverarbeitung</h3>
            <p className="text-muted-foreground mb-2">Wir verarbeiten Ihre personenbezogenen Daten für folgende Zwecke:</p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
              <li>Erbringung unserer Dienstleistungen</li>
              <li>Bearbeitung von Anfragen und Kundenbetreuung</li>
              <li>Kommunikation und Korrespondenz</li>
              <li>Vertragserfüllung und Rechnungsstellung</li>
              <li>Verbesserung unserer Dienstleistungen</li>
              <li>Einhaltung gesetzlicher Verpflichtungen</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">3.3 Rechtsgrundlagen</h3>
            <p className="text-muted-foreground mb-2">Wir verarbeiten Ihre Daten auf folgenden Rechtsgrundlagen:</p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
              <li>Vertragserfüllung: Zur Erfüllung von Verträgen oder vorvertraglichen Massnahmen</li>
              <li>Berechtigte Interessen: Zur Wahrung unserer berechtigten Geschäftsinteressen</li>
              <li>Einwilligung: Bei ausdrücklicher Zustimmung Ihrerseits</li>
              <li>Gesetzliche Verpflichtung: Zur Erfüllung rechtlicher Anforderungen</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Datenweitergabe und Empfänger</h2>
            
            <h3 className="text-xl font-semibold mb-3">4.1 Grundsatz</h3>
            <p className="text-muted-foreground mb-2">
              Wir geben Ihre personenbezogenen Daten nicht ohne Ihre Einwilligung an Dritte weiter, 
              ausser in folgenden Fällen:
            </p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
              <li>Zur Erfüllung unserer Dienstleistungen erforderliche Dienstleister</li>
              <li>Gesetzliche Verpflichtungen oder behördliche Anordnungen</li>
              <li>Schutz unserer Rechte und Interessen</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">4.2 Dienstleister</h3>
            <p className="text-muted-foreground">
              Wir können externe Dienstleister zur Unterstützung unserer Geschäftstätigkeit einsetzen 
              (z.B. IT-Services, Cloud-Anbieter, Buchhaltung). Alle Dienstleister sind vertraglich zur 
              Einhaltung des Datenschutzes verpflichtet.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Internationale Datenübertragungen</h2>
            <p className="text-muted-foreground">
              Bei der Nutzung von Dienstleistern ausserhalb der Schweiz/EU stellen wir durch geeignete 
              Massnahmen (Standardvertragsklauseln, Angemessenheitsbeschlüsse) sicher, dass ein angemessenes 
              Datenschutzniveau gewährleistet ist.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Speicherdauer</h2>
            <p className="text-muted-foreground">
              Wir speichern Ihre personenbezogenen Daten nur so lange, wie es für die jeweiligen Zwecke 
              erforderlich ist oder gesetzliche Aufbewahrungsfristen bestehen. Geschäftsunterlagen werden 
              gemäss schweizerischem Obligationenrecht 10 Jahre aufbewahrt. Anfragen ohne Geschäftsbeziehung 
              löschen wir nach angemessener Zeit. Nach Ablauf der Aufbewahrungsfristen werden die Daten 
              sicher gelöscht oder anonymisiert.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Cookies und Tracking-Technologien</h2>
            
            <h3 className="text-xl font-semibold mb-3">7.1 Verwendung von Cookies</h3>
            <p className="text-muted-foreground">
              Diese Website kann Cookies verwenden, um die Nutzererfahrung zu verbessern. Cookies sind 
              kleine Textdateien, die auf Ihrem Gerät gespeichert werden können.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">7.2 Cookie-Arten</h3>
            <p className="text-muted-foreground mb-2">Je nach Konfiguration können folgende Cookie-Arten verwendet werden:</p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
              <li>Notwendige Cookies: Erforderlich für grundlegende Website-Funktionen</li>
              <li>Analyse-Cookies: Zur Verbesserung unserer Website (nur mit Ihrer Einwilligung)</li>
              <li>Marketing-Cookies: Für personalisierte Inhalte (nur mit Ihrer Einwilligung)</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">7.3 Cookie-Verwaltung</h3>
            <p className="text-muted-foreground">
              Sie können Cookies in Ihren Browser-Einstellungen verwalten, deaktivieren oder löschen. 
              Bei künftiger Verwendung von Cookies werden wir Sie entsprechend informieren und um Ihre 
              Einwilligung bitten, soweit gesetzlich erforderlich.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Ihre Rechte</h2>
            <p className="text-muted-foreground mb-2">Sie haben folgende Rechte bezüglich Ihrer personenbezogenen Daten:</p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
              <li>Auskunftsrecht: Information über die Verarbeitung Ihrer Daten</li>
              <li>Berichtigungsrecht: Korrektur unrichtiger oder unvollständiger Daten</li>
              <li>Löschungsrecht: Löschung Ihrer Daten unter bestimmten Umständen</li>
              <li>Einschränkungsrecht: Einschränkung der Verarbeitung</li>
              <li>Widerspruchsrecht: Widerspruch gegen die Verarbeitung</li>
              <li>Datenübertragbarkeit: Erhalt Ihrer Daten in strukturiertem Format</li>
              <li>Widerruf der Einwilligung: Jederzeit möglich</li>
            </ul>
            <p className="text-muted-foreground mt-3">
              Zur Ausübung Ihrer Rechte kontaktieren Sie uns unter den oben genannten Kontaktdaten.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Kontaktformular und E-Mail-Kommunikation</h2>
            <p className="text-muted-foreground">
              Wenn Sie uns über das Kontaktformular oder per E-Mail kontaktieren, werden Ihre Angaben 
              zur Bearbeitung Ihrer Anfrage gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung 
              weiter und löschen sie nach abgeschlossener Bearbeitung oder nach gesetzlichen Aufbewahrungsfristen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">10. Datensicherheit</h2>
            <p className="text-muted-foreground mb-2">
              Wir treffen angemessene technische und organisatorische Massnahmen zum Schutz Ihrer Daten:
            </p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
              <li>Verschlüsselung der Datenübertragung und -speicherung</li>
              <li>Zugangskontrollen und Berechtigungsmanagement</li>
              <li>Regelmässige Sicherheitsüberprüfungen</li>
            </ul>
            <p className="text-muted-foreground mt-3">
              Dennoch kann keine absolute Sicherheit garantiert werden. Wir empfehlen Ihnen, keine besonders 
              sensiblen Informationen unverschlüsselt zu übertragen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">11. Änderungen der Datenschutzerklärung</h2>
            <p className="text-muted-foreground">
              Wir können diese Datenschutzerklärung jederzeit anpassen. Die aktuelle Version ist stets auf 
              unserer Website verfügbar. Bei wesentlichen Änderungen werden wir Sie entsprechend informieren.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">12. Beschwerderecht</h2>
            <p className="text-muted-foreground mb-2">
              Sie haben das Recht, sich bei der zuständigen Datenschutzbehörde zu beschweren:
            </p>
            <p>Eidgenössischer Datenschutz- und Öffentlichkeitsbeauftragte (EDÖB)</p>
            <p>Feldeggweg 1</p>
            <p>3003 Bern</p>
            <p>Schweiz</p>
            <p className="mt-2">E-Mail: info@edoeb.admin.ch</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">13. Kontakt bei Datenschutzfragen</h2>
            <p className="text-muted-foreground mb-2">
              Bei Fragen zum Datenschutz oder zur Ausübung Ihrer Rechte wenden Sie sich bitte an:
            </p>
            <p>Karl Aschwanden</p>
            <p>E-Mail: info@gewinnarchitekt.ch</p>
            <p>Telefon: 076 535 26 04</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Datenschutz;
