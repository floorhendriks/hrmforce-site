# Assessorovereenkomst: beheer

## De link

De ondertekenpagina staat op `https://hrmforce.com/assessor/overeenkomst-q4n8xr2m/`.
De pagina staat op noindex en nofollow, staat niet in de sitemap en er linkt
niets naartoe. Deel de link zelf met een nieuwe assessor.

Wil je een nieuw pad, hernoem dan `src/pages/assessor/overeenkomst-q4n8xr2m.astro`
naar een ander willekeurig pad. De oude link werkt dan niet meer.

## Eenmalig instellen

De tabel in D1 aanmaken met `scripts/assessor-tabel.sql`, in de console van de
database hrmforce-orders. Zonder die tabel geeft de pagina een foutmelding bij
het ondertekenen.

## Wat er gebeurt bij een ondertekening

1. De assessor leest de overeenkomst, vult Bijlage A in en tekent.
2. De server bouwt de PDF, inclusief Bijlage A met de ingevulde gegevens en een
   laatste pagina "Verklaring van elektronische ondertekening".
3. Het bewijs gaat in de tabel `assessor_overeenkomsten`.
4. Eén mail met de PDF gaat naar de assessor, service@hrmforce.com en
   f.hendriks@hrmforce.com.
5. De assessor kan zijn exemplaar direct downloaden zolang de pagina openstaat.

De PDF zelf wordt niet apart bewaard. Alles wat nodig is om hem opnieuw te maken
staat in de tabel, inclusief de handtekening.

## De lijst bekijken

In de D1-console van hrmforce-orders:

```sql
SELECT nummer, created, naam, handelsnaam, email, plaats, mail_status
FROM assessor_overeenkomsten
ORDER BY created DESC;
```

Alles van één ondertekening, inclusief het bewijs:

```sql
SELECT * FROM assessor_overeenkomsten WHERE nummer = 'HRMF-ASS-2026-0001';
```

Controleren of een PDF die je toegestuurd krijgt nog origineel is: bereken de
SHA-256 van het bestand en vergelijk die met de kolom `pdf_hash`. Op een Mac of
in de Codespace:

```
shasum -a 256 Assessorovereenkomst_hrmforce_Jansen_2026-10-07.pdf
```

Het controlegetal dat in de PDF zelf staat is iets anders: dat gaat over de
ondertekende gegevens plus de tekstversie, niet over het bestand.

## Een exemplaar opnieuw opsturen

De gegevens staan in de tabel, dus de PDF is opnieuw te maken. Vraag dat even
aan, dan wordt hij uit het record opgebouwd en opnieuw verstuurd.

## De tekst van de overeenkomst wijzigen

De tekst staat in `src/data/assessor-overeenkomst.js` en is de bron voor zowel
de webpagina als de PDF. Pas je er iets aan, hoog dan `VERSIE` op, bijvoorbeeld
naar "versie 1.1, januari 2027". Die versie wordt per ondertekening vastgelegd,
zodat later aantoonbaar is welke tekst iemand heeft getekend.

## Mail

De mail gaat via Resend, afzender service@hrmforce.com. Mislukt het versturen,
dan staat dat in de kolom `mail_status` en ziet de assessor op het scherm dat
hij zijn exemplaar moet downloaden en zich moet melden bij service@.
