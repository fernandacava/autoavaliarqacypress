describe('Login (credentials required)', () => {
  it('is skipped when QA credentials are not provided', function () {
    const user = Cypress.env('QA_USERNAME');
    const pass = Cypress.env('QA_PASSWORD');
    if (!user || !pass) {
      this.skip();
    }
  });
});
