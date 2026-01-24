import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
            Odvlhčovače na Prenájom
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
              Domov
            </Link>
            <Link href="/prenajom-odvlhcovaca" className="text-gray-700 hover:text-blue-600 transition-colors">
              Prenájom
            </Link>
            <Link href="/odvlhcovac-po-zatopeni" className="text-gray-700 hover:text-blue-600 transition-colors">
              Po Zatopení
            </Link>
            <Link href="/odvlhcovac-do-pivnice" className="text-gray-700 hover:text-blue-600 transition-colors">
              Do Pivnice
            </Link>
            <Link href="/odvlhcovac-do-bytu" className="text-gray-700 hover:text-blue-600 transition-colors">
              Do Bytu
            </Link>
            <Link href="/kontakt" className="text-gray-700 hover:text-blue-600 transition-colors">
              Kontakt
            </Link>
          </div>
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-blue-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
