import React, { useState, useMemo } from 'react';
import { Clock, Sparkles, Award, ShieldCheck, ExternalLink, Wine, RotateCw } from 'lucide-react';

export default function RechnerEmbed() {
  const [vintageYear, setVintageYear] = useState(2019);

  const currentYear = 2026;
  const ageYears = currentYear - vintageYear;

  const evaluation = useMemo(() => {
    if (ageYears <= 3) {
      return {
        stage: "Frische Reifephase",
        badge: "Fruchtig & Fest",
        badgeColor: "bg-blue-100 text-blue-900 border-blue-300",
        texture: "Kräftiges, festes Fischfleisch mit spürbarer Textur. Die Mittelgräte ist noch vorhanden, aber bereits weich.",
        oilStatus: "Natives Olivenöl extra ist noch klar abgegrenzt und besitzt frische Gras- und Fruchtnoten.",
        pairing: "Krosses Baguette, gesalzene bretonische Butter, spritziger Vinho Verde oder Riesling.",
        turningAdvice: "Alle 6 Monate um 180° wenden, um gleichmäßige Öldurchdringung zu sichern."
      };
    } else if (ageYears <= 7) {
      return {
        stage: "Harmonische Gourmet-Reife",
        badge: "Optimaler Trink- & Esszeitpunkt",
        badgeColor: "bg-emerald-100 text-emerald-950 border-emerald-300",
        texture: "Das Fleisch wird wunderbar zart und mürbe. Die Gräte beginnt sich molekular mit dem Fischfleisch zu verbinden.",
        oilStatus: "Fischöle und Olivenöl sind eine samtige Emulsion eingegangen – feiner Schmelz auf der Zunge.",
        pairing: "Geröstetes Landbrot, Fleur de Sel, Champagner Brut oder trockener Muscadet Sèvre et Maine sur lie.",
        turningAdvice: "Weiterhin halbjährlich wenden. Lagerung konstant bei 12–16 °C im dunklen Weinkeller."
      };
    } else if (ageYears <= 12) {
      return {
        stage: "Grand Cru Reife",
        badge: "Höchste Delikatesse",
        badgeColor: "bg-amber-100 text-amber-950 border-amber-300",
        texture: "Vollkommener Schmelz! Die Mittelgräte ist zu 100% aufgelöst und nicht mehr spürbar. Butterweicher Biss.",
        oilStatus: "Tiefgoldenes, nussig-aromatisches Öl voller natürlicher Omega-3-Fettsäuren und komplexem Umami.",
        pairing: "Pur aus der Dose genossen auf lauwarmem Brioche, begleitet von gereiftem Jahrgangs-Champagner.",
        turningAdvice: "Vorsichtig handhaben. Dosenblech auf Rostansatz prüfen. Trocken und kühl lagern."
      };
    } else {
      return {
        stage: "Historische Sammler-Rarität",
        badge: "Rarität & Wertanlage",
        badgeColor: "bg-purple-100 text-purple-950 border-purple-300",
        texture: "Cremig-feines Konfekt aus dem Meer. Maximale sensorische Konzentration für erfahrene Connaisseure.",
        oilStatus: "Vollständig durchgereiftes Elixier mit Noten von Trüffel, kandierter Zitrone und Meersalz.",
        pairing: "Ein Fest für besondere Anlässe. Weißer Burgunder Premier Cru oder trockener Sherry Fino.",
        turningAdvice: "Sammlerstück! Dose schonend lagern, Sammlerwert steigt pro Jahrgang oft überproportional."
      };
    }
  }, [ageYears]);

  return (
    <div className="min-h-screen bg-[#FAF9F6] p-3 sm:p-6 flex flex-col justify-between font-sans text-slate-900">
      <div className="max-w-3xl mx-auto w-full">
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-extrabold uppercase tracking-wider mb-2">
                <Clock className="w-3.5 h-3.5 text-amber-700" />
                <span>Interaktiver Vintage Reife-Rechner</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-950">
                Wann ist deine Jahrgangssardine perfekt?
              </h2>
            </div>
            <div className="text-right shrink-0">
              <div className="text-3xl sm:text-4xl font-black text-amber-600 font-mono">
                {ageYears} Jahre
              </div>
              <p className="text-xs text-slate-500">Reifezeit (Stand 2026)</p>
            </div>
          </div>

          {/* Slider */}
          <div className="my-6 bg-slate-50 p-5 rounded-2xl border border-slate-200">
            <div className="flex justify-between items-center text-xs font-bold text-slate-700 mb-2">
              <span>Fangjahr wählen:</span>
              <span className="text-amber-700 font-extrabold text-base font-mono">Jahrgang {vintageYear}</span>
            </div>
            <input
              type="range"
              min="2010"
              max="2025"
              value={vintageYear}
              onChange={(e) => setVintageYear(Number(e.target.value))}
              className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-600"
            />
            <div className="flex justify-between text-[11px] text-slate-400 mt-2 font-medium">
              <span>2010 (16 Jahre)</span>
              <span>2015 (11 Jahre)</span>
              <span>2020 (6 Jahre)</span>
              <span>2025 (1 Jahr)</span>
            </div>
          </div>

          {/* Result Box */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className={`text-xs font-bold px-3 py-1 rounded-full border ${evaluation.badgeColor}`}>
                {evaluation.stage} • {evaluation.badge}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-2 font-bold text-slate-900 mb-1">
                  <Sparkles className="w-4 h-4 text-amber-600" />
                  <span>Textur & Konsistenz</span>
                </div>
                <p className="text-slate-600 leading-relaxed">{evaluation.texture}</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-2 font-bold text-slate-900 mb-1">
                  <Wine className="w-4 h-4 text-amber-600" />
                  <span>Kulinarisches Pairing</span>
                </div>
                <p className="text-slate-600 leading-relaxed">{evaluation.pairing}</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs sm:text-sm text-slate-800 flex items-start gap-3">
              <RotateCw className="w-4 h-4 text-amber-700 mt-0.5 shrink-0" />
              <div>
                <strong className="block text-slate-900 font-bold mb-0.5">Lager- & Wendeempfehlung</strong>
                <span>{evaluation.turningAdvice}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto w-full mt-4 pt-3 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500">
        <div className="flex items-center gap-1.5 font-medium">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Jahrgangssardinen Reifematrix nach bretonischer & portugiesischer Tradition • Stand 2026</span>
        </div>
        <div className="flex items-center gap-1">
          <span>Bereitgestellt von</span>
          <a
            href="https://jahrgangssardinen.de"
            target="_blank"
            rel="noopener"
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
