import React from "react";
import { Utensils, Wine, Sparkles, AlertCircle, Award, CheckCircle2 } from "lucide-react";

export default function TastingPairingGuide() {
  const PAIRINGS = [
    {
      title: "Das ideale Brot",
      icon: Utensils,
      desc: "Dichtes, krustiges Sauerteigbrot oder frisches rustikales Baguette. Leicht getoastet, um das warme Olivenöl perfekt aufzusaugen.",
      badge: "Grundlage"
    },
    {
      title: "Die Butter-Komponente",
      icon: Award,
      desc: "Gesalzene französische Rohmilchbutter (z.B. Beurre de Baratte mit Sel de Guérande). Der Fettgehalt verstärkt die Umami-Noten der Sardine.",
      badge: "Geschmacksverstärker"
    },
    {
      title: "Die Wein-Begleitung",
      icon: Wine,
      desc: "Spritziger Vinho Verde für junge Sardinen (1-3 J.), mineralischer Albariño oder kühler Brut-Champagner für vielschichtige Vintage-Jahrgänge (5-10+ J.).",
      badge: "Sommelier-Tipp"
    },
    {
      title: "Die Säure-Nuance",
      icon: Sparkles,
      desc: "Einige Spritzer frischer Zitronensaft oder fein gehackte eingelegte Schalotten. Die Säure schlägt die Brücke zur Reichhaltigkeit des Fischöls.",
      badge: "Harmonie"
    }
  ];

  return (
    <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-xl relative overflow-hidden">
      <div className="max-w-3xl mb-10">
        <div className="inline-flex items-center space-x-2 text-amber-700 text-xs font-semibold uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-full border border-amber-200/60 mb-3">
          <Utensils className="w-3.5 h-3.5 text-amber-600" />
          <span>Das Gourmet Verkostungs-Ritual</span>
        </div>
        <h3 className="text-2xl sm:text-4xl font-serif font-bold text-slate-950 tracking-tight">
          Wie man Vintage-Sardinen wie ein Sommelier genießt
        </h3>
        <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
          Eine gereifte Jahrgangssardine ist eine Delikatesse höchster Güte. Mit den richtigen Begleitern verwandelt sich das Öffnen der Dose in ein unvergessliches kulinarisches Erlebnis.
        </p>
      </div>

      {/* Grid Pairings */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {PAIRINGS.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="bg-slate-50/80 rounded-2xl p-6 border border-slate-200/70 hover:border-amber-400/50 hover:bg-amber-50/20 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-slate-900 text-amber-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-semibold text-amber-800 bg-amber-100/80 px-2.5 py-0.5 rounded-full">
                  {item.badge}
                </span>
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2 font-serif group-hover:text-amber-700 transition-colors">
                {item.title}
              </h4>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>

      {/* Pro Tip Box */}
      <div className="bg-[#0A111E] text-slate-200 rounded-2xl p-6 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-start space-x-3">
          <CheckCircle2 className="w-6 h-6 text-amber-400 flex-shrink-0 mt-0.5" />
          <div>
            <h5 className="font-bold text-white text-sm sm:text-base font-serif">
              Golden-Rule: Das Olivenöl niemals entsorgen!
            </h5>
            <p className="text-xs text-slate-400 mt-1 max-w-xl">
              Das Öl in der Dose hat über Jahre die Aromen der Sardine aufgenommen. Nutzen Sie es zum Beträufeln des warmen Brotes oder für eine unvergleichliche Pasta-Sauce.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
