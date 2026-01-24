export default function CTA() {
  return (
    <section className="bg-blue-600 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Potrebujete odvlhčovač? Kontaktujte nás ešte dnes!
        </h2>
        <p className="text-blue-100 mb-6 text-lg">
          Rýchla dostupnosť pre Trenčín a okolie. Profesionálna služba a kvalitné zariadenia.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="tel:+421XXXXXXXXX"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-lg"
          >
            📞 +421 XXX XXX XXX
          </a>
          <a
            href="mailto:info@odvlhcovaceprenajom.sk"
            className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors text-lg border-2 border-white"
          >
            ✉️ info@odvlhcovaceprenajom.sk
          </a>
        </div>
      </div>
    </section>
  );
}
