# Nastavenie Formspree pre kontaktný formulár

## Kroky na nastavenie:

1. **Vytvorte účet na Formspree:**
   - Prejdite na https://formspree.io
   - Zaregistrujte sa (bezplatný plán je dostatočný)

2. **Vytvorte nový formulár:**
   - Po prihlásení kliknite na "New Form"
   - Názov formulára: napr. "Kontaktný formulár"
   - Email, na ktorý chcete dostávať správy: `info@odvlhcovaceprenajom.sk`

3. **Získajte Form ID:**
   - Po vytvorení formulára získate endpoint URL v tvare:
   - `https://formspree.io/f/YOUR_FORM_ID`
   - Skopírujte `YOUR_FORM_ID` (napr. `abc123xyz`)

4. **Nastavte Form ID v kóde:**
   - Otvorte súbor: `app/kontakt/page.tsx`
   - Nájdite riadok: `action="https://formspree.io/f/YOUR_FORM_ID"`
   - Nahraďte `YOUR_FORM_ID` vaším skutočným Form ID
   - Príklad: `action="https://formspree.io/f/abc123xyz"`

5. **Nastavenie polí v Formspree (voliteľné):**
   - Formspree automaticky rozpozná polia z formulára
   - Môžete nastaviť customizáciu emailu v Formspree dashboard

## Výhody Formspree:
- ✅ Žiadne backend nastavenia
- ✅ Automatická ochrana pred spamom
- ✅ Jednoduché nastavenie
- ✅ Bezplatný plán pre 50 odoslaní/mesiac
- ✅ Funguje okamžite po nastavení Form ID

## Dôležité:
- **DNS nastavenia v Websupport** neovplyvňujú Formspree
- Formspree funguje nezávisle od DNS
- Stačí nastaviť Form ID v kóde
