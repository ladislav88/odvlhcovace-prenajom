import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Odvlhčovač do Bytu - Trenčiansky Kraj | Odvlhčovače na Prenájom",
  description: "Prenájom odvlhčovačov do bytu pre Trenčín a okolie. Riešenie pre vlhké byty a problémy s vlhkosťou. Profesionálna služba a kvalitné zariadenia.",
};

export default function OdvlhcovacDoBytu() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[90rem] mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
            Zdravý domov bez vlhkosti
          </h1>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Riešenie pre vlhké byty v Trenčíne a okolí. Profesionálny prenájom tichých a efektívnych odvlhčovačov pre zdravé prostredie v byte.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/80 backdrop-blur-sm">
        <div className="max-w-[90rem] mx-auto">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Odvlhčovanie bytov
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6 items-center">
              <div>
                <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                  Nadmerná vlhkosť v byte môže spôsobiť množstvo problémov – od vlhkých stien, cez vznik plesní až po nepríjemné pachy. Prenájom odvlhčovačov do bytu poskytuje efektívne a rýchle riešenie pre odvlhčovanie bytových priestorov v Trenčíne a okolí.
                </p>
                <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                  K dispozícii je prenájom výkonných odvlhčovačov vhodných pre bytové priestory. Zariadenia sú kompaktné, tiché a efektívne, vhodné pre domáce prostredie.
                </p>
              </div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/vbyte-25d62767-f919-4fe4-a8e1-0ae27d81752a.png"
                  alt="Odvlhčovač v byte"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">
              Kedy je odvlhčovač do bytu potrebný?
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Vlhké steny a rohy v byte</li>
              <li>Vznik plesní na stenách alebo nábytku</li>
              <li>Nepríjemné pachy spôsobené vlhkosťou</li>
              <li>Zamlžovanie okien</li>
              <li>Vysoká relatívna vlhkosť vzduchu</li>
              <li>Problémy po zatopení alebo úniku vody</li>
            </ul>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">
              Výhody odvlhčovačov do bytu
            </h3>
            <p className="text-gray-700 mb-4 text-lg leading-relaxed">
              Odvlhčovače do bytu sú navrhnuté s dôrazom na tichú prevádzku, kompaktné rozmery a jednoduchú obsluhu. Zariadenia sú vhodné do obývacích izieb, spální, kuchýň alebo kúpeľní.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Kompaktné rozmery - vhodné pre bytové priestory</li>
              <li>Tichá prevádzka - neobťažuje pri bežnom živote</li>
              <li>Vysoká účinnosť odvlhčovania</li>
              <li>Nízka spotreba energie</li>
              <li>Automatické režimy a regulácia vlhkosti</li>
              <li>Jednoduchá obsluha a údržba</li>
            </ul>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">
              Priemyselné odvlhčovače Rohnson pre byty
            </h3>
            <p className="text-gray-700 mb-4 text-lg leading-relaxed">
              K dispozícii je prenájom priemyselných odvlhčovačov značky <strong>Rohnson</strong>, ktoré sú vhodné aj pre odvlhčovanie bytov. Zariadenia majú kompaktné rozmery, tichú prevádzku a vysokú účinnosť odvlhčovania. Nastavenie vlhkosti a časovač umožňujú presné riadenie podľa potrieb.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg my-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Vhodné aj po stavebných prácach
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Prenájom odvlhčovačov je ideálny pre odvlhčenie bytov po stavebných prácach v Trenčíne a okolí. Zariadenia efektívne odstraňujú vlhkosť po omietkach, poteroch, maľovaní a rekonštrukcii, čím skracujú čas schnutia a chráňajú interiér pred plesňami.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Po omietkach</strong> – Rýchlejšie vyschnutie, rovnomerné schnutie</li>
                <li>• <strong>Po poteroch</strong> – Odstránenie vlhkosti pred pokládkou podláh</li>
                <li>• <strong>Po maľovaní</strong> – Lepšie schnutie farby, prevencia plesní</li>
                <li>• <strong>Po rekonštrukcii</strong> – Odvlhčenie interiérov po stavebných prácach</li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">
              Ako prenájom funguje
            </h3>
            <p className="text-gray-700 mb-4 text-lg leading-relaxed">
              Odvlhčovač je možné prevziať osobne v Trenčianskych Stankovciach po dohode telefonicky. K dispozícii sú inštrukcie na nastavenie a obsluhu zariadenia podľa potrieb.
            </p>
            <p className="text-gray-700 mb-4 text-lg leading-relaxed">
              Prenájom je dostupný pre všetky byty v Trenčianskom kraji. Podmienky prenájmu sú flexibilné, technická podpora je k dispozícii počas celého obdobia prenájmu.
            </p>
          </div>
        </div>
      </section>

    </>
  );
}
