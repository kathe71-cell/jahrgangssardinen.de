import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { ChevronDown, HelpCircle, Clock, Gift, ShoppingCart, HeartHandshake, Thermometer, AlertTriangle } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

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
      answer: "Jahrgangssardinen (französisch: Sardines de Millésime) sind handverlesene Sommer-Sardinen (Sardina pilchardus) mit hohem natürlichem Fettgehalt (>12%). Sie werden fangfrisch gereinigt und unaufgetaut in kaltgepresstem Olivenöl extra eingelegt. Bei kühler, kontrollierter Lagerung reifen sie über mehrere Jahre nach und entwickeln eine butterzarte Textur und tiefe Umami-Aromen.",
      category: "Grundlagen"
    },
    {
      id: 'faq-2',
      icon: Thermometer,
      question: "Wie lagere ich meine Jahrgangssardinen richtig?",
      answer: "Optimal ist ein kühler, dunkler Ort bei konstanten 12–15 °C (z. B. Weinkeller oder kühler Vorratsraum). Wichtig: Wenden Sie die Dosen alle 6 Monate um 180 Grad, damit das Olivenöl den Fisch kontinuierlich von allen Seiten gleichmäßig benetzt.",
      category: "Lagerung"
    },
    {
      id: 'faq-3',
      icon: AlertTriangle,
      question: "Wann darf eine ältere Konserve keinesfalls verzehrt werden?",
      answer: "Gemäß den Empfehlungen des Bundesinstituts für Risikobewertung (BfR) dürfen aufgeblähte Dosen (Bombagen) oder Konserven mit beschädigten Doppelfalzen, Schweißnähten oder Rostansatz unter keinen Umständen verzehrt oder gekostet werden (Gefahr von Botulismus durch Clostridium botulinum). Nach dem Öffnen müssen Geruch und Farbe makellos sein; bei ranzigem, stechendem oder metallischem Geruch sofort entsorgen.",
      category: "Sicherheit"
    },
    {
      id: 'faq-4',
      icon: Gift,
      question: "Warum sind Jahrgangssardinen ein persönliches Geschenk?",
      answer: "Jahrgangssardinen verbinden traditionelle Manufakturkunst, Gourmet-Genuss und ansprechende Dosen-Illustrationen. Ein Jahrgang aus dem Geburtsjahr, Hochzeitsjahr oder Firmenjubiläum ist ein stilvolles, individuelles Präsent für Gourmets.",
      category: "Geschenke"
    },
    {
      id: 'faq-5',
      icon: ShoppingCart,
      question: "Wo kann ich traditionelle Jahrgangssardinen kaufen?",
      answer: "Auf jahrgangssardinen.de finden Sie transparente Partnerlinks zu etablierten Online-Händlern wie Amazon für renommierte Manufakturmarken wie Nuri, La Belle-Iloise und Conservas Ortiz sowie Tasting-Sortimente.",
      category: "Kauf"
    },
    {
      id: 'faq-6',
      icon: Clock,
      question: "Ab wann erreichen die Sardinen ihre optimale Reife?",
      answer: "Hersteller von Millésimés (wie La Belle-Iloise) und Gastronomen nennen als unverbindliche Orientierung oft 3 bis 5 Jahre, da sich das native Olivenöl und die marinen Fette harmonisch verbinden und das Fischfleisch mürbe wird. Es handelt sich hierbei um eine subjektive Geschmacksorientierung: Die Dosen sind ab Werk verzehrfertig und können je nach Vorliebe jung und kernig oder über mehrere Jahre gereift genossen werden.",
      category: "Reifung"
    },
    {
      id: 'faq-7',
      icon: HeartHandshake,
      question: "Haben Jahrgangssardinen einen Sammlerwert oder eine Wertgarantie?",
      answer: "Limitierte Künstlerdosen und spezielle Fangjahrgänge sind bei Liebhabern gesucht, da Jahresproduktionen rasch vergriffen sind. Es handelt sich jedoch um hochwertige Lebensmittel und keinesfalls um regulierte Finanzanlagen; ein privater Zweitmarkt unterliegt unvorhersehbaren Schwankungen und es gibt keinerlei Wertsteigerungsgarantie.",
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
            <span>Warenkunde-Ratgeber</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white mb-4 tracking-tight leading-tight">
            Häufig gestellte Fragen (FAQ)
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Antworten auf die wichtigsten Fragen rund um Auswahl, Lagerung, Haltbarkeit, Geschmack und Sammlerkultur edler Jahrgangssardinen.
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
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
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
                    <CollapsibleTrigger className="w-full p-6 text-left flex items-start justify-between space-x-4 cursor-pointer">
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

                    <CollapsibleContent className="px-6 pb-6 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
                      {item.answer}
                    </CollapsibleContent>
                  </Collapsible>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
