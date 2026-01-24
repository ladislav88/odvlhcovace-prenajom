import type { Metadata } from "next";
import CTA from "./components/CTA";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Prenájom Odvlhčovačov - Trenčín a Okolie | Odvlhčovače na Prenájom",
  description: "Prenájom odvlhčovačov pre Trenčín a okolie. Rýchla dostupnosť, profesionálna služba a kvalitné zariadenia. Kontaktujte nás ešte dnes!",
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Prenájom Odvlhčovačov
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Profesionálny prenájom odvlhčovačov pre Trenčín a okolie. Rýchla dostupnosť a kvalitné zariadenia pre váš domov alebo podnik.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+421911911876"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
            >
              📞 Zavolajte nám
            </a>
            <a
              href="#kontakt"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-lg border-2 border-blue-600"
            >
              Kontaktujte nás
            </a>
          </div>
        </div>
      </section>

      <CTA />

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Prečo si vybrať nás?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2">Rýchla dostupnosť</h3>
              <p className="text-gray-600">Odvlhčovače dostupné pre Trenčín a okolie do 24 hodín.</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-semibold mb-2">Profesionálna služba</h3>
              <p className="text-gray-600">Kvalitné zariadenia a odborná podpora počas celého prenájmu.</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-semibold mb-2">Výhodné ceny</h3>
              <p className="text-gray-600">Transparentné ceny bez skrytých poplatkov.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Cenník Prenájmu
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md border-2 border-gray-200">
              <h3 className="text-xl font-semibold mb-4">Kratší prenájom</h3>
              <div className="text-3xl font-bold text-blue-600 mb-4">od 15€/deň</div>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>✓ 1-7 dní</li>
                <li>✓ Všetky typy odvlhčovačov</li>
                <li>✓ Doprava a odvoz</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-2 border-blue-600 transform scale-105">
              <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold inline-block mb-4">
                NAJOBLÚBENEJŠIE
              </div>
              <h3 className="text-xl font-semibold mb-4">Stredný prenájom</h3>
              <div className="text-3xl font-bold text-blue-600 mb-4">od 12€/deň</div>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>✓ 8-14 dní</li>
                <li>✓ Všetky typy odvlhčovačov</li>
                <li>✓ Doprava a odvoz</li>
                <li>✓ Technická podpora</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-2 border-gray-200">
              <h3 className="text-xl font-semibold mb-4">Dlhodobý prenájom</h3>
              <div className="text-3xl font-bold text-blue-600 mb-4">od 10€/deň</div>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>✓ 15+ dní</li>
                <li>✓ Všetky typy odvlhčovačov</li>
                <li>✓ Doprava a odvoz</li>
                <li>✓ Technická podpora</li>
                <li>✓ Zľava na dlhodobý prenájom</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Machines Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Naše Odvlhčovače
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <div className="bg-gray-200 h-48 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Obrázok odvlhčovača {i}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Odvlhčovač Typ {i}</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Profesionálny odvlhčovač vhodný pre rôzne typy priestorov.
                </p>
                <Link
                  href="/prenajom-odvlhcovaca"
                  className="text-blue-600 hover:text-blue-700 font-semibold text-sm"
                >
                  Viac informácií →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Ako to funguje?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Kontakt</h3>
              <p className="text-gray-600">Kontaktujte nás telefonicky alebo emailom a popíšte váš problém.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Doprava</h3>
              <p className="text-gray-600">Doručíme odvlhčovač na vašu adresu v Trenčíne a okolí.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Odvlhčovanie</h3>
              <p className="text-gray-600">Odvlhčovač pracuje a odstraňuje vlhkosť z vášho priestoru.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold mb-2">Odvoz</h3>
              <p className="text-gray-600">Po dokončení odvlhčovania zariadenie odvezieme späť.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Často kladené otázky
          </h2>
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Ako dlho trvá odvlhčovanie?</h3>
              <p className="text-gray-600">
                Čas odvlhčovania závisí od veľkosti priestoru a úrovne vlhkosti. Väčšinou to trvá 3-7 dní.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Ako rýchlo môžete doručiť odvlhčovač?</h3>
              <p className="text-gray-600">
                Pre Trenčín a okolie zvyčajne do 24 hodín od objednávky.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Je potrebná záloha?</h3>
              <p className="text-gray-600">
                Áno, požadujeme zálohu pri doručení zariadenia. Zvyšná suma sa platí po odvozte.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Môžem si odvlhčovač prenajať na dlhšie obdobie?</h3>
              <p className="text-gray-600">
                Áno, ponúkame výhodné ceny pre dlhodobý prenájom. Kontaktujte nás pre individuálnu ponuku.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Kontaktujte nás
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Máte otázky? Radi vám pomôžeme s výberom správneho odvlhčovača pre váš priestor v Trenčíne a okolí.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+421911911876"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
            >
              📞 +421 911 911 876
            </a>
            <a
              href="mailto:info@odvlhcovaceprenajom.sk"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-lg border-2 border-blue-600"
            >
              ✉️ info@odvlhcovaceprenajom.sk
            </a>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
