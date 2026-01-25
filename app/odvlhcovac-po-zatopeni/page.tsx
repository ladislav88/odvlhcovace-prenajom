import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Odvlhčovač po Zatopení - Trenčiansky Kraj | Odvlhčovače na Prenájom",
  description: "Prenájom odvlhčovačov po zatopení pre Trenčín a okolie. Profesionálna pomoc pri odvlhčovaní po záplavách.",
};

export default function OdvlhcovacPoZatopeni() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
            Rýchla pomoc po zatopení
          </h1>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Každá minúta sa počíta. Čím skôr sa začne s odvlhčovaním, tým menej škôd vznikne. Prenájom výkonných odvlhčovačov pre Trenčín a okolie – v núdzových prípadoch je dohoda možná aj počas víkendov.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Odvlhčovanie po zatopení
            </h2>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              Po zatopení je každá minúta dôležitá. Profesionálne odvlhčovače efektívne odstraňujú vlhkosť zo stien, podláh a vzduchu, čím pomáhajú obnoviť priestor do pôvodného stavu. Rýchle odvlhčovanie chráni majetok a predchádza ďalším škodám.
            </p>

            <h3 className="text-2xl font-semibold mb-4 text-gray-900">
              Čo urobiť do 24 hodín
            </h3>
            <ul className="space-y-3 text-gray-700 mb-8">
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">1.</span>
                <span>Kontaktovať čo najskôr – v núdzových prípadoch je dohoda možná aj počas víkendov</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">2.</span>
                <span>Odstrániť stojacu vodu a vyčistiť priestor</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">3.</span>
                <span>Odvlhčovač je možné umiestniť na vhodné miesto čo najskôr</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">4.</span>
                <span>Odvlhčovanie prebieha kontinuálne až do úplného odvlhčenia</span>
              </li>
            </ul>

            {/* CTA Box */}
            <div className="bg-blue-600 text-white rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-bold mb-4">Kontakt pre rýchlu pomoc</h3>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+421911911876"
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Zavolať – rýchla dohoda odberu
                </a>
                <a
                  href="mailto:info@odvlhcovaceprenajom.sk"
                  className="bg-blue-700 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-800 transition-colors flex items-center justify-center gap-2 border-2 border-white"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Napísať email
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                  K dispozícii sú profesionálne priemyselné odvlhčovače značky <strong>Rohnson</strong> s vysokým výkonom až 51 litrov/deň, vhodné pre rýchle a efektívne odvlhčovanie po záplavách. Zariadenia majú vysoký prietok vzduchu 450 m³/h a sú vhodné pre veľké priestory. Vďaka možnosti pripojenia hadičkou priamo do kanalizácie môže zariadenie pracovať nepretržite bez potreby vyprazdňovania zásobníka.
                </p>
              </div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/vhale-4cc93497-c5e5-40f0-b27e-828d7e425dbc.png"
                  alt="Odvlhčovač po zatopení v sklade"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
