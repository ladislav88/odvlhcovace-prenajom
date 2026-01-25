import type { Metadata } from "next";
import Image from "next/image";
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
      <section className="relative bg-gradient-to-br from-blue-50 to-blue-100 py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/banner1.png"
            alt="Odvlhčovač"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Zbavte sa vlhkosti raz a navždy
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Profesionálny prenájom výkonných odvlhčovačov pre Trenčín a okolie. Riešime problémy s vlhkosťou rýchlo, efektívne a bez zbytočných nákladov. Váš domov zaslúži zdravé prostredie!
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
            Prečo si vybrať práve nás?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Rýchla pomoc kedykoľvek</h3>
              <p className="text-gray-600 leading-relaxed">V núdzových situáciách sme tu pre vás do 24 hodín. Čím skôr začnete s odvlhčovaním, tým menej škôd vznikne. V Trenčíne a okolí sme dostupní rýchlo a spoľahlivo.</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Profesionálne zariadenia</h3>
              <p className="text-gray-600 leading-relaxed">Používame len overené, výkonné odvlhčovače značky Rohnson. Každé zariadenie je pred prenájmom skontrolované, aby sme vám zabezpečili maximálnu účinnosť a pokoj.</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-5xl mb-4">💎</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Výhodnejšie ako kúpa</h3>
              <p className="text-gray-600 leading-relaxed">Prečo kupovať drahé zariadenie, keď ho potrebujete len na pár dní? Náš prenájom je výhodný, transparentný a bez skrytých poplatkov. Ušetríte tisíce eur!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
            Jednoduché a férové ceny
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Bez skrytých poplatkov, bez zbytočných formalít. Platíte len za to, čo skutočne potrebujete. Všetko vrátane dopravy a odvozu!
          </p>
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

      {/* Gallery Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
            Naše zariadenia v akcii
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Pozrite sa, ako naše výkonné odvlhčovače pomáhajú riešiť problémy s vlhkosťou v rôznych priestoroch.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-[4/3] relative">
                <Image
                  src="/images/odvlhcovac1.jpg"
                  alt="Profesionálny odvlhčovač Rohnson"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-semibold text-lg">Profesionálny odvlhčovač</h3>
                  <p className="text-sm">Vysoký výkon pre veľké priestory</p>
                </div>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-[4/3] relative">
                <Image
                  src="/images/odvlhcovac2.jpg"
                  alt="Odvlhčovač v prevádzke"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-semibold text-lg">Odvlhčovač v prevádzke</h3>
                  <p className="text-sm">Efektívne odstraňovanie vlhkosti</p>
                </div>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-[4/3] relative">
                <Image
                  src="/images/vbyte.jpg"
                  alt="Odvlhčovač v byte"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-semibold text-lg">Odvlhčovač v byte</h3>
                  <p className="text-sm">Tichá prevádzka pre domáce použitie</p>
                </div>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-[4/3] relative">
                <Image
                  src="/images/vhale.jpg"
                  alt="Odvlhčovač v hale"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-semibold text-lg">Odvlhčovač v hale</h3>
                  <p className="text-sm">Vhodný pre veľké komerčné priestory</p>
                </div>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow md:col-span-2 lg:col-span-1">
              <div className="aspect-[4/3] relative">
                <Image
                  src="/images/nadoba.jpg"
                  alt="Zásobník na kondenzát"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-semibold text-lg">Veľký zásobník</h3>
                  <p className="text-sm">Možnosť pripojenia do kanalizácie</p>
                </div>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow md:col-span-2">
              <div className="aspect-[16/6] relative">
                <Image
                  src="/images/banner1.png"
                  alt="Profesionálny prenájom odvlhčovačov"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="font-semibold text-2xl mb-2">Profesionálny prenájom odvlhčovačov</h3>
                  <p className="text-lg">Riešime problémy s vlhkosťou rýchlo a efektívne</p>
                </div>
              </div>
            </div>
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
              <h3 className="text-xl font-semibold mb-2 text-gray-900">1. Zavolajte nám</h3>
              <p className="text-gray-600 leading-relaxed">Jednoducho nás kontaktujte a popíšte váš problém. Radi vám poradíme a dohodneme najvhodnejšie riešenie. Bez zbytočných otázok, priamo k veci.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">2. Doručíme k vám</h3>
              <p className="text-gray-600 leading-relaxed">Rýchlo a spoľahlivo doručíme odvlhčovač priamo na vašu adresu v Trenčíne a okolí. Zariadenie vám pomôžeme nainštalovať a nastaviť podľa vašich potrieb.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">3. Necháte pracovať</h3>
              <p className="text-gray-600 leading-relaxed">Odvlhčovač pracuje automaticky a odstraňuje vlhkosť z vášho priestoru. Vy sa môžete venovať svojim bežným činnostiam bez obáv.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">4. Odvezieme späť</h3>
              <p className="text-gray-600 leading-relaxed">Keď je odvlhčovanie hotové, jednoducho nás zavoláte a my zariadenie odvezieme. Žiadne starosti, žiadne komplikácie. Všetko vyriešime za vás.</p>
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
                Pre Trenčín a okolie zvyčajne do 24 hodín od objednávky. V núdzových prípadoch (napr. po zatopení) sa snažíme doručiť ešte rýchlejšie. Vaša situácia je pre nás prioritou!
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
            Máte otázky alebo potrebujete poradiť? Radi vám pomôžeme s výberom správneho riešenia pre váš priestor v Trenčíne a okolí. Zavolajte nám ešte dnes a dohodneme sa na najlepšom riešení.
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
