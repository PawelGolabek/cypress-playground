describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://uitestingplayground.com/progressbar');
    cy.get('#startButton').click();
    cy.get('#progressBar', {timeout: 100000}).should('have.attr', 'aria-valuenow', '75');
    cy.get('#stopButton').click();

  })
})