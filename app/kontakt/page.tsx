import type { Metadata } from "next";
import CTA from "../components/CTA";

export const metadata: Metadata = {
  title: "Kontakt - Prenájom Odvlhčovačov Trenčín | Odvlhčovače na Prenájom",
  description: "Kontaktné informácie pre prenájom odvlhčovačov v Trenčianskom kraji. Telefonický kontakt je najrýchlejší spôsob dohody.",
};

export default function Kontakt() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
            Kontakt
          </h1>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Telefonický kontakt je najrýchlejší spôsob dohody o prenájme odvlhčovačov v Trenčianskom kraji.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          {/* Primary Contact - Phone */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-12 rounded-2xl shadow-xl mb-8 text-center">
            <div className="mb-6">
              <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Telefonický kontakt
            </h2>
            <p className="text-xl mb-6 text-blue-100">
              Najrýchlejší spôsob dohody o prenájme
            </p>
            <a
              href="tel:+421911911876"
              className="inline-block bg-white text-blue-600 px-10 py-5 rounded-lg font-bold text-2xl md:text-3xl hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              +421 911 911 876
            </a>
            <p className="text-blue-100 mt-4 text-lg">
              Dostupné počas pracovných dní 8:00 - 18:00<br />
              V núdzových prípadoch aj počas víkendov
            </p>
          </div>

          {/* Secondary Contact - Email */}
          <div className="bg-gray-50 p-8 rounded-2xl shadow-lg mb-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">Email (doplnok)</h3>
                <a
                  href="mailto:info@odvlhcovaceprenajom.sk"
                  className="text-blue-600 hover:text-blue-700 font-semibold text-lg"
                >
                  info@odvlhcovaceprenajom.sk
                </a>
                <p className="text-gray-600 text-sm mt-1">
                  Odpoveď do 24 hodín
                </p>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 p-6 rounded-lg">
              <h3 className="font-semibold mb-3 text-gray-900">Prevzatie osobne</h3>
              <p className="text-gray-700 mb-2">
                Trenčianske Stankovce
              </p>
              <p className="text-gray-600 text-sm">
                Po dohode telefonicky
              </p>
            </div>
            <div className="bg-white border border-gray-200 p-6 rounded-lg">
              <h3 className="font-semibold mb-3 text-gray-900">Oblasť pôsobnosti</h3>
              <p className="text-gray-700">
                Trenčiansky kraj
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            Firemné údaje
          </h2>
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2 text-gray-900">IČO / DIČ</h3>
                <p className="text-gray-700">IČO: 45601259</p>
                <p className="text-gray-700">IČ-DPH: SK2023064032</p>
                <p className="text-gray-600 text-sm mt-2">Spoločnosť je platcom DPH</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900">Bankové spojenie</h3>
                <p className="text-gray-700">Tatra banka, a.s.</p>
                <p className="text-gray-700">IBAN: SK8011000000002929839541</p>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="text-gray-600 text-sm">
                Spoločnosť ALCO.SK, s.r.o. je zapísaná v Obchodnom registri Okresného súdu Trenčín, Oddiel: Sro, Vložka číslo: 23214/R.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            Často kladené otázky o kontakte
          </h2>
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Ako rýchlo je možné získať odpoveď?</h3>
              <p className="text-gray-600 leading-relaxed">
                Na emailové dotazy sa odpovedá do 24 hodín. Telefónne dotazy sa riešia počas pracovných hodín.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Ako je možné získať odvlhčovač?</h3>
              <p className="text-gray-600 leading-relaxed">
                Odvlhčovač je možné prevziať osobne v Trenčianskych Stankovciach po dohode telefonicky. Dohoda o čase prevzatia je možná podľa potrieb.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Je dohoda možná aj cez víkendy?</h3>
              <p className="text-gray-600 leading-relaxed">
                V núdzových prípadoch (napr. po zatopení) je dohoda možná aj počas víkendov. Kontaktovaním sa dohodne najvhodnejšie riešenie.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
