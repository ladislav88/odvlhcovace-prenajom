import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTA from "../components/CTA";
import { SITE_URL } from "../lib/seo";
const title = "Odvlhčovač do bytu Trenčín | Prenájom";
const description = "Prenájom odvlhčovača do bytu v Trenčíne a okolí. Pomoc pri nadmernej vlhkosti a kondenzácii. 8 € / deň, min. 10 dní. Overte dostupnosť telefonicky.";
export const metadata: Metadata = {title, description, alternates: {canonical: `${SITE_URL}/odvlhcovac-do-bytu`}, openGraph: {title, description, url: `${SITE_URL}/odvlhcovac-do-bytu`, images: [{url: "/images/odvlhcovac-do-bytu.webp", alt: "Ilustračný obrázok odvlhčovania"}]}};
const breadcrumb = {"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Domov",item:SITE_URL},{"@type":"ListItem",position:2,name:title,item:`${SITE_URL}/odvlhcovac-do-bytu`}]};
export default function Page() {
 return <>
 <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(breadcrumb)}} />
 <section className="bg-blue-50 py-9 sm:py-12 "><div className="site-container mx-auto">
 <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">Prenájom odvlhčovača do bytu v Trenčíne</h1>
 <p className="text-lg text-gray-700 leading-relaxed mb-4">Prenájom odvlhčovača pomáha znížiť nadmernú vlhkosť vzduchu v byte či dome. Vhodný môže byť pri kondenzácii, po rekonštrukcii alebo úniku vody.</p>
 <p className="font-semibold text-xl text-blue-800 mb-5">8 € / deň · minimálne 10 dní</p>
 <a href="tel:+421911911876" className="inline-flex min-h-12 items-center rounded-lg bg-blue-700 px-5 py-3 font-bold text-white">Zavolať: +421 911 911 876</a>
 </div></section>
 <section className="bg-white py-10"><div className="site-container mx-auto space-y-8 text-lg text-gray-700 leading-relaxed">
 <div className="relative h-56 sm:h-80 overflow-hidden rounded-xl"><Image src="/images/odvlhcovac-do-bytu.webp" alt="Ilustračný obrázok odvlhčovania" fill sizes="(max-width: 1024px) 100vw, 1024px" className="object-cover" /></div>
 <div><h2 className="text-2xl font-bold text-gray-900 mb-3">Kedy môže odvlhčovač pomôcť?</h2><p>Pri vysokej vzdušnej vlhkosti, zamlžovaní okien alebo po mokrých stavebných prácach. Vlhkomer vám pomôže sledovať zmenu. Ak sa problém opakovane vracia, treba zistiť jeho príčinu, napríklad zatekanie, nedostatočné vetranie alebo tepelný most.</p></div>
<div><h2 className="text-2xl font-bold text-gray-900 mb-3">Vlhkosť a pleseň v byte</h2><p>Odvlhčovač existujúcu pleseň neodstráni. Znižovanie vlhkosti je iba časť riešenia; napadnuté povrchy aj príčinu problému treba riešiť samostatne.</p></div>
<div><h2 className="text-2xl font-bold text-gray-900 mb-3">Na čo myslieť pri používaní v byte</h2><p>Zariadenie potrebuje priestor na prúdenie vzduchu a pravidelnú kontrolu kondenzátu. Počítajte so zvukom ventilátora a kompresora. Pri umiestnení aj prevádzke dodržte návod, najmä v blízkosti vody.</p></div>
<div><h2 className="text-2xl font-bold text-gray-900 mb-3">Odvlhčovanie po rekonštrukcii</h2><p>Po omietkach alebo poteroch sa riaďte postupom zrenia materiálu. Pred pokládkou podlahy nestačí suchý vzduch ani povrch: vhodnosť podkladu musí potvrdiť meranie zvyškovej vlhkosti.</p></div>
 <p>Služba prenájmu je dostupná pre Trenčín a okolie. <Link href="/prenajom-odvlhcovaca" className="text-blue-700 underline">Viac o prenájme odvlhčovača</Link> alebo <Link href="/kontakt" className="text-blue-700 underline">kontaktujte nás</Link>.</p>
 </div></section><CTA />
 </>;
}
