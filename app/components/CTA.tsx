export default function CTA() {
  return (
    <section className="bg-blue-600 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Potrebujete odvlhčovač? Overiť dostupnosť
        </h2>
        <p className="text-blue-100 mb-6 text-lg">
          Profesionálne zariadenia pre Trenčiansky kraj. Dohoda o prenájme je možná telefonicky alebo emailom.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="tel:+421911911876"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors text-lg"
          >
            Rezervovať odvlhčovač
          </a>
          <a
            href="mailto:info@odvlhcovaceprenajom.sk"
            className="bg-blue-700 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-800 transition-colors text-lg border-2 border-white"
          >
            Kontaktovať
          </a>
        </div>
      </div>
    </section>
  );
}
