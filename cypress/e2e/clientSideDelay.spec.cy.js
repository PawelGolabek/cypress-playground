describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://uitestingplayground.com/clientdelay');
    cy.document().should('have.property', 'readyState', 'complete');
    cy.get('#ajaxButton').click();
    cy.contains('Data calculated on the client side.', {timeout: 20000}).click();
  })
})