# Auto Avaliar QA — Cypress (Git pessoal)

A suíte oficial da empresa está no Bitbucket. Este repositório é o Git pessoal da Fernanda.

- Oficial (empresa): [autoavaliar/qa-automation](https://bitbucket.org/autoavaliar/qa-automation) (QA-Automation)
- Playwright oficial: [autoavaliar/manhattan-test-automation](https://bitbucket.org/autoavaliar/manhattan-test-automation)
- Este GitHub: hub pessoal de Cypress (UI regression, responsive, a11y, SEO-UI)

Não copiar código corporativo do Bitbucket para cá. Não duplicar suítes Playwright (MH-784 / MH-804). Não tratar este repo como fonte de verdade da empresa.

Clone local: `C:\Automacao\autoavaliarqacypress`

## Scope
- Web/UI regression
- Responsive testing
- SEO UI validation
- Accessibility checks
- Component and integration scenarios
- Regression suites
- Test evidence and reports
- CI/CD execution

## Structure
- `cypress/e2e/regression`
- `cypress/e2e/seo`
- `cypress/e2e/components`
- `cypress/e2e/accessibility`
- `cypress/fixtures`
- `cypress/support`
- `docs`
- `evidences` / `reports` — local only (gitignored)
- `prompts`
- `scripts`
- `.github/workflows`

## Run

```powershell
cd C:\Automacao\autoavaliarqacypress
copy .env.example .env
npm ci
npx cypress run
npx cypress run --spec cypress/e2e/regression/homolog-home.cy.ts,cypress/e2e/seo/document-head.cy.ts
```

Login specs skip when credentials are empty. Do not claim PASS without a run log or screenshot.

## CI

GitHub Action **Cypress smoke** (`.github/workflows/cypress-smoke.yml`) hits the public homolog home. The job fails on FAIL. No Jira writes.

## Related

Playwright pessoal: [fernandacava/qa-automation-autoavaliar](https://github.com/fernandacava/qa-automation-autoavaliar)

## Security

Never commit credentials, tokens, cookies, internal secrets or `.env` files. Use `.env.example` for variable names only.
