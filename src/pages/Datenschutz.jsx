export default function Datenschutz() {
  return (
    <div className="bg-[#FAF9F6] text-slate-900 min-h-screen">
      {/* Header */}
      <section className="bg-[#0B1322] text-white py-16 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white mb-2 leading-tight">
            Datenschutzerklärung
          </h1>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Informationen zur Verarbeitung personenbezogener Daten gemäß DSGVO
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200/80 shadow-sm space-y-6 text-slate-700 text-sm leading-relaxed">
            <div>
              <h2 className="text-xl font-serif font-bold text-slate-900 mb-2">1. Verantwortlicher</h2>
              <p>
                Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO):<br />
                <strong>Jens Kathe</strong><br />
                Hansastrasse 6, 34119 Kassel<br />
                E-Mail: jens@kathe.org
              </p>
            </div>

            <div>
              <h2 className="text-xl font-serif font-bold text-slate-900 mb-2">2. Erhebung und Speicherung personenbezogener Daten</h2>
              <h3 className="font-bold text-slate-900 mt-2 mb-1">Beim Besuch der Website</h3>
              <p>
                Beim Aufrufen unserer Website werden durch den auf Ihrem Endgerät zum Einsatz kommenden Browser automatisch Informationen an den Server unserer Website gesendet. Diese Informationen werden temporär in einem sogenannten Logfile gespeichert.
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-xs text-slate-600">
                <li>IP-Adresse des anfragenden Rechners</li>
                <li>Datum und Uhrzeit des Zugriffs</li>
                <li>Name und URL der abgerufenen Datei</li>
                <li>Website, von der aus der Zugriff erfolgt (Referrer-URL)</li>
                <li>Verwendeter Browser und ggf. das Betriebssystem Ihres Rechners</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-serif font-bold text-slate-900 mb-2">3. Affiliate-Links (Amazon Partnerprogramm)</h2>
              <p>
                Wir sind Teilnehmer des Partnerprogramms von Amazon EU. Auf unseren Seiten werden Partnerlinks eingesetzt. Wenn Sie auf einen solchen Link klicken und bei Amazon ein Produkt erwerben, erhalten wir dafür eine Provision. Amazon nutzt Cookies, um die Herkunft der Bestellungen nachvollziehen zu können.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-serif font-bold text-slate-900 mb-2">4. Ihre Rechte</h2>
              <p>
                Sie haben das Recht auf Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten, Recht auf Berichtigung, Löschung oder Einschränkung der Verarbeitung sowie Recht auf Datenübertragbarkeit.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
