import type { Metadata } from "next";
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
            Odvlhčovač po Zatopení
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Rýchla pomoc po zatopení. Prenájom odvlhčovačov pre Trenčín a okolie do 24 hodín.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Odvlhčovač po zatopení - rýchla pomoc pre Trenčín a okolie
            </h2>
            <p className="text-gray-700 mb-4 text-lg">
              Po zatopení je dôležité čo najrýchlejšie začať s odvlhčovaním, aby sa predišlo ďalším škodám a vzniku plesní. Ponúkame rýchly prenájom odvlhčovačov pre Trenčín a okolie s dostupnosťou do 24 hodín.
            </p>
            <p className="text-gray-700 mb-4 text-lg">
              Naše profesionálne odvlhčovače efektívne odstraňujú vlhkosť zo stien, podláh a vzduchu, čím pomáhajú obnoviť váš domov alebo podnik do pôvodného stavu. Čím skôr začnete s odvlhčovaním, tým menej škôd vznikne.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">
              Prečo je dôležité rýchle odvlhčovanie po zatopení?
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Predchádzanie vzniku plesní a húb</li>
              <li>Zabránenie ďalším škodám na konštrukcii</li>
              <li>Odstránenie nepríjemných pachov</li>
              <li>Zabránenie poškodeniu nábytku a vybavenia</li>
              <li>Rýchlejšia obnova priestoru</li>
            </ul>

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
            <p className="text-gray-700 mb-4 text-lg">
              Poskytujeme kompletnú službu vrátane rýchlej dopravy odvlhčovača, odborného poradenstva a technickej podpory. Naše zariadenia sú vhodné pre odvlhčovanie bytov, domov, kancelárií a iných priestorov postihnutých zatopením.
            </p>
            <p className="text-gray-700 mb-4 text-lg">
              Používame profesionálne priemyselné odvlhčovače značky <strong>Rohnson</strong> s vysokým výkonom, ktoré sú ideálne pre rýchle a efektívne odvlhčovanie po záplavách. Zariadenia majú vysoký prietok vzduchu a sú vhodné pre veľké priestory.
            </p>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
