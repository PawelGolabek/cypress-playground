describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://uitestingplayground.com/hiddenlayers')
    cy.get('#greenButton').click();
    cy.get('#blueButton').click();
    // still no idea how to do negative click test in cypress
    
    
  })
})