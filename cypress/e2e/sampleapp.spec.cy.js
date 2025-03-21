describe('template spec', () => {
  it('allows user to log in and out', () => {
    const username = "John"
    cy.visit('http://uitestingplayground.com/sampleapp');
    cy.get('input[name="UserName"').type(username);
    cy.get('input[name="Password"]').type('pwd');
    cy.get('#login').click();
    cy.contains('Welcome, ' + username);
    cy.get('#login').click();
    cy.contains('User logged out.');
  })
})