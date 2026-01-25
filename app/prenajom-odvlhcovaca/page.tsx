import type { Metadata } from "next";
import Image from "next/image";
import CTA from "../components/CTA";

export const metadata: Metadata = {
  title: "Prenájom Odvlhčovača - Trenčín a Okolie | Odvlhčovače na Prenájom",
  description: "Prenájom odvlhčovačov pre Trenčín a okolie. Rýchla dostupnosť, profesionálna služba a kvalitné zariadenia. Kontaktujte nás pre najlepšiu ponuku.",
};

export default function PrenajomOdvlhcovaca() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Prenájom Odvlhčovača
          </h1>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Riešte problémy s vlhkosťou jednoducho a efektívne. Profesionálny prenájom výkonných odvlhčovačov pre Trenčín a okolie. Kvalitné zariadenia, rýchla dostupnosť a pokoj pre vás.
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
              Či už máte problém s vlhkosťou v byte, dome, pivnici alebo komerčnom priestore – my máme riešenie! Ponúkame profesionálny prenájom výkonných odvlhčovačov pre domácnosti aj podniky v Trenčíne a okolí. Naše zariadenia sú ideálne pre akýkoľvek priestor postihnutý nadmernou vlhkosťou.
            </p>
            <p className="text-gray-700 mb-4 text-lg leading-relaxed">
              Všetky naše odvlhčovače sú pravidelne kontrolované a udržiavané v perfektnom stave. Zabezpečujeme vám maximálnu účinnosť, spoľahlivosť a pokoj. Poskytujeme kompletnú službu vrátane dopravy, inštalácie a odvozu zariadenia – vy sa nemusíte o nič starať.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">
              Prečo si vybrať práve náš prenájom?
            </h3>
            <div className="bg-gradient-to-r from-blue-50 to-white p-6 rounded-lg mb-6">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">✓</span>
                  <span><strong>Rýchla dostupnosť</strong> – Pre Trenčín a okolie sme tu do 24 hodín. V núdzových prípadoch ešte rýchlejšie!</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">✓</span>
                  <span><strong>Výkonné zariadenia</strong> – Používame len overené, profesionálne odvlhčovače značky Rohnson s maximálnym výkonom.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">✓</span>
                  <span><strong>Férové ceny</strong> – Transparentné ceny bez skrytých poplatkov. Ušetríte tisíce oproti kúpe zariadenia.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">✓</span>
                  <span><strong>Odborná podpora</strong> – Počas celého prenájmu sme tu pre vás. Radi poradíme a pomôžeme.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">✓</span>
                  <span><strong>Flexibilné podmienky</strong> – Prispôsobíme sa vašim potrebám. Kratší aj dlhší prenájom.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">✓</span>
                  <span><strong>Kompletná služba</strong> – Doprava, inštalácia, odvoz. Všetko vyriešime za vás!</span>
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">
              Kedy potrebujete odvlhčovač? Riešime to všetko!
            </h3>
            <p className="text-gray-700 mb-4 text-lg leading-relaxed">
              Odvlhčovač je nevyhnutný v mnohých situáciách – po zatopení, pri nadmernej vlhkosti v pivnici, vlhkých stenách v byte, v novostavbách, po maľovaní alebo pri akomkoľvek inom probléme s vlhkosťou. Naše výkonné zariadenia efektívne odstraňujú vlhkosť zo vzduchu a pomáhajú predchádzať vzniku plesní, húb a nepríjemných pachov. Chráňte svoj domov a zdravie svojej rodiny!
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">
              Výkonný pomocník aj do náročných prevádzok
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                  Odvlhčovač vzduchu značky <strong>Rohnson</strong> vám pomôže zbaviť sa prebytočnej vlhkosti vo vzduchu, vďaka čomu sa môžete zbaviť plesní na stenách, urýchliť vysúšanie stien po maľovaní, v novostavbách či pivniciach. Pre svoj vysoký výkon, dosahujúci až 51 l/deň, bude ideálnym zariadením do náročných prevádzok, ako sú práčovne či sušiarne alebo na reguláciu vlhkosti v skladovacích priestoroch.
                </p>
                <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                  Kondenzát sa zachytáva do zbernej nádoby, ale prostredníctvom hadice je možné kondenzát priamo odvádzať a nechať odvlhčovač pracovať nepretržite. Umývateľný prachový filter chráni zariadenie pred zanesením.
                </p>
              </div>
              <div className="relative rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/odvlhcovac1.jpg"
                  alt="Profesionálny odvlhčovač Rohnson"
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
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

      <CTA />
    </>
  );
}
