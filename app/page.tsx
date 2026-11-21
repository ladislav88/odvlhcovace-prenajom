import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE_URL, SERVICE_JSON_LD } from "./lib/seo";

export const metadata: Metadata = {
  title: "Prenájom odvlhčovačov Trenčín a Trenčiansky kraj",
  description: "Prenájom odvlhčovačov pre Trenčín a Trenčiansky kraj. Na stavbu, do bytu, pivnice aj po zatopení. 8 € / deň, min. 10 dní. Dostupnosť: +421 911 911 876.",
  alternates: { canonical: SITE_URL },
  openGraph: { url: SITE_URL, title: "Prenájom odvlhčovačov Trenčín", description: "Odvlhčovače na stavbu, do bytu aj pivnice. 8 € / deň, minimálne 10 dní.", images: [{url: "/images/odvlhcovac-prenajom-trencin-hero.webp", alt: "Ilustračný obrázok odvlhčovača"}] },
};

const situations = [
  {href:"/vysusanie-stavieb", title:"Stavby a novostavby", text:"Podpora vysychania po omietkach, poteroch a rekonštrukcii."},
  {href:"/odvlhcovac-po-zatopeni", title:"Po zatopení", text:"Odvlhčovanie po úniku vody a zaplavení priestorov."},
  {href:"/odvlhcovac-do-pivnice", title:"Vlhká pivnica", text:"Zníženie nadmernej vzdušnej vlhkosti v pivnici alebo suteréne."},
  {href:"/odvlhcovac-do-bytu", title:"Byty a domy", text:"Pomoc pri vysokej vlhkosti vzduchu a kondenzácii v interiéri."},
];
const questions = [
  {q:"Koľko stojí prenájom odvlhčovača?",a:"Cena prenájmu je 8 € za deň. Minimálna doba prenájmu je 10 dní, teda minimálna cena prenájmu je 80 €. Dostupnosť overíte telefonicky."},
  {q:"Ako dlho trvá odvlhčovanie?",a:"Dĺžka závisí od množstva vody, materiálov, teploty a veľkosti priestoru. Môže ísť o dni až týždne. Minimálna doba prenájmu 10 dní je podmienka služby, nie záruka vysušenia za tento čas."},
  {q:"Odstráni odvlhčovač aj pleseň?",a:"Odvlhčovač znižuje vlhkosť vzduchu, ale existujúcu pleseň ani príčinu zatekania neodstráni. Zdroj vlhkosti treba vyriešiť a napadnuté povrchy ošetriť samostatne."},
  {q:"Je vhodný aj na vysúšanie novostavby?",a:"Áno, pomáha odvádzať vlhkosť uvoľnenú zo stavebných materiálov. Pri omietkach a poteroch dodržte pokyny zhotoviteľa a výrobcu. Pred pokládkou podlahy treba zmerať zvyškovú vlhkosť podkladu."},
  {q:"Môžem odvlhčovať aj v zime?",a:"Účinnosť závisí aj od teploty. V chladných priestoroch môže byť nižšia; dodržte prevádzkové podmienky zariadenia. Vhodnosť pre konkrétny priestor preberieme telefonicky."},
];
const faq = {"@context":"https://schema.org","@type":"FAQPage",mainEntity:questions.map(({q,a})=>({"@type":"Question",name:q,acceptedAnswer:{"@type":"Answer",text:a}}))};

