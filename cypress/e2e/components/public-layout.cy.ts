describe('Public layout', () => {
  it('body is present after visit (no login)', () => {
    cy.visit('/');
    cy.get('body').should('exist');
  });
});
