import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, HelpCircle, Clock, Gift, ShoppingCart, Star, Thermometer, Sparkles, Filter } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";

export default function FAQ() {
  const [openItems, setOpenItems] = useState(new Set(['faq-1']));
  const [activeCategory, setActiveCategory] = useState("Alle");

  const toggleItem = (itemId) => {
    const newOpenItems = new Set(openItems);
    if (openItems.has(itemId)) {
      newOpenItems.delete(itemId);
    } else {
      newOpenItems.add(itemId);
    }
    setOpenItems(newOpenItems);
  };

  const faqItems = [
    {
      id: 'faq-1',
      icon: HelpCircle,
      question: "Was genau sind Jahrgangssardinen?",
      answer: "Jahrgangssardinen (französisch: Sardines de Millésime) sind speziell ausgewählte, fangfrische Sommer-Sardinen mit hohem Fettgehalt (>12%). Sie werden traditionell in kaltgepresstes Olivenöl extra eingelegt. Ähnlich wie ein Spitzenwein reifen sie über 3 bis 10+ Jahre in der Dose nach und entwickeln dabei eine butterweiche Textur und komplexe Aromen.",
      category: "Grundlagen"
    },
    {
      id: 'faq-2',
      icon: Thermometer,
      question: "Wie lagere ich meine Jahrgangssardinen richtig?",
      answer: "Optimal ist ein kühler, dunkler Ort bei konstanten 12-15°C (z.B. Weinkeller oder Speisekammer). Wichtig: Wenden Sie die Dosen alle 6 Monate um 180 Grad, damit das Olivenöl den Fisch kontinuierlich von allen Seiten umschmeichelt.",
      category: "Lagerung"
    },
    {
      id: 'faq-3',
      icon: Gift,
      question: "Warum sind Jahrgangssardinen ein perfektes Geschenk?",
      answer: "Jahrgangssardinen vereinen Gourmet-Genuss, historische Handwerkskunst und ästhetische Dosen-Illustrationen. Ein Jahrgang aus dem Geburtsjahr, Hochzeitstag oder Jubiläum ist ein persönliches und stilvolles Geschenk für Feinschmecker.",
      category: "Geschenke"
    },
    {
      id: 'faq-4',
      icon: ShoppingCart,
      question: "Wo kann ich original Jahrgangssardinen kaufen?",
      answer: "Auf jahrgangssardinen.de finden Sie direkte Partnerlinks zu geprüften Anbietern wie Amazon und spezialisierten Gourmet-Händlern für die Marken Nuri, La Belle-Iloise und Conservas Ortiz.",
      category: "Kauf"
    },
    {
      id: 'faq-5',
      icon: Clock,
      question: "Ab wann erreichen die Sardinen ihre optimale Reife?",
      answer: "Nach 3 bis 5 Jahren ist die Mittelgräte so weich geworden, dass sie beim Verzehr schmilzt. Ab 7 bis 10 Jahren entsteht die höchste Geschmacksdichte mit nussig-butterigen Noten.",
      category: "Reifung"
    },
    {
      id: 'faq-6',
      icon: Star,
      question: "Lohnt sich die Anschaffung als Wertanlage?",
      answer: "Limitierte Jahrgänge in einwandfreiem Zustand steigen im Sammlerwert häufig um +300% bis +500% über einen Zeitraum von 10 Jahren, da sie nicht nachproduziert werden können.",
      category: "Sammlerwert"
    }
  ];

  const categories = ["Alle", ...new Set(faqItems.map(item => item.category))];

  const filteredItems = activeCategory === "Alle" 
    ? faqItems 
    : faqItems.filter(item => item.category === activeCategory);

  return (
    <div className="bg-[#FAF9F6] text-slate-900 min-h-screen">
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqItems.map((item) => ({
              "@type": "Question",
              "name": item.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
              }
            }))
          })
        }}
      />

      {/* Header */}
      <section className="bg-[#0B1322] text-white py-16 sm:py-24 border-b border-slate-800 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center space-x-2 bg-amber-500/10 text-amber-400 border border-amber-500/30 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-widest mb-4">
            <HelpCircle className="w-4 h-4 text-amber-400" />
            <span>Experten-Ratgeber</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white mb-4 tracking-tight leading-tight">
            Häufig gestellte Fragen (FAQ)
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Antworten auf die wichtigsten Fragen rund um Auswahl, Lagerung, Geschmack und Wertentwicklung edler Vintage-Sardinen.
          </p>
        </div>
      </section>

      {/* Category Filter & FAQ List */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeCategory === cat
                    ? "bg-slate-900 text-amber-400 shadow-md scale-105"
                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Accordions */}
          <div className="space-y-4">
            {filteredItems.map((item) => {
              const isOpen = openItems.has(item.id);
              const Icon = item.icon;
              return (
                <Card key={item.id} className="bg-white border-slate-200/80 shadow-sm overflow-hidden hover:border-amber-400/50 transition-all">
                  <Collapsible open={isOpen} onOpenChange={() => toggleItem(item.id)}>
                    <CollapsibleTrigger className="w-full p-6 text-left flex items-start justify-between space-x-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center flex-shrink-0 mt-0.5 border border-amber-200/60">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-xs font-bold text-amber-800 uppercase tracking-widest block mb-1">
                            {item.category}
                          </span>
                          <h3 className="text-base sm:text-lg font-serif font-bold text-slate-900">
                            {item.question}
                          </h3>
                        </div>
                      </div>

                      <ChevronDown className={`w-5 h-5 text-amber-600 flex-shrink-0 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`} />
                    </CollapsibleTrigger>

                    <CollapsibleContent className="px-6 pb-6 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4 pl-17">
                      {item.answer}
                    </CollapsibleContent>
                  </Collapsible>
                </Card>
              );
            })}
          </div>

          {/* Bottom Call to Action */}
          <div className="mt-16 bg-[#0B1322] text-white p-8 rounded-3xl text-center border border-slate-800 shadow-xl">
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mb-2">
              Haben Sie noch offene Fragen?
            </h3>
            <p className="text-slate-300 text-sm mb-6 max-w-lg mx-auto">
              Entdecken Sie jetzt unsere kuratierte Auswahl der besten Jahrgangssardinen Europas.
            </p>
            <Button asChild className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-6 py-3 rounded-xl">
              <a href="https://amzn.to/3HKUksF" target="_blank" rel="noopener noreferrer">
                <ShoppingCart className="w-4 h-4 mr-2" />
                Jahrgangssardinen durchsuchen*
              </a>
            </Button>
          </div>

        </div>
      </section>
    </div>
  );
}
