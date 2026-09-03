import React, { useState } from "react";
import { ShoppingCart, Star, Sparkles, Filter, Award, ShieldCheck, Flame, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const SARDINE_PRODUCTS = [
  {
    id: "nuri-extra-virgin",
    brand: "Nuri",
    name: "Nuri Vintage Sardinen in Olivenöl",
    origin: "Matosinhos, Portugal",
    flag: "🇵🇹",
    yearGroup: "3-7",
    flavor: "klassik",
    rating: 4.9,
    reviews: 1420,
    priceRange: "4,90 € – 6,50 €",
    badge: "Bestseller Kult-Sardine",
    badgeColor: "bg-amber-500 text-slate-950 font-semibold",
    tastingNotes: ["Butterweich", "Mildes Olivenöl", "Feines Meersalz"],
    description: "Handverlesene Atlantik-Sardinen nach traditionellem Rezept von 1920. Perfekt ausbalanciert in nativem Olivenöl extra.",
    link: "https://amzn.to/3HQskUt",
    imageAlt: "Nuri Sardinen in Olivenöl Dose"
  },
  {
    id: "nuri-pikant",
    brand: "Nuri",
    name: "Nuri Pikante Jahrgangssardinen mit Piri-Piri",
    origin: "Matosinhos, Portugal",
    flag: "🇵🇹",
    yearGroup: "3-7",
    flavor: "pikant",
    rating: 4.95,
    reviews: 2150,
    priceRange: "5,20 € – 7,10 €",
    badge: "Sammler-Liebling",
    badgeColor: "bg-red-600 text-white font-semibold",
    tastingNotes: ["Angenehme Schärfe", "Nelke & Gurke", "Würziges Aroma"],
    description: "Der Legenden-Klassiker mit einer ganzen Piri-Piri Schote, Piment, Nelke und Karotte in der Dose eingereift.",
    link: "https://amzn.to/3HQskUt",
    imageAlt: "Nuri Pikante Sardinen Dose"
  },
  {
    id: "labelle-vintage",
    brand: "La Belle-Iloise",
    name: "La Belle-Iloise Millésimée Vintage Edition",
    origin: "Quiberon, Frankreich",
    flag: "🇫🇷",
    yearGroup: "7-12",
    flavor: "klassik",
    rating: 4.98,
    reviews: 890,
    priceRange: "8,50 € – 12,00 €",
    badge: "Haute Gastronomie",
    badgeColor: "bg-indigo-900 text-amber-300 font-semibold border border-amber-400/30",
    tastingNotes: ["Seidiges Fischfleisch", "Nussiger Abgang", "Tiefe Reife"],
    description: "Bretonische Spitzen-Handarbeit in nummerierten Jahrgangsdosen. Nach 5–10 Jahren Lagerung schmilzt die Gräte vollständig dahin.",
    link: "https://amzn.to/4mrVMPz",
    imageAlt: "La Belle-Iloise Vintage Sardinen"
  },
  {
    id: "ortiz-gran-reserva",
    brand: "Ortiz",
    name: "Conservas Ortiz Sardinas A La Antigua",
    origin: "Baskenland, Spanien",
    flag: "🇪🇸",
    yearGroup: "3-7",
    flavor: "klassik",
    rating: 4.88,
    reviews: 1780,
    priceRange: "6,90 € – 9,50 €",
    badge: "Baskische Tradition",
    badgeColor: "bg-emerald-700 text-white font-semibold",
    tastingNotes: ["Frisch gefangen", "Feine Struktur", "Reines Olivenöl"],
    description: "Traditionell fangfrisch verarbeitet und per Hand eingelegt. Legendäre Konsistenz und eleganter maritimer Geschmack.",
    link: "https://amzn.to/4lL1OKj",
    imageAlt: "Ortiz Vintage Sardinen"
  },
  {
    id: "pinhais-limited",
    brand: "Pinhais",
    name: "Pinhais Artisanal Vintage Selection",
    origin: "Portugal",
    flag: "🇵🇹",
    yearGroup: "1-3",
    flavor: "zitrone",
    rating: 4.92,
    reviews: 640,
    priceRange: "7,50 € – 10,50 €",
    badge: "Handgemachte Rarität",
    badgeColor: "bg-amber-700 text-amber-100 font-semibold",
    tastingNotes: ["Frische Zitrone", "Maritime Frische", "Samtiges Öl"],
    description: "Gepackt in der wohl berühmtesten Manufaktur Portugals. Jede Dose wird manuell in Seidenpapier gewickelt.",
    link: "https://amzn.to/3HKUksF",
    imageAlt: "Pinhais Sardinen Zitrone"
  },
  {
    id: "nuri-box-set",
    brand: "Nuri & Co",
    name: "Gourmet Vintage Sardinen Sammler-Tasting-Box",
    origin: "Portugal & Frankreich",
    flag: "🇪🇺",
    yearGroup: "7-12",
    flavor: "box",
    rating: 4.97,
    reviews: 410,
    priceRange: "24,90 € – 39,90 €",
    badge: "Perfektes Geschenk",
    badgeColor: "bg-slate-900 text-amber-400 font-semibold border border-amber-500/40",
    tastingNotes: ["Multi-Jahrgang", "Ideal zum Lagern", "Geschenkbox"],
    description: "Exklusives Probierset für Jahrgangssardinen-Liebhaber und Sammler. Perfekt für Tasting-Abende mit Wein & Brot.",
    link: "https://amzn.to/3HKUksF",
    imageAlt: "Jahrgangssardinen Geschenk-Box Set"
  }
];

export default function VintageExplorer() {
  const [selectedAge, setSelectedAge] = useState("all");
  const [selectedFlavor, setSelectedFlavor] = useState("all");

  const filteredProducts = SARDINE_PRODUCTS.filter((product) => {
    const ageMatch = selectedAge === "all" || product.yearGroup === selectedAge;
    const flavorMatch = selectedFlavor === "all" || product.flavor === selectedFlavor;
    return ageMatch && flavorMatch;
  });

  return (
    <div className="bg-[#0B1322] text-slate-100 rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-2xl relative overflow-hidden">
      {/* Visual Accent Lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-800">
          <div>
            <div className="inline-flex items-center space-x-2 text-amber-400 text-xs sm:text-sm font-semibold uppercase tracking-widest bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20 mb-3">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Interaktiver Jahrgangs- & Geschmacks-Finder</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-serif font-bold text-white tracking-tight">
              Finde deine perfekte Vintage-Sardine
            </h3>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
              Wähle deinen bevorzugten Reifegrad oder Geschmacksstil für Empfehlungen direkt aus den besten Manufakturen Europas.
            </p>
          </div>

          <div className="flex items-center space-x-2 text-xs text-slate-400 bg-slate-900/80 px-4 py-2.5 rounded-xl border border-slate-800">
            <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <span>Verifizierte Originalware & Direkt-Verlinkung*</span>
          </div>
        </div>

        {/* Filters */}
        <div className="py-8 grid grid-cols-1 md:grid-cols-2 gap-6 border-b border-slate-800/80">
          {/* Reifegrad Filter */}
          <div>
            <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-3 flex items-center gap-1.5">
              <Filter className="w-3.5 h-3.5 text-amber-400" />
              <span>Nach Reifezeit filtern:</span>
            </label>
            <div className="flex flex-wrap gap-2">
              {[
                { key: "all", label: "Alle Reifegrade" },
                { key: "1-3", label: "1–3 Jahre (Frisch & Knackig)" },
                { key: "3-7", label: "3–7 Jahre (Gourmet Optimum)" },
                { key: "7-12", label: "7–12+ Jahre (Vintage Rarität)" }
              ].map((tier) => (
                <button
                  key={tier.key}
                  onClick={() => setSelectedAge(tier.key)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-medium transition-all duration-200 ${
                    selectedAge === tier.key
                      ? "bg-amber-500 text-slate-950 font-bold shadow-lg shadow-amber-500/20 scale-[1.02]"
                      : "bg-slate-900/90 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800"
                  }`}
                >
                  {tier.label}
                </button>
              ))}
            </div>
          </div>

          {/* Geschmack Filter */}
          <div>
            <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-3 flex items-center gap-1.5">
              <Flame className="w-3.5 h-3.5 text-amber-400" />
              <span>Nach Geschmacksstil filtern:</span>
            </label>
            <div className="flex flex-wrap gap-2">
              {[
                { key: "all", label: "Alle Stile" },
                { key: "klassik", label: "Pure Olivenöl Klassik" },
                { key: "pikant", label: "Pikant & Chilli" },
                { key: "zitrone", label: "Zitrone & Meersalz" },
                { key: "box", label: "Tasting Sets" }
              ].map((style) => (
                <button
                  key={style.key}
                  onClick={() => setSelectedFlavor(style.key)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-medium transition-all duration-200 ${
                    selectedFlavor === style.key
                      ? "bg-amber-500 text-slate-950 font-bold shadow-lg shadow-amber-500/20 scale-[1.02]"
                      : "bg-slate-900/90 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800"
                  }`}
                >
                  {style.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="pt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.length === 0 ? (
            <div className="col-span-full py-12 text-center bg-slate-900/50 rounded-2xl border border-slate-800">
              <p className="text-slate-400 font-medium">Keine exakte Sardine für diese Filterkombination gefunden.</p>
              <Button
                variant="link"
                onClick={() => { setSelectedAge("all"); setSelectedFlavor("all"); }}
                className="text-amber-400 mt-2 hover:underline"
              >
                Filter zurücksetzen
              </Button>
            </div>
          ) : (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-slate-900/90 rounded-2xl border border-slate-800/90 p-6 flex flex-col justify-between hover:border-amber-500/40 transition-all duration-300 group hover:shadow-xl hover:shadow-amber-500/5"
              >
                <div>
                  {/* Top Header */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className={`text-[11px] px-2.5 py-1 rounded-full ${product.badgeColor}`}>
                      {product.badge}
                    </span>
                    <span className="text-sm font-medium text-slate-300 flex items-center gap-1">
                      <span>{product.flag}</span>
                      <span className="text-xs text-slate-400">{product.brand}</span>
                    </span>
                  </div>

                  {/* Product Title */}
                  <h4 className="text-lg font-serif font-bold text-white group-hover:text-amber-400 transition-colors leading-snug mb-2">
                    {product.name}
                  </h4>

                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {product.description}
                  </p>

                  {/* Tasting Notes */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {product.tastingNotes.map((note, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] bg-slate-800 text-slate-300 px-2.5 py-0.5 rounded-md border border-slate-700/60"
                      >
                        {note}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  {/* Rating & Price */}
                  <div className="flex items-center justify-between border-t border-slate-800/80 pt-4 mb-4">
                    <div className="flex items-center space-x-1 text-amber-400 text-xs font-semibold">
                      <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                      <span>{product.rating}</span>
                      <span className="text-slate-500 font-normal">({product.reviews})</span>
                    </div>

                    <span className="text-xs font-bold text-amber-300 bg-amber-400/10 px-2.5 py-1 rounded-lg border border-amber-400/20">
                      ~ {product.priceRange}
                    </span>
                  </div>

                  {/* Buy Button */}
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold py-2.5 rounded-xl shadow-lg shadow-amber-500/15 group-hover:shadow-amber-500/30 transition-all flex items-center justify-center text-sm"
                  >
                    <a
                      href={product.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      <span>Bei Amazon ansehen*</span>
                      <ChevronRight className="w-4 h-4 ml-1 opacity-70 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
