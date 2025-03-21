describe('allows to click button that is hidden from sight', () => {
  it('passes', () => {
    cy.visit('http://uitestingplayground.com/scrollbars');
    cy.get('#hidingButton').click();
  })
})
