import React from "react";
import { Cookie, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CookiePage() {
  const openCookieSettings = () => {
    window.dispatchEvent(new CustomEvent('open-cookie-settings'));
  };

  return (
    <div className="bg-[#FAF9F6] text-slate-900 min-h-screen">
      {/* Header */}
      <section className="bg-[#0B1322] text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold uppercase tracking-wider mb-4">
            <Cookie className="w-3.5 h-3.5" />
            <span>Privatsphäre &amp; Endgerätezugriff</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white mb-2 leading-tight">
            Cookie-Richtlinie
          </h1>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Transparente Informationen über den Einsatz von Cookies und ähnlichen Technologien auf jahrgangssardinen.de.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200/80 shadow-sm space-y-6 text-slate-700 text-sm leading-relaxed">
            <div>
              <h2 className="text-xl font-serif font-bold text-slate-900 mb-2">Was sind Cookies &amp; lokale Speicherungen?</h2>
              <p>
                Cookies sind kleine Textdateien, die beim Besuch einer Website auf Ihrem Endgerät gespeichert werden. Daneben kann der lokale Speicher Ihres Browsers (LocalStorage) genutzt werden, um technische Auswahlen zu hinterlegen.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-serif font-bold text-slate-900 mb-2">Übersicht der Kategorien</h2>
              
              <div className="space-y-4 mt-3">
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                  <h3 className="font-bold text-slate-900 text-sm">1. Essenziell (Technisch notwendig)</h3>
                  <p className="text-xs text-slate-600 mt-1">
                    Speicherung Ihrer getroffenen Cookie-Auswahl im lokalen Browser-Speicher (<code className="font-mono">cookie_consent_v2</code>). Diese Funktion ist zwingend erforderlich, damit die Website Ihre Entscheidung bei Folgeseitenaufrufen respektiert. Rechtsgrundlage: § 25 Abs. 2 Nr. 2 TDDDG.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                  <h3 className="font-bold text-slate-900 text-sm">2. Marketing &amp; Werbeanzeigen (Google AdSense)</h3>
                  <p className="text-xs text-slate-600 mt-1">
                    Dient der Ausspielung werblicher Anzeigen über Google AdSense. Diese Cookies werden <strong>ausschließlich nach Ihrer ausdrücklichen Einwilligung</strong> geladen. Bei der Auswahl von „Nur Essenzielle“ wird kein AdSense-Skript geladen. Rechtsgrundlage: § 25 Abs. 1 TDDDG i.V.m. Art. 6 Abs. 1 lit. a DSGVO.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                  <h3 className="font-bold text-slate-900 text-sm">3. Affiliate-Partner-Links (Amazon PartnerNet)</h3>
                  <p className="text-xs text-slate-600 mt-1">
                    Wenn Sie einen mit einem Sternchen (*) markierten Partnerlink anklicken und zu Amazon weitergeleitet werden, setzt Amazon eigene Cookies ein, um einen anschließenden Einkauf unserem Partnerkonto zuzuordnen.
                  </p>
                </div>
              </div>
            </div>

            {/* Reopen Settings */}
            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200">
              <div className="flex items-start gap-3">
                <Settings className="w-5 h-5 text-amber-600 mt-0.5 shrink-0" />
                <div className="space-y-2">
                  <h3 className="font-bold text-slate-900 text-base">Ihre aktuellen Einstellungen</h3>
                  <p className="text-xs text-slate-600">
                    Sie können Ihre Cookie-Präferenzen jederzeit mit einem Klick auf den nachfolgenden Button öffnen und anpassen:
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

            <div className="pt-4 border-t border-slate-200 text-xs text-slate-500">
              Stand: September 2026. Weitere Details finden Sie in unserer <a href="/datenschutz" className="text-amber-700 underline font-medium">Datenschutzerklärung</a>.
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