export default function Home() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(SERVICE_JSON_LD)}} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faq)}} />
    <section className="relative isolate overflow-hidden bg-slate-900 text-white">
      <Image src="/images/odvlhcovac-prenajom-trencin-hero.webp" alt="Ilustračný obrázok odvlhčovača v interiéri" fill priority sizes="100vw" className="object-cover object-right" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/85 to-slate-950/40" />
      <div className="relative site-container mx-auto py-9 sm:py-12 lg:py-16">
        <div className="max-w-xl">
          <p className="text-sm font-semibold text-blue-200 mb-3">Trenčín a Trenčiansky kraj</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight mb-4">Prenájom odvlhčovačov v Trenčíne</h1>
          <p className="text-base sm:text-lg text-slate-100 leading-relaxed mb-5">Na vysúšanie stavby, po zatopení aj do vlhkého bytu či pivnice. Overte si dostupnosť odvlhčovača telefonicky.</p>
          <p className="mb-5"><strong className="text-3xl font-bold">8 € / deň</strong><span className="block sm:inline sm:ml-3 text-slate-200 mt-1">minimálne 10 dní</span></p>
          <a href="tel:+421911911876" className="inline-flex min-h-12 items-center justify-center rounded-lg bg-blue-600 hover:bg-blue-700 px-5 py-3 font-bold text-base sm:text-lg">Zavolať: +421 911 911 876</a>
        </div>
      </div>
    </section>
    <section className="bg-white py-10 sm:py-14">
      <div className="site-container mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Na čo potrebujete odvlhčovač?</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {situations.map(({href,title,text})=><Link key={href} href={href} className="rounded-xl border border-gray-200 p-5 hover:border-blue-500 hover:bg-blue-50 transition-colors"><h3 className="text-lg font-semibold text-blue-700 mb-2">{title} <span aria-hidden="true">→</span></h3><p className="text-gray-700 leading-relaxed">{text}</p></Link>)}
        </div>
      </div>
    </section>
    <section className="bg-white pb-10 sm:pb-14"><div className="site-container mx-auto"><h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Požičovňa vysúšačov pre Trenčín a Trenčiansky kraj</h2><p className="text-gray-700 leading-relaxed max-w-3xl">Prenájom je určený pre domácnosti a firmy z Trenčína aj ďalších miest Trenčianskeho kraja. Odvlhčovač pomáha pri stavebnej vlhkosti, po úniku vody aj vo vlhkých interiéroch. Sídlime v Trenčianskych Stankovciach pri Trenčíne; dostupnosť a vhodnosť použitia si overíte telefonicky.</p></div></section>
    <section className="bg-blue-50 py-10 sm:py-14">
      <div className="site-container mx-auto grid md:grid-cols-2 gap-8">
        <div><h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Ako odvlhčovanie pomáha</h2><p className="text-gray-700 leading-relaxed mb-4">Odvlhčovač zachytáva vodu zo vzduchu a pomáha vytvárať podmienky na postupné vysychanie priestoru. Je užitočný pri stavebnej vlhkosti aj po havárii vody.</p><p className="text-gray-700 leading-relaxed">Výsledok závisí od teploty, prúdenia vzduchu a množstva vlhkosti v materiáloch. Pri zatekaní alebo vzlínajúcej vlhkosti treba odstrániť aj ich príčinu.</p></div>
        <div><h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Prenájom jednoducho</h2><ol className="list-decimal pl-5 space-y-3 text-gray-700"><li>Zavoláte a overíme dostupnosť.</li><li>Preberieme, aký priestor potrebujete odvlhčiť.</li><li>Dohodneme prenájom a vysvetlíme obsluhu.</li></ol><Link href="/prenajom-odvlhcovaca" className="inline-block mt-5 text-blue-700 font-semibold underline underline-offset-4">Viac o prenájme odvlhčovača</Link></div>
      </div>
    </section>
    <section className="bg-white py-10 sm:py-14">
      <div className="site-container mx-auto"><h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Časté otázky o prenájme</h2><div className="divide-y divide-gray-200">{questions.map(({q,a})=><details key={q} className="py-4"><summary className="cursor-pointer min-h-11 content-center text-lg font-semibold text-gray-900">{q}</summary><p className="text-gray-700 leading-relaxed pt-3">{a}</p></details>)}</div></div>
    </section>
    <section id="kontakt" className="bg-blue-700 text-white py-10 text-center"><div className="site-container"><h2 className="text-2xl sm:text-3xl font-bold mb-3">Potrebujete odvlhčovač v Trenčíne?</h2><p className="mb-5 text-blue-100">Zavolajte a overte si aktuálnu dostupnosť.</p><a href="tel:+421911911876" className="inline-flex min-h-12 items-center rounded-lg bg-white px-6 py-3 text-blue-800 font-bold text-lg">+421 911 911 876</a><Link href="/kontakt" className="block mt-5 underline underline-offset-4">Všetky kontakty</Link></div></section>
  </>;
}
