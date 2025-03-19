describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://uitestingplayground.com/textinput');
    cy.get('#newButtonName').type("Button Name");
    cy.get('#updatingButton').click();
    cy.get('#updatingButton').should('have.prop','innerHTML','Button Name');
  
  })
})


