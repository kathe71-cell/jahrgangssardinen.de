import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Award,
  ShoppingCart,
  Gift,
  Info,
  Sparkles,
  CheckCircle2,
  ChevronDown,
  Clock,
  HelpCircle,
  Code2,
  Copy,
  Check,
  ShieldCheck,
  AlertTriangle,
  HeartHandshake
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
  const [copiedEmbed, setCopiedEmbed] = useState(false);

  const copyEmbedCode = () => {
    const code = `<iframe id="sardinen-rechner-frame" src="https://www.jahrgangssardinen.de/rechner-embed" width="100%" height="680" style="border:none; border-radius:24px; box-shadow:0 4px 20px rgba(0,0,0,0.08);" title="Jahrgangssardinen Reife- und Lagerrechner"></iframe>\n<script>\n  window.addEventListener('message', function(e) {\n    var allowedOrigins = ['https://www.jahrgangssardinen.de', 'https://jahrgangssardinen.de'];\n    if (!allowedOrigins.includes(e.origin)) return;\n    var frame = document.getElementById('sardinen-rechner-frame');\n    if (!frame || e.source !== frame.contentWindow) return;\n    if (e.data && e.data.type === 'jahrgangssardinen-embed-resize' && typeof e.data.height === 'number') {\n      var h = Math.min(Math.max(e.data.height, 350), 2200);\n      frame.style.height = h + 'px';\n    }\n  });\n</script>\n<p style="font-size:12px; color:#64748b; text-align:center; margin-top:8px;">Bereitgestellt von <a href="https://www.jahrgangssardinen.de" target="_blank" rel="noopener" style="color:#d97706; text-decoration:underline;">jahrgangssardinen.de</a></p>`;
    navigator.clipboard.writeText(code);
    setCopiedEmbed(true);
    setTimeout(() => setCopiedEmbed(false), 2500);
  };

  const faqs = [
    {
      id: "faq-1",
      question: "Was unterscheidet eine Jahrgangssardine von einer Standard-Konserve?",
      answer: "Für echte Jahrgangssardinen (Sardines de Millésime) werden ausschließlich fangfrische, handverlesene Sommersardinen (Sardina pilchardus) mit hohem Fettgehalt (>12%) verarbeitet. Sie werden unaufgetaut gereinigt, traditionell in feinstem nativem Olivenöl extra eingedost und reifen bei kontrollierter kühler Lagerung wie ein edler Wein über Jahre hinweg in der Dose nach."
    },
    {
      id: "faq-2",
      question: "Wie lange kann man Jahrgangssardinen lagern und was bedeutet das MHD?",
      answer: "Konserven tragen gesetzlich ein Mindesthaltbarkeitsdatum (MHD) von meist 5 bis 10 Jahren ab Abfüllung. Bei lückenloser, kühler Lagerung (12–15 °C) behalten sie ihre Genusstauglichkeit oft deutlich länger. Durch das Olivenöl und den Garprozess wird das Fleisch mürber und die Mittelgräte butterweich (sie löst sich jedoch anatomisch nicht vollständig auf). Ohne verlässliche Kühllagerung gibt es keine Haltbarkeitsgarantie."
    },
    {
      id: "faq-3",
      question: "Warum sollten die Dosen regelmäßig gewendet werden?",
      answer: "Durch das Wenden der Dose (alle 6 Monate um 180 Grad) verteilt sich das Olivenöl gleichmäßig um das Fischfleisch. Dadurch wird verhindert, dass eine Seite austrocknet, während die andere Seite im Öl reift."
    },
    {
      id: "faq-4",
      question: "Welche Manufakturen sind für traditionelle Jahrgangs- und Lagersardinen bekannt?",
      answer: "Bekannte europäische Conserveries sind Conserverie La Belle-Iloise (Bretagne, offizielle Jahrgangsauslesen mit Künstlerdosen), Pinhais & Cia mit der Marke Nuri (Portugal, traditionelle Handfertigung) und Conservas Ortiz (Baskenland, Sardinas A La Antigua)."
    },
    {
      id: "faq-5",
      question: "Haben Jahrgangssardinen einen Sammlerwert oder eignen sie sich als Geschenk?",
      answer: "Limitierte Künstlerdosen und spezielle Fangjahrgänge sind beliebte Geschenke für Feinschmecker (z. B. zum Geburts- oder Jubiläumsjahr). Sie sind jedoch hochwertige Lebensmittel und keine garantierte Finanzanlage; ein privater Zweitmarkt unterliegt starken Schwankungen."
    },
    {
      id: "faq-6",
      question: "Wie erkenne ich, ob eine ältere Dose noch sicher verzehrt werden kann?",
      answer: "Anhand der BfR-Kriterien: Aufgeblähte Dosen (Bombagen) oder undichte Falze dürfen unter keinen Umständen geöffnet, verkostet oder verzehrt werden (Gefahr von Botulismus). Nach dem Öffnen müssen Geruch und Farbe einwandfrei sein; bei stechendem, metallischem oder ranzigem Geruch die Konserve sofort entsorgen."
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
              <span>Gourmet-Warenkunde &amp; Kulinarischer Ratgeber</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-white leading-[1.1]">
              Jahrgangssardinen: <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500">
                Kulinarisches Gold in der Dose
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-6 sm:mt-8 text-lg sm:text-2xl text-slate-300 max-w-3xl mx-auto font-sans font-light leading-relaxed">
              Wie edle Weine entwickeln Jahrgangssardinen bei sachgerechter Reifung in nativem Olivenöl extra eine mürbere Textur und tiefere Umami-Aromen. Entdecken Sie europäische Manufakturen und fundierte Lagerstandards.
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
                <span>Reifung nach Manufaktur-Tradition</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold px-8 py-4 sm:py-6 rounded-2xl text-base sm:text-lg shadow-xl shadow-amber-500/25 transition-all duration-300 hover:scale-105 cursor-pointer"
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
                className="w-full sm:w-auto border-slate-700 bg-slate-900/60 hover:bg-slate-800 text-white font-medium px-8 py-4 sm:py-6 rounded-2xl text-base sm:text-lg transition-all cursor-pointer"
              >
                <a href="#finder">
                  <span>Zum Interaktiven Finder</span>
                </a>
              </Button>
            </div>

            {/* Definition Box */}
            <div className="mt-10 text-left bg-slate-900/90 border-l-4 border-amber-400 p-5 rounded-r-2xl border border-slate-800 shadow-xl">
              <div className="flex items-center gap-2 mb-2 text-xs font-extrabold uppercase tracking-wider text-amber-300">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Definition &amp; Warenkunde: Sardines de Millésime</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                Eine <strong className="text-white font-bold">Jahrgangssardine</strong> (französisch <em className="font-semibold">Sardine millésimée</em>) ist eine handverlesene Sommer-Sardine (<em className="font-semibold">Sardina pilchardus</em>), die unaufgetaut und fangfrisch in feinstem nativem Olivenöl extra eingedost wird und über Jahre hinweg bei kontrollierten Kellerbedingungen nachreift. Durch die mehrjährige kühle Lagerung und regelmäßiges Wenden wird das Fleisch butterzart, die Mittelgräte mürbe und essbar und das Olivenöl verbindet sich mit den Fischölen zu einem komplexen Umami-Aroma.
              </p>
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
                <span>Gourmet-Wissen</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-serif font-bold text-slate-950 tracking-tight leading-tight">
                Wie entwickeln sich Jahrgangssardinen während der Lagerung?
              </h2>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                Der Unterschied zwischen einer gewöhnlichen Supermarkt-Sardine und einer echten <strong>Jahrgangssardine (Millésimée)</strong> liegt im Fettgehalt des Fisches und in der schonenden handwerklichen Veredelung.
              </p>

              <p className="text-slate-600 text-base leading-relaxed">
                Im Gegensatz zu Magerfisch enthalten Sommer-Sardinen reichlich wertvolle Omega-3-Fettsäuren. Wenn diese fangfrisch in feinstes natives Olivenöl eingelegt werden, setzt bei kühlen Temperaturen ein geschmacklicher Reifeprozess ein: Das Olivenöl umschließt das Gewebe, das Fleisch wird zarter und die Gräten werden weich und mürbe.
              </p>

              <div className="pt-4 grid grid-cols-2 gap-4">
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                  <h4 className="font-serif font-bold text-slate-900 text-lg">Sommerfang</h4>
                  <p className="text-xs text-slate-500 mt-1">Nur Fische mit hohem natürlichem Fettgehalt (&gt; 12%) werden ausgewählt.</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                  <h4 className="font-serif font-bold text-slate-900 text-lg">Handgeschuppt</h4>
                  <p className="text-xs text-slate-500 mt-1">Traditionelle Handarbeit schont die Unversehrtheit des Fischfleisches.</p>
                </div>
              </div>
            </div>

            {/* Timeline Visual Cards */}
            <div className="lg:col-span-6 bg-[#0B1322] text-white p-8 sm:p-10 rounded-3xl border border-slate-800 shadow-2xl relative">
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-amber-400 mb-2 flex items-center gap-2">
                <Clock className="w-6 h-6" />
                <span>Sensorische Reifestufen</span>
              </h3>
              <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                Unverbindliche kulinarische Orientierung nach Sommelier- und Herstellererfahrungen (z.&nbsp;B. La Belle-Iloise). Der optimale Genusszeitpunkt bleibt eine persönliche Geschmacksfrage.
              </p>

              <div className="space-y-6 relative before:absolute before:left-4 before:top-3 before:bottom-3 before:w-0.5 before:bg-slate-800">
                {/* Phase 1 */}
                <div className="relative pl-10">
                  <div className="absolute left-2 top-1.5 w-4 h-4 bg-amber-400 rounded-full -translate-x-1/2 ring-4 ring-slate-900" />
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">Orientierung 1 bis 3 Jahre</span>
                  <h4 className="text-lg font-serif font-semibold text-white">Frische Meeresnote &amp; fruchtiges Öl</h4>
                  <p className="text-slate-400 text-xs sm:text-sm mt-1 leading-relaxed">
                    Das feste Fischfleisch behält seinen kernigen Biss. Das native Olivenöl extra besitzt noch frische grasige Noten.
                  </p>
                </div>

                {/* Phase 2 */}
                <div className="relative pl-10">
                  <div className="absolute left-2 top-1.5 w-4 h-4 bg-amber-400 rounded-full -translate-x-1/2 ring-4 ring-slate-900" />
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">Orientierung 4 bis 7 Jahre</span>
                  <h4 className="text-lg font-serif font-semibold text-white">Harmonische Verschmelzung</h4>
                  <p className="text-slate-400 text-xs sm:text-sm mt-1 leading-relaxed">
                    Von vielen Manufakturen und Sommeliers als harmonischer Reifebereich beschrieben. Das Fleisch wird mürbe und zart; die Mittelgräte wird durch die Einwirkung der Hitzesterilisation und des Öls weich und mitessbar.
                  </p>
                </div>

                {/* Phase 3 */}
                <div className="relative pl-10">
                  <div className="absolute left-2 top-1.5 w-4 h-4 bg-amber-400 rounded-full -translate-x-1/2 ring-4 ring-slate-900" />
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">Orientierung 8 bis 12+ Jahre (Liebhaber-Horizont)</span>
                  <h4 className="text-lg font-serif font-semibold text-white">Tiefe Umami-Entfaltung</h4>
                  <p className="text-slate-400 text-xs sm:text-sm mt-1 leading-relaxed">
                    Confit-artige Textur mit Noten von gerösteten Nüssen und Meersalz. Setzt ausnahmslos unbeschädigte Dosenfalze und dauerhaft kühle, trockene Lagerung (12–15&nbsp;°C) voraus.
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
              <span>Tradition &amp; Manufaktur</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-slate-950 tracking-tight">
              Europäische Manufaktur-Tradition
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed">
              Traditionsbetriebe mit jahrzehntelanger Erfahrung prägen die handwerkliche Herstellung edler Dosen-Sardinen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Nuri */}
            <Card className="bg-[#FAF9F6] border-slate-200/80 hover:border-amber-400/60 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-lg group">
              <CardContent className="p-8 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl">🇵🇹</span>
                    <span className="text-xs font-bold text-amber-900 bg-amber-100 px-3 py-1 rounded-full">Gegründet 1920</span>
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-slate-950 group-hover:text-amber-700 transition-colors mb-2">
                    Nuri (Pinhais &amp; Cia)
                  </h3>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">Matosinhos, Portugal</p>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    Portugiesische Traditionsmanufaktur. Jede Sardine wird von Hand selektiert, gedämpft und in die ikonische Umhüllung gewickelt. Bekannt für traditionelle Lagerware und die pikante Variante mit Piri-Piri.
                  </p>
                </div>

                <div>
                  <div className="border-t border-slate-200 pt-4 mb-4 text-xs text-slate-500 space-y-1">
                    <p><strong>Charakteristik:</strong> Handgefüllt mit echten Gewürzen</p>
                    <p><strong>Kulinarische Orientierung:</strong> Reift laut Kennern bei kühler Lagerung nach; ab Werk bereits verzehrfertig</p>
                    <p>
                      <strong>Hersteller-Website:</strong>{" "}
                      <a
                        href="https://www.conservaspinhais.pt"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-amber-800 hover:underline font-semibold"
                      >
                        conservaspinhais.pt ↗
                      </a>
                    </p>
                  </div>

                  <Button asChild className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 rounded-xl shadow-md text-sm cursor-pointer">
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
                    <span className="text-xs font-bold text-indigo-900 bg-indigo-100 px-3 py-1 rounded-full">Gegründet 1932</span>
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-slate-950 group-hover:text-indigo-700 transition-colors mb-2">
                    La Belle-Iloise
                  </h3>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">Quiberon, Bretagne</p>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    Traditionelle Conserverie der französischen Atlantikküste. Bekannt für offizielle "Millésimés" Jahrgangsdosen mit künstlerischen Sammler-Illustrationen und hohem Fettgehalt.
                  </p>
                </div>

                <div>
                  <div className="border-t border-slate-200 pt-4 mb-4 text-xs text-slate-500 space-y-1">
                    <p><strong>Charakteristik:</strong> Offizielle Millésimes in Künstlerdosen</p>
                    <p><strong>Herstellerempfehlung:</strong> Mehrjährige Reifezeit im kühlen Keller empfohlen</p>
                    <p>
                      <strong>Hersteller-Website:</strong>{" "}
                      <a
                        href="https://www.labelleiloise.fr"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-800 hover:underline font-semibold"
                      >
                        labelleiloise.fr ↗
                      </a>
                    </p>
                  </div>

                  <Button asChild className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 rounded-xl shadow-md text-sm cursor-pointer">
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
                    <span className="text-xs font-bold text-emerald-900 bg-emerald-100 px-3 py-1 rounded-full">Gegründet 1891</span>
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-slate-950 group-hover:text-emerald-700 transition-colors mb-2">
                    Conservas Ortiz
                  </h3>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">Baskenland, Spanien</p>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    Spanischer Traditionsbetrieb im Baskenland. Verarbeitet Sardinen fangfrisch nach der traditionellen Methode 'A La Antigua' von Hand.
                  </p>
                </div>

                <div>
                  <div className="border-t border-slate-200 pt-4 mb-4 text-xs text-slate-500 space-y-1">
                    <p><strong>Charakteristik:</strong> Sardinas A La Antigua in feinstem Öl</p>
                    <p><strong>Kulinarische Orientierung:</strong> Unverbindliche Reifepräferenz von 3–7 Jahren im Weinkeller</p>
                    <p>
                      <strong>Hersteller-Website:</strong>{" "}
                      <a
                        href="https://www.conservasortiz.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-800 hover:underline font-semibold"
                      >
                        conservasortiz.com ↗
                      </a>
                    </p>
                  </div>

                  <Button asChild className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 rounded-xl shadow-md text-sm cursor-pointer">
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

      {/* Collector Value & Gift Culture */}
      <section className="py-20 sm:py-28 bg-[#0B1322] text-white border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center space-x-2 text-amber-400 text-xs font-semibold uppercase tracking-widest bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
                <HeartHandshake className="w-4 h-4 text-amber-400" />
                <span>Sammlerleidenschaft &amp; Schenkkultur</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
                Warum sammeln Feinschmecker limitierte Jahrgangsdosen?
              </h2>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                Jahrgangssardinen sind weit mehr als einfache Konserven: Die Kombination aus limitierter Jahresproduktion, künstlerisch gestalteten Dosenmotiven und der Reifefähigkeit im Olivenöl macht sie zu geschätzten Objekten für Gourmets und Liebhaber.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start space-x-3 bg-slate-900/80 p-4 rounded-2xl border border-slate-800">
                  <Award className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-white text-sm">Limitierte Kunst-Editionen</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Jährlich wechselnde Illustrationen bekannter Künstler machen jede Fang-Saison unverwechselbar.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 bg-slate-900/80 p-4 rounded-2xl border border-slate-800">
                  <Gift className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-white text-sm">Jubiläums- &amp; Jahrgangspräsente</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Beliebtes Präsent zu runden Geburtstagen, Hochzeiten oder Firmenjubiläen passend zum jeweiligen Jahrgang.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Collector Context Card */}
            <div className="lg:col-span-6 bg-slate-900/90 rounded-3xl p-8 border border-slate-800 shadow-2xl">
              <h3 className="text-xl font-serif font-bold text-amber-400 mb-6 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-400" />
                <span>Kulturelle Sammlerbereiche im Überblick</span>
              </h3>

              <div className="space-y-4">
                <div className="p-4 bg-slate-950/80 rounded-2xl border border-indigo-500/30">
                  <h4 className="font-bold text-white text-sm">Offizielle Jahrgangsauslesen (Millésimées)</h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    Dosen mit fest aufgedrucktem Fangjahr und speziellem Artwork (z. B. La Belle-Iloise). Streng nach Fangsommern limitiert.
                  </p>
                </div>

                <div className="p-4 bg-slate-950/80 rounded-2xl border border-amber-500/30">
                  <h4 className="font-bold text-white text-sm">Traditionelle Keller-Lagerware</h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    Manufaktur-Dosen (z. B. Nuri, Ortiz), die von Liebhabern über 3 bis 7 Jahre im privaten Keller gereift werden.
                  </p>
                </div>

                <div className="p-4 bg-slate-950/80 rounded-2xl border border-emerald-500/30">
                  <h4 className="font-bold text-white text-sm">Vertikale Vergleichs-Tastings</h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    Verkostung aufeinanderfolgender Jahrgänge derselben Manufaktur, um klimatische Einflüsse und Reifephasen sensorisch nachzuvollziehen.
                  </p>
                </div>
              </div>

              {/* Transparenzhinweis */}
              <div className="mt-5 p-3.5 bg-slate-950 rounded-xl border border-slate-800 text-[11px] text-slate-400 leading-relaxed flex items-start gap-2">
                <Info className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>
                  <strong>Sachlicher Hinweis:</strong> Jahrgangssardinen sind hochwertige Lebensmittel und Genussartikel, keine Finanzanlagen. Ein privater Zweitmarkt unterliegt unvorhersehbaren Schwankungen; es gibt keinerlei Rendite- oder Wertsteigerungsgarantie.
                </span>
              </div>

              <div className="mt-6 text-center">
                <Button asChild size="lg" className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold py-3.5 rounded-xl shadow-lg cursor-pointer">
                  <a href="https://amzn.to/3HKUksF" target="_blank" rel="noopener noreferrer">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Sortiment und Jahrgangssorten ansehen*
                  </a>
                </Button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Storage Protocol Rules - Exactly 7 Rules */}
      <section className="py-20 sm:py-28 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-slate-950 tracking-tight">
              Die 7 goldenen Regeln der Lagerung
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed">
              Damit Jahrgangssardinen schonend reifen und ihre Genusstauglichkeit behalten, sollten folgende Kriterien beachtet werden:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { num: "01", title: "Konstante Kühle", text: "Optimal sind 12–15 °C (Weinkeller oder kühler Vorratsraum). Keinesfalls dauerhaft über 20 °C lagern." },
              { num: "02", title: "Dunkelheit", text: "Lichtgeschützt aufbewahren. UV-Strahlung und Lichteinfall können das Olivenöl oxidieren lassen." },
              { num: "03", title: "Alle 6 Monate wenden", text: "Die Dosen regelmäßig um 180 Grad drehen, damit das Olivenöl das Fischfleisch gleichmäßig umgibt." },
              { num: "04", title: "Trockene Umgebung", text: "Geringe Luftfeuchtigkeit wählen, um Korrosion und Rostansatz an den Doppelfalzen zu vermeiden." },
              { num: "05", title: "Falzschutz & Vorsicht", text: "Stürze und Schläge vermeiden. Dellen an Falzkanten oder Aufreißlaschen zerstören die Versiegelung – solche Dosen sind unsicher und nicht lagerfähig!" },
              { num: "06", title: "Kulinarische Orientierung", text: "Hersteller wie La Belle-Iloise verweisen bei Millésimés auf eine Reifezeit von mehreren Jahren (z. B. 3 bis 5 Jahre), bevor die Dose geöffnet wird; der ideale Genusszeitpunkt bleibt stets eine subjektive Geschmackspräferenz." },
              { num: "07", title: "BfR-Sicherheitsprüfung", text: "Vor dem Verzehr prüfen: Aufgewölbte Dosen (Bombagen) oder undichte Falze dürfen unter keinen Umständen verzehrt oder gekostet werden (Botulismus-Risiko). Bei Zweifeln entsorgen!" }
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

      {/* Embed Code Widget Box with robust auto-resize script */}
      <section className="py-12 bg-[#0B1322] text-white border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold mb-2">
                  <Code2 className="w-3.5 h-3.5" />
                  Kostenloses Widget für Gourmet-Blogs &amp; Feinkostportale
                </div>
                <h3 className="text-xl font-serif font-bold text-white">Jahrgangssardinen-Reiferechner auf Ihrer Website einbinden</h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Bieten Sie Ihren Lesern eine interaktive Reifegrad- und Lagerkalkulation per responsivem iFrame mit automatischem Höhenabgleich.
                </p>
              </div>
              <button
                onClick={copyEmbedCode}
                className="self-start md:self-center px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center gap-2 transition-colors shadow-sm cursor-pointer shrink-0"
              >
                {copiedEmbed ? <Check className="w-4 h-4 text-emerald-950" /> : <Copy className="w-4 h-4" />}
                <span>{copiedEmbed ? 'Code kopiert!' : 'Embed-Code kopieren'}</span>
              </button>
            </div>
            <div className="bg-slate-950 rounded-lg p-3 text-xs font-mono text-slate-300 overflow-x-auto border border-slate-800">
              <code>{`<iframe id="sardinen-rechner-frame" src="https://www.jahrgangssardinen.de/rechner-embed" width="100%" height="680" style="border:none; border-radius:24px; box-shadow:0 4px 20px rgba(0,0,0,0.08);" title="Jahrgangssardinen Reife- und Lagerrechner"></iframe>\n<script>\n  window.addEventListener('message', function(e) {\n    var allowedOrigins = ['https://www.jahrgangssardinen.de', 'https://jahrgangssardinen.de'];\n    if (!allowedOrigins.includes(e.origin)) return;\n    var frame = document.getElementById('sardinen-rechner-frame');\n    if (!frame || e.source !== frame.contentWindow) return;\n    if (e.data && e.data.type === 'jahrgangssardinen-embed-resize' && typeof e.data.height === 'number') {\n      var h = Math.min(Math.max(e.data.height, 350), 2200);\n      frame.style.height = h + 'px';\n    }\n  });\n</script>\n<p style="font-size:12px; color:#64748b; text-align:center; margin-top:8px;">Bereitgestellt von <a href="https://www.jahrgangssardinen.de" target="_blank" rel="noopener" style="color:#d97706; text-decoration:underline;">jahrgangssardinen.de</a></p>`}</code>
            </div>
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
              Warenkunde &amp; Häufige Fragen
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => {
              const isOpen = openFaq === faq.id;
              return (
                <Card key={faq.id} className="bg-white border-slate-200 overflow-hidden shadow-sm hover:border-amber-400/50 transition-all">
                  <Collapsible open={isOpen} onOpenChange={() => setOpenFaq(isOpen ? "" : faq.id)}>
                    <CollapsibleTrigger className="w-full p-6 text-left flex justify-between items-center space-x-4 cursor-pointer">
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

      {/* E-E-A-T Editorial Trust Box */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#FAF9F6] rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-xs">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pb-6 border-b border-slate-200">
              <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-900 flex items-center justify-center font-black text-xl shrink-0">
                🐟
              </div>
              <div>
                <h4 className="text-xl font-serif font-bold text-slate-950">Fachredaktion jahrgangssardinen.de</h4>
                <p className="text-xs sm:text-sm text-slate-500">Stand: 2026 • Redaktionelle Warenkunde &amp; Herstellerdokumentation (Sardina pilchardus)</p>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs sm:text-sm text-slate-600">
              <div>
                <div className="flex items-center gap-2 font-bold text-slate-900 mb-1">
                  <ShieldCheck className="w-4 h-4 text-amber-600" />
                  <span>Manufaktur-Authentizität</span>
                </div>
                <p>Verifizierung traditioneller Herstellungsverfahren (handgelegt, unaufgetaut, ohne maschinelle Vorfrittierung).</p>
              </div>
              <div>
                <div className="flex items-center gap-2 font-bold text-slate-900 mb-1">
                  <Award className="w-4 h-4 text-amber-600" />
                  <span>Objektive Kriterien &amp; Warenkunde</span>
                </div>
                <p>Reines Informations- und Warenkundeportal nach § 5 DDG ohne eigene Händlermarke. Faktenbasierte Kriterien nach Herstellerdokumentation.</p>
              </div>
              <div>
                <div className="flex items-center gap-2 font-bold text-slate-900 mb-1">
                  <Sparkles className="w-4 h-4 text-amber-600" />
                  <span>Reifeprozess &amp; Lagerstandards</span>
                </div>
                <p>Sensorische Begleitung der Reifung im Olivenöl nach bretonischen und portugiesischen Kellerstandards.</p>
              </div>
            </div>
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
            Traditionelle Konservenkunst entdecken
          </h2>

          <p className="text-slate-300 text-base sm:text-xl max-w-2xl mx-auto mt-6 leading-relaxed">
            Finden Sie handverlesene Jahrgänge und Sorten renommierter europäischer Conserveries für Ihr nächstes Tasting.
          </p>

          <div className="mt-10">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold px-10 py-5 rounded-2xl text-lg shadow-2xl shadow-amber-500/30 transition-all hover:scale-105 cursor-pointer"
            >
              <a href="https://amzn.to/3HKUksF" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3">
                <ShoppingCart className="w-6 h-6" />
                <span>Jahrgangssardinen ansehen*</span>
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
