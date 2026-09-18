import React from "react";
import { Shield, Lock, Settings, ExternalLink, Info } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Datenschutz() {
  const openCookieSettings = () => {
    window.dispatchEvent(new CustomEvent('open-cookie-settings'));
  };

  return (
    <div className="bg-[#FAF9F6] text-slate-900 min-h-screen">
      {/* Header */}
      <section className="bg-[#0B1322] text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold uppercase tracking-wider mb-4">
            <Shield className="w-3.5 h-3.5" />
            <span>Transparenz &amp; Informationspflichten</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white mb-2 leading-tight">
            Datenschutzerklärung
          </h1>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Informationen zur Verarbeitung personenbezogener Daten gemäß Art. 13 und 14 der Datenschutz-Grundverordnung (DSGVO).
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200/80 shadow-sm space-y-8 text-slate-700 text-sm leading-relaxed">
            
            {/* 1. Verantwortlicher */}
            <div>
              <h2 className="text-xl font-serif font-bold text-slate-900 mb-2">1. Verantwortlicher</h2>
              <p>
                Verantwortlicher im Sinne der DSGVO und sonstiger datenschutzrechtlicher Bestimmungen:<br />
                <strong>Jens Kathe</strong><br />
                Hansastraße 6, 34119 Kassel, Deutschland<br />
                E-Mail: <a href="mailto:jens@kathe.org" className="text-amber-700 underline font-medium">jens@kathe.org</a><br />
                Telefon: +49 178 6652623<br />
                Vollständige Angaben siehe <a href="/impressum" className="text-amber-700 underline font-medium">Impressum</a>.
              </p>
            </div>

            {/* 2. Hosting durch Vercel */}
            <div>
              <h2 className="text-xl font-serif font-bold text-slate-900 mb-2">2. Webhosting durch Vercel</h2>
              <p>
                Wir hosten unsere Website bei dem Cloud-Dienstleister <strong>Vercel Inc.</strong>, 440 N Barranca Ave #4133, Covina, CA 91723, USA.
              </p>
              <p className="mt-2">
                Beim Aufruf unserer Seiten verarbeitet Vercel technische Verbindungsdaten (Server-Logfiles), darunter:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-xs text-slate-600">
                <li>IP-Adresse des anfragenden Geräts (in der Regel in gekürzter bzw. anonymisierter Form)</li>
                <li>Datum und Uhrzeit des Abrufs</li>
                <li>Aufgerufene URL und Dateipfad</li>
                <li>Referrer-URL (die zuvor besuchte Seite)</li>
                <li>Browsertyp, Version und Betriebssystem</li>
              </ul>
              <p className="mt-2">
                <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der sicheren, stabilen und performanten Bereitstellung unseres redaktionellen Online-Angebots).
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Die Datenübertragung in die USA erfolgt auf Grundlage der Standardvertragsklauseln der Europäischen Kommission sowie der Zertifizierung von Vercel im Rahmen des EU-US Data Privacy Frameworks.
              </p>
            </div>

            {/* 3. Vercel Web Analytics */}
            <div>
              <h2 className="text-xl font-serif font-bold text-slate-900 mb-2">3. Vercel Web Analytics (Cookielos)</h2>
              <p>
                Diese Website nutzt <strong>Vercel Web Analytics</strong> zur aggregierten Reichweitenmessung. Vercel Web Analytics arbeitet nach Herstellerangaben ohne Cookies und speichert keine personenbezogenen Daten wie IP-Adressen dauerhaft.
              </p>
              <p className="mt-2">
                Zur Unterscheidung von Seitenaufrufen werden ausschließlich flüchtige Hashes aus technischen Attributen (User-Agent, Tag, Route) gebildet, die keine Rückschlüsse auf einzelne Personen zulassen.
              </p>
              <p className="mt-2">
                <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der anonymisierten statistischen Auswertung und technischen Optimierung unserer Seiten).
              </p>
            </div>

            {/* 4. Google AdSense */}
            <div>
              <h2 className="text-xl font-serif font-bold text-slate-900 mb-2">4. Werbeeinbindung über Google AdSense</h2>
              <p>
                Diese Website nutzt bei entsprechender Einwilligung den Werbedienst <strong>Google AdSense</strong> der Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland („Google“).
              </p>
              <p className="mt-2">
                Google AdSense verwendet Cookies und Web-Beacons, um Werbeanzeigen basierend auf früheren Besuchen auszuliefern. Wenn Sie in unserem Cookie-Banner die Option <em>„Nur Essenzielle“</em> wählen, wird das AdSense-Skript <strong>nicht geladen</strong> und es werden keine entsprechenden Werbe-Cookies auf Ihrem Endgerät gesetzt.
              </p>
              <p className="mt-2">
                <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO bzw. § 25 Abs. 1 TDDDG (Einwilligung). Sie können Ihre Einwilligung jederzeit mit Wirkung für die Zukunft über unsere Cookie-Einstellungen anpassen oder widerrufen.
              </p>
            </div>

            {/* 5. Amazon Partnerprogramm */}
            <div>
              <h2 className="text-xl font-serif font-bold text-slate-900 mb-2">5. Affiliate-Links (Amazon PartnerNet)</h2>
              <p>
                Wir nehmen am Partnerprogramm von <strong>Amazon Europe Core S.à r.l.</strong> (38 avenue John F. Kennedy, L-1855 Luxemburg) teil. Auf unseren Seiten sind redaktionell ausgewählte Partnerlinks eingebunden, die mit einem Sternchen (*) gekennzeichnet sind.
              </p>
              <p className="mt-2">
                Wenn Sie einen solchen Partnerlink anklicken und auf Amazon eine Bestellung tätigen, erhält der Betreiber dieser Website eine Vermittlungsprovision. Amazon setzt bei Weiterleitung Cookies ein, um nachvollziehen zu können, dass Sie über unsere Website vermittelt wurden.
              </p>
              <p className="mt-2">
                <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes wirtschaftliches Interesse an der Refinanzierung des redaktionellen Angebots) bzw. Art. 6 Abs. 1 lit. a DSGVO.
              </p>
            </div>

            {/* 6. Cookie-Einstellungen anpassen */}
            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200">
              <div className="flex items-start gap-3">
                <Settings className="w-5 h-5 text-amber-600 mt-0.5 shrink-0" />
                <div className="space-y-2">
                  <h3 className="font-bold text-slate-900 text-base">Cookie-Präferenzen jederzeit anpassen</h3>
                  <p className="text-xs text-slate-600">
                    Sie können Ihre getroffene Auswahl zu Analyse- und Werbepartnern jederzeit mit einem Klick überprüfen, ändern oder vollständig widerrufen:
                  </p>
                  <Button
                    type="button"
                    onClick={openCookieSettings}
                    className="mt-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold py-2 px-4 rounded-xl cursor-pointer"
                  >
                    Cookie-Einstellungen jetzt anpassen
                  </Button>
                </div>
              </div>
            </div>

            {/* 7. Betroffenenrechte */}
            <div>
              <h2 className="text-xl font-serif font-bold text-slate-900 mb-2">6. Ihre Rechte als betroffene Person</h2>
              <p>
                Ihnen stehen nach der DSGVO folgende gesetzliche Rechte gegenüber dem Verantwortlichen zu:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-xs text-slate-600">
                <li><strong>Auskunftsrecht</strong> (Art. 15 DSGVO) über die verarbeiteten Daten</li>
                <li><strong>Recht auf Berichtigung</strong> (Art. 16 DSGVO) unrichtiger Daten</li>
                <li><strong>Recht auf Löschung</strong> (Art. 17 DSGVO) („Recht auf Vergessenwerden“)</li>
                <li><strong>Recht auf Einschränkung der Verarbeitung</strong> (Art. 18 DSGVO)</li>
                <li><strong>Recht auf Datenübertragbarkeit</strong> (Art. 20 DSGVO)</li>
                <li><strong>Widerspruchsrecht</strong> (Art. 21 DSGVO) gegen Verarbeitungen auf Basis berechtigter Interessen</li>
                <li><strong>Beschwerderecht</strong> bei einer Datenschutz-Aufsichtsbehörde (Art. 77 DSGVO)</li>
              </ul>
            </div>

            {/* Stand */}
            <div className="pt-4 border-t border-slate-200 text-xs text-slate-500">
              Stand dieser Datenschutzerklärung: September 2026.
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
