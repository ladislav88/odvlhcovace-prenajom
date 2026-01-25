import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt - Prenájom Odvlhčovačov Trenčín | Odvlhčovače na Prenájom",
  description: "Kontaktné informácie pre prenájom odvlhčovačov v Trenčianskom kraji. Telefonický kontakt je najrýchlejší spôsob dohody.",
};

export default function Kontakt() {
  return (
    <>
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 leading-tight tracking-tight">
            Kontakt
          </h1>

          {/* Contact Information */}
          <div className="space-y-6 mb-12">
            {/* Phone - Highlighted in blue box */}
            <div className="bg-blue-600 text-white rounded-lg p-8 shadow-lg">
              <div className="flex items-start gap-4">
                <svg className="w-8 h-8 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-3">Telefón</h2>
                  <a
                    href="tel:+421911911876"
                    className="text-white hover:text-blue-100 font-bold text-2xl md:text-3xl block mb-3"
                  >
                    +421 911 911 876
                  </a>
                  <p className="text-blue-100 text-sm">
                    Pracovné dni: 8:00 - 18:00<br />
                    V núdzových prípadoch aj počas víkendov
                  </p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <svg className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">Email</h2>
                  <a
                    href="mailto:info@odvlhcovaceprenajom.sk"
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    info@odvlhcovaceprenajom.sk
                  </a>
                  <p className="text-gray-600 text-sm mt-2">
                    Odpoveď do 24 hodín
                  </p>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <svg className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">Prevzatie zariadenia</h2>
                  <p className="text-gray-700">
                    Trenčianske Stankovce<br />
                    <span className="text-gray-600 text-sm">Po dohode telefonicky</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Details */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-4 text-gray-900">ALCO.SK, s.r.o.</h3>
              <p className="text-gray-700 mb-1">
                Malé Stankovce 237
              </p>
              <p className="text-gray-700">
                913 11 Trenčianske Stankovce
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">IČO / DIČ</h4>
                <p className="text-gray-700">IČO: 45601259</p>
                <p className="text-gray-700">IČ-DPH: SK2023064032</p>
                <p className="text-gray-600 text-sm mt-2">Platca DPH</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Bankové spojenie</h4>
                <p className="text-gray-700">Tatra banka, a.s.</p>
                <p className="text-gray-700 font-mono text-sm">IBAN: SK8011000000002929839541</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
