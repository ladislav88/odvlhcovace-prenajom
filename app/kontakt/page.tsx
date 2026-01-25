import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt - Prenájom Odvlhčovačov Trenčín | Odvlhčovače na Prenájom",
  description: "Kontaktné informácie pre prenájom odvlhčovačov pre Trenčín a okolie. Telefonický kontakt je najrýchlejší spôsob dohody.",
};

export default function Kontakt() {
  return (
    <>
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 leading-tight tracking-tight">
            Kontakt
          </h1>

          {/* Contact Information */}
          <div className="space-y-6">
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

            {/* Email and Address - Side by Side */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Email - Left */}
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

                {/* Address - Right */}
                <div className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">Prevzatie zariadenia</h2>
                    <p className="text-gray-700">
                      Trenčianske Stankovce 237<br />
                      <span className="text-gray-600 text-sm">Po dohode telefonicky</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Lokalizácia</h2>
              <div className="w-full h-[400px] rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps?q=48.84434158142448,17.987475160721893&output=embed&zoom=17"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokalizácia - Trenčianske Stankovce 237"
                ></iframe>
              </div>
              <p className="text-gray-600 text-sm mt-3">
                GPS: 48.84434158142448, 17.987475160721893
              </p>
              <p className="text-gray-600 text-sm mt-3">
                <a
                  href="https://www.google.com/maps/place/Malé+Stankovce+237,+913+11+Trenčianske+Stankovce-Trenčín/@48.8441829,17.9848921,957m/data=!3m2!1e3!4b1!4m6!3m5!1s0x4714a6b5cb54679d:0x3113f16a7d36fc25!8m2!3d48.8441794!4d17.987467!16s%2Fg%2F11bw3zqjks!5m1!1e1?entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 underline"
                >
                  Otvoriť v Google Maps
                </a>
              </p>
            </div>
          </div>

          {/* Optional Mini Form */}
          <div className="mt-8 bg-gray-50 border border-gray-200 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-900">Rýchla správa</h2>
            <form 
              action="https://formspree.io/f/xjgwbkwb" 
              method="POST"
              className="space-y-4"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Meno
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Telefón
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Správa
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Odoslať správu
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
