import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTA from "../components/CTA";
import { SITE_URL } from "../lib/seo";

const title = "Vysúšanie stavieb Trenčín | Prenájom odvlhčovača";
const description = "Prenájom odvlhčovača na vysúšanie stavieb a novostavieb v Trenčíne a okolí. Odvlhčovanie po omietkach, poteroch a rekonštrukcii. 8 € / deň, min. 10 dní.";
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
    <section className="bg-blue-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Vysúšanie stavieb a novostavieb v Trenčíne</h1>
        <p className="text-xl text-gray-700">Po omietkach, poteroch alebo rekonštrukcii zostáva v stavbe vlhkosť. Prenajatý odvlhčovač pomáha odvádzať vodu zo vzduchu a podporuje postupné vysychanie materiálov.</p>
        <p className="mt-6 text-2xl font-semibold text-blue-700">Prenájom 8 € / deň · minimálne 10 dní</p>
        <a href="tel:+421911911876" className="inline-block mt-6 rounded-lg bg-blue-600 px-6 py-3 text-white font-semibold">Overiť dostupnosť: +421 911 911 876</a>
      </div>
    </section>
    <section className="max-w-5xl mx-auto py-12 px-4 sm:px-6 space-y-8 text-lg text-gray-700 leading-relaxed">
      <Image src="/images/odvlhcovac-novostavby.webp" alt="Ilustračný obrázok odvlhčovania novostavby" width={1200} height={800} className="w-full h-auto rounded-xl" />
      <div><h2 className="text-2xl font-bold text-gray-900 mb-3">Odvlhčovanie po omietkach a poteroch</h2><p>Mokré stavebné procesy prinášajú do interiéru vodu, ktorá sa postupne uvoľňuje. Odvlhčovač ju zachytáva zo vzduchu. S použitím začnite až vtedy, keď to umožňuje postup zrenia konkrétnej omietky alebo poteru; riaďte sa pokynmi výrobcu a zhotoviteľa.</p></div>
      <div><h2 className="text-2xl font-bold text-gray-900 mb-3">Ako dlho trvá vysúšanie stavby?</h2><p>Dĺžka závisí od množstva vody v konštrukciách, teploty, veľkosti priestoru a prúdenia vzduchu. Samotný počet dní ani suchý povrch nepotvrdzujú, že je podklad pripravený na podlahu. Pred pokládkou treba zmerať zvyškovú vlhkosť spôsobom predpísaným pre daný materiál.</p></div>
      <div><h2 className="text-2xl font-bold text-gray-900 mb-3">Používanie počas jesene a zimy</h2><p>V chladnom priestore môže kondenzačné odvlhčovanie pracovať pomalšie. Dodržujte prevádzkové podmienky zariadenia, zabezpečte prúdenie vzduchu a kontrolujte zachytený kondenzát. Počas prevádzky sa riaďte pokynmi k vetraniu a bezpečnému používaniu.</p></div>
      <div><h2 className="text-2xl font-bold text-gray-900 mb-3">Prenájom pre Trenčín a okolie</h2><p>Služba je určená pre záujemcov z Trenčína a okolia; miesto odberu je v Trenčianskych Stankovciach. Dostupnosť odvlhčovača overíte telefonicky.</p></div>
      <div><h2 className="text-2xl font-bold text-gray-900 mb-3">Riešite iný problém s vlhkosťou?</h2><ul className="list-disc pl-6 space-y-2"><li><Link className="text-blue-700 underline" href="/odvlhcovac-po-zatopeni">Odvlhčovanie po zatopení alebo havárii vody</Link></li><li><Link className="text-blue-700 underline" href="/odvlhcovac-do-pivnice">Odvlhčovač do vlhkej pivnice</Link></li><li><Link className="text-blue-700 underline" href="/odvlhcovac-do-bytu">Prenájom odvlhčovača do bytu</Link></li></ul></div>
    </section>
    <CTA />
  </>;
}
