describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://uitestingplayground.com/disabledinput');
    cy.get('#enableButton').click();
    cy.get('#inputField', { timeout: 10000 }).should('not.be.disabled').type('Works after delay');


  })
})