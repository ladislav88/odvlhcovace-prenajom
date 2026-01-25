import type { Metadata } from "next";
import Image from "next/image";
import CTA from "../components/CTA";

export const metadata: Metadata = {
  title: "Odvlhčovač po Zatopení - Trenčiansky Kraj | Odvlhčovače na Prenájom",
  description: "Prenájom odvlhčovačov po zatopení pre Trenčiansky kraj. Profesionálna pomoc pri odvlhčovaní po záplavách.",
};

export default function OdvlhcovacPoZatopeni() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
            Rýchla pomoc po zatopení
          </h1>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Každá minúta sa počíta. Čím skôr sa začne s odvlhčovaním, tým menej škôd vznikne. Prenájom výkonných odvlhčovačov pre Trenčiansky kraj – v núdzových prípadoch je dohoda možná aj počas víkendov.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Odvlhčovanie po zatopení
            </h2>
            <p className="text-gray-700 mb-4 text-lg leading-relaxed">
              Po zatopení je každá minúta dôležitá. Čím skôr sa začne s odvlhčovaním, tým menej škôd vznikne a tým rýchlejšie sa priestor vráti do normálu. Prenájom výkonných odvlhčovačov pre Trenčiansky kraj je k dispozícii – v núdzových prípadoch je dohoda možná aj počas víkendov.
            </p>
            <p className="text-gray-700 mb-4 text-lg leading-relaxed">
              Profesionálne odvlhčovače efektívne odstraňujú vlhkosť zo stien, podláh a vzduchu, čím pomáhajú obnoviť priestor do pôvodného stavu. Rýchle odvlhčovanie chráni majetok a predchádza ďalším škodám.
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
                  <span><strong>Zdravotné riziká</strong> v dôsledku plesní a húb</span>
                </li>
              </ul>
            </div>
            <p className="text-gray-700 mb-4 text-lg leading-relaxed">
              <strong>Rýchle odvlhčovanie znamená:</strong> menej škôd, nižšie náklady na opravy, rýchlejšia obnova priestoru. Čím skôr sa začne s odvlhčovaním, tým lepšie výsledky.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">
              Postup po zatopení
            </h3>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
              <li>Kontaktovať čo najskôr – v núdzových prípadoch je dohoda možná aj počas víkendov</li>
              <li>Odstrániť stojacu vodu a vyčistiť priestor</li>
              <li>Odvlhčovač je možné umiestniť na vhodné miesto</li>
              <li>Odvlhčovanie prebieha kontinuálne až do úplného odvlhčenia</li>
              <li>Po dokončení sa dohodne vrátenie zariadenia</li>
            </ol>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">
              Odvlhčovanie po zatopení
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6 items-center">
              <div>
                <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                  K dispozícii je odborné poradenstvo a technická podpora. Zariadenia sú vhodné pre odvlhčovanie bytov, domov, kancelárií a iných priestorov postihnutých zatopením.
                </p>
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

      <CTA />
    </>
  );
}
