import type { Metadata } from "next";
import Image from "next/image";
import CTA from "../components/CTA";

export const metadata: Metadata = {
  title: "Odvlhčovač do Bytu - Trenčín a Okolie | Odvlhčovače na Prenájom",
  description: "Prenájom odvlhčovačov do bytu pre Trenčín a okolie. Riešenie pre vlhké byty a problémy s vlhkosťou. Profesionálna služba a kvalitné zariadenia.",
};

export default function OdvlhcovacDoBytu() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Zdravý domov bez vlhkosti
          </h1>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Chráňte zdravie svojej rodiny! Riešenie pre vlhké byty v Trenčíne a okolí. Profesionálny prenájom tichých a efektívnych odvlhčovačov – váš domov zaslúži zdravé prostredie.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Vlhkosť v byte? Riešime to za vás!
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                  Nadmerná vlhkosť v byte môže spôsobiť množstvo problémov – od vlhkých stien, cez vznik plesní až po nepríjemné pachy, ktoré ohrozujú zdravie vašej rodiny. Naše odvlhčovače do bytu poskytujú efektívne a rýchle riešenie pre odvlhčovanie bytových priestorov v Trenčíne a okolí.
                </p>
                <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                  Ponúkame prenájom výkonných odvlhčovačov vhodných pre bytové priestory. Tieto zariadenia sú kompaktné, tiché a efektívne, čím ideálne zapadajú do domáceho prostredia bez toho, aby vás obťažovali, a zároveň poskytujú vynikajúce výsledky. Váš domov zaslúži zdravé prostredie!
                </p>
              </div>
              <div className="relative rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/vbyte.jpg"
                  alt="Odvlhčovač v byte"
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">
              Kedy potrebujete odvlhčovač do bytu?
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
              Výhody našich odvlhčovačov do bytu
            </h3>
            <p className="text-gray-700 mb-4 text-lg">
              Naše odvlhčovače do bytu sú navrhnuté s dôrazom na tichú prevádzku, kompaktné rozmery a jednoduchú obsluhu. Ideálne sa hodia do obývacích izieb, spální, kuchýň alebo kúpeľní.
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
            <p className="text-gray-700 mb-4 text-lg">
              Ponúkame prenájom priemyselných odvlhčovačov značky <strong>Rohnson</strong>, ktoré sú vhodné aj pre odvlhčovanie bytov. Zariadenia majú kompaktné rozmery, tichú prevádzku a vysokú účinnosť odvlhčovania. Nastavenie vlhkosti a časovač umožňujú presné riadenie podľa vašich potrieb.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">
              Ako funguje prenájom odvlhčovača do bytu?
            </h3>
            <p className="text-gray-700 mb-4 text-lg">
              Kontaktujte nás a my vám doručíme vhodný odvlhčovač na vašu adresu v Trenčíne a okolí. Zariadenie vám pomôžeme nainštalovať a nastaviť podľa vašich potrieb. Po dokončení odvlhčovania zariadenie odvezieme späť.
            </p>
            <p className="text-gray-700 mb-4 text-lg">
              Naša služba je dostupná pre všetky byty v Trenčíne a okolí. Poskytujeme flexibilné podmienky prenájmu a odbornú podporu počas celého obdobia prenájmu.
            </p>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
