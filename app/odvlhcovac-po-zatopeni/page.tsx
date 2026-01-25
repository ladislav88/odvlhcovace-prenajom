import type { Metadata } from "next";
import Image from "next/image";
import CTA from "../components/CTA";

export const metadata: Metadata = {
  title: "Odvlhčovač po Zatopení - Trenčín a Okolie | Odvlhčovače na Prenájom",
  description: "Prenájom odvlhčovačov po zatopení pre Trenčín a okolie. Rýchla dostupnosť do 24 hodín. Profesionálna pomoc pri odvlhčovaní po záplavách.",
};

export default function OdvlhcovacPoZatopeni() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Rýchla pomoc po zatopení
          </h1>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Každá minúta sa počíta! Čím skôr začnete s odvlhčovaním, tým menej škôd vznikne. Prenájom výkonných odvlhčovačov pre Trenčín a okolie – dostupní do 24 hodín, v núdzových prípadoch ešte rýchlejšie.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Zatopenie? Nezúfajte – máme riešenie!
            </h2>
            <p className="text-gray-700 mb-4 text-lg leading-relaxed">
              Po zatopení je každá minúta dôležitá. Čím skôr začnete s odvlhčovaním, tým menej škôd vznikne a tým rýchlejšie sa váš domov vráti do normálu. Ponúkame rýchly prenájom výkonných odvlhčovačov pre Trenčín a okolie s dostupnosťou do 24 hodín – v núdzových prípadoch sme tu ešte rýchlejšie!
            </p>
            <p className="text-gray-700 mb-4 text-lg leading-relaxed">
              Naše profesionálne odvlhčovače efektívne odstraňujú vlhkosť zo stien, podláh a vzduchu, čím pomáhajú obnoviť váš domov alebo podnik do pôvodného stavu. Chráňte svoj majetok a zdravie svojej rodiny – nečakajte, kým sa problémy zhoršia!
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">
              Prečo je rýchle odvlhčovanie kritické?
            </h3>
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg mb-6">
              <p className="text-gray-700 mb-4 font-semibold">Každá hodina oneskorenia môže spôsobiť ďalšie škody:</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-3">⚠</span>
                  <span><strong>Plesne a húby</strong> sa môžu začať tvoriť už po 24-48 hodinách</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-3">⚠</span>
                  <span><strong>Poškodenie konštrukcie</strong> – vlhkosť ničí steny, podlahy a stropy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-3">⚠</span>
                  <span><strong>Nepríjemné pachy</strong> sa môžu usadiť natrvalo</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-3">⚠</span>
                  <span><strong>Poškodenie nábytku</strong> a cenných vecí</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-3">⚠</span>
                  <span><strong>Zdravotné riziká</strong> pre vás a vašu rodinu</span>
                </li>
              </ul>
            </div>
            <p className="text-gray-700 mb-4 text-lg leading-relaxed">
              <strong>Rýchle odvlhčovanie znamená:</strong> menej škôd, nižšie náklady na opravy, rýchlejšia obnova priestoru a pokoj pre vás a vašu rodinu. Nečakajte – zavolajte nám ešte dnes!
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">
              Ako postupovať po zatopení?
            </h3>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
              <li>Kontaktujte nás čo najskôr - dostupnosť do 24 hodín pre Trenčín a okolie</li>
              <li>Odstráňte stojacu vodu a vyčistite priestor</li>
              <li>Nainštalujeme odvlhčovač na vhodné miesto</li>
              <li>Odvlhčovač pracuje kontinuálne až do úplného odvlhčenia</li>
              <li>Po dokončení zariadenie odvezíme</li>
            </ol>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">
              Naše služby po zatopení
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                  Poskytujeme kompletnú službu vrátane rýchlej dopravy odvlhčovača, odborného poradenstva a technickej podpory. Naše zariadenia sú vhodné pre odvlhčovanie bytov, domov, kancelárií a iných priestorov postihnutých zatopením.
                </p>
                <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                  Používame profesionálne priemyselné odvlhčovače značky <strong>Rohnson</strong> s vysokým výkonom až 51 litrov/deň, ktoré sú ideálne pre rýchle a efektívne odvlhčovanie po záplavách. Zariadenia majú vysoký prietok vzduchu 450 m³/h a sú vhodné pre veľké priestory. Vďaka možnosti pripojenia hadičkou priamo do kanalizácie môže zariadenie pracovať nepretržite bez potreby vyprazdňovania zásobníka.
                </p>
              </div>
              <div className="relative rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/odvlhcovac2.jpg"
                  alt="Odvlhčovač po zatopení"
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
