describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://uitestingplayground.com/dynamictable');

    
    let realCpuIndex = 0;
    cy.get('div[role="row"]').each(($cell,$realCpuIndex, index) => {
      if ($cell.text() === 'CPU') {
        cy.wrap(realCpuIndex = index); 
      }
    }).then(($realCpuIndex)=>{

      cy.get('span').contains('Chrome')
      .then(($cell) => {
        cy.wrap($cell).parent().children()  // Get all child elements
        .eq($realCpuIndex)
        .invoke('html')
        .then((innerHTML) =>{
          cy.get('p[class="bg-warning"]').should('have.text', "Chrome CPU:" + innerHTML);
        });
      }); 
    });
    })

    // not working due to cypress ansync. no idea how to find CPU id and keep it for later.
    
  });
