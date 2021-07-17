it('loads examples', () => {
  cy.visit('/');
  cy.contains('Demo APP');
});
