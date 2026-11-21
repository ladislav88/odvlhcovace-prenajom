import Link from "next/link";

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
    <section aria-labelledby="other-services-title" className="bg-slate-100 border-t border-slate-200 px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-600 mb-2">Reklama · Naše ďalšie služby</p>
        <h2 id="other-services-title" className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">Ochrana objektov a vozidiel</h2>
        <div className="grid md:grid-cols-2 gap-5">
          <article className="rounded-2xl bg-white border border-slate-200 p-6 flex flex-col items-start">
            <h3 className="text-xl font-bold text-slate-900 mb-3">Ochrana objektov</h3>
            <p className="text-slate-700 leading-relaxed mb-5">Zabezpečenie domu, firmy či prevádzky. Pozrite si naše riešenia ochrany objektov.</p>
            <a href="https://www.ochrana-objektov.sk/" className="mt-auto inline-flex min-h-12 items-center justify-center rounded-lg bg-blue-700 hover:bg-blue-800 px-5 py-3 font-semibold text-white">Pozrieť ochranu objektov <span aria-hidden="true" className="ml-2">→</span></a>
          </article>
          <article className="rounded-2xl bg-white border border-slate-200 p-6 flex flex-col items-start">
            <h3 className="text-xl font-bold text-slate-900 mb-3">Ochrana vozidiel</h3>
            <p className="text-slate-700 leading-relaxed mb-5">Zabezpečenie auta proti krádeži. Zistite viac o našich možnostiach ochrany vozidiel.</p>
            <a href="https://www.autoalarmy-trencin.sk/" className="mt-auto inline-flex min-h-12 items-center justify-center rounded-lg bg-blue-700 hover:bg-blue-800 px-5 py-3 font-semibold text-white">Pozrieť ochranu vozidiel <span aria-hidden="true" className="ml-2">→</span></a>
          </article>
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
