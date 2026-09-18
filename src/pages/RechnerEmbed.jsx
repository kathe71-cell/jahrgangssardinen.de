import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Clock, Sparkles, ShieldCheck, ExternalLink, Wine, RotateCw, AlertTriangle, Info } from 'lucide-react';

export default function RechnerEmbed() {
  const currentYear = new Date().getFullYear();
  const [yearMode, setYearMode] = useState('known'); // 'known' | 'mhd_only'
  const [vintageYear, setVintageYear] = useState(currentYear - 6);
  const [storageCondition, setStorageCondition] = useState('controlled'); // 'controlled' | 'unknown'
  const containerRef = useRef(null);

  const ageYears = Math.max(0, currentYear - vintageYear);

  // SEO & Head-Tags pro Route
  useEffect(() => {
    document.title = 'Reife- & Lagerrechner für Jahrgangssardinen | jahrgangssardinen.de';
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = 'Interaktiver Reife- und Lagerrechner für Jahrgangssardinen: Berechnen Sie Altersstufen, Wenderhythmen und sensorische Reifephasen bei kontrollierter Lagerung.';

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = 'https://www.jahrgangssardinen.de/rechner-embed';

    document.documentElement.lang = 'de';
  }, []);

  // Auto-Resize PostMessage an übergeordnetes Fenster
  useEffect(() => {
    const notifyParentHeight = () => {
      if (window.parent && window.parent !== window) {
        const height = document.documentElement.scrollHeight || document.body.scrollHeight;
        window.parent.postMessage({
          type: 'jahrgangssardinen-embed-resize',
          height: height
        }, '*');
      }
    };

    notifyParentHeight();
    const timer = setTimeout(notifyParentHeight, 150);
    window.addEventListener('resize', notifyParentHeight);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', notifyParentHeight);
    };
  }, [vintageYear, storageCondition, yearMode]);

  const evaluation = useMemo(() => {
    if (storageCondition === 'unknown') {
      return {
        stage: "Lagerhistorie ungeprüft",
        badge: "Keine Verzehrempfehlung möglich",
        badgeColor: "bg-red-100 text-red-950 border-red-300 font-bold",
        isUnknownStorage: true,
        isMhdOnly: false,
        texture: "Bei unbekannten Lagerbedingungen (z. B. jahrelanger Raumtemperatur > 20 °C oder Feuchtigkeitsschwankungen) kann keine belastbare Aussage über Textur oder Genusstauglichkeit getroffen werden.",
        oilStatus: "Erhöhte Temperaturen können die Lipidoxidation im Olivenöl beschleunigen und zu ranzigen Fehlaromen führen.",
        pairing: "Vor Verzehr muss die Dose zwingend sensorisch und technisch überprüft werden.",
        turningAdvice: "Unbekannte Lagerdauer ohne regelmäßiges Wenden führt häufig zu ungleichmäßiger Öldurchdringung des Fisches."
      };
    }

    if (yearMode === 'mhd_only') {
      return {
        stage: "Alter & Jahrgang unbekannt",
        badge: "Keine Altersberechnung aus MHD",
        badgeColor: "bg-slate-200 text-slate-900 border-slate-300 font-bold",
        isUnknownStorage: false,
        isMhdOnly: true,
        texture: "Da europäische Konservenhersteller unterschiedliche MHD-Fristen (je nach Manufaktur 4 bis 10 Jahre ab Abfüllung) festlegen, erlaubt das Mindesthaltbarkeitsdatum keinen verlässlichen Rückschluss auf das Fang- oder Herstellungsjahr. Das Fischfleisch behält bei unversehrter Dose seine reguläre Textur.",
        oilStatus: "Bei kühler, kontrollierter Lagerung (12–15 °C) bleibt das native Olivenöl bis zum Erreichen des MHD geschmacklich stabil.",
        pairing: "Konserve kann im Rahmen der Mindesthaltbarkeit jederzeit verzehrt werden. Wie üblich vor Verzehr auf Geruch und Aussehen prüfen.",
        turningAdvice: "Ein gelegentliches Wenden um 180° (alle 6–12 Monate) unterstützt auch bei Standarddosen die gleichmäßige Öldurchdringung."
      };
    }

    if (ageYears <= 3) {
      return {
        stage: "Kulinarische Orientierung: Frische Phase (1–3 Jahre)",
        badge: "Frisch & Faserig",
        badgeColor: "bg-blue-100 text-blue-950 border-blue-300 font-bold",
        isUnknownStorage: false,
        isMhdOnly: false,
        texture: "Festes, kerniges Fischfleisch mit klarer Faserstruktur. Die Mittelgräte ist durch die Hitzesterilisation zart, aber als Struktur spürbar.",
        oilStatus: "Das native Olivenöl extra behält seine grasig-fruchtige Primärnote und umschmeichelt die Meeresfrische des Fisches.",
        pairing: "Krosses Sauerteigbaguette, feine bretonische Salzbutter, trockener Vinho Verde oder mineralischer Riesling.",
        turningAdvice: "Alle 6 Monate um 180° wenden, damit das Olivenöl das Fischfleisch kontinuierlich von beiden Seiten umschließt."
      };
    } else if (ageYears <= 7) {
      return {
        stage: "Kulinarische Orientierung: Harmonische Phase (4–7 Jahre)",
        badge: "Harmonische Reifestufe",
        badgeColor: "bg-emerald-100 text-emerald-950 border-emerald-300 font-bold",
        isUnknownStorage: false,
        isMhdOnly: false,
        texture: "Das Fleisch wird wunderbar zart und mürbe. Die Mittelgräte wird durch die Einwirkung von Sterilisation und Ölsäuren weich und mitessbar.",
        oilStatus: "Fischöle und Olivenöl verbinden sich zu einer samtigen Konsistenz mit spürbarer Umami-Tiefe.",
        pairing: "Geröstetes Landbrot mit Fleur de Sel, Champagner Brut oder trockener Muscadet Sèvre et Maine sur lie.",
        turningAdvice: "Weiterhin halbjährlich schonend wenden. Konstante Lagertemperatur bei 12–15 °C im Weinkeller sichern."
      };
    } else if (ageYears <= 12) {
      return {
        stage: "Kulinarische Orientierung: Reife Jahrgangsstufe (8–12 Jahre)",
        badge: "Mürbe & Buttrig",
        badgeColor: "bg-amber-100 text-amber-950 border-amber-300 font-bold",
        isUnknownStorage: false,
        isMhdOnly: false,
        texture: "Sehr mürbe, confit-artige Konsistenz. Die Mittelgräte ist extrem weich und kaum noch wahrnehmbar.",
        oilStatus: "Tiefgoldenes, nussig-aromatisches Öl voller natürlicher Fettsäuren und komplexer mariner Umami-Nuancen.",
        pairing: "Pur aus der Dose genossen auf lauwarmem Brioche, begleitet von gereiftem Winzersekt oder weißem Burgunder.",
        turningAdvice: "Sehr behutsam handhaben. Dosenfalze regelmäßig auf Korrosion und Feuchtigkeit prüfen."
      };
    } else {
      return {
        stage: "Kulinarische Orientierung: Langzeit-Lagerung (über 12 Jahre)",
        badge: "Liebhaber-Horizont",
        badgeColor: "bg-purple-100 text-purple-950 border-purple-300 font-bold",
        isUnknownStorage: false,
        isMhdOnly: false,
        texture: "Extrem zarte, fast cremige Fischsubstanz. Sensorische Reifeprozesse verlangsamen sich merklich.",
        oilStatus: "Vollständig durchdrungen mit komplexen Noten von reifen Nüssen, getrockneten Kräutern und Meersalz.",
        pairing: "Festlicher Anlass für Kenner. Trockener Fino-Sherry oder gereifter Champagner.",
        turningAdvice: "Regelmäßige Kontrolle der Doppelfalze. Unversehrtheit des Dosenblechs ist die absolute Grundvoraussetzung."
      };
    }
  }, [ageYears, storageCondition, yearMode]);

  return (
    <div ref={containerRef} className="bg-[#FAF9F6] p-2.5 sm:p-6 flex flex-col justify-between font-sans text-slate-900 min-h-screen">
      {/* Schema.org WebApplication Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Jahrgangssardinen Reife- und Lagerrechner",
            "url": "https://www.jahrgangssardinen.de/rechner-embed",
            "applicationCategory": "LifestyleApplication",
            "operatingSystem": "All",
            "description": "Interaktives Orientierungswerkzeug zur Einordnung von Fangjahrgängen, Wendezyklen und Sicherheitskriterien nach BfR-Standards für Jahrgangssardinen.",
            "publisher": {
              "@type": "Organization",
              "name": "Jahrgangssardinen.de",
              "url": "https://www.jahrgangssardinen.de/"
            }
          })
        }}
      />

      <div className="max-w-2xl mx-auto w-full">
        <div className="bg-white rounded-3xl p-4 sm:p-8 shadow-xl border border-slate-200">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-slate-100">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-950 text-xs font-extrabold uppercase tracking-wider mb-2">
                <Clock className="w-3.5 h-3.5 text-amber-700" />
                <span>Warenkunde: Reife- &amp; Lager-Check</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-950 leading-tight">
                Reifestatus &amp; Lagerhinweise ermitteln
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Fangjahr (Millésime) vs. Mindesthaltbarkeitsdatum (MHD) sachlich einordnen
              </p>
            </div>

            <div className="text-left sm:text-right shrink-0 bg-slate-50 sm:bg-transparent p-2 sm:p-0 rounded-xl">
              {yearMode === 'known' ? (
                <>
                  <div className="text-2xl sm:text-4xl font-black text-amber-700 font-mono">
                    {ageYears} {ageYears === 1 ? 'Jahr' : 'Jahre'}
                  </div>
                  <p className="text-[11px] text-slate-500 font-medium">Reifezeit (Stand {currentYear})</p>
                </>
              ) : (
                <>
                  <div className="text-lg sm:text-2xl font-bold text-slate-700 font-mono">
                    Alter unbekannt
                  </div>
                  <p className="text-[11px] text-slate-500 font-medium">Kein Jahrgangsaufdruck</p>
                </>
              )}
            </div>
          </div>

          {/* Jahresangabe Schalter & Slider */}
          <div className="my-5 bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200">
            <label className="text-xs font-bold text-slate-800 uppercase tracking-wider block mb-2">
              Jahresangabe auf der Konserve:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
              <button
                type="button"
                onClick={() => setYearMode('known')}
                className={`p-3 rounded-xl text-left border transition-all text-xs font-medium cursor-pointer ${
                  yearMode === 'known'
                    ? 'bg-amber-500 text-slate-950 font-bold border-amber-600 shadow-sm'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                <span className="block font-bold">✓ Fang- / Abfülljahr bekannt</span>
                <span className="text-[10px] opacity-90">Expliziter Millésime-Aufdruck auf der Dose</span>
              </button>

              <button
                type="button"
                onClick={() => setYearMode('mhd_only')}
                className={`p-3 rounded-xl text-left border transition-all text-xs font-medium cursor-pointer ${
                  yearMode === 'mhd_only'
                    ? 'bg-amber-500 text-slate-950 font-bold border-amber-600 shadow-sm'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                <span className="block font-bold">⚠ Nur MHD / kein Jahrgang</span>
                <span className="text-[10px] opacity-90">Kein Rückschluss auf das Fangjahr möglich</span>
              </button>
            </div>

            {yearMode === 'known' ? (
              <div>
                <div className="flex justify-between items-center text-xs font-bold text-slate-700 mb-2">
                  <span>Fang- bzw. Abfülljahr der Dose:</span>
                  <span className="text-amber-800 font-extrabold text-sm sm:text-base font-mono">
                    Jahrgang {vintageYear}
                  </span>
                </div>
                <input
                  type="range"
                  min={currentYear - 16}
                  max={currentYear}
                  value={vintageYear}
                  onChange={(e) => setVintageYear(Number(e.target.value))}
                  className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-600 min-h-[44px]"
                  aria-label="Fangjahr auswählen"
                />
                <div className="flex justify-between text-[10px] sm:text-[11px] text-slate-400 mt-1 font-medium">
                  <span>{currentYear - 16} ({16} J.)</span>
                  <span>{currentYear - 10} ({10} J.)</span>
                  <span>{currentYear - 5} ({5} J.)</span>
                  <span>{currentYear} (0 J.)</span>
                </div>
                <p className="text-[11px] text-slate-500 mt-2 italic">
                  Hinweis: Nur bekannte Fang- oder Abfülljahre verwenden. Das aufgedruckte Mindesthaltbarkeitsdatum (MHD) erlaubt keine verlässliche Rückrechnung.
                </p>
              </div>
            ) : (
              <div className="p-3.5 bg-white rounded-xl border border-slate-200 text-xs text-slate-600 space-y-1.5">
                <p className="font-bold text-slate-900">Keine verlässliche Rückrechnung aus dem MHD möglich:</p>
                <p className="leading-relaxed">
                  Europäische Konservenhersteller setzen sehr unterschiedliche MHD-Fristen an (je nach Manufaktur 4 bis 10 Jahre ab Abfüllung). Ohne konkrete Jahresangabe auf der Dose kann das Herstellungsjahr daher nicht zuverlässig ermittelt werden.
                </p>
              </div>
            )}
          </div>

          {/* Lagerhistorie Schalter */}
          <div className="mb-5 bg-slate-50 p-4 rounded-2xl border border-slate-200">
            <label className="text-xs font-bold text-slate-800 uppercase tracking-wider block mb-2">
              Lagerhistorie &amp; Aufbewahrungsbedingungen:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setStorageCondition('controlled')}
                className={`p-3 rounded-xl text-left border transition-all text-xs font-medium cursor-pointer ${
                  storageCondition === 'controlled'
                    ? 'bg-amber-500 text-slate-950 font-bold border-amber-600 shadow-sm'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                <span className="block font-bold">✓ Kontrollierte Lagerung</span>
                <span className="text-[10px] opacity-90">Konstant 12–15 °C, dunkel, trocken, halbjährlich gewendet</span>
              </button>

              <button
                type="button"
                onClick={() => setStorageCondition('unknown')}
                className={`p-3 rounded-xl text-left border transition-all text-xs font-medium cursor-pointer ${
                  storageCondition === 'unknown'
                    ? 'bg-red-600 text-white font-bold border-red-700 shadow-sm'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                <span className="block font-bold">⚠ Unbekannte Lagerhistorie</span>
                <span className="text-[10px] opacity-90">Flohmarktfund, Dachboden, Raumtemperatur oder unklar</span>
              </button>
            </div>
          </div>

          {/* Ergebnis-Panel */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className={`text-xs px-3 py-1.5 rounded-full border ${evaluation.badgeColor}`}>
                {evaluation.stage} • {evaluation.badge}
              </span>
            </div>

            {/* Warnmeldung bei unbekannter Lagerhistorie */}
            {evaluation.isUnknownStorage ? (
              <div className="p-4 rounded-2xl bg-red-50 border border-red-200 text-red-950 text-xs sm:text-sm space-y-3">
                <div className="flex items-start gap-2.5">
                  <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5 shrink-0" />
                  <div>
                    <strong className="block text-sm font-bold text-red-900 mb-1">
                      Wichtiger Sicherheitshinweis: Keine Verzehrempfehlung
                    </strong>
                    <p className="leading-relaxed">
                      Ohne verlässliche Kühllagerung kann keine Aussage über mikrobiologische Unbedenklichkeit oder sensorische Speisequalität getroffen werden.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-3.5 rounded-xl border border-red-200 space-y-2 text-xs text-slate-700">
                  <p className="font-bold text-slate-900">BfR-Sicherheits-Checkliste vor jedem Verzehr:</p>
                  <ul className="list-disc pl-4 space-y-1">
                    <li><strong>Bombagen-Ausschluss:</strong> Ist die Dose aufgewölbt (Deckel/Boden)? Sofort ungeöffnet entsorgen – niemals kosten!</li>
                    <li><strong>Falz-Prüfung:</strong> Dellen an Falzkanten, Schweißnähten oder Rostbefall bedeuten Dichtigkeitsverlust.</li>
                    <li><strong>Geruchs- &amp; Sichtprüfung:</strong> Nach dem Öffnen muss der Inhalt frisch nach Meer und Öl riechen. Bei stechendem, metallischem oder fauligem Geruch sofort verwerfen.</li>
                  </ul>
                </div>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="flex items-center gap-2 font-bold text-slate-900 mb-1">
                      <Sparkles className="w-4 h-4 text-amber-600" />
                      <span>Textur &amp; Grätenstruktur</span>
                    </div>
                    <p className="text-slate-600 leading-relaxed text-xs sm:text-sm">{evaluation.texture}</p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="flex items-center gap-2 font-bold text-slate-900 mb-1">
                      <Wine className="w-4 h-4 text-amber-600" />
                      <span>Kulinarisches Servieren</span>
                    </div>
                    <p className="text-slate-600 leading-relaxed text-xs sm:text-sm">{evaluation.pairing}</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs sm:text-sm text-slate-800 flex items-start gap-3">
                  <RotateCw className="w-4 h-4 text-amber-700 mt-0.5 shrink-0" />
                  <div>
                    <strong className="block text-slate-900 font-bold mb-0.5">Lagerungs- &amp; Wenderhythmus</strong>
                    <span className="text-xs sm:text-sm text-slate-700">{evaluation.turningAdvice}</span>
                  </div>
                </div>
              </>
            )}

            <div className="p-3 bg-slate-100 rounded-xl border border-slate-200 text-[11px] text-slate-600 flex items-start gap-2">
              <Info className="w-3.5 h-3.5 text-slate-500 mt-0.5 shrink-0" />
              <span>
                <strong>Haftungsausschluss:</strong> Dieser Rechner dient der unverbindlichen kulinarischen Orientierung. Konserven unterliegen den rechtlichen Vorgaben und Kennzeichnungen des Herstellers. Es werden keine Qualitäts-, Wert- oder Sicherheitsgarantien abgeleitet.
              </span>
            </div>

          </div>
        </div>
      </div>

      {/* Footer Branding */}
      <div className="max-w-2xl mx-auto w-full mt-4 pt-3 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-500">
        <div className="flex items-center gap-1.5 font-medium">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span>Warenkunde &amp; Sicherheitsstandards nach BfR-Kriterien</span>
        </div>
        <div className="flex items-center gap-1">
          <span>Bereitgestellt von</span>
          <a
            href="https://www.jahrgangssardinen.de"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-800 font-bold hover:underline inline-flex items-center gap-0.5"
          >
            jahrgangssardinen.de
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
}
