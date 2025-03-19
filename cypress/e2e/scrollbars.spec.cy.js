describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://uitestingplayground.com/scrollbars');
    cy.get('#hidingButton').click();
  })
})
