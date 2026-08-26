describe('Homolog home — UI smoke', () => {
  it('loads the public home without login', () => {
    cy.visit('/');
    cy.get('body').should('be.visible');
    cy.title().should('not.be.empty');
  });

  it('still renders at a mobile viewport', () => {
    cy.viewport('iphone-6');
    cy.visit('/');
    cy.get('body').should('be.visible');
  });
});
