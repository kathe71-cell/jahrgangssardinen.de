import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Award,
  ShoppingCart,
  TrendingUp,
  Gift,
  Info,
  Sparkles,
  CheckCircle2,
  ChevronDown,
  Clock,
  HelpCircle
} from "lucide-react";
import VintageExplorer from "@/components/VintageExplorer";
import TastingPairingGuide from "@/components/TastingPairingGuide";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const AffiliateDisclaimer = () => (
  <div className="max-w-3xl mx-auto my-6 text-xs text-slate-500 bg-slate-100/90 border border-slate-200 p-3.5 rounded-xl flex items-start gap-2.5 shadow-sm">
    <Info className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
    <span className="leading-relaxed">
      <strong>Transparenzhinweis:</strong> Die mit einem Sternchen (*) gekennzeichneten Links sind sogenannte Affiliate-Links (Partnerlinks). Wenn Sie über einen solchen Link bestellen, erhalten wir eine kleine Provision vom Anbieter (z.B. Amazon). Für Sie bleibt der Kaufpreis exakt gleich.
    </span>
  </div>
);

export default function Home() {
  const [openFaq, setOpenFaq] = useState("faq-1");

  const faqs = [
    {
      id: "faq-1",
      question: "Was unterscheidet eine Jahrgangssardine von einer normalen Dosen-Sardine?",
      answer: "Für Jahrgangssardinen werden ausschließlich fangfrische, besonders fette Sommer-Sardinen (gefangen zwischen Juli und September) von Hand verarbeitet. Sie werden unaufgetaut gereinigt, in feinstem nativen Olivenöl extra eingelegt und reifen wie ein edler Wein über Jahre hinweg direkt in der Dose nach."
    },
    {
      id: "faq-2",
      question: "Wie lange kann man Jahrgangssardinen aufbewahren?",
      answer: "Dosen-Sardinen in hochwertigem Olivenöl verdorben nicht nach wenigen Jahren – sie verbessern sich! Unter optimalen Bedingungen (12–15°C) können Spitzen-Jahrgangssardinen 10 bis 20 Jahre gelagert werden. Mit der Zeit löst sich die Mittelgräte vollständig auf."
    },
    {
      id: "faq-3",
      question: "Warum sollte man die Dosen regelmäßig wenden?",
      answer: "Durch das Wenden der Dose (alle 6 Monate um 180 Grad) verteilt sich das Olivenöl gleichmäßig um das Fischfleisch. Dadurch wird verhindert, dass eine Seite austrocknet, während die andere Seite im Öl reift."
    },
    {
      id: "faq-4",
      question: "Welche Marken stellen die besten Vintage-Sardinen her?",
      answer: "Die unangefochtenen Pioniere sind Nuri (Pinhais & Cia aus Portugal, seit 1920), La Belle-Iloise (Bretagne, Frankreich, seit 1932) und Conservas Ortiz (Baskenland, Spanien, seit 1891). Alle drei stehen für 100% Handarbeit."
    },
    {
      id: "faq-5",
      question: "Eignen sich Jahrgangssardinen als Wertanlage oder Geschenk?",
      answer: "Ja! Seltene Jahrgänge in gut erhaltenen Dosen erzielen bei Sammlern und Gourmets oft erhebliche Wertsteigerungen (bis zu +400% nach 10 Jahren). Zudem sind sie dank ihres edlen Designs ein stilvolles Präsent für Feinschmecker."
    }
  ];

  return (
    <div className="bg-[#FAF9F6] text-slate-900 overflow-x-hidden">
      {/* FAQ Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map((faq) => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />

      {/* Hero Section */}
      <section className="relative bg-[#0B1322] text-white py-20 sm:py-28 lg:py-36 overflow-hidden">
        {/* Background Visual Accents */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-amber-500/10 via-blue-500/10 to-amber-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Top Badge */}
            <div className="inline-flex items-center space-x-2 bg-amber-500/10 text-amber-400 border border-amber-500/30 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-widest mb-6">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Gourmet Delikatesse & Sammlerstück</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-white leading-[1.1]">
              Jahrgangssardinen: <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500">
                Flüssiges Gold in der Dose
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-6 sm:mt-8 text-lg sm:text-2xl text-slate-300 max-w-3xl mx-auto font-sans font-light leading-relaxed">
              Wie edle Weine entwickeln echte Vintage-Sardinen mit jedem Jahr der Reifung eine cremigere Textur und tiefere Umami-Aromen. Entdecken Sie europäische Spitzen-Manufakturen.
            </p>

            {/* Trust Badges */}
            <div className="mt-8 flex flex-wrap justify-center items-center gap-3 sm:gap-6 text-xs sm:text-sm text-slate-300 font-medium">
              <div className="flex items-center space-x-2 bg-slate-900/80 px-3.5 py-1.5 rounded-lg border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span>100% Handverlesen</span>
              </div>
              <div className="flex items-center space-x-2 bg-slate-900/80 px-3.5 py-1.5 rounded-lg border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span>Natives Olivenöl Extra</span>
              </div>
              <div className="flex items-center space-x-2 bg-slate-900/80 px-3.5 py-1.5 rounded-lg border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span>Reifung bis zu 10+ Jahre</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold px-8 py-4 sm:py-6 rounded-2xl text-base sm:text-lg shadow-xl shadow-amber-500/25 transition-all duration-300 hover:scale-105"
              >
                <a href="https://amzn.to/3HKUksF" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-2">
                  <ShoppingCart className="w-5 h-5" />
                  <span>Vintage Sardinen entdecken*</span>
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-slate-700 bg-slate-900/60 hover:bg-slate-800 text-white font-medium px-8 py-4 sm:py-6 rounded-2xl text-base sm:text-lg transition-all"
              >
                <a href="#finder">
                  <span>Zum Interaktiven Finder</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Intro & Science of Maturation */}
      <section className="py-20 sm:py-28 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center space-x-2 text-amber-700 text-xs font-semibold uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-full border border-amber-200/60">
                <Award className="w-4 h-4 text-amber-600" />
                <span>Gourmet Wissen</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-serif font-bold text-slate-950 tracking-tight leading-tight">
                Warum werden Sardinen mit dem Alter immer besser?
              </h2>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                Der Unterschied zwischen einer gewöhnlichen Supermarkt-Sardine und einer echten <strong>Jahrgangssardine (Millésimée)</strong> liegt im Fettgehalt des Fisches und in der handwerklichen Veredelung.
              </p>

              <p className="text-slate-600 text-base leading-relaxed">
                Im Gegensatz zu Magerfisch enthalten Sommer-Sardinen reichlich wertvolle Omega-3-Fettsäuren. Wenn diese fangfrisch in feinstes natives Olivenöl eingelegt werden, beginnt ein magischer molekularer Prozess: Das Öl durchdringt das Fischfleisch und wandelt die Struktur von fest zu samtig-cremig.
              </p>

              <div className="pt-4 grid grid-cols-2 gap-4">
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                  <h4 className="font-serif font-bold text-slate-900 text-lg">Sommerfang</h4>
                  <p className="text-xs text-slate-500 mt-1">Nur Fische mit &gt; 12% Fettgehalt werden ausgewählt.</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                  <h4 className="font-serif font-bold text-slate-900 text-lg">Handgeschuppt</h4>
                  <p className="text-xs text-slate-500 mt-1">Traditionelle Handarbeit garantiert Makellosigkeit.</p>
                </div>
              </div>
            </div>

            {/* Timeline Visual Cards */}
            <div className="lg:col-span-6 bg-[#0B1322] text-white p-8 sm:p-10 rounded-3xl border border-slate-800 shadow-2xl relative">
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-amber-400 mb-6 flex items-center gap-2">
                <Clock className="w-6 h-6" />
                <span>Die 3 Phasen des Reifeprozesses</span>
              </h3>

              <div className="space-y-6 relative before:absolute before:left-4 before:top-3 before:bottom-3 before:w-0.5 before:bg-slate-800">
                {/* Phase 1 */}
                <div className="relative pl-10">
                  <div className="absolute left-2 top-1.5 w-4 h-4 bg-amber-400 rounded-full -translate-x-1/2 ring-4 ring-slate-900" />
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">Phase 1: 1 bis 3 Jahre</span>
                  <h4 className="text-lg font-serif font-semibold text-white">Frische & Fruchtiges Olivenöl</h4>
                  <p className="text-slate-400 text-xs sm:text-sm mt-1 leading-relaxed">
                    Das Fischfleisch nimmt die ersten Nuancen des Olivenöls auf. Die Textur wird zart, behält aber noch einen leichten, frischen Biss.
                  </p>
                </div>

                {/* Phase 2 */}
                <div className="relative pl-10">
                  <div className="absolute left-2 top-1.5 w-4 h-4 bg-amber-400 rounded-full -translate-x-1/2 ring-4 ring-slate-900" />
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">Phase 2: 3 bis 7 Jahre</span>
                  <h4 className="text-lg font-serif font-semibold text-white">Cremige Verschmelzung</h4>
                  <p className="text-slate-400 text-xs sm:text-sm mt-1 leading-relaxed">
                    Das Optimum für die meisten Gourmets. Das Öl hat das Fleisch vollständig durchdrungen. Die Mittelgräte wird butterweich und essbar.
                  </p>
                </div>

                {/* Phase 3 */}
                <div className="relative pl-10">
                  <div className="absolute left-2 top-1.5 w-4 h-4 bg-amber-400 rounded-full -translate-x-1/2 ring-4 ring-slate-900" />
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">Phase 3: 7 bis 12+ Jahre</span>
                  <h4 className="text-lg font-serif font-semibold text-white">Vintage Umami-Explosion</h4>
                  <p className="text-slate-400 text-xs sm:text-sm mt-1 leading-relaxed">
                    Seltene Delikatesse. Komplette Umwandlung in eine confit-artige Textur mit tiefen Noten von Nüssen, Butter und maritimem Bouquet.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Interactive Vintage Finder Section */}
      <section id="finder" className="py-20 sm:py-28 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AffiliateDisclaimer />
          <VintageExplorer />
        </div>
      </section>

      {/* Top Producers Section */}
      <section id="hersteller" className="py-20 sm:py-28 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-2 text-amber-700 text-xs font-semibold uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-full border border-amber-200/60 mb-3">
              <Award className="w-4 h-4 text-amber-600" />
              <span>Tradition & Manufaktur</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-slate-950 tracking-tight">
              Die Ikonen der Konserven-Kunst
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed">
              Drei Namen prägen die Welt der Jahrgangssardinen seit Generationen. Jede Manufaktur hat ihre eigene Geheimrezeptur und Tradition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Nuri */}
            <Card className="bg-[#FAF9F6] border-slate-200/80 hover:border-amber-400/60 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-lg group">
              <CardContent className="p-8 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl">🇵🇹</span>
                    <span className="text-xs font-bold text-amber-900 bg-amber-100 px-3 py-1 rounded-full">Seit 1920</span>
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-slate-950 group-hover:text-amber-700 transition-colors mb-2">
                    Nuri (Pinhais & Cia)
                  </h3>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">Matosinhos, Portugal</p>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    Portugals wohl bekannteste Manufaktur. Jede Sardine wird von Hand selektiert und in die ikonische gelbe Umhüllung gewickelt. Legendär für die Variante mit Piri-Piri Chilli.
                  </p>
                </div>

                <div>
                  <div className="border-t border-slate-200 pt-4 mb-6 text-xs text-slate-500 space-y-1">
                    <p><strong>Besonderheit:</strong> Handgefüllt mit echten Gewürzen</p>
                    <p><strong>Reifeempfehlung:</strong> Optimum nach 3-5 Jahren</p>
                  </div>

                  <Button asChild className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 rounded-xl shadow-md text-sm">
                    <a href="https://amzn.to/3HQskUt" target="_blank" rel="noopener noreferrer">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Nuri Angebote ansehen*
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* La Belle-Iloise */}
            <Card className="bg-[#FAF9F6] border-slate-200/80 hover:border-amber-400/60 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-lg group">
              <CardContent className="p-8 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl">🇫🇷</span>
                    <span className="text-xs font-bold text-indigo-900 bg-indigo-100 px-3 py-1 rounded-full">Seit 1932</span>
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-slate-950 group-hover:text-indigo-700 transition-colors mb-2">
                    La Belle-Iloise
                  </h3>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">Quiberon, Bretagne</p>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    Die Speerspitze der französischen Konserven-Gourmetküche. Bekannt für streng limitierte "Millésimés" Jahrgangsdosen mit künstlerischen Sammler-Illustrationen.
                  </p>
                </div>

                <div>
                  <div className="border-t border-slate-200 pt-4 mb-6 text-xs text-slate-500 space-y-1">
                    <p><strong>Besonderheit:</strong> Nummerierte Künstler-Dosen</p>
                    <p><strong>Reifeempfehlung:</strong> Bis 10+ Jahre lagerfähig</p>
                  </div>

                  <Button asChild className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 rounded-xl shadow-md text-sm">
                    <a href="https://amzn.to/4mrVMPz" target="_blank" rel="noopener noreferrer">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      La Belle-Iloise ansehen*
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Ortiz */}
            <Card className="bg-[#FAF9F6] border-slate-200/80 hover:border-amber-400/60 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-lg group">
              <CardContent className="p-8 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl">🇪🇸</span>
                    <span className="text-xs font-bold text-emerald-900 bg-emerald-100 px-3 py-1 rounded-full">Seit 1891</span>
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-slate-950 group-hover:text-emerald-700 transition-colors mb-2">
                    Conservas Ortiz
                  </h3>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">Baskenland, Spanien</p>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    Spanischer Traditionsbetrieb an der Kante des Golfe de Gascogne. Ortiz fängt Sardinen ausschließlich nach traditioneller Methode, um das Fleisch nicht zu beschädigen.
                  </p>
                </div>

                <div>
                  <div className="border-t border-slate-200 pt-4 mb-6 text-xs text-slate-500 space-y-1">
                    <p><strong>Besonderheit:</strong> Sardinas A La Antigua</p>
                    <p><strong>Reifeempfehlung:</strong> 3-7 Jahre im kühlen Keller</p>
                  </div>

                  <Button asChild className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 rounded-xl shadow-md text-sm">
                    <a href="https://amzn.to/4lL1OKj" target="_blank" rel="noopener noreferrer">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Ortiz Angebote ansehen*
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sommelier Tasting Guide Component */}
      <section className="py-20 sm:py-28 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TastingPairingGuide />
        </div>
      </section>

      {/* Collector Value & Investment */}
      <section className="py-20 sm:py-28 bg-[#0B1322] text-white border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center space-x-2 text-amber-400 text-xs font-semibold uppercase tracking-widest bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
                <TrendingUp className="w-4 h-4 text-amber-400" />
                <span>Sammlerwert & Wertanlage</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
                Warum vergraben Feinschmecker Sardinen im Keller?
              </h2>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                Jahrgangssardinen sind nicht nur ein kulinarischer Hochgenuss, sondern haben sich zu begehrten Sammlerobjekten entwickelt. Da die Jahresproduktionen limitierter Editionen rasch vergriffen sind, steigen die Preise mit zunehmendem Alter der Dosen steil an.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start space-x-3 bg-slate-900/80 p-4 rounded-2xl border border-slate-800">
                  <Award className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-white text-sm">Limitierte Kunst-Dosen</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Sondereditionen von La Belle-Iloise erzielen nach 10 Jahren oft das 3- bis 5-fache des Ausgabepreises.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 bg-slate-900/80 p-4 rounded-2xl border border-slate-800">
                  <Gift className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-white text-sm">Der magische 10-Jahres-Horizont</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Vollständige Umwandlung der Gräte in feinsten Schmelz macht 2012/2015er Jahrgänge zu gesuchten Kuriositäten.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Value Development Card */}
            <div className="lg:col-span-6 bg-slate-900/90 rounded-3xl p-8 border border-slate-800 shadow-2xl">
              <h3 className="text-xl font-serif font-bold text-amber-400 mb-6 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-amber-400" />
                <span>Historische Wertentwicklung (Beispiele)</span>
              </h3>

              <div className="space-y-4">
                <div className="p-4 bg-slate-950/80 rounded-2xl border border-emerald-500/30 flex justify-between items-center">
                  <div>
                    <h4 className="font-bold text-white text-sm">Nuri Vintage 2010</h4>
                    <p className="text-xs text-slate-400">Ausgabepreis ~4,50 €</p>
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-bold text-emerald-400">~ 65,00 €</span>
                    <p className="text-[10px] font-bold text-emerald-500">+ 1.340% Rendite</p>
                  </div>
                </div>

                <div className="p-4 bg-slate-950/80 rounded-2xl border border-indigo-500/30 flex justify-between items-center">
                  <div>
                    <h4 className="font-bold text-white text-sm">La Belle-Iloise Millésimé 2015</h4>
                    <p className="text-xs text-slate-400">Ausgabepreis ~6,90 €</p>
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-bold text-indigo-300">~ 48,00 €</span>
                    <p className="text-[10px] font-bold text-indigo-400">+ 595% Rendite</p>
                  </div>
                </div>

                <div className="p-4 bg-slate-950/80 rounded-2xl border border-amber-500/30 flex justify-between items-center">
                  <div>
                    <h4 className="font-bold text-white text-sm">Ortiz Gran Reserva 2008</h4>
                    <p className="text-xs text-slate-400">Ausgabepreis ~5,80 €</p>
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-bold text-amber-400">~ 75,00 €</span>
                    <p className="text-[10px] font-bold text-amber-500">+ 1.190% Rendite</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 text-center">
                <Button asChild size="lg" className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold py-3.5 rounded-xl shadow-lg">
                  <a href="https://amzn.to/3HKUksF" target="_blank" rel="noopener noreferrer">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Jetzt aktuelle Jahrgänge zum Einlagern sichern*
                  </a>
                </Button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Storage Protocol Rules */}
      <section className="py-20 sm:py-28 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-slate-950 tracking-tight">
              Die 7 goldenen Regeln der Lagerung
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed">
              Damit eine Jahrgangssardine ihr volles Potenzial entfaltet, müssen folgende Lagerbedingungen eingehalten werden:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { num: "01", title: "Konstante Kühle", text: "Optimal sind 12–15 °C (Weinkeller oder kühler Vorratsraum). Keinesfalls über 20 °C." },
              { num: "02", title: "Dunkelheit", text: "Lichtgeschützt aufbewahren. UV-Strahlung kann das hochwertige Olivenöl schädigen." },
              { num: "03", title: "Alle 6 Monate wenden", text: "Die Dosen regelmäßig um 180 Grad drehen, damit das Olivenöl den Fisch gleichmäßig umschmeichelt." },
              { num: "04", title: "Trockene Umgebung", text: "Achten Sie auf geringe Luftfeuchtigkeit, um Rostansatz an den Dosenfalzen zu vermeiden." },
              { num: "05", title: "Schonende Handhabung", text: "Stürze und Dellen vermeiden. Beschädigte Dosen sollten direkt verzehrt werden." },
              { num: "06", title: "Geduld bewahren", text: "Mindestens 3 Jahre ab Fangdatum reifen lassen, bevor die Dose für besondere Anlässe geöffnet wird." }
            ].map((rule, idx) => (
              <div key={idx} className="bg-[#FAF9F6] p-6 rounded-2xl border border-slate-200/80 hover:border-amber-400/60 transition-all shadow-sm">
                <span className="text-2xl font-serif font-bold text-amber-500">{rule.num}</span>
                <h3 className="text-lg font-bold font-serif text-slate-950 mt-2 mb-1">{rule.title}</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{rule.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-20 sm:py-28 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 text-amber-700 text-xs font-semibold uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-full border border-amber-200/60 mb-3">
              <HelpCircle className="w-4 h-4 text-amber-600" />
              <span>Häufige Fragen</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-slate-950 tracking-tight">
              Alles, was Sie über Vintage-Sardinen wissen müssen
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => {
              const isOpen = openFaq === faq.id;
              return (
                <Card key={faq.id} className="bg-white border-slate-200 overflow-hidden shadow-sm hover:border-amber-400/50 transition-all">
                  <Collapsible open={isOpen} onOpenChange={() => setOpenFaq(isOpen ? "" : faq.id)}>
                    <CollapsibleTrigger className="w-full p-6 text-left flex justify-between items-center space-x-4">
                      <span className="text-base sm:text-lg font-serif font-bold text-slate-900">
                        {faq.question}
                      </span>
                      <ChevronDown className={`w-5 h-5 text-amber-600 flex-shrink-0 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`} />
                    </CollapsibleTrigger>

                    <CollapsibleContent className="px-6 pb-6 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
                      {faq.answer}
                    </CollapsibleContent>
                  </Collapsible>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final Conversion Hero Banner */}
      <section className="bg-[#0B1322] text-white py-20 sm:py-28 relative overflow-hidden border-t border-slate-800">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-transparent to-blue-500/10 pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="w-16 h-16 bg-amber-500/20 text-amber-400 rounded-2xl border border-amber-500/30 flex items-center justify-center mx-auto mb-6 shadow-xl">
            <Sparkles className="w-8 h-8" />
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
            Bereit für ein außergewöhnliches Geschmackserlebnis?
          </h2>

          <p className="text-slate-300 text-base sm:text-xl max-w-2xl mx-auto mt-6 leading-relaxed">
            Wählen Sie noch heute Ihre Favoriten aus den besten europäischen Manufakturen und legen Sie den Grundstein für Ihre persönliche Vintage-Kollektion.
          </p>

          <div className="mt-10">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold px-10 py-5 rounded-2xl text-lg shadow-2xl shadow-amber-500/30 transition-all hover:scale-105"
            >
              <a href="https://amzn.to/3HKUksF" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3">
                <ShoppingCart className="w-6 h-6" />
                <span>Jetzt Premium-Sardinen kaufen*</span>
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
