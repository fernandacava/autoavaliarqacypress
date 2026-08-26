param(
  [string]$Spec = "cypress/e2e/regression/homolog-home.cy.ts,cypress/e2e/seo/document-head.cy.ts"
)

Set-Location $PSScriptRoot\..
npx cypress run --spec $Spec
