describe('SEO UI — document head', () => {
  it('home has a title and an absolute canonical when the tag exists', () => {
    cy.visit('/');
    cy.title().should('not.be.empty');
    cy.get('head').then(($head) => {
      const canonical = $head.find('link[rel="canonical"]');
      if (canonical.length === 0) {
        cy.log('No canonical tag — not marked PASS');
        return;
      }
      expect(canonical.attr('href') || '').to.match(/^https:\/\//i);
    });
  });
});
