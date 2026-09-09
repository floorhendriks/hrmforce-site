-- Ordertabel voor de native shop (Mollie).
CREATE TABLE IF NOT EXISTS orders (
  id             TEXT PRIMARY KEY,
  created        TEXT NOT NULL,
  status         TEXT NOT NULL,           -- open | pending | paid | failed | expired | canceled
  locale         TEXT NOT NULL,
  email          TEXT NOT NULL,
  company        TEXT,
  contact        TEXT,
  phone          TEXT,
  country        TEXT,
  vat            TEXT,
  street         TEXT,
  postal         TEXT,
  city           TEXT,
  reference      TEXT,
  subtotal_cents INTEGER NOT NULL,
  vat_cents      INTEGER NOT NULL,
  total_cents    INTEGER NOT NULL,
  vat_mode       TEXT,
  currency       TEXT NOT NULL DEFAULT 'EUR',
  mollie_id      TEXT,
  items_json     TEXT NOT NULL,
  paid_at        TEXT,
  notified       INTEGER NOT NULL DEFAULT 0  -- 1 zodra teammelding + bevestiging verstuurd
);
CREATE INDEX IF NOT EXISTS idx_orders_mollie ON orders (mollie_id);
CREATE INDEX IF NOT EXISTS idx_orders_status ON orders (status);
