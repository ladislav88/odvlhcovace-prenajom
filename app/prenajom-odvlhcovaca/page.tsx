import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Prenájom Odvlhčovača - Trenčiansky Kraj | Odvlhčovače na Prenájom",
  description: "Prenájom odvlhčovačov pre Trenčín a okolie. Profesionálne zariadenia k dispozícii.",
};

export default function PrenajomOdvlhcovaca() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
            Prenájom Odvlhčovača
          </h1>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Riešenie problémov s vlhkosťou jednoducho a efektívne. Profesionálny prenájom výkonných odvlhčovačov pre Trenčín a okolie. Kvalitné zariadenia k dispozícii.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Riešenie pre každý problém s vlhkosťou
            </h2>
            <p className="text-gray-700 mb-4 text-lg leading-relaxed">
              Prenájom odvlhčovačov je vhodný pre riešenie problémov s vlhkosťou v byte, dome, pivnici alebo komerčnom priestore. Profesionálny prenájom výkonných odvlhčovačov je k dispozícii pre domácnosti aj podniky v Trenčíne a okolí. Zariadenia sú vhodné pre priestory postihnuté nadmernou vlhkosťou.
            </p>
            <p className="text-gray-700 mb-4 text-lg leading-relaxed">
              Odvlhčovače sú pravidelne kontrolované a udržiavané v perfektnom stave. Zariadenia zabezpečujú maximálnu účinnosť a spoľahlivosť. K dispozícii sú inštrukcie na nastavenie a obsluhu zariadenia.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">
              Prečo prenájom odvlhčovačov?
            </h3>
            <div className="bg-gradient-to-r from-blue-50 to-white p-6 rounded-lg mb-6">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">✓</span>
                  <span><strong>Rýchla dostupnosť</strong> – Prenájom je k dispozícii v Trenčianskom kraji. V núdzových prípadoch je dohoda možná aj počas víkendov.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">✓</span>
                  <span><strong>Výkonné zariadenia</strong> – K dispozícii sú overené, profesionálne odvlhčovače značky Rohnson s maximálnym výkonom.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">✓</span>
                  <span><strong>Férové ceny</strong> – Transparentné ceny bez skrytých poplatkov. Úspora oproti kúpe zariadenia dosahuje tisíce eur.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">✓</span>
                  <span><strong>Technická podpora</strong> – Počas celého prenájmu je k dispozícii technická podpora a inštrukcie.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">✓</span>
                  <span><strong>Flexibilné podmienky</strong> – Prenájom je možné na kratšie aj dlhšie obdobie podľa potrieb.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">✓</span>
                  <span><strong>Jednoduchá služba</strong> – Prevzatie osobne v Trenčianskych Stankovciach. K dispozícii sú inštrukcie na nastavenie.</span>
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">
              Kedy je odvlhčovač potrebný?
            </h3>
            <p className="text-gray-700 mb-4 text-lg leading-relaxed">
              Odvlhčovač je nevyhnutný v mnohých situáciách – po zatopení, pri nadmernej vlhkosti v pivnici, vlhkých stenách v byte, v novostavbách, po maľovaní alebo pri akomkoľvek inom probléme s vlhkosťou. Výkonné zariadenia efektívne odstraňujú vlhkosť zo vzduchu a pomáhajú predchádzať vzniku plesní, húb a nepríjemných pachov.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg my-8">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                Vhodné aj po stavebných prácach
              </h3>
              <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                Prenájom odvlhčovačov je ideálny pre odvlhčenie novostavby a interiérov po stavebných prácach v Trenčíne a okolí. Zariadenia efektívne odstraňujú vlhkosť po omietkach, poteroch, maľovaní a rekonštrukcii.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">•</span>
                  <span><strong>Po omietkach</strong> – Rýchlejšie a rovnomerné vyschnutie, skrátenie času schnutia o 50–70%</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">•</span>
                  <span><strong>Po poteroch</strong> – Odstránenie vlhkosti pred pokládkou podláh, prevencia poškodenia</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">•</span>
                  <span><strong>Po maľovaní</strong> – Lepšie schnutie farby, ochrana pred plesňami pod vrstvou farby</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">•</span>
                  <span><strong>Po rekonštrukcii</strong> – Odvlhčenie interiérov po stavebných prácach, ochrana stavby</span>
                </li>
              </ul>
              <p className="text-gray-700 mt-4 text-lg leading-relaxed">
                Odvlhčenie novostavby pomocou profesionálnych odvlhčovačov zabezpečuje rýchlejšie dokončenie stavby a chráni pred problémami s vlhkosťou.
              </p>
            </div>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">
              Výkonný pomocník aj do náročných prevádzok
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6 items-center">
              <div>
                <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                  Odvlhčovač vzduchu značky <strong>Rohnson</strong> odstraňuje prebytočnú vlhkosť zo vzduchu, čím pomáha zbaviť sa plesní na stenách, urýchľuje vysúšanie stien po maľovaní, v novostavbách či pivniciach. Vďaka vysokému výkonu, dosahujúcemu až 51 l/deň, je vhodný do náročných prevádzok, ako sú práčovne či sušiarne alebo na reguláciu vlhkosti v skladovacích priestoroch.
                </p>
                <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                  Kondenzát sa zachytáva do zbernej nádoby, ale prostredníctvom hadice je možné kondenzát priamo odvádzať a nechať odvlhčovač pracovať nepretržite. Umývateľný prachový filter chráni zariadenie pred zanesením.
                </p>
              </div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/odvlhcovac1-cfcd4dcc-1c2c-4747-a1ef-865033e6baa4.png"
                  alt="Profesionálny odvlhčovač Rohnson"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg my-6">
              <h4 className="text-xl font-semibold mb-4 text-gray-900">Technické špecifikácie</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-semibold mb-2 text-gray-900">Výkon a kapacita</h5>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Výkon odvlhčovania dosahuje až <strong>51 litrov/deň</strong></li>
                    <li>• Objem prietoku vzduchu <strong>450 m³/h</strong></li>
                    <li>• Vhodný pre veľké priestory</li>
                    <li>• Možnosť pripojiť hadičkou priamo do kanalizácie</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold mb-2 text-gray-900">Technické parametre</h5>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Prevádzková teplota <strong>5 – 35 °C</strong></li>
                    <li>• Funkcia nepretržitého chodu</li>
                    <li>• Funkcia automatického vypnutia pri naplnení nádoby na vodu</li>
                    <li>• Jednoduché presunutie prístroja vďaka kolieskam a rukoväti</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg my-6">
              <h4 className="text-xl font-semibold mb-4 text-gray-900">Výhody zariadenia</h4>
              <p className="text-gray-700 mb-4">
                Odvlhčovač vzduchu má vysokú hodnotu prietoku vzduchu až 450 m³/h, vďaka čomu je vhodný aj do náročných prevádzok, kde zvládne za deň odvlhčiť až 51 litrov vody. Svojím vyhotovením zvládne efektívne pracovať vo veľkých priestoroch.
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-700">
                <li>✓ Vysoký výkon odvlhčovania až 51 l/deň</li>
                <li>✓ Vysoký prietok vzduchu 450 m³/h</li>
                <li>✓ Funkcia nepretržitého chodu</li>
                <li>✓ Automatické vypnutie pri naplnení nádoby</li>
                <li>✓ Možnosť pripojenia hadičkou do kanalizácie</li>
                <li>✓ Umývateľný prachový filter</li>
                <li>✓ Kolieska a rukoväť pre ľahký presun</li>
                <li>✓ Vhodný pre veľké priestory a náročné prevádzky</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
