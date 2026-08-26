# Smoke (Cypress pessoal)

From `C:\Automacao\autoavaliarqacypress`:

```powershell
npm ci
npx cypress run --spec cypress/e2e/regression/homolog-home.cy.ts
```

Do not duplicate Playwright ticket suites. Login specs skip without credentials.
