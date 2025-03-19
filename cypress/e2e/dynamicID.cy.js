const hostUrl = "http://uitestingplayground.com/dynamicid";
describe("The application loads", () => {
  it("navigates to the / route", () => {
    cy.visit(hostUrl);
  });

  it("has clickable button with dynamic ID", () => {
    cy.visit(hostUrl);
    cy.contains('Button with Dynamic ID').click();
  });
});
