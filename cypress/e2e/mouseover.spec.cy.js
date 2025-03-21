describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://uitestingplayground.com/mouseover');
    cy.get(':nth-child(7) > .text-primary').click();
    cy.get('body').click(); // no doubleclick 
    cy.get(':nth-child(7) > .text-primary').click();
    cy.get('#clickCount').invoke('html').then(value => {
      expect(value).to.equal('2');
    });
    cy.get(':nth-child(9) > .text-primary').click();
    cy.get('body').click();
    cy.get(':nth-child(9) > .text-primary').click();
    cy.get('#clickButtonCount').invoke('html').then(value => {
      expect(value).to.equal('2');
    });

  })
})