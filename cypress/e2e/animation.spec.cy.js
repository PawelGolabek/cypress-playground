describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://uitestingplayground.com/animation');
    cy.get('#animationButton').click();
    cy.wait(300);
    cy.get('#animationButton').click();
    cy.wait(300);
    cy.get('#animationButton').click();
    cy.wait(300);
    cy.get('#movingTarget').click();
    // cypress can easily click moving targets.

  })
})