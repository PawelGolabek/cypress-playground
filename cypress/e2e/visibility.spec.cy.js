describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://uitestingplayground.com/visibility');
    cy.get('#hideButton').click();
    cy.get('#removedButton').should('not.exist');
    cy.get('#zeroWidthButton').should('have.css', 'width', '0px');
    cy.get('#overlappedButton').should('be.visible');
    cy.get('#transparentButton').should('have.css', 'opacity', '0');
    cy.get('#invisibleButton').should('not.be.visible');
    cy.get('#notdisplayedButton').should('have.css', 'display', 'none');
    cy.get('#offscreenButton').then(($el) => {
      const rect = $el[0].getBoundingClientRect(); 
      expect(rect.top < 0 || rect.top > window.innerHeight).to.be.true;
      expect(rect.left < 0 || rect.left > window.innerWidth).to.be.true;
    });
  })
})