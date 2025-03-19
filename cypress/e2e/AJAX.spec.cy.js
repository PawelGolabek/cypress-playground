describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://uitestingplayground.com/ajax');
    cy.document().should('have.property', 'readyState', 'complete');
    cy.get('#ajaxButton').click();
    cy.intercept('GET', 'http://uitestingplayground.com/ajaxdata').as('ajaxRequest');
    cy.contains('Data loaded with AJAX get request.', {timeout: 20000}).click();
    
  })
})