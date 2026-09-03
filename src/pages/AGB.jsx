export default function AGB() {
  return (
    <div className="bg-[#FAF9F6] text-slate-900 min-h-screen">
      {/* Header */}
      <section className="bg-[#0B1322] text-white py-16 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white mb-2 leading-tight">
            Allgemeine Geschäftsbedingungen (AGB)
          </h1>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Nutzungsbedingungen für jahrgangssardinen.de
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200/80 shadow-sm space-y-6 text-slate-700 text-sm leading-relaxed">
            <div>
              <h2 className="text-xl font-serif font-bold text-slate-900 mb-2">§ 1 Geltungsbereich</h2>
              <p>
                Diese Allgemeinen Geschäftsbedingungen gelten für die Nutzung der Website jahrgangssardinen.de betrieben von Jens Kathe (nachfolgend &quot;Anbieter&quot;).
              </p>
            </div>

            <div>
              <h2 className="text-xl font-serif font-bold text-slate-900 mb-2">§ 2 Leistungsumfang & Vermittlung</h2>
              <p>
                Der Anbieter stellt redaktionelle Informationen, Ratgeber und Empfehlungen rund um Jahrgangssardinen bereit. Über sogenannte Affiliate-Links verlinkt der Anbieter auf Partner-Shops (z.B. Amazon). Kaufverträge kommen ausschließlich zwischen dem Nutzer und dem jeweiligen Online-Shop zustande.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-serif font-bold text-slate-900 mb-2">§ 3 Haftung für Inhalte</h2>
              <p>
                Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
