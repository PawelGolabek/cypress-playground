Cypress.on('uncaught:exception', (err, runnable) => {
  if (err.message.includes("Cannot read properties of undefined (reading 'writeText')")) {
    return false;
  }
  return true;
});

describe('template spec', () => {
  it('handles shadowdom', () => {
    cy.visit('http://uitestingplayground.com/shadowdom');
    
    // Click the generate and copy buttons
    cy.get('guid-generator').shadow().find('button.button-generate').click();
    cy.get('guid-generator').shadow().find('button.button-copy').click();
    // elements that copy to clipboard fail in cypress, I might look for a workaround later
    // I disabled error but entire point of test is to access clipboard so can't continue

      });
    });
