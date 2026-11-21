import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTA from "../components/CTA";
import { SITE_URL } from "../lib/seo";
const title = "Odvlhčovač po zatopení Trenčín | Prenájom";
const description = "Prenájom odvlhčovača po zatopení a úniku vody v Trenčíne a okolí. Podpora vysychania interiéru. 8 € / deň, min. 10 dní. Dostupnosť telefonicky.";
export const metadata: Metadata = {title, description, alternates: {canonical: `${SITE_URL}/odvlhcovac-po-zatopeni`}, openGraph: {title, description, url: `${SITE_URL}/odvlhcovac-po-zatopeni`, images: [{url: "/images/odvlhcovac-po-zatopeni.webp", alt: "Ilustračný obrázok odvlhčovania"}]}};
const breadcrumb = {"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Domov",item:SITE_URL},{"@type":"ListItem",position:2,name:title,item:`${SITE_URL}/odvlhcovac-po-zatopeni`}]};
export default function Page() {
 return <>
 <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(breadcrumb)}} />
 <section className="bg-blue-50 py-9 sm:py-12 "><div className="site-container mx-auto">
 <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">Prenájom odvlhčovača po zatopení v Trenčíne</h1>
 <p className="text-lg text-gray-700 leading-relaxed mb-4">Po úniku vody alebo zaplavení pomáha odvlhčovač odvádzať vlhkosť zo vzduchu a podporovať vysychanie materiálov. Dostupnosť overte telefonicky.</p>
 <p className="font-semibold text-xl text-blue-800 mb-5">8 € / deň · minimálne 10 dní</p>
 <a href="tel:+421911911876" className="inline-flex min-h-12 items-center rounded-lg bg-blue-700 px-5 py-3 font-bold text-white">Zavolať: +421 911 911 876</a>
 </div></section>
 <section className="bg-white py-10"><div className="site-container mx-auto space-y-8 text-lg text-gray-700 leading-relaxed">
 <div className="relative h-56 sm:h-80 overflow-hidden rounded-xl"><Image src="/images/odvlhcovac-po-zatopeni.webp" alt="Ilustračný obrázok odvlhčovania" fill sizes="(max-width: 1024px) 100vw, 1024px" className="object-cover" /></div>
 <div><h2 className="text-2xl font-bold text-gray-900 mb-3">Čo urobiť pred odvlhčovaním</h2><p>Najprv zastavte prítok vody, odstráňte stojacu vodu a nechajte overiť bezpečnosť zasiahnutej elektrickej inštalácie. Odvlhčovač používajte až v priestore, kde je jeho prevádzka bezpečná.</p></div>
<div><h2 className="text-2xl font-bold text-gray-900 mb-3">Vysúšanie stien a podláh po havárii</h2><p>Voda môže zostať aj pod podlahou alebo v izolačných vrstvách. Bežné odvlhčovanie vzduchu nemusí takéto miesta dostatočne vysušiť. Pri rozsiahlejšom poškodení môže byť potrebný odborný zásah.</p></div>
<div><h2 className="text-2xl font-bold text-gray-900 mb-3">Ako dlho treba vysúšať?</h2><p>Nie je možné sľúbiť rovnaký čas pre každý priestor. Rozhoduje množstvo vody, materiál, teplota a vetranie podľa pokynov k zariadeniu. Pred uzavretím konštrukcie alebo pokládkou podlahy treba overiť jej vlhkosť.</p></div>
<div><h2 className="text-2xl font-bold text-gray-900 mb-3">Čo odvlhčovač nevyrieši</h2><p>Prenájom zariadenia nie je kompletná sanačná služba. Existujúcu pleseň, kontamináciu po záplave ani príčinu úniku vody treba riešiť samostatne.</p></div>
 <p>Služba prenájmu je dostupná pre Trenčín a okolie. <Link href="/prenajom-odvlhcovaca" className="text-blue-700 underline">Viac o prenájme odvlhčovača</Link> alebo <Link href="/kontakt" className="text-blue-700 underline">kontaktujte nás</Link>.</p>
 </div></section><CTA />
 </>;
}
