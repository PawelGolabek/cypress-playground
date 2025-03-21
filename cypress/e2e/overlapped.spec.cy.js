describe('template spec', () => {
  it('allows user to log in and out', () => {
    const username = "John"
    cy.visit('http://uitestingplayground.com/overlapped');
    cy.get('#name').type("Cypress handles scrolling on its own")
  })
})

