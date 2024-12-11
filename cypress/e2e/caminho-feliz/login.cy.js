describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://bugbank.netlify.app/')

    cy.contains('Registrar')
    .click();

    cy.get('[name="email"]')
    .eq(1)
    .type('happypath@email.com', { force: true, delay: 200 }); 

    cy.get('[name="name"]')
    .type('Nome Teste', { force: true, delay: 200 }); 

    cy.get('[name="password"]')
    .eq(1)
    .type('senhateste123', { force: true, delay: 200 });

    cy.get('[name="passwordConfirmation"]')
    .type('senhateste123', { force: true, delay: 200 });

    cy.get('#toggleAddBalance')
    .click({ force: true});
    
    cy.get('button')
    .contains('Cadastrar')
    .click({ force: true});

    cy.get('#btnCloseModal')
    .click({ force: true});
    
    cy.get('.input__default')
    .eq(0)
    .type('happypath@email.com', { force: true, delay: 200 }); 

    cy.get('[name="password"]')
    .eq(0)
    .type('senhateste123', { force: true, delay: 200 });

    cy.get('button')
    .contains('Acessar')
    .click({ force: true});

  })
})