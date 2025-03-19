describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://uitestingplayground.com/click');
    

    
    cy.contains('Button That Ignores DOM Click Event', {timeout: 20000}).click();
    
  })
})