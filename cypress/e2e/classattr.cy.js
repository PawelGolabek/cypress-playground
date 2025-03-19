const hostUrl = "http://uitestingplayground.com/classattr";
describe("The application loads", () => {
  
  it("navigates to the / route", () => {
    cy.visit(hostUrl);
  });

  it("has clickable button with dynamic ID", () => {
    cy.visit(hostUrl);
    cy.get('[class*="btn-primary"]').click();

  });

  it("shows alert after button is clicked", () => {
    cy.visit(hostUrl);
    cy.get('[class*="btn-primary"]').click();
    cy.on('window:alert', (text) => {
      expect(text).to.equal('Primary button pressed')
    })
    cy.on('window:alert',(t)=>{
      //assertions
      expect(t).to.contains('Primary button pressed');
  });
  });
});
