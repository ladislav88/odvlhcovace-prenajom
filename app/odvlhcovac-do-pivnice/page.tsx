import type { Metadata } from "next";
import CTA from "../components/CTA";

export const metadata: Metadata = {
  title: "Odvlhčovač do Pivnice - Trenčín a Okolie | Odvlhčovače na Prenájom",
  description: "Prenájom odvlhčovačov do pivnice pre Trenčín a okolie. Efektívne riešenie pre vlhké pivnice. Profesionálna služba a kvalitné zariadenia.",
};

export default function OdvlhcovacDoPivnice() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Odvlhčovač do Pivnice
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Efektívne riešenie pre vlhké pivnice. Prenájom odvlhčovačov pre Trenčín a okolie.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Odvlhčovač do pivnice - riešenie pre vlhkosť v Trenčíne a okolí
            </h2>
            <p className="text-gray-700 mb-4 text-lg">
              Pivnice sú často postihnuté nadmernou vlhkosťou, ktorá môže spôsobiť vznik plesní, poškodenie uskladnených vecí a nepríjemné pachy. Naše odvlhčovače sú špeciálne navrhnuté pre efektívne odvlhčovanie pivníc a iných podzemných priestorov.
            </p>
            <p className="text-gray-700 mb-4 text-lg">
              Ponúkame prenájom odvlhčovačov do pivnice pre Trenčín a okolie. Naše zariadenia efektívne odstraňujú vlhkosť zo vzduchu a pomáhajú udržať optimálnu vlhkosť v pivnici, čím chráni vaše uskladnené veci a predlžuje životnosť konštrukcie.
            </p>

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
              Ako funguje prenájom odvlhčovača do pivnice?
            </h3>
            <p className="text-gray-700 mb-4 text-lg">
              Kontaktujte nás a my vám doručíme vhodný odvlhčovač na vašu adresu v Trenčíne a okolí. Zariadenie nainštalujeme a nastavíme podľa vašich potrieb. Po dokončení odvlhčovania zariadenie odvezieme späť.
            </p>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
