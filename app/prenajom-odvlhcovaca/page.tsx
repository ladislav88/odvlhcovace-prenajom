import type { Metadata } from "next";
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
          <p className="text-xl text-gray-700 mb-8">
            Profesionálny prenájom odvlhčovačov pre Trenčín a okolie. Kvalitné zariadenia a rýchla dostupnosť.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Prenájom odvlhčovačov pre Trenčín a okolie
            </h2>
            <p className="text-gray-700 mb-4 text-lg">
              Ponúkame profesionálny prenájom odvlhčovačov pre domácnosti aj podniky v Trenčíne a okolí. Naše zariadenia sú ideálne pre odvlhčovanie bytov, domov, pivníc, kancelárií a iných priestorov postihnutých nadmernou vlhkosťou.
            </p>
            <p className="text-gray-700 mb-4 text-lg">
              Všetky naše odvlhčovače sú pravidelne kontrolované a udržiavané, aby sme vám zabezpečili maximálnu účinnosť a spoľahlivosť. Poskytujeme kompletnú službu vrátane dopravy, inštalácie a odvozu zariadenia.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">
              Prečo si vybrať náš prenájom odvlhčovačov?
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Rýchla dostupnosť pre Trenčín a okolie do 24 hodín</li>
              <li>Kvalitné a profesionálne zariadenia</li>
              <li>Transparentné ceny bez skrytých poplatkov</li>
              <li>Odborná podpora počas celého prenájmu</li>
              <li>Flexibilné podmienky prenájmu</li>
              <li>Kompletná služba vrátane dopravy a odvozu</li>
            </ul>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">
              Kedy potrebujete odvlhčovač?
            </h3>
            <p className="text-gray-700 mb-4 text-lg">
              Odvlhčovač je nevyhnutný v prípade zatopenia, nadmernej vlhkosti v pivnici, vlhkých stien v byte alebo akéhokoľvek iného problému s vlhkosťou. Naše zariadenia efektívne odstraňujú vlhkosť zo vzduchu a pomáhajú predchádzať vzniku plesní a nepríjemných pachov.
            </p>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
