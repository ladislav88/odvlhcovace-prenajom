/** Základná URL stránky pre canonical, Open Graph a JSON-LD */
export const SITE_URL = "https://odvlhcovaceprenajom.sk";

/** Lokálna firma / služba pre štruktúrované údaje (Local Pack, Knowledge Panel) */
export const LOCAL_BUSINESS_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://odvlhcovaceprenajom.sk/#localbusiness",
  name: "Prenájom odvlhčovačov Trenčín",
  description: "Prenájom profesionálnych odvlhčovačov v Trenčíne a okolí. Sanácia po zaplavení, vysúšanie stavieb, odvlhčovanie pivníc a bytov. Požičovňa vysúšačov – osobný odber po dohode.",
  url: SITE_URL,
  telephone: "+421911911876",
  email: "info@odvlhcovaceprenajom.sk",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Trenčianske Stankovce 237",
    addressLocality: "Trenčianske Stankovce",
    postalCode: "913 11",
    addressRegion: "Trenčiansky kraj",
    addressCountry: "SK",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 48.84434158142448,
    longitude: 17.987475160721893,
  },
  areaServed: [
    { "@type": "City", name: "Trenčín" },
    { "@type": "AdministrativeArea", name: "Trenčín a okolie" },
  ],
  priceRange: "8€",
  image: `${SITE_URL}/images/odvlhcovac-prenajom-trencin-hero.webp`,
  sameAs: [],
};

/** Služba prenájmu pre rich výsledky */
export const SERVICE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Prenájom odvlhčovačov",
  name: "Prenájom odvlhčovačov Trenčín",
  description: "Požičovňa vysúšačov a priemyselných odvlhčovačov pre Trenčín a okolie. Odvlhčovanie po zatopení, vysúšanie stavieb, zbavenie sa plesní v bytoch a pivniciach.",
  areaServed: { "@type": "Place", name: "Trenčín a okolie" },
  provider: { "@id": "https://odvlhcovaceprenajom.sk/#localbusiness" },
};
