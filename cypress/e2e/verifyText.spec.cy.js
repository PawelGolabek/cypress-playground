describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://uitestingplayground.com/verifytext');
    cy.get('.bg-primary > .badge-secondary').contains('Welcome');
  })
})