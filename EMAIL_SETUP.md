# Nastavenie odosielania emailov z kontaktného formulára

## Aktuálny stav
Formulár je pripravený na odosielanie emailov cez API route (`/app/api/send-email/route.ts`), ale momentálne používa fallback riešenie.

## Možnosti nastavenia

### 1. Resend (Odporúčané pre Vercel)

**Krok 1:** Nainštalujte Resend:
```bash
npm install resend
```

**Krok 2:** Zaregistrujte sa na https://resend.com a získajte API kľúč

**Krok 3:** V Vercel nastavte environment variable:
- Názov: `RESEND_API_KEY`
- Hodnota: váš API kľúč z Resend

**Krok 4:** Upravte `/app/api/send-email/route.ts` - odkomentujte kód s Resend a odstráňte fallback

### 2. SendGrid

**Krok 1:** Nainštalujte SendGrid:
```bash
npm install @sendgrid/mail
```

**Krok 2:** Zaregistrujte sa na https://sendgrid.com

**Krok 3:** V Vercel nastavte environment variable:
- `SENDGRID_API_KEY`

**Krok 4:** Upravte API route podľa SendGrid dokumentácie

### 3. Nodemailer (s vlastným SMTP serverom)

**Krok 1:** Nainštalujte nodemailer:
```bash
npm install nodemailer
```

**Krok 2:** V Vercel nastavte environment variables:
- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_USER`
- `SMTP_PASS`

**Krok 3:** Upravte API route pre použitie nodemailer

## Dôležité poznámky

- **DNS nastavenia v Websupport** neovplyvňujú odosielanie emailov z formulára
- Email odosielanie sa nastavuje v **kóde** a **Vercel environment variables**
- Pre produkciu vždy použite profesionálnu email službu (Resend, SendGrid), nie mailto: linky

## Testovanie

Po nastavení môžete otestovať formulár na kontaktnej stránke. Email by mal prísť na `info@odvlhcovaceprenajom.sk`.
