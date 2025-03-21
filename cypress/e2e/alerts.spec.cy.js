describe('template spec', () => {
  beforeEach(() => {
    cy.visit('http://uitestingplayground.com/alerts');
  });

  it('alerts', () => {
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Today is a working day.\nOr less likely a holiday.');
    });
    cy.get('#alertButton').click();
  });

  it('accepts confirm box', () => {
    cy.get('#confirmButton').click();
    cy.on('window:confirm', (str) => {
      expect(str).to.include('Today is');
      return true;
    });
  });

  it('accepts prompt', () => {
    // Stubbing prompt before clicking
    cy.window().then((win) => {
      cy.stub(win, 'prompt').returns('Your Input');
    });

    cy.get('#promptButton').click();

    cy.on('window:alert', (str) => {
      expect(str).to.contain('User');
    });
  });
});
