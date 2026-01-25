import type { Metadata } from "next";
import CTA from "../components/CTA";

export const metadata: Metadata = {
  title: "Kontakt - Prenájom Odvlhčovačov Trenčín | Odvlhčovače na Prenájom",
  description: "Kontaktné informácie pre prenájom odvlhčovačov v Trenčianskom kraji. Telefón, email a kontaktný formulár.",
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
            Informácie o prenájme odvlhčovačov v Trenčianskom kraji. Pre výber správneho zariadenia je možné kontaktovať telefonicky alebo emailom.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">
                Kontaktné informácie
              </h2>
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <span className="text-2xl">🏢</span>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">Spoločnosť</h3>
                    <p className="text-gray-900 font-semibold text-lg">ALCO.SK, s.r.o.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <span className="text-2xl">📍</span>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">Adresa</h3>
                    <p className="text-gray-700">
                      Malé Stankovce 237<br />
                      913 11 Trenčianske Stankovce
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <span className="text-2xl">📞</span>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">Telefón</h3>
                    <a
                      href="tel:+421911911876"
                      className="text-blue-600 hover:text-blue-700 font-semibold text-lg block mb-1"
                    >
                      +421 911 911 876
                    </a>
                    <p className="text-gray-600 text-sm">
                      Dostupné počas pracovných dní 8:00 - 18:00
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <span className="text-2xl">✉️</span>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">Email</h3>
                    <a
                      href="mailto:info@odvlhcovaceprenajom.sk"
                      className="text-blue-600 hover:text-blue-700 font-semibold text-lg block mb-1"
                    >
                      info@odvlhcovaceprenajom.sk
                    </a>
                    <p className="text-gray-600 text-sm">
                      Odpoveď do 24 hodín
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <span className="text-2xl">🌍</span>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">Oblasť pôsobnosti</h3>
                    <p className="text-gray-700 font-medium">
                      Trenčiansky kraj
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 pt-3 border-t border-gray-200">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <span className="text-2xl">🚗</span>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">Prevzatie osobne</h3>
                    <p className="text-gray-700">
                      Trenčianske Stankovce<br />
                      <span className="text-sm text-gray-600">Po dohode telefonicky</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-900">
                Kontaktný formulár
              </h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Meno a priezvisko
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Vaše meno"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="vas@email.sk"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Telefón
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="+421 911 911 876"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Správa
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Popíšte váš problém alebo požiadavku..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Odoslať správu
                </button>
              </form>
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
