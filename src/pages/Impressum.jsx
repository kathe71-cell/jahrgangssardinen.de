import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, User, ShieldQuestion, Landmark } from "lucide-react";

export default function Impressum() {
  return (
    <div className="bg-[#FAF9F6] text-slate-900 min-h-screen">
      {/* Header */}
      <section className="bg-[#0B1322] text-white py-16 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white mb-2 leading-tight">
            Impressum
          </h1>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Angaben gemäß § 5 DDG
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {/* Betreiber */}
            <Card className="bg-white border-slate-200 shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-lg font-serif">
                  <User className="w-5 h-5 text-amber-600" />
                  <span>Betreiber der Website & Kontakt</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-1 text-slate-700 text-sm">
                <p className="font-bold text-slate-900">Jens Kathe</p>
                <p>Hansastrasse 6, 34119 Kassel</p>
                <p>Telefon: +49 178 6652623</p>
                <p>E-Mail: jens@kathe.org</p>
              </CardContent>
            </Card>

            {/* Verantwortlich für den Inhalt */}
            <Card className="bg-white border-slate-200 shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-lg font-serif">
                  <Building className="w-5 h-5 text-amber-600" />
                  <span>Verantwortlich für den Inhalt</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-1 text-slate-700 text-sm">
                <p className="text-xs text-slate-500 mb-1">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV:</p>
                <p className="font-bold text-slate-900">Jens Kathe</p>
                <p>Hansastrasse 6, 34119 Kassel</p>
              </CardContent>
            </Card>

            {/* Umsatzsteuer */}
            <Card className="bg-white border-slate-200 shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-lg font-serif">
                  <Landmark className="w-5 h-5 text-amber-600" />
                  <span>Umsatzsteuer</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="text-slate-700 text-sm">
                <p>Als Kleinunternehmer gemäß § 19 UStG wird keine Umsatzsteuer berechnet.</p>
              </CardContent>
            </Card>

            {/* Online-Streitbeilegung */}
            <Card className="bg-white border-slate-200 shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-lg font-serif">
                  <ShieldQuestion className="w-5 h-5 text-amber-600" />
                  <span>Online-Streitbeilegung</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-slate-700 text-sm leading-relaxed">
                <p>
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
                  <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-amber-600 underline font-medium">
                    https://ec.europa.eu/consumers/odr
                  </a>
                </p>
                <p>
                  Wir sind zur Teilnahme an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle nicht verpflichtet und nicht bereit.
                </p>
              </CardContent>
            </Card>

            {/* Haftungsausschluss */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm text-slate-700 text-sm space-y-4">
              <h2 className="text-xl font-serif font-bold text-slate-900">Haftungsausschluss</h2>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Haftung für Inhalte</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-slate-900 mb-1">Haftung für Links</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-slate-900 mb-1">Affiliate-Hinweis</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Diese Website enthält Affiliate-Links. Wir erhalten eine Provision, wenn Sie über diese Links einkaufen. Für Sie entstehen dadurch keine zusätzlichen Kosten.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}