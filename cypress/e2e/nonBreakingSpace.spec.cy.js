describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://uitestingplayground.com/nbsp');
    //cy.contains('button', 'My\u00A0Button').click();
    cy.contains('button', 'My Button').click();
    // Due to how Cypress works this test works for non-nbsp version 
    // and not the first one like it would in other testing tools
  })
})