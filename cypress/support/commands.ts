declare global {
  namespace Cypress {
    interface Chainable {
      skipIfNoCredentials(): void;
    }
  }
}

Cypress.Commands.add('skipIfNoCredentials', () => {
  const user = Cypress.env('QA_USERNAME') || Cypress.env('qaUsername');
  const pass = Cypress.env('QA_PASSWORD') || Cypress.env('qaPassword');
  if (!user || !pass) {
    cy.log('QA credentials not set — login spec skipped');
  }
});

export {};
