import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTA from "../components/CTA";
import { SITE_URL, SERVICE_JSON_LD } from "../lib/seo";

const title = "Vysúšanie stavieb Trenčín | Prenájom odvlhčovača";
const description = "Vysúšanie stavieb a novostavieb: prenájom odvlhčovača pre Trenčín a Trenčiansky kraj. Po omietkach, poteroch a rekonštrukcii. 8 € / deň, min. 10 dní.";
export const metadata: Metadata = {
  title, description,
  alternates: { canonical: `${SITE_URL}/vysusanie-stavieb` },
  openGraph: { title, description, url: `${SITE_URL}/vysusanie-stavieb`, type: "website", locale: "sk_SK", images: [{url: `${SITE_URL}/images/odvlhcovac-novostavby.webp`, alt: "Ilustrácia vysúšania novostavby"}] },
  twitter: {card: "summary_large_image", title, description},
};
const breadcrumb = {"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[
  {"@type":"ListItem",position:1,name:"Domov",item:SITE_URL},
  {"@type":"ListItem",position:2,name:"Vysúšanie stavieb",item:`${SITE_URL}/vysusanie-stavieb`},
]};
export default function VysusanieStavieb() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(breadcrumb)}} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({...SERVICE_JSON_LD, name: "Prenájom odvlhčovača na vysúšanie stavieb v Trenčíne", serviceType: "Prenájom odvlhčovača na vysúšanie stavieb", url: `${SITE_URL}/vysusanie-stavieb`, description})}} />
    <section className="bg-blue-50 py-16 ">
      <div className="site-container mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Vysúšanie stavieb a novostavieb v Trenčíne</h1>
        <p className="text-xl text-gray-700">Po omietkach, poteroch alebo rekonštrukcii zostáva v stavbe vlhkosť. Prenajatý odvlhčovač pomáha odvádzať vodu zo vzduchu a podporuje postupné vysychanie materiálov.</p>
        <p className="mt-6 text-2xl font-semibold text-blue-700">Prenájom 8 € / deň · minimálne 10 dní</p>
        <a href="tel:+421911911876" className="inline-block mt-6 rounded-lg bg-blue-600 px-6 py-3 text-white font-semibold">Overiť dostupnosť: +421 911 911 876</a>
      </div>
    </section>
    <section className="site-container mx-auto py-12 space-y-8 text-lg text-gray-700 leading-relaxed">
      <Image src="/images/odvlhcovac-novostavby.webp" alt="Ilustračný obrázok odvlhčovania novostavby" width={1200} height={800} className="w-full h-auto rounded-xl" />
      <div><h2 className="text-2xl font-bold text-gray-900 mb-3">Odvlhčovanie po omietkach a poteroch</h2><p>Mokré stavebné procesy prinášajú do interiéru vodu, ktorá sa postupne uvoľňuje. Odvlhčovač ju zachytáva zo vzduchu. S použitím začnite až vtedy, keď to umožňuje postup zrenia konkrétnej omietky alebo poteru; riaďte sa pokynmi výrobcu a zhotoviteľa.</p></div>
      <div><h2 className="text-2xl font-bold text-gray-900 mb-3">Ako dlho trvá vysúšanie stavby?</h2><p>Dĺžka závisí od množstva vody v konštrukciách, teploty, veľkosti priestoru a prúdenia vzduchu. Samotný počet dní ani suchý povrch nepotvrdzujú, že je podklad pripravený na podlahu. Pred pokládkou treba zmerať zvyškovú vlhkosť spôsobom predpísaným pre daný materiál.</p></div>
      <div><h2 className="text-2xl font-bold text-gray-900 mb-3">Používanie počas jesene a zimy</h2><p>V chladnom priestore môže kondenzačné odvlhčovanie pracovať pomalšie. Dodržujte prevádzkové podmienky zariadenia, zabezpečte prúdenie vzduchu a kontrolujte zachytený kondenzát. Počas prevádzky sa riaďte pokynmi k vetraniu a bezpečnému používaniu.</p></div>
      <div><h2 className="text-2xl font-bold text-gray-900 mb-3">Vysúšanie pre Trenčín a Trenčiansky kraj</h2><p>Prenájom odvlhčovača na stavbu je určený pre záujemcov z Trenčína aj širšieho okolia v Trenčianskom kraji. Pomáha pri rekonštrukcii domu, dokončovaní novostavby aj vysychaní interiéru po mokrých stavebných prácach. Dostupnosť a vhodnosť pre konkrétnu stavbu overíte telefonicky.</p><p className="mt-3">Pred telefonátom si pripravte približnú plochu, teplotu v stavbe a informáciu, kedy boli dokončené omietky alebo potery. Podrobnosti a cenu nájdete na stránke <Link className="text-blue-700 underline" href="/prenajom-odvlhcovaca">prenájom odvlhčovača v Trenčíne a okolí</Link>.</p></div>
      <div><h2 className="text-2xl font-bold text-gray-900 mb-3">Riešite iný problém s vlhkosťou?</h2><ul className="list-disc pl-6 space-y-2"><li><Link className="text-blue-700 underline" href="/odvlhcovac-po-zatopeni">Odvlhčovanie po zatopení alebo havárii vody</Link></li><li><Link className="text-blue-700 underline" href="/odvlhcovac-do-pivnice">Odvlhčovač do vlhkej pivnice</Link></li><li><Link className="text-blue-700 underline" href="/odvlhcovac-do-bytu">Prenájom odvlhčovača do bytu</Link></li></ul></div>
    </section>
    <CTA />
  </>;
}
