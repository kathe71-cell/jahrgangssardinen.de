import React, { useState } from "react";
import { ShoppingCart, Sparkles, Filter, ShieldCheck, Flame, ChevronRight, Scale, Info } from "lucide-react";
import { Button } from "@/components/ui/button";

const SARDINE_PRODUCTS = [
  {
    id: "nuri-extra-virgin",
    brand: "Nuri",
    producer: "Pinhais & Cia, Lda.",
    name: "Nuri Sardinen in reinem Olivenöl",
    origin: "Matosinhos, Portugal",
    flag: "🇵🇹",
    productType: "Traditionelle Manufakturware (zur Jahrgangs-Lagerung)",
    yearGroup: "3-7",
    flavor: "klassik",
    weight: "125 g (Abtropfgewicht: 90 g)",
    oil: "Reines Olivenöl, Meersalz",
    primarySource: "Produktspezifikation Pinhais & Cia",
    sourceLabel: "Produktspezifikation Pinhais & Cia",
    sourceUrl: "https://www.conservaspinhais.pt",
    priceRange: "Richtwert: ca. 4,90 € – 6,50 € (Stand 2026, Fachhandel)",
    badge: "Klassisch in Olivenöl",
    badgeColor: "bg-amber-100 text-amber-950 font-bold border border-amber-300",
    tastingNotes: ["Mürbes Fleisch", "Mildes Olivenöl", "Feine Salznote"],
    description: "Fangfrische Atlantik-Sardinen (Sardina pilchardus) nach traditionellem Manufakturverfahren von 1920. Beliebter Klassiker für die mehrjährige private Reifelagerung.",
    link: "https://amzn.to/3HQskUt",
    imageAlt: "Nuri Sardinen in Olivenöl Dose"
  },
  {
    id: "nuri-pikant",
    brand: "Nuri",
    producer: "Pinhais & Cia, Lda.",
    name: "Nuri Pikante Sardinen mit Piri-Piri & Gewürzen",
    origin: "Matosinhos, Portugal",
    flag: "🇵🇹",
    productType: "Traditionelle Manufakturware (zur Jahrgangs-Lagerung)",
    yearGroup: "3-7",
    flavor: "pikant",
    weight: "125 g (Abtropfgewicht: 90 g)",
    oil: "Olivenöl, Piri-Piri, Gurke, Karotte, Nelke, Lorbeer",
    primarySource: "Produktspezifikation Pinhais & Cia",
    sourceLabel: "Produktspezifikation Pinhais & Cia",
    sourceUrl: "https://www.conservaspinhais.pt",
    priceRange: "Richtwert: ca. 5,20 € – 7,10 € (Stand 2026, Fachhandel)",
    badge: "Pikant mit Piri-Piri",
    badgeColor: "bg-red-100 text-red-950 font-bold border border-red-300",
    tastingNotes: ["Würzige Chili-Note", "Aromatisches Nelkenöl", "Pikante Tiefe"],
    description: "Traditionelle Rezeptur mit einer ganzen Piri-Piri-Schote und Gewürzen, die während der kühlen Reifezeit ihre ätherischen Aromen an das Olivenöl abgeben.",
    link: "https://amzn.to/3HQskUt",
    imageAlt: "Nuri Pikante Sardinen Dose"
  },
  {
    id: "labelle-vintage",
    brand: "La Belle-Iloise",
    producer: "Conserverie La Belle-Iloise",
    name: "La Belle-Iloise Sardines Millésimées (Jahrgangsauslese)",
    origin: "Quiberon, Bretagne, Frankreich",
    flag: "🇫🇷",
    productType: "Offizielle Jahrgangsauslese (Millésime mit Fangjahr)",
    yearGroup: "7-12",
    flavor: "klassik",
    weight: "115 g (Abtropfgewicht: ca. 86 g)",
    oil: "Natives Olivenöl Extra",
    primarySource: "Katalog & Dokumentation Conserverie La Belle-Iloise",
    sourceLabel: "Katalog & Spezifikation Conserverie La Belle-Iloise",
    sourceUrl: "https://www.labelleiloise.fr",
    priceRange: "Richtwert: ca. 8,50 € – 12,50 € (Stand 2026, Fachhandel)",
    badge: "Offizieller Jahrgang (Millésime)",
    badgeColor: "bg-indigo-100 text-indigo-950 font-bold border border-indigo-300",
    tastingNotes: ["Seidiges Fleisch", "Nussige Nuancen", "Ausgeprägte Umami-Dichte"],
    description: "Ausschließlich aus handselektierten Sommerfängen der bretonischen Küste mit hohem Fettgehalt. Gedost in nummerierten Künstlerdosen mit expliziter Jahrgangsausweisung.",
    link: "https://amzn.to/4mrVMPz",
    imageAlt: "La Belle-Iloise Vintage Sardinen"
  },
  {
    id: "ortiz-gran-reserva",
    brand: "Ortiz",
    producer: "Conservas Ortiz S.A.",
    name: "Conservas Ortiz Sardinas A La Antigua",
    origin: "Baskenland, Spanien",
    flag: "🇪🇸",
    productType: "Traditionelle Manufakturware (zur Jahrgangs-Lagerung)",
    yearGroup: "3-7",
    flavor: "klassik",
    weight: "140 g bzw. 190 g Glas / 115 g Dose",
    oil: "Natives Olivenöl Extra, Salz",
    primarySource: "Sortimentsdokumentation Conservas Ortiz S.A.",
    sourceLabel: "Sortimentsdokumentation Conservas Ortiz S.A.",
    sourceUrl: "https://www.conservasortiz.com",
    priceRange: "Richtwert: ca. 6,90 € – 9,80 € (Stand 2026, Fachhandel)",
    badge: "Traditionelle Handeinlegung",
    badgeColor: "bg-emerald-100 text-emerald-950 font-bold border border-emerald-300",
    tastingNotes: ["Feine Faserung", "Klares Olivenöl", "Elegante Meeresfrische"],
    description: "Handwerklich schonend verarbeitet nach der Methode 'A La Antigua'. Das feste Fleisch gewinnt bei kontrollierter Kellerlagerung spürbar an Mürbheit.",
    link: "https://amzn.to/4lL1OKj",
    imageAlt: "Ortiz Vintage Sardinen"
  },
  {
    id: "pinhais-limited",
    brand: "Pinhais",
    producer: "Pinhais & Cia, Lda.",
    name: "Pinhais Sardinen in Olivenöl mit Zitrone",
    origin: "Matosinhos, Portugal",
    flag: "🇵🇹",
    productType: "Traditionelle Manufakturware (zur Jahrgangs-Lagerung)",
    yearGroup: "1-3",
    flavor: "zitrone",
    weight: "125 g (Abtropfgewicht: 90 g)",
    oil: "Olivenöl, frische Zitrone, Salz",
    primarySource: "Produktspezifikation Pinhais & Cia",
    sourceLabel: "Produktspezifikation Pinhais & Cia",
    sourceUrl: "https://www.conservaspinhais.pt",
    priceRange: "Richtwert: ca. 7,00 € – 9,50 € (Stand 2026, Fachhandel)",
    badge: "Zitrone & Meersalz",
    badgeColor: "bg-amber-100 text-amber-950 font-bold border border-amber-300",
    tastingNotes: ["Fruchtige Zitrusnote", "Frischer Biss", "Feines Olivenöl"],
    description: "Eingelegt mit echter Zitronenscheibe. Das Zusammenspiel aus feiner Fruchtsäure und marinem Fett eignet sich besonders für die ersten 1 bis 3 Lagerjahre.",
    link: "https://amzn.to/3HKUksF",
    imageAlt: "Pinhais Sardinen Zitrone"
  },
  {
    id: "nuri-box-set",
    brand: "Sortiment",
    producer: "Verschiedene Manufakturen",
    name: "Gourmet Sardinen Tasting- & Probierset",
    origin: "Portugal, Spanien, Frankreich",
    flag: "🇪🇺",
    productType: "Suchidee / Sortimentsempfehlung",
    yearGroup: "7-12",
    flavor: "box",
    weight: "Mehrteiliges Set (je 115–125 g pro Dose)",
    oil: "Verschiedene Olivenöl-Rezepturen",
    primarySource: "Zusammenstellung des Fachhandels",
    sourceLabel: "Sortimentsübersicht der Manufakturen",
    sourceUrl: "https://www.conservaspinhais.pt",
    priceRange: "Richtwert: ca. 24,00 € – 39,00 € (Stand 2026, je nach Set-Umfang)",
    badge: "Suchidee / Tasting-Sortiment",
    badgeColor: "bg-slate-200 text-slate-900 font-bold border border-slate-300",
    tastingNotes: ["Mehrere Manufakturen", "Vergleichsverkostung", "Geschenkidee"],
    description: "Zusammenstellung verschiedener europäischer Manufakturen. Ideal für vergleichende Jahrgangs-Tastings oder als persönliches Gourmet-Geschenk.",
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
              <span>Warenkunde &amp; Sorten-Explorer</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-serif font-bold text-white tracking-tight">
              Manufakturen &amp; Jahrgangssorten im Überblick
            </h3>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl leading-relaxed">
              Filtern Sie nach Reifehorizont und Geschmacksstil. Angaben basieren auf den Produktdaten der Hersteller.
            </p>
          </div>

          <div className="flex items-center space-x-2 text-xs text-slate-400 bg-slate-900/80 px-4 py-2.5 rounded-xl border border-slate-800">
            <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <span>Transparente Produkt- &amp; Bezugsquellenübersicht*</span>
          </div>
        </div>

        {/* Filters */}
        <div className="py-8 grid grid-cols-1 md:grid-cols-2 gap-6 border-b border-slate-800/80">
          {/* Reifegrad Filter */}
          <div>
            <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-3 flex items-center gap-1.5">
              <Filter className="w-3.5 h-3.5 text-amber-400" />
              <span>Nach Reifezeitraum filtern (Unverbindliche Orientierung):</span>
            </label>
            <div className="flex flex-wrap gap-2">
              {[
                { key: "all", label: "Alle Reifezeiträume" },
                { key: "1-3", label: "1–3 Jahre (Frische Textur)" },
                { key: "3-7", label: "3–7 Jahre (Kulinarische Orientierung)" },
                { key: "7-12", label: "7–12+ Jahre (Liebhaber-Horizont)" }
              ].map((tier) => (
                <button
                  key={tier.key}
                  onClick={() => setSelectedAge(tier.key)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-medium transition-all duration-200 cursor-pointer ${
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
                { key: "klassik", label: "Reines Olivenöl" },
                { key: "pikant", label: "Pikant & Chili" },
                { key: "zitrone", label: "Zitrone & Meersalz" },
                { key: "box", label: "Tasting Sets (Suchidee)" }
              ].map((style) => (
                <button
                  key={style.key}
                  onClick={() => setSelectedFlavor(style.key)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-medium transition-all duration-200 cursor-pointer ${
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
              <p className="text-slate-400 font-medium">Keine Produkte für diese Filterkombination vorhanden.</p>
              <Button
                variant="link"
                onClick={() => { setSelectedAge("all"); setSelectedFlavor("all"); }}
                className="text-amber-400 mt-2 hover:underline cursor-pointer"
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
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className={`text-[11px] px-2.5 py-1 rounded-full ${product.badgeColor}`}>
                      {product.badge}
                    </span>
                    <span className="text-sm font-medium text-slate-300 flex items-center gap-1">
                      <span>{product.flag}</span>
                      <span className="text-xs text-slate-400">{product.brand}</span>
                    </span>
                  </div>

                  {/* Product Title */}
                  <h4 className="text-lg font-serif font-bold text-white group-hover:text-amber-400 transition-colors leading-snug mb-1.5">
                    {product.name}
                  </h4>

                  {/* Product Metadata Box */}
                  <div className="text-[11px] text-slate-400 space-y-1 mb-3 bg-slate-950/60 p-2.5 rounded-xl border border-slate-800/70">
                    <p><strong className="text-slate-300">Hersteller:</strong> {product.producer}</p>
                    <p><strong className="text-slate-300">Art:</strong> {product.productType}</p>
                    <p className="flex items-center gap-1"><Scale className="w-3 h-3 text-amber-500" /> <span>{product.weight}</span></p>
                    <p className="text-[10px] text-slate-400">
                      <strong className="text-slate-300">Quelle:</strong>{" "}
                      <a
                        href={product.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-amber-400 hover:underline inline-flex items-center gap-0.5 font-medium"
                      >
                        {product.sourceLabel || product.primarySource} ↗
                      </a>
                    </p>
                  </div>

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
                  {/* Price budget assumption notice */}
                  <div className="border-t border-slate-800/80 pt-3.5 mb-4">
                    <div className="flex items-start gap-1.5 text-xs text-amber-300 bg-amber-400/10 p-2 rounded-lg border border-amber-400/20">
                      <Info className="w-3.5 h-3.5 text-amber-400 mt-0.5 shrink-0" />
                      <span className="text-[11px] leading-tight font-medium">{product.priceRange}</span>
                    </div>
                  </div>

                  {/* Buy Button */}
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold py-2.5 rounded-xl shadow-lg shadow-amber-500/15 group-hover:shadow-amber-500/30 transition-all flex items-center justify-center text-sm cursor-pointer"
                  >
                    <a
                      href={product.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      <span>Angebot bei Amazon ansehen*</span>
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
