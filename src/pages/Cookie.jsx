export default function CookiePage() {
  return (
    <div className="bg-[#FAF9F6] text-slate-900 min-h-screen">
      {/* Header */}
      <section className="bg-[#0B1322] text-white py-16 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white mb-2 leading-tight">
            Cookie-Richtlinie
          </h1>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Transparente Informationen zur Verwendung von Cookies auf jahrgangssardinen.de
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200/80 shadow-sm space-y-6 text-slate-700 text-sm leading-relaxed">
            <div>
              <h2 className="text-xl font-serif font-bold text-slate-900 mb-2">Was sind Cookies?</h2>
              <p>
                Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden, wenn Sie unsere Website besuchen. Sie dienen dazu, die Funktionsfähigkeit der Website zu gewährleisten und Ihre Einstellungen zu speichern.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-serif font-bold text-slate-900 mb-2">Eingesetzte Cookie-Arten</h2>
              <h3 className="font-bold text-slate-900 mt-2 mb-1">1. Essenziell (Notwendig)</h3>
              <p className="text-xs text-slate-600">
                Diese Cookies sind erforderlich, um Ihre Cookie-Einwilligungsspezifikationen zu speichern.
              </p>

              <h3 className="font-bold text-slate-900 mt-3 mb-1">2. Affiliate-Partner-Tracking</h3>
              <p className="text-xs text-slate-600">
                Bei Weiterleitung zu Amazon werden Standard-Partner-Cookies gesetzt, um getätigte Käufe der Vermittlung zuzuordnen.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
