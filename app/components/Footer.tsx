import Link from "next/link";
import Image from "next/image";

const services = [
  ["/prenajom-odvlhcovaca", "Prenájom odvlhčovača"],
  ["/vysusanie-stavieb", "Vysúšanie stavieb a novostavieb"],
  ["/odvlhcovac-po-zatopeni", "Odvlhčovanie po zatopení"],
  ["/odvlhcovac-do-pivnice", "Odvlhčovač do pivnice"],
  ["/odvlhcovac-do-bytu", "Odvlhčovač do bytu"],
  ["/kontakt", "Kontakt"],
];

export default function Footer() {
  return (
    <>
    <section aria-labelledby="other-services-title" className="bg-slate-100 border-t border-slate-200 px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-600 mb-2">Reklama · Naše ďalšie služby</p>
        <h2 id="other-services-title" className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">Chráňte to, na čom záleží.</h2>
        <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
          <a href="https://www.ochrana-objektov.sk/" className="group relative isolate flex min-h-[370px] sm:min-h-[390px] flex-col justify-end overflow-hidden rounded-2xl bg-slate-950 p-6 sm:p-8 text-white shadow-lg transition-shadow hover:shadow-xl focus-visible:outline-offset-4" aria-label="Ochrana objektov – pozrieť riešenia">
            <Image src="/images/reklama-ochrana-objektov.webp" alt="" fill sizes="(max-width: 768px) 100vw, 576px" className="object-cover object-right transition-transform duration-500 motion-safe:group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/55 to-slate-950/10" />
            <div className="relative">
              <span className="inline-block rounded-full border border-white/30 bg-slate-950/60 px-3 py-1 text-xs font-semibold tracking-widest text-white mb-4">ALCO.SK · TRENČÍN</span>
              <h3 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">Ochrana objektov</h3>
              <p className="max-w-sm text-base leading-relaxed text-slate-100 mb-5">Alarmy a kamerové systémy pre váš domov aj firmu.</p>
              <span className="inline-flex min-h-12 items-center gap-4 rounded-lg bg-amber-300 px-5 py-3 font-bold text-slate-950 transition-colors group-hover:bg-amber-200">Zabezpečiť objekt <span aria-hidden="true">↗</span></span>
            </div>
          </a>
          <a href="https://www.autoalarmy-trencin.sk/" className="group relative isolate flex min-h-[370px] sm:min-h-[390px] flex-col justify-end overflow-hidden rounded-2xl bg-slate-950 p-6 sm:p-8 text-white shadow-lg transition-shadow hover:shadow-xl focus-visible:outline-offset-4" aria-label="Ochrana vozidiel – pozrieť zabezpečenie IGLA">
            <Image src="/images/reklama-ochrana-vozidiel.webp" alt="" fill sizes="(max-width: 768px) 100vw, 576px" className="object-cover object-right transition-transform duration-500 motion-safe:group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/55 to-slate-950/10" />
            <div className="relative">
              <span className="inline-block rounded-full border border-white/30 bg-slate-950/60 px-3 py-1 text-xs font-semibold tracking-widest text-white mb-4">IGLA · OCHRANA PROTI KRÁDEŽI</span>
              <h3 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">Ochrana vozidiel</h3>
              <p className="max-w-sm text-base leading-relaxed text-slate-100 mb-5">Digitálne zabezpečenie auta. Nenápadná technológia, profesionálna montáž.</p>
              <span className="inline-flex min-h-12 items-center gap-4 rounded-lg bg-amber-300 px-5 py-3 font-bold text-slate-950 transition-colors group-hover:bg-amber-200">Zabezpečiť vozidlo <span aria-hidden="true">↗</span></span>
            </div>
          </a>
        </div>
      </div>
    </section>
    <footer className="bg-gray-900 text-white">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-xl font-semibold mb-4">Prenájom odvlhčovačov – Trenčín a Trenčiansky kraj</p>
        <nav aria-label="Služby a kontakt" className="flex flex-wrap gap-x-6 gap-y-3 mb-6">
          {services.map(([href, label]) => <Link key={href} href={href} className="text-gray-200 underline underline-offset-4 hover:text-white">{label}</Link>)}
        </nav>
        <p className="text-gray-300 mb-3">Požičovňa vysúšačov pre byty, pivnice a stavby. Trenčianske Stankovce pri Trenčíne.</p>
        <a href="tel:+421911911876" className="inline-block text-lg font-semibold underline mb-4">+421 911 911 876</a>
        <p className="text-gray-400 text-sm">Obrázky na webe sú ilustračné.</p>
      </div>
    </footer>
    </>
  );
}
