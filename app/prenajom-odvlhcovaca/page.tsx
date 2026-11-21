import type { Metadata } from "next";
import Link from "next/link";
import CTA from "../components/CTA";
import { SITE_URL, SERVICE_JSON_LD } from "../lib/seo";

const title = "Prenájom odvlhčovača Trenčín | 8 € za deň";
const description = "Požičovňa odvlhčovačov a vysúšačov v Trenčíne a okolí. Cena 8 € / deň, minimálne 10 dní. Na stavbu, po zatopení, do bytu aj pivnice. Overte dostupnosť.";
export const metadata: Metadata = {title,description,alternates:{canonical:`${SITE_URL}/prenajom-odvlhcovaca`},openGraph:{title,description,url:`${SITE_URL}/prenajom-odvlhcovaca`}};
const breadcrumb = {"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Domov",item:SITE_URL},{"@type":"ListItem",position:2,name:"Prenájom odvlhčovača",item:`${SITE_URL}/prenajom-odvlhcovaca`}]};
export default function Prenajom() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(breadcrumb)}} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(SERVICE_JSON_LD)}} />
    <section className="bg-blue-50 px-4 sm:px-6 py-9 sm:py-12"><div className="max-w-5xl mx-auto">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">Prenájom odvlhčovača v Trenčíne a okolí</h1>
      <p className="text-lg text-gray-700 mb-5 leading-relaxed">Potrebujete vysúšať stavbu, znížiť vlhkosť v byte alebo riešiť následky úniku vody? Odvlhčovač si môžete prenajať na obdobie, počas ktorého ho potrebujete.</p>
      <p className="text-3xl font-bold text-blue-800">8 € / deň</p><p className="text-gray-700 mt-2 mb-5">Minimálne 10 dní · minimálna cena prenájmu 80 €</p>
      <a href="tel:+421911911876" className="inline-flex min-h-12 items-center rounded-lg bg-blue-700 px-5 py-3 text-white font-bold">Overiť dostupnosť: +421 911 911 876</a>
    </div></section>
    <section className="bg-white px-4 sm:px-6 py-10"><div className="max-w-5xl mx-auto space-y-8 text-lg text-gray-700 leading-relaxed">
      <div><h2 className="text-2xl text-gray-900 font-bold mb-3">Kedy sa oplatí prenájom vysúšača?</h2><p>Pri dočasnom probléme s vlhkosťou nemusíte kupovať vlastný odvlhčovač. Prenájom môže pomôcť po mokrých stavebných prácach, pri vlhkom interiéri alebo po havárii vody. Vhodnosť použitia závisí od podmienok v priestore.</p></div>
      <div><h2 className="text-2xl text-gray-900 font-bold mb-3">Vyberte podľa situácie</h2><ul className="list-disc pl-6 space-y-3">
        <li><Link className="text-blue-700 underline" href="/vysusanie-stavieb">Vysúšanie stavieb a novostavieb</Link> – po omietkach, poteroch a rekonštrukcii.</li>
        <li><Link className="text-blue-700 underline" href="/odvlhcovac-po-zatopeni">Odvlhčovanie po zatopení</Link> – po odstránení stojacej vody a príčiny úniku.</li>
        <li><Link className="text-blue-700 underline" href="/odvlhcovac-do-bytu">Odvlhčovač do bytu</Link> – pri nadmernej vlhkosti vzduchu a kondenzácii.</li>
        <li><Link className="text-blue-700 underline" href="/odvlhcovac-do-pivnice">Odvlhčovač do pivnice</Link> – zníženie vzdušnej vlhkosti v pivnici a suteréne.</li>
      </ul></div>
      <div><h2 className="text-2xl text-gray-900 font-bold mb-3">Ako dlho treba odvlhčovať?</h2><p>Rozhoduje množstvo vlhkosti v materiáloch, teplota a veľkosť priestoru. Minimálna doba prenájmu 10 dní nie je záruka vysušenia v danom čase. Pri podlahách a stavebných konštrukciách treba výsledok overiť meraním podľa požiadaviek konkrétneho materiálu.</p></div>
      <div><h2 className="text-2xl text-gray-900 font-bold mb-3">Čo odvlhčovač rieši a čo treba opraviť</h2><p>Zariadenie zachytáva vodu zo vzduchu a podporuje vysychanie. Samotné odvlhčovanie neopraví zatekanie, vzlínajúcu vodu ani neodstráni existujúcu pleseň. Ak vlhkosť neustále pribúda, treba riešiť aj jej zdroj.</p></div>
      <p>Pre dostupnosť prenájmu v Trenčíne a okolí nám zavolajte alebo využite <Link href="/kontakt" className="text-blue-700 underline">kontaktné údaje</Link>.</p>
    </div></section><CTA />
  </>;
}
