import type { Metadata } from "next";
import CTA from "../components/CTA";

export const metadata: Metadata = {
  title: "Kontakt - Prenájom Odvlhčovačov Trenčín | Odvlhčovače na Prenájom",
  description: "Kontaktujte nás pre prenájom odvlhčovačov v Trenčíne a okolí. Telefón, email a kontaktný formulár. Rýchla odpoveď a profesionálna služba.",
};

export default function Kontakt() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Kontakt
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Kontaktujte nás pre prenájom odvlhčovačov v Trenčíne a okolí. Radi vám pomôžeme s výberom správneho zariadenia.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-900">
                Kontaktné informácie
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">Telefón</h3>
                  <a
                    href="tel:+421XXXXXXXXX"
                    className="text-blue-600 hover:text-blue-700 text-lg font-medium"
                  >
                    📞 +421 XXX XXX XXX
                  </a>
                  <p className="text-gray-600 text-sm mt-1">
                    Dostupné počas pracovných dní 8:00 - 18:00
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">Email</h3>
                  <a
                    href="mailto:info@odvlhcovaceprenajom.sk"
                    className="text-blue-600 hover:text-blue-700 text-lg font-medium"
                  >
                    ✉️ info@odvlhcovaceprenajom.sk
                  </a>
                  <p className="text-gray-600 text-sm mt-1">
                    Odpovedáme do 24 hodín
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">Oblasť pôsobnosti</h3>
                  <p className="text-gray-700">
                    Trenčín a okolie
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-900">
                Kontaktný formulár
              </h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Meno a priezvisko
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Vaše meno"
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="vas@email.sk"
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
                    placeholder="+421 XXX XXX XXX"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Správa
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Popíšte váš problém alebo požiadavku..."
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
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            Často kladené otázky o kontakte
          </h2>
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Ako rýchlo odpoviete na môj dotaz?</h3>
              <p className="text-gray-600">
                Na emailové dotazy odpovedáme do 24 hodín. Telefónne dotazy riešime okamžite počas pracovných hodín.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Ako rýchlo môžete doručiť odvlhčovač?</h3>
              <p className="text-gray-600">
                Pre Trenčín a okolie zvyčajne do 24 hodín od objednávky. V núdzových prípadoch môžeme doručiť aj rýchlejšie.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Pracujete aj cez víkendy?</h3>
              <p className="text-gray-600">
                V núdzových prípadoch (napr. po zatopení) sme dostupní aj cez víkendy. Kontaktujte nás a dohodneme sa.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
