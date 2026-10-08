CREATE TABLE IF NOT EXISTS leads (
  id         TEXT PRIMARY KEY,
  created_at TEXT NOT NULL,
  status     TEXT NOT NULL DEFAULT 'new',
  year       TEXT NOT NULL,
  make       TEXT NOT NULL,
  model      TEXT NOT NULL,
  mileage    TEXT,
  comments   TEXT,
  name       TEXT NOT NULL,
  phone      TEXT NOT NULL,
  email      TEXT NOT NULL,
  zip        TEXT NOT NULL,
  photo_keys TEXT NOT NULL DEFAULT '[]'
);
CREATE INDEX IF NOT EXISTS idx_leads_status_created ON leads (status, created_at DESC);
