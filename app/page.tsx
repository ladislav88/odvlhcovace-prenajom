import type { Metadata } from "next";
import Image from "next/image";
import CTA from "./components/CTA";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Prenájom Odvlhčovačov - Trenčiansky Kraj | Odvlhčovače na Prenájom",
  description: "Prenájom odvlhčovačov pre Trenčiansky kraj. Profesionálna služba a kvalitné zariadenia. Kontaktujte ma ešte dnes!",
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-blue-100 py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight tracking-tight">
              Prenájom odvlhčovačov – <span className="text-blue-600">Trenčiansky kraj</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-6 leading-relaxed">
              Odvlhčenie pivníc, bytov a priestorov po zatopení
            </p>
            <div className="mb-8">
              <p className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">
                7 € / deň
              </p>
              <p className="text-gray-600 text-lg">
                minimálne 7 dní
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="tel:+421911911876"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition-all text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-center"
              >
                Zavolať
              </a>
              <a
                href="mailto:info@odvlhcovaceprenajom.sk"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition-all text-lg border-2 border-blue-600 shadow-md hover:shadow-lg text-center"
              >
                Napísať
              </a>
            </div>
          </div>
          <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/banner1-65d937a1-b951-411e-a1c5-9b350f935197.png"
              alt="Profesionálny odvlhčovač Rohnson"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Price Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-xl md:text-2xl text-gray-700">
            <span className="font-semibold">Cena prenájmu:</span> <span className="text-blue-600 font-bold text-2xl md:text-3xl">7 € / deň</span> <span className="text-gray-600">(min. 7 dní)</span>
          </p>
        </div>
      </section>

      <CTA />

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Prečo si vybrať práve nás?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-white rounded-lg shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1">
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/images/odvlhcovac1-cfcd4dcc-1c2c-4747-a1ef-865033e6baa4.png"
                  alt="Rýchla pomoc"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Rýchla pomoc kedykoľvek</h3>
              <p className="text-gray-600 leading-relaxed">V núdzových situáciách som tu pre vás. Čím skôr začnete s odvlhčovaním, tým menej škôd vznikne. V Trenčianskom kraji som dostupný rýchlo a spoľahlivo.</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-white rounded-lg shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1">
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/images/nadoba-93659314-af07-466c-a3fb-2e0f43c0e0e5.png"
                  alt="Profesionálne zariadenia"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-4xl mb-3">🏆</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Profesionálne zariadenia</h3>
              <p className="text-gray-600 leading-relaxed">Používame len overené, výkonné odvlhčovače značky Rohnson. Každé zariadenie je pred prenájmom skontrolované, aby sme vám zabezpečili maximálnu účinnosť a pokoj.</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-white rounded-lg shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1">
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/images/vbyte-25d62767-f919-4fe4-a8e1-0ae27d81752a.png"
                  alt="Výhodné ceny"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-4xl mb-3">💎</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Výhodnejšie ako kúpa</h3>
              <p className="text-gray-600 leading-relaxed">Prečo kupovať drahé zariadenie, keď ho potrebujete len na pár dní? Náš prenájom je výhodný, transparentný a bez skrytých poplatkov. Ušetríte tisíce eur!</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Ako to funguje? <span className="text-blue-600">Jednoducho a rýchlo!</span>
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Prenájom odvlhčovača je jednoduchý proces v štyroch krokoch. Bez komplikácií, bez starostí. Všetko vyriešime za vás!
              </p>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/odvlhcovac2-4c7245ad-c7db-4e5f-a20a-02cf50ea8f0d.png"
                alt="Odvlhčovač v prevádzke"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Zavolajte nám</h3>
              <p className="text-gray-600 leading-relaxed">Jednoducho nás kontaktujte a popíšte váš problém. Radi vám poradíme a dohodneme najvhodnejšie riešenie.</p>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Prevzatie zariadenia</h3>
              <p className="text-gray-600 leading-relaxed">Odvlhčovač si môžete prevziať osobne v Trenčianskych Stankovciach po dohode telefonicky. Poradím vám s nastavením a obsluhou zariadenia.</p>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Necháte pracovať</h3>
              <p className="text-gray-600 leading-relaxed">Odvlhčovač pracuje automaticky a odstraňuje vlhkosť z vášho priestoru. Vy sa môžete venovať svojim bežným činnostiam.</p>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Odvezieme späť</h3>
              <p className="text-gray-600 leading-relaxed">Keď je odvlhčovanie hotové, jednoducho nás zavoláte a my zariadenie odvezieme. Žiadne starosti!</p>
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
            <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Ako dlho trvá odvlhčovanie?</h3>
              <p className="text-gray-600 leading-relaxed">
                Čas závisí od veľkosti priestoru a úrovne vlhkosti. Väčšinou viditeľné zlepšenie už po 24-48 hodinách, úplné odvlhčenie trvá typicky 3-7 dní. Naše výkonné zariadenia pracujú efektívne a rýchlo!
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Ako rýchlo môžete doručiť odvlhčovač?</h3>
              <p className="text-gray-600 leading-relaxed">
                Odvlhčovač si môžete prevziať osobne v Trenčianskych Stankovciach po dohode telefonicky. V núdzových prípadoch (napr. po zatopení) sa snažím byť flexibilný. Vaša situácia je pre mňa prioritou!
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Je potrebná záloha?</h3>
              <p className="text-gray-600 leading-relaxed">
                Áno, požadujeme zálohu pri doručení zariadenia, čo je štandardná prax pri prenájme. Zvyšná suma sa platí po odvozte zariadenia. Všetko je transparentné a dohodnuté vopred.
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Môžem si odvlhčovač prenajať na dlhšie obdobie?</h3>
              <p className="text-gray-600 leading-relaxed">
                Samozrejme! Ponúkame výhodné ceny pre dlhodobý prenájom. Čím dlhšie obdobie, tým lepšia cena. Kontaktujte nás a dohodneme sa na individuálnej ponuke presne podľa vašich potrieb.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Potrebujete pomoc? Sme tu pre vás!
          </h2>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Máte otázky alebo potrebujete poradiť? Rád vám pomôžem s výberom správneho riešenia pre váš priestor v Trenčianskom kraji. Zavolajte mi ešte dnes a dohodneme sa na najlepšom riešení.
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
