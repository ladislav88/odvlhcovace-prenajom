import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Odvlhčovače na Prenájom</h3>
            <p className="text-gray-400 text-sm">
              Profesionálny prenájom odvlhčovačov pre Trenčiansky kraj.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Stránky</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/" className="hover:text-white transition-colors">Domov</Link></li>
              <li><Link href="/prenajom-odvlhcovaca" className="hover:text-white transition-colors">Prenájom</Link></li>
              <li><Link href="/odvlhcovac-po-zatopeni" className="hover:text-white transition-colors">Po Zatopení</Link></li>
              <li><Link href="/odvlhcovac-do-pivnice" className="hover:text-white transition-colors">Do Pivnice</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Služby</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/odvlhcovac-do-bytu" className="hover:text-white transition-colors">Do Bytu</Link></li>
              <li><Link href="/kontakt" className="hover:text-white transition-colors">Kontakt</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Tel: <a href="tel:+421911911876" className="hover:text-white transition-colors">+421 911 911 876</a></li>
              <li>Email: <a href="mailto:info@odvlhcovaceprenajom.sk" className="hover:text-white transition-colors">info@odvlhcovaceprenajom.sk</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-400 mb-4">
            <div>
              <p className="font-semibold text-white mb-2">ALCO.SK, s.r.o.</p>
              <p>Malé Stankovce 237</p>
              <p>913 11 Trenčianske Stankovce</p>
            </div>
            <div>
              <p>IČO: 45601259</p>
              <p>IČ-DPH: SK2023064032</p>
              <p className="text-xs mt-2">Zapísaná v Obchodnom registri Okresného súdu Trenčín, Oddiel: Sro, Vložka číslo: 23214/R</p>
            </div>
          </div>
          <div className="text-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} ALCO.SK, s.r.o. Všetky práva vyhradené.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
