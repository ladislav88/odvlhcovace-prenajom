import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Odvlhčovač do Pivnice - Trenčiansky Kraj | Odvlhčovače na Prenájom",
  description: "Prenájom odvlhčovačov do pivnice pre Trenčín a okolie. Efektívne riešenie pre vlhké pivnice. Profesionálna služba a kvalitné zariadenia.",
};

export default function OdvlhcovacDoPivnice() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
            Zbavte sa vlhkosti v pivnici raz a navždy
          </h1>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Efektívne riešenie pre vlhké pivnice v Trenčíne a okolí. Profesionálny prenájom výkonných odvlhčovačov pre ochranu uskladnených vecí a zdravé prostredie.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Odvlhčovanie pivníc
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6 items-center">
              <div>
                <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                  Pivnice sú často postihnuté nadmernou vlhkosťou, ktorá môže spôsobiť vznik plesní, poškodenie uskladnených vecí a nepríjemné pachy. Prenájom výkonných odvlhčovačov je vhodný pre efektívne odvlhčovanie pivníc a iných podzemných priestorov.
                </p>
                <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                  K dispozícii je prenájom profesionálnych odvlhčovačov do pivnice pre Trenčín a okolie. Zariadenia efektívne odstraňujú vlhkosť zo vzduchu a pomáhajú udržať optimálnu vlhkosť v pivnici, čím chráni uskladnené veci, predlžuje životnosť konštrukcie a zabezpečuje zdravé prostredie.
                </p>
              </div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/vpivnici-23b01787-564f-4269-bf9e-f38421d86458.png"
                  alt="Odvlhčovač v pivnici"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">
              Prečo je odvlhčovač do pivnice potrebný?
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Odstránenie nadmernej vlhkosti zo vzduchu</li>
              <li>Predchádzanie vzniku plesní a húb</li>
              <li>Ochrana uskladnených vecí pred poškodením</li>
              <li>Odstránenie nepríjemných pachov</li>
              <li>Zlepšenie kvality vzduchu v pivnici</li>
              <li>Predlženie životnosti konštrukcie</li>
            </ul>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">
              Výhody odvlhčovačov do pivnice
            </h3>
            <p className="text-gray-700 mb-4 text-lg leading-relaxed">
              Odvlhčovače sú vhodné pre rôzne veľkosti pivníc a poskytujú efektívne riešenie pre odvlhčovanie. Zariadenia sú jednoduché na obsluhu a majú automatické režimy, ktoré zabezpečujú optimálnu úroveň vlhkosti.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Vysoká účinnosť odvlhčovania</li>
              <li>Tichá prevádzka</li>
              <li>Nízka spotreba energie</li>
              <li>Automatické režimy prevádzky</li>
              <li>Vhodné pre rôzne veľkosti pivníc</li>
            </ul>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">
              Priemyselné odvlhčovače Rohnson pre pivnice
            </h3>
            <p className="text-gray-700 mb-4 text-lg leading-relaxed">
              K dispozícii je prenájom priemyselných odvlhčovačov značky <strong>Rohnson</strong>, vhodných pre odvlhčovanie pivníc. Zariadenia majú tichú prevádzku, automatické režimy a sú vhodné pre prevádzku v širokom rozsahu teplôt. Praktická rukoväť a kolieska umožňujú ľahký presun zariadenia.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg my-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Vhodné aj po stavebných prácach
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Prenájom odvlhčovačov je vhodný aj pre odvlhčenie pivníc po stavebných prácach v Trenčíne a okolí. Zariadenia efektívne odstraňujú vlhkosť po omietkach, poteroch, maľovaní a rekonštrukcii, čím zabezpečujú rýchlejšie vyschnutie a ochranu pred plesňami.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Po omietkach</strong> – Rýchlejšie a rovnomerné vyschnutie</li>
                <li>• <strong>Po poteroch</strong> – Odstránenie vlhkosti pred dokončením</li>
                <li>• <strong>Po maľovaní</strong> – Lepšie schnutie farby, prevencia plesní</li>
                <li>• <strong>Po rekonštrukcii</strong> – Odvlhčenie po stavebných prácach</li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">
              Ako prenájom funguje
            </h3>
            <p className="text-gray-700 mb-4 text-lg leading-relaxed">
              Odvlhčovač je možné prevziať osobne v Trenčianskych Stankovciach po dohode telefonicky. K dispozícii sú inštrukcie na nastavenie a obsluhu zariadenia podľa potrieb.
            </p>
          </div>
        </div>
      </section>

    </>
  );
}
