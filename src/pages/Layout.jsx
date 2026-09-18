import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Fish, ArrowUp, Compass, HelpCircle, ShieldCheck, ShoppingCart, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import CookieConsentManager from "@/components/CookieConsentManager";
import StickyMobileCTA from "@/components/StickyMobileCTA";

export default function Layout({ children, currentPageName }) {
  const location = useLocation();
  const [showScrollTop, setShowScrollTop] = React.useState(false);
  const [showCookieSettings, setShowCookieSettings] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const legalPages = [
    { name: "FAQ", page: "FAQ" },
    { name: "Impressum", page: "Impressum" },
    { name: "Datenschutz", page: "Datenschutz" },
    { name: "AGB", page: "AGB" },
    { name: "Cookie-Richtlinie", page: "Cookie" }
  ];

  // SVG Favicon with Vintage Gold Fish design
  const faviconSvg = `data:image/svg+xml,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#d4af37" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z"/>
      <path d="M18 12v.5"/>
      <path d="M16 17.93a9.77 9.77 0 0 1 0-11.86"/>
      <circle cx="17" cy="10" r="1" fill="#d4af37"/>
    </svg>
  `)}`;

  React.useEffect(() => {
    const pageConfig = {
      'Home': {
        title: 'Jahrgangssardinen.de - Warenkunde & Ratgeber für Vintage-Sardinen',
        description: 'Unabhängiger Ratgeber zu Jahrgangssardinen (Sardines de Millésime): Reifeprozess in nativem Olivenöl, Lagerstandards nach BfR-Kriterien, Manufakturen und Sorten.',
        keywords: 'Jahrgangssardinen, Sardines de Millésime, Nuri Portugal, La Belle-Iloise, Conservas Ortiz, Vintage Sardinen, Lagerung Sardinen, Warenkunde'
      },
      'FAQ': {
        title: 'FAQ Jahrgangssardinen - Häufige Fragen & Antworten | jahrgangssardinen.de',
        description: 'Fundierte Antworten zu Reifung, Lagerung, BfR-Sicherheitshinweisen, MHD und Manufaktur-Tradition bei Jahrgangssardinen.',
        keywords: 'Jahrgangssardinen FAQ, Reifung Sardinen, Lagerung Dosen, Haltbarkeit Konserven, Botulismus Vorbeugung'
      },
      'Impressum': {
        title: 'Impressum | jahrgangssardinen.de - Warenkunde & Ratgeber',
        description: 'Impressum und rechtliche Anbieterkennzeichnung gemäß § 5 DDG zu jahrgangssardinen.de.',
        keywords: 'Impressum, Anbieterkennzeichnung, jahrgangssardinen.de, Jens Kathe'
      },
      'Datenschutz': {
        title: 'Datenschutzerklärung | jahrgangssardinen.de',
        description: 'Datenschutzerklärung für jahrgangssardinen.de - Informationen zur Verarbeitung personenbezogener Daten gemäß DSGVO.',
        keywords: 'Datenschutz, DSGVO, Cookies, Vercel, Analytics, jahrgangssardinen.de'
      },
      'AGB': {
        title: 'Nutzungsbedingungen | jahrgangssardinen.de',
        description: 'Allgemeine Nutzungsbedingungen für das Informationsangebot auf jahrgangssardinen.de.',
        keywords: 'Nutzungsbedingungen, AGB, Affiliate, jahrgangssardinen.de'
      },
      'Cookie': {
        title: 'Cookie-Richtlinie & Einstellungen | jahrgangssardinen.de',
        description: 'Informationen zur Verwendung von Cookies auf jahrgangssardinen.de sowie Steuerung deiner Privatsphäre-Einstellungen.',
        keywords: 'Cookies, Privatsphäre, Cookie-Einstellungen, Tracking, jahrgangssardinen.de'
      }
    };

    const config = pageConfig[currentPageName] || pageConfig['Home'];

    // Favicon
    const favicon = document.querySelector('link[rel="icon"]');
    if (favicon) {
      favicon.href = faviconSvg;
    } else {
      const link = document.createElement('link');
      link.rel = 'icon';
      link.type = 'image/svg+xml';
      link.href = faviconSvg;
      document.head.appendChild(link);
    }

    document.title = config.title;

    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.content = config.description;
    } else {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      metaDescription.content = config.description;
      document.head.appendChild(metaDescription);
    }

    let keywords = document.querySelector('meta[name="keywords"]');
    if (keywords) {
      keywords.content = config.keywords;
    } else {
      keywords = document.createElement('meta');
      keywords.name = 'keywords';
      keywords.content = config.keywords;
      document.head.appendChild(keywords);
    }

    const canonicalPath = currentPageName === 'Home' ? '' : currentPageName.toLowerCase();
    const canonicalUrl = currentPageName === 'Home' 
      ? 'https://www.jahrgangssardinen.de/' 
      : `https://www.jahrgangssardinen.de/${canonicalPath}`;

    const ogTags = [
      { property: 'og:title', content: config.title },
      { property: 'og:description', content: config.description },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: canonicalUrl },
      { property: 'og:site_name', content: 'Jahrgangssardinen.de' },
      { property: 'og:locale', content: 'de_DE' }
    ];

    ogTags.forEach((tag) => {
      let existingTag = document.querySelector(`meta[property="${tag.property}"]`);
      if (existingTag) {
        existingTag.content = tag.content;
      } else {
        const metaTag = document.createElement('meta');
        metaTag.property = tag.property;
        metaTag.content = tag.content;
        document.head.appendChild(metaTag);
      }
    });

    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.href = canonicalUrl;
    } else {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      canonical.href = canonicalUrl;
      document.head.appendChild(canonical);
    }

    document.documentElement.lang = 'de';
  }, [currentPageName]);

  const breadcrumbItems = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Startseite",
      "item": "https://www.jahrgangssardinen.de/"
    }
  ];

  if (currentPageName !== 'Home') {
    breadcrumbItems.push({
      "@type": "ListItem",
      "position": 2,
      "name": currentPageName,
      "item": `https://www.jahrgangssardinen.de/${currentPageName.toLowerCase()}`
    });
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-slate-900 font-sans selection:bg-amber-500 selection:text-white">
      {/* Schema.org Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebSite",
                "@id": "https://www.jahrgangssardinen.de/#website",
                "url": "https://www.jahrgangssardinen.de/",
                "name": "Jahrgangssardinen.de",
                "description": "Unabhängiges Fach- und Informationsportal für Jahrgangssardinen (Sardines de Millésime), Reifung und traditionelle Manufakturfertigung.",
                "inLanguage": "de-DE"
              },
              {
                "@type": "Organization",
                "@id": "https://www.jahrgangssardinen.de/#organization",
                "name": "Jahrgangssardinen.de",
                "url": "https://www.jahrgangssardinen.de/",
                "logo": "https://www.jahrgangssardinen.de/favicon.svg"
              },
              {
                "@type": "BreadcrumbList",
                "itemListElement": breadcrumbItems
              }
            ]
          })
        }}
      />

      {/* Header Bar */}
      <header className="sticky top-0 z-50 bg-[#0B1322]/95 backdrop-blur-md border-b border-slate-800 text-white shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl flex items-center justify-center shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
                <Fish className="w-6 h-6 text-slate-950" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-serif font-bold tracking-tight text-white group-hover:text-amber-400 transition-colors">
                  Jahrgangssardinen<span className="text-amber-400">.de</span>
                </span>
                <span className="text-[11px] text-slate-400 uppercase tracking-widest font-sans font-medium">
                  Vintage Sardine Gourmet Guide
                </span>
              </div>
            </Link>

            {/* Navigation Links */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                to="/"
                className={`text-sm font-medium transition-colors hover:text-amber-400 ${
                  currentPageName === 'Home' ? 'text-amber-400 font-semibold' : 'text-slate-300'
                }`}
              >
                Startseite
              </Link>
              <a
                href="/#finder"
                className="text-sm font-medium text-slate-300 hover:text-amber-400 transition-colors flex items-center space-x-1"
              >
                <Compass className="w-4 h-4 text-amber-400" />
                <span>Vintage Finder</span>
              </a>
              <a
                href="/#hersteller"
                className="text-sm font-medium text-slate-300 hover:text-amber-400 transition-colors"
              >
                Top-Hersteller
              </a>
              <Link
                to="/FAQ"
                className={`text-sm font-medium transition-colors hover:text-amber-400 ${
                  currentPageName === 'FAQ' ? 'text-amber-400 font-semibold' : 'text-slate-300'
                }`}
              >
                FAQ
              </Link>
            </nav>

            {/* Header CTA */}
            <div className="flex items-center space-x-4">
              <Button
                asChild
                size="sm"
                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold px-4 py-2 rounded-xl text-xs sm:text-sm shadow-md shadow-amber-500/20 transition-all hover:scale-105"
              >
                <a href="https://amzn.to/3HKUksF" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1.5">
                  <ShoppingCart className="w-4 h-4" />
                  <span>Angebote finden*</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Sticky Mobile Conversion Bar */}
      <StickyMobileCTA />

      {/* Scroll to Top */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold p-3 rounded-full shadow-2xl hover:shadow-amber-500/40 transition-all duration-300 transform hover:scale-110"
          size="icon"
          aria-label="Nach oben scrollen"
        >
          <ArrowUp className="w-5 h-5" />
        </Button>
      )}

      {/* Footer */}
      <footer className="bg-[#0B1322] text-slate-400 border-t border-slate-800 pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-slate-800/80">
            {/* Brand Intro */}
            <div className="md:col-span-6 space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 bg-amber-500/10 text-amber-400 rounded-xl border border-amber-500/20 flex items-center justify-center">
                  <Fish className="w-5 h-5" />
                </div>
                <span className="text-xl font-serif font-bold text-white tracking-tight">
                  Jahrgangssardinen<span className="text-amber-400">.de</span>
                </span>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed max-w-lg">
                Unabhängiges Fach- und Informationsportal für traditionelle Jahrgangssardinen (Sardines de Millésime) aus europäischen Manufakturen. Fundierte Warenkunde, verlässliche Lagerstandards nach BfR-Kriterien und kulinarische Orientierung.
              </p>
              <div className="flex items-center space-x-2 text-xs text-amber-400/90 pt-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Unabhängig recherchierte Warenkunde mit Händler-Verlinkungen*.</span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-3 space-y-3">
              <h4 className="text-sm font-serif font-bold text-white uppercase tracking-wider">Navigation</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/" onClick={scrollToTop} className="hover:text-amber-400 transition-colors">
                    Startseite & Ratgeber
                  </Link>
                </li>
                <li>
                  <a href="/#finder" className="hover:text-amber-400 transition-colors">
                    Sorten-Explorer
                  </a>
                </li>
                <li>
                  <a href="/#hersteller" className="hover:text-amber-400 transition-colors">
                    Manufakturen (Nuri, Ortiz, La Belle)
                  </a>
                </li>
                <li>
                  <Link to="/FAQ" onClick={scrollToTop} className="hover:text-amber-400 transition-colors">
                    Häufige Fragen (FAQ)
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal Links */}
            <div className="md:col-span-3 space-y-3">
              <h4 className="text-sm font-serif font-bold text-white uppercase tracking-wider">Rechtliches & Transparenz</h4>
              <ul className="space-y-2 text-sm">
                {legalPages.map((page) => (
                  <li key={page.name}>
                    <Link
                      to={`/${page.page}`}
                      onClick={scrollToTop}
                      className="hover:text-amber-400 transition-colors"
                    >
                      {page.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <button
                    onClick={() => setShowCookieSettings(true)}
                    className="hover:text-amber-400 transition-colors text-left cursor-pointer"
                  >
                    Cookie-Einstellungen
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Disclaimer & Copyright */}
          <div className="pt-8 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
            <p>
              © {new Date().getFullYear()} Jahrgangssardinen.de. Alle Rechte vorbehalten.
            </p>
            <p className="max-w-md text-center sm:text-right leading-relaxed">
              *Hinweis: Als Amazon-Partner verdiene ich an qualifizierten Verkäufen. Für Sie ändert sich der Preis nicht.
            </p>
          </div>
        </div>
      </footer>

      <CookieConsentManager showSettings={showCookieSettings} setShowSettings={setShowCookieSettings} />
    </div>
  );
}
