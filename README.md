# Playwright `file:///` URI trace repro

`npm install; npx playwright install --with-deps; npx playwright test` produces a trace with a snapshot that loads a stylesheet from a `file:///` URI.
