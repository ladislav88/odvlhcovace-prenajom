import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Prenájom odvlhčovačov Trenčín | Osobný odber",
  description: "Prenájom výkonných odvlhčovačov v Trenčíne. Ideálne po zatopení, do pivníc, bytov a novostavieb. Osobný odber po dohode.",
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[550px] md:h-[650px] overflow-hidden">
        {/* Background Image - Mirrored */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/banner1-65d937a1-b951-411e-a1c5-9b350f935197.png"
            alt="Profesionálny odvlhčovač Rohnson"
            fill
            className="object-cover scale-x-[-1]"
            priority
          />
        </div>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20"></div>
        {/* Content Overlay */}
        <div className="relative z-10 h-full flex flex-col justify-between py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="text-white max-w-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight tracking-tight drop-shadow-lg">
                <span className="block whitespace-nowrap">Prenájom odvlhčovačov</span>
                <span className="block">v Trenčíne</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 leading-relaxed drop-shadow-md">
                Rýchle riešenie vlhkosti po zatopení,&nbsp;pri stavbe alebo v pivnici
              </h2>
              <p className="text-xl md:text-2xl mb-6 leading-relaxed drop-shadow-md">
                Odvlhčovač urýchľuje vysychanie stavebných materiálov a znižuje riziko vzniku plesní. Vhodné pre novostavby, rekonštrukcie a havarijné stavy.
              </p>
              <div className="mb-8">
                <p className="text-2xl md:text-3xl font-bold text-blue-300 mb-2 drop-shadow-lg">
                  7 € / deň
                </p>
                <p className="text-gray-200 text-lg drop-shadow-md">
                  minimálne 7 dní
                </p>
              </div>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mb-8">
            <div className="flex flex-col sm:flex-row gap-4 justify-end">
              <a
                href="mailto:info@odvlhcovaceprenajom.sk"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition-all text-lg border-2 border-white shadow-md hover:shadow-lg flex items-center justify-center gap-3"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Napísať email
              </a>
              <a
                href="tel:+421911911876"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition-all text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-3"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Zavolať – rýchla dohoda odberu
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Explanation Block */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
              Čo odvlhčovač robí a prečo to riešiť hneď
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Odvlhčovač vzduchu Trenčín odstraňuje vlhkosť zo vzduchu kondenzáciou. Zariadenie nasáva vlhký vzduch, ochladzuje ho a kondenzovanú vodu zachytáva do zásobníka alebo odvádza priamo do kanalizácie. Prevádzka znižuje relatívnu vlhkosť vzduchu, čím urýchľuje vysychanie omietok, poterov, farieb a stavebných materiálov.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Bez aktívneho odvlhčovania môže vysychanie stavebných materiálov trvať mesiace. Vysoká vlhkosť spomaľuje dokončenie stavby a zvyšuje riziko vzniku plesní už po 24-48 hodinách.
            </p>
          </div>
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 text-gray-900">Úspora času a peňazí</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">•</span>
                <span>Odvlhčovač skracuje čas schnutia o 50-70%, čo umožňuje pokračovať v stavebných prácach bez oneskorenia</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">•</span>
                <span>Zníženie vlhkosti skracuje technologické prestávky medzi jednotlivými fázami stavby</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">•</span>
                <span>Rýchlejšie vyschnutie znamená nižšie náklady na opravy a skoré dokončenie projektu</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Price Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-xl md:text-2xl text-gray-700">
            <span className="font-semibold">Cena prenájmu:</span> <span className="text-blue-600 font-bold text-2xl md:text-3xl">7 € / deň</span> <span className="text-gray-600">(min. 7 dní)</span>
          </p>
        </div>
      </section>

      {/* New Construction Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 leading-tight tracking-tight">
                Odvlhčovanie novostavieb
              </h2>
              <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                Po omietkach a poteroch zostáva v novostavbe veľké množstvo vlhkosti, ktorá sa prirodzene odparuje do vzduchu. Bez aktívneho odvlhčovania môže tento proces trvať mesiace, čo spomaľuje dokončenie stavby a zvyšuje riziko vzniku plesní.
              </p>
              <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                Prenájom odvlhčovačov pre novostavby v Trenčíne a okolí zabezpečuje rýchlejšie a rovnomerné vyschnutie omietok a poterov. Zariadenia odstraňujú vlhkosť zo vzduchu, čím skracujú čas schnutia a chráňajú stavbu pred poškodením. Odvlhčenie novostavby je vhodné aj po maľovaní a pred pokládkou podláh, aby sa zabezpečila optimálna vlhkosť pre finálne práce.
              </p>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Prenájom odvlhčovačov pre Trenčín a okolie umožňuje dokončiť stavbu rýchlejšie a s nižším rizikom problémov s vlhkosťou.
              </p>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/odvlhcovac1-cfcd4dcc-1c2c-4747-a1ef-865033e6baa4.png"
                alt="Odvlhčovanie novostavieb"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Ako prenájom funguje
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Prenájom odvlhčovača Trenčín prebieha v 4 krokoch. Zariadenie sa odovzdá a následne sa používa.
              </p>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/odvlhcovac2-4c7245ad-c7db-4e5f-a20a-02cf50ea8f0d.png"
                alt="Odvlhčovač v prevádzke"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Kontaktovanie a overenie dostupnosti</h3>
              <p className="text-gray-600 leading-relaxed">Kontaktovaním sa overí dostupnosť zariadenia a dohodne vhodný typ odvlhčovača podľa potrieb.</p>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Dohoda o prenájme</h3>
              <p className="text-gray-600 leading-relaxed">Dohoda o podmienkach prenájmu, čase prevzatia a dĺžke prenájmu.</p>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Odovzdanie zariadenia</h3>
              <p className="text-gray-600 leading-relaxed">Zariadenie sa odovzdá osobne v Trenčianskych Stankovciach s inštrukciami na nastavenie a obsluhu.</p>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Používanie zariadenia počas dohodnutej doby</h3>
              <p className="text-gray-600 leading-relaxed">Zariadenie sa používa počas dohodnutej doby prenájmu. Po ukončení sa dohodne vrátenie zariadenia.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Často kladené otázky
          </h2>
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Ako dlho trvá odvlhčovanie?</h3>
              <p className="text-gray-600 leading-relaxed mb-3">
                Odvlhčovanie je postupný proces, ktorý prebieha niekoľko dní. Zariadenie sa v praxi používa nepretržite minimálne 7 dní, aby sa vlhkosť odstránila nielen zo vzduchu, ale aj z materiálov ako omietky, potery a murivo.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Krátkodobé zapnutie rieši len povrchovú vlhkosť a problém sa môže po vypnutí zariadenia opäť vrátiť.
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Prečo je minimálna doba prenájmu 7 dní?</h3>
              <p className="text-gray-600 leading-relaxed mb-3">
                Štandardná doba odvlhčovania je 7 dní a viac. Táto doba zabezpečuje:
              </p>
              <ul className="list-disc list-inside text-gray-600 leading-relaxed space-y-1 ml-4">
                <li>rovnomerné vysychanie konštrukcií</li>
                <li>trvalý výsledok bez návratu vlhkosti</li>
                <li>zmysluplné použitie výkonného odvlhčovača</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-3">
                Kratší prenájom by vo väčšine prípadov nepriniesol stabilný efekt.
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Ako rýchlo je možné získať odvlhčovač?</h3>
              <p className="text-gray-600 leading-relaxed">
                Odvlhčovač je možné prevziať osobne po dohode. Rýchla dostupnosť je zabezpečená pre Trenčín a okolie. Odvlhčovanie po zatopení Trenčín je možné dohodnúť aj počas víkendov.
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Je potrebná záloha?</h3>
              <p className="text-gray-600 leading-relaxed">
                Pri prevzatí zariadenia sa vyžaduje vratná záloha. Výška zálohy a podmienky prenájmu sú dohodnuté vopred a sú transparentné.
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Je možné prenajať odvlhčovač na dlhšie obdobie?</h3>
              <p className="text-gray-600 leading-relaxed mb-3">
                Áno. Odvlhčovače sa často používajú niekoľko týždňov, najmä pri novostavbách alebo rozsiahlejších rekonštrukciách. Dlhší prenájom je vhodný pri:
              </p>
              <ul className="list-disc list-inside text-gray-600 leading-relaxed space-y-1 ml-4">
                <li>vysychaní omietok a poterov</li>
                <li>príprave priestorov pred maľovaním</li>
                <li>trvalých problémoch s vlhkosťou</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Ako dlho treba odvlhčovať novostavbu po omietkach?</h3>
              <p className="text-gray-600 leading-relaxed mb-3">
                Po omietkach a poteroch je bežné odvlhčovanie 2–4 týždne, v závislosti od:
              </p>
              <ul className="list-disc list-inside text-gray-600 leading-relaxed space-y-1 ml-4 mb-3">
                <li>veľkosti priestoru</li>
                <li>typu materiálov</li>
                <li>množstva zvyškovej stavebnej vlhkosti</li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                Správne nastavený odvlhčovač urýchľuje schnutie a umožňuje pokračovať v stavebných prácach bez zbytočných prestojov.
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Je odvlhčovač vhodný aj po maľovaní?</h3>
              <p className="text-gray-600 leading-relaxed mb-3">
                Áno. Odvlhčovanie po maľovaní pomáha:
              </p>
              <ul className="list-disc list-inside text-gray-600 leading-relaxed space-y-1 ml-4 mb-3">
                <li>rovnomernému vysychaniu farby</li>
                <li>zníženiu vlhkosti v podklade</li>
                <li>prevencii vzniku plesní pod náterom</li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                Použitie odvlhčovača je vhodné najmä v uzavretých alebo málo vetraných priestoroch.
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Je možné odvlhčovať aj v zime?</h3>
              <p className="text-gray-600 leading-relaxed">
                Áno. Zariadenia sú určené na prevádzku približne v rozsahu 5–35 °C. V zimných mesiacoch je odvlhčovanie často ešte dôležitejšie, keďže prirodzené vetranie je obmedzené a vlhkosť sa hromadí v interiéri.
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">V akých prípadoch sa odvlhčovač najčastejšie používa?</h3>
              <p className="text-gray-600 leading-relaxed mb-3">
                Odvlhčovače sa používajú najmä:
              </p>
              <ul className="list-disc list-inside text-gray-600 leading-relaxed space-y-1 ml-4">
                <li>po zatopení alebo havárii vody</li>
                <li>v pivniciach a suterénoch</li>
                <li>v bytoch s vysokou vlhkosťou</li>
                <li>v novostavbách po omietkach a poteroch</li>
                <li>pred maľovaním alebo pokládkou podláh</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-3">
                Prenájom odvlhčovačov pre byty a domy Trenčín je k dispozícii po dohode.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Kontakt a dostupnosť
          </h2>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Pre overenie dostupnosti odvlhčovača je najrýchlejší telefonický kontakt.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="tel:+421911911876"
              className="text-blue-600 hover:text-blue-700 font-semibold text-xl"
            >
              +421 911 911 876
            </a>
            <a
              href="mailto:info@odvlhcovaceprenajom.sk"
              className="text-gray-700 hover:text-gray-900 font-medium"
            >
              info@odvlhcovaceprenajom.sk
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
