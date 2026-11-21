import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTA from "../components/CTA";
import { SITE_URL } from "../lib/seo";
const title = "Odvlhčovač do pivnice Trenčín | Prenájom";
const description = "Prenájom odvlhčovača do pivnice a suterénu v Trenčíne a okolí. Zníženie nadmernej vlhkosti vzduchu. 8 € / deň, min. 10 dní. Zavolajte nám.";
export const metadata: Metadata = {title, description, alternates: {canonical: `${SITE_URL}/odvlhcovac-do-pivnice`}, openGraph: {title, description, url: `${SITE_URL}/odvlhcovac-do-pivnice`, images: [{url: "/images/odvlhcovac-do-pivnice.webp", alt: "Ilustračný obrázok odvlhčovania"}]}};
const breadcrumb = {"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Domov",item:SITE_URL},{"@type":"ListItem",position:2,name:title,item:`${SITE_URL}/odvlhcovac-do-pivnice`}]};
export default function Page() {
 return <>
 <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(breadcrumb)}} />
 <section className="bg-blue-50 py-9 sm:py-12 "><div className="site-container mx-auto">
 <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">Prenájom odvlhčovača do pivnice v Trenčíne</h1>
 <p className="text-lg text-gray-700 leading-relaxed mb-4">Vlhká pivnica alebo suterén? Prenajatý odvlhčovač pomáha zachytávať nadbytočnú vodu zo vzduchu a podporuje vysychanie priestoru.</p>
 <p className="font-semibold text-xl text-blue-800 mb-5">8 € / deň · minimálne 10 dní</p>
 <a href="tel:+421911911876" className="inline-flex min-h-12 items-center rounded-lg bg-blue-700 px-5 py-3 font-bold text-white">Zavolať: +421 911 911 876</a>
 </div></section>
 <section className="bg-white py-10"><div className="site-container mx-auto space-y-8 text-lg text-gray-700 leading-relaxed">
 <div className="relative h-56 sm:h-80 overflow-hidden rounded-xl"><Image src="/images/odvlhcovac-do-pivnice.webp" alt="Ilustračný obrázok odvlhčovania" fill sizes="(max-width: 1024px) 100vw, 1024px" className="object-cover" /></div>
 <div><h2 className="text-2xl font-bold text-gray-900 mb-3">Najprv zistite, odkiaľ vlhkosť prichádza</h2><p>Rozdiel je medzi kondenzáciou vzdušnej vlhkosti, zatekaním a vzlínaním vody cez murivo. Odvlhčovač môže zmierniť vlhkosť vzduchu, ale nenahrádza opravu netesnosti ani hydroizolácie.</p></div>
<div><h2 className="text-2xl font-bold text-gray-900 mb-3">Pozor na teplotu v pivnici</h2><p>V chladnom priestore môže účinnosť kondenzačného odvlhčovania klesať. Vhodnosť použitia závisí od podmienok konkrétneho priestoru a prevádzkového rozsahu zariadenia.</p></div>
<div><h2 className="text-2xl font-bold text-gray-900 mb-3">Pomôže odvlhčovač proti plesni?</h2><p>Zníženie vlhkosti môže obmedziť podmienky na rast plesní. Existujúce napadnutie však treba ošetriť samostatne a odstrániť zdroj vlhkosti. Samotné odvlhčovanie neznamená sanáciu plesne.</p></div>
<div><h2 className="text-2xl font-bold text-gray-900 mb-3">Pivnica po zaplavení alebo rekonštrukcii</h2><p>Pred spustením treba odstrániť stojacu vodu, zastaviť jej prítok a overiť bezpečnosť elektrickej inštalácie. Pri stavebnej vlhkosti závisí doba vysychania od materiálov, teploty a prúdenia vzduchu.</p></div>
 <p>Služba prenájmu je dostupná pre Trenčín a okolie. <Link href="/prenajom-odvlhcovaca" className="text-blue-700 underline">Viac o prenájme odvlhčovača</Link> alebo <Link href="/kontakt" className="text-blue-700 underline">kontaktujte nás</Link>.</p>
 </div></section><CTA />
 </>;
}
