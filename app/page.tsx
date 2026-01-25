import type { Metadata } from "next";
import Image from "next/image";
import CTA from "./components/CTA";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Prenájom Odvlhčovačov - Trenčiansky Kraj | Odvlhčovače na Prenájom",
  description: "Prenájom odvlhčovačov pre Trenčiansky kraj. Profesionálne zariadenia k dispozícii.",
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
              Odvlhčovač urýchľuje vysychanie stavebných materiálov a znižuje riziko vzniku plesní. Vhodné pre novostavby, rekonštrukcie a havarijné stavy.
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
                Rezervovať odvlhčovač
              </a>
              <a
                href="mailto:info@odvlhcovaceprenajom.sk"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition-all text-lg border-2 border-blue-600 shadow-md hover:shadow-lg text-center"
              >
                Overiť dostupnosť
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

      {/* Explanation Block */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                Čo odvlhčovač robí
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Odvlhčovač odstraňuje vlhkosť zo vzduchu kondenzáciou. Zariadenie nasáva vlhký vzduch, ochladzuje ho a kondenzovanú vodu zachytáva do zásobníka alebo odvádza priamo do kanalizácie.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Prevádzka znižuje relatívnu vlhkosť vzduchu, čím urýchľuje vysychanie omietok, poterov, farieb a stavebných materiálov. Zníženie vlhkosti skracuje technologické prestávky medzi jednotlivými fázami stavby.
              </p>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                Prečo je potrebný hneď
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Bez aktívneho odvlhčovania môže vysychanie stavebných materiálov trvať mesiace. Vysoká vlhkosť spomaľuje dokončenie stavby a zvyšuje riziko vzniku plesní už po 24-48 hodinách.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Odvlhčovač skracuje čas schnutia o 50-70%, čo umožňuje pokračovať v stavebných prácach bez oneskorenia. Rýchlejšie vyschnutie znamená nižšie náklady na opravy a skoré dokončenie projektu.
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200">
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900">
              Typické situácie použitia
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 text-gray-900">Novostavby po omietkach</h4>
                <p className="text-gray-700 text-sm leading-relaxed">Rýchlejšie a rovnomerné vyschnutie omietok, skrátenie času schnutia o 50-70%.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 text-gray-900">Potery</h4>
                <p className="text-gray-700 text-sm leading-relaxed">Odstránenie vlhkosti pred pokládkou podláh, prevencia poškodenia.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 text-gray-900">Maľovanie</h4>
                <p className="text-gray-700 text-sm leading-relaxed">Lepšie schnutie farby, prevencia plesní pod vrstvou farby.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 text-gray-900">Zatopené priestory</h4>
                <p className="text-gray-700 text-sm leading-relaxed">Rýchle odvlhčenie po záplavách, zníženie rizika poškodenia konštrukcie.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 text-gray-900">Pivnice</h4>
                <p className="text-gray-700 text-sm leading-relaxed">Odstránenie nadmernej vlhkosti, ochrana uskladnených vecí.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 text-gray-900">Bytové priestory</h4>
                <p className="text-gray-700 text-sm leading-relaxed">Zníženie vlhkosti v bytoch, prevencia vzniku plesní na stenách.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Price Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-50 border-b border-gray-200">
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
            Prečo prenájom odvlhčovačov?
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
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Rýchla dostupnosť</h3>
              <p className="text-gray-600 leading-relaxed">Rýchla dostupnosť pre Trenčín a okolie. Dohoda o prenájme je možná aj počas víkendov. Čím skôr sa začne s odvlhčovaním, tým menej škôd vznikne.</p>
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
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Profesionálne zariadenia</h3>
              <p className="text-gray-600 leading-relaxed">K dispozícii sú overené, výkonné odvlhčovače značky Rohnson. Zariadenia sú pred prenájmom skontrolované a majú výkon odvlhčovania až 51 litrov/deň.</p>
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
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Výhodnejšie ako kúpa</h3>
              <p className="text-gray-600 leading-relaxed">Prenájom odvlhčovačov je výhodnejší ako kúpa zariadenia na krátke obdobie. Ceny sú transparentné, bez skrytých poplatkov. Úspora oproti kúpe dosahuje tisíce eur.</p>
            </div>
          </div>
        </div>
      </section>

      {/* New Construction Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 leading-tight tracking-tight">
                Odvlhčovanie novostavieb
              </h2>
              <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                Po omietkach a poteroch zostáva v novostavbe veľké množstvo vlhkosti, ktorá sa prirodzene odparuje do vzduchu. Bez aktívneho odvlhčovania môže tento proces trvať mesiace, čo spomaľuje dokončenie stavby a zvyšuje riziko vzniku plesní.
              </p>
              <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                Prenájom odvlhčovačov pre novostavby v Trenčíne a okolí zabezpečuje rýchlejšie a rovnomerné vyschnutie omietok a poterov. Zariadenia odstraňujú vlhkosť zo vzduchu, čím skracujú čas schnutia a chráňajú stavbu pred poškodením. Odvlhčenie novostavby je vhodné aj po maľovaní a pred pokládkou podláh, aby sa zabezpečila optimálna vlhkosť pre finálne práce.
              </p>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Profesionálny prenájom odvlhčovačov pre Trenčín a okolie umožňuje dokončiť stavbu rýchlejšie a s nižším rizikom problémov s vlhkosťou.
              </p>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/odvlhcovac1-cfcd4dcc-1c2c-4747-a1ef-865033e6baa4.png"
                alt="Odvlhčovanie novostavieb"
                fill
                className="object-cover"
              />
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
                Ako prenájom funguje
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Prenájom prebieha v 4 krokoch. Zariadenie sa odovzdá a následne sa používa.
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
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Kontaktovanie a overenie dostupnosti</h3>
              <p className="text-gray-600 leading-relaxed">Kontaktovaním sa overí dostupnosť zariadenia a dohodne vhodný typ odvlhčovača podľa potrieb.</p>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Dohoda o prenájme</h3>
              <p className="text-gray-600 leading-relaxed">Dohoda o podmienkach prenájmu, čase prevzatia a dĺžke prenájmu.</p>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Odovzdanie zariadenia</h3>
              <p className="text-gray-600 leading-relaxed">Zariadenie sa odovzdá osobne v Trenčianskych Stankovciach s inštrukciami na nastavenie a obsluhu.</p>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Používanie zariadenia počas dohodnutej doby</h3>
              <p className="text-gray-600 leading-relaxed">Zariadenie sa používa počas dohodnutej doby prenájmu. Po ukončení sa dohodne vrátenie zariadenia.</p>
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
                Čas závisí od veľkosti priestoru a úrovne vlhkosti. Viditeľné zlepšenie je zvyčajne po 24-48 hodinách, úplné odvlhčenie trvá typicky 3-7 dní. Výkonné zariadenia pracujú efektívne a rýchlo.
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Ako rýchlo je možné získať odvlhčovač?</h3>
              <p className="text-gray-600 leading-relaxed">
                Odvlhčovač je možné prevziať osobne v Trenčianskych Stankovciach po dohode telefonicky. V núdzových prípadoch (napr. po zatopení) je dohoda možná aj počas víkendov.
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Je potrebná záloha?</h3>
              <p className="text-gray-600 leading-relaxed">
                Áno, záloha je požadovaná pri prevzatí zariadenia, čo je štandardná prax pri prenájme. Zvyšná suma sa platí po vrátení zariadenia. Podmienky sú transparentné a dohodnuté vopred.
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Je možné prenajať odvlhčovač na dlhšie obdobie?</h3>
              <p className="text-gray-600 leading-relaxed">
                Áno, prenájom je možné na dlhšie obdobie. Čím dlhšie obdobie, tým výhodnejšia cena. Dohoda o podmienkach prenájmu je možná podľa potrieb.
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Ako dlho treba odvlhčovať novostavbu po omietkach?</h3>
              <p className="text-gray-600 leading-relaxed">
                Odvlhčenie novostavby po omietkach zvyčajne trvá 2–4 týždne, v závislosti od veľkosti priestoru a počtu odvlhčovačov. Pri správnom nastavení zariadenia sa omietky vyschnú rýchlejšie a rovnomernie, čo umožní pokračovať v stavebných prácach bez oneskorenia.
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Je odvlhčovač vhodný aj po maľovaní?</h3>
              <p className="text-gray-600 leading-relaxed">
                Áno, odvlhčovač je vhodný aj po maľovaní. Odstraňuje nadmernú vlhkosť zo vzduchu, čím zabezpečuje lepšie schnutie farby a predchádza vzniku plesní pod vrstvou farby. Prenájom odvlhčovačov pre Trenčín a okolie je k dispozícii.
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Je možné odvlhčovať aj v zime?</h3>
              <p className="text-gray-600 leading-relaxed">
                Áno, odvlhčovače pracujú v teplotnom rozsahu 5–35°C, takže sú vhodné aj pre odvlhčenie novostavby v zime. V chladnejších mesiacoch je odvlhčovanie dôležitejšie, pretože prirodzené vetranie je obmedzené a vlhkosť sa hromadí v priestoroch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Kontakt a dostupnosť
          </h2>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Pre informácie o dostupnosti a výbere vhodného zariadenia pre priestor v Trenčianskom kraji je možné kontaktovať telefonicky alebo emailom.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+421911911876"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
            >
              +421 911 911 876
            </a>
            <a
              href="mailto:info@odvlhcovaceprenajom.sk"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-lg border-2 border-blue-600"
            >
              info@odvlhcovaceprenajom.sk
            </a>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
