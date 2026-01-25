import type { Metadata } from "next";
import Image from "next/image";
import CTA from "../components/CTA";

export const metadata: Metadata = {
  title: "Odvlhčovač do Pivnice - Trenčiansky Kraj | Odvlhčovače na Prenájom",
  description: "Prenájom odvlhčovačov do pivnice pre Trenčiansky kraj. Efektívne riešenie pre vlhké pivnice. Profesionálna služba a kvalitné zariadenia.",
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
            Chráňte svoje uskladnené veci a zdravie! Efektívne riešenie pre vlhké pivnice v Trenčíne a okolí. Profesionálny prenájom výkonných odvlhčovačov – jednoducho, rýchlo a efektívne.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Vlhká pivnica? Máme riešenie!
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6 items-center">
              <div>
                <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                  Pivnice sú často postihnuté nadmernou vlhkosťou, ktorá môže spôsobiť vznik plesní, poškodenie vašich cenných uskladnených vecí a nepríjemné pachy. Nečakajte, kým sa problémy zhoršia – naše výkonné odvlhčovače sú špeciálne vhodné pre efektívne odvlhčovanie pivníc a iných podzemných priestorov.
                </p>
                <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                  Ponúkam prenájom profesionálnych odvlhčovačov do pivnice pre Trenčiansky kraj. Zariadenia efektívne odstraňujú vlhkosť zo vzduchu a pomáhajú udržať optimálnu vlhkosť v pivnici, čím chráni vaše uskladnené veci, predlžuje životnosť konštrukcie a zabezpečuje zdravé prostredie.
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
              Prečo potrebujete odvlhčovač do pivnice?
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
              Výhody našich odvlhčovačov do pivnice
            </h3>
            <p className="text-gray-700 mb-4 text-lg">
              Naše odvlhčovače sú vhodné pre rôzne veľkosti pivníc a poskytujú efektívne riešenie pre odvlhčovanie. Zariadenia sú jednoduché na obsluhu a majú automatické režimy, ktoré zabezpečujú optimálnu úroveň vlhkosti.
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
            <p className="text-gray-700 mb-4 text-lg">
              Ponúkame prenájom priemyselných odvlhčovačov značky <strong>Rohnson</strong>, ktoré sú ideálne pre odvlhčovanie pivníc. Zariadenia majú tichú prevádzku, automatické režimy a sú vhodné pre prevádzku v širokom rozsahu teplôt. Praktická rukoväť a kolieska umožňujú ľahký presun zariadenia.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">
              Ako funguje prenájom odvlhčovača do pivnice?
            </h3>
            <p className="text-gray-700 mb-4 text-lg">
              Kontaktujte ma a dohodneme sa na prevzatí vhodného odvlhčovača v Trenčianskych Stankovciach. Poradím vám s nastavením a obsluhou zariadenia podľa vašich potrieb.
            </p>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
