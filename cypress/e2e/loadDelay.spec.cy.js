describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://uitestingplayground.com/');
    cy.document().should('have.property', 'readyState', 'complete');
    cy.contains('Load Delay').click()
    cy.get('.btn').click();
  
    
  })
})