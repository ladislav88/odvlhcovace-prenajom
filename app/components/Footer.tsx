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
    <footer className="bg-gray-900 text-white">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-xl font-semibold mb-4">Prenájom odvlhčovačov – Trenčín a okolie</p>
        <nav aria-label="Služby a kontakt" className="flex flex-wrap gap-x-6 gap-y-3 mb-6">
          {services.map(([href, label]) => <Link key={href} href={href} className="text-gray-200 underline underline-offset-4 hover:text-white">{label}</Link>)}
        </nav>
        <p className="text-gray-300 mb-3">Požičovňa vysúšačov pre byty, pivnice a stavby. Trenčianske Stankovce pri Trenčíne.</p>
        <a href="tel:+421911911876" className="inline-block text-lg font-semibold underline mb-4">+421 911 911 876</a>
        <p className="text-gray-400 text-sm">Obrázky na webe sú ilustračné.</p>
      </div>
    </footer>
  );
}
