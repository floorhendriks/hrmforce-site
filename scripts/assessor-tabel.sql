-- Tabel voor de digitaal getekende assessorovereenkomsten.
-- Eenmalig uitvoeren in de D1-console van hrmforce-orders.
--
-- De PDF zelf wordt niet bewaard: hij gaat per mail naar de assessor,
-- service@hrmforce.com en f.hendriks@hrmforce.com. Alles wat nodig is om
-- hem opnieuw te maken staat hieronder, inclusief de handtekening, zodat
-- een verloren exemplaar altijd opnieuw op te bouwen is.

CREATE TABLE IF NOT EXISTS assessor_overeenkomsten (
  nummer            TEXT PRIMARY KEY,
  created           TEXT NOT NULL,
  versie            TEXT NOT NULL,
  naam              TEXT NOT NULL,
  handelsnaam       TEXT,
  straat            TEXT,
  postcode_plaats   TEXT,
  kvk               TEXT,
  email             TEXT NOT NULL,
  telefoon          TEXT,
  registratie       TEXT,
  plaats            TEXT,
  wijze             TEXT,
  ip                TEXT,
  land              TEXT,
  stad              TEXT,
  browser           TEXT,
  hash              TEXT,
  pdf_hash          TEXT,
  handtekening_b64  TEXT,
  initialen_b64     TEXT,
  mail_status       TEXT
);

CREATE INDEX IF NOT EXISTS idx_assessor_email ON assessor_overeenkomsten (email);
CREATE INDEX IF NOT EXISTS idx_assessor_created ON assessor_overeenkomsten (created);
