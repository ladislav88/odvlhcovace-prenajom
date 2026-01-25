import Link from 'next/link';

export default function Navbar() {
  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-blue-600 text-white py-2 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-center sm:justify-end items-center gap-4 sm:gap-6">
            <a
              href="tel:+421911911876"
              className="flex items-center gap-2 hover:text-blue-100 transition-colors font-semibold"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +421 911 911 876
            </a>
            <a
              href="mailto:info@odvlhcovaceprenajom.sk"
              className="flex items-center gap-2 hover:text-blue-100 transition-colors font-semibold"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              info@odvlhcovaceprenajom.sk
            </a>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
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
    </>
  );
}
