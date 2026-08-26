describe('Accessibility — document basics', () => {
  it('html lang is set', () => {
    cy.visit('/');
    cy.get('html')
      .should('have.attr', 'lang')
      .and('not.be.empty');
  });
});
