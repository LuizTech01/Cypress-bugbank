describe('Cenarios de login', () => {
  
  beforeEach(() => {
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
  });
  
  it('Login com sucesso', () => {
    cy.visit('https://bugbank.netlify.app/')
    
    cy.get('.input__default')
      .eq(0)
      .type('happypath@email.com', { force: true, delay: 200 }); 

    cy.get('[name="password"]')
      .eq(0)
      .type('senhateste123', { force: true, delay: 200 });

    cy.get('button')
      .contains('Acessar')
      .click({ force: true});
  });

  it('Login sem email', () => {
    cy.visit('https://bugbank.netlify.app/')

    cy.get('[name="password"]')
      .eq(0)
      .type('senhateste123', { force: true, delay: 200 });

    cy.get('button')
      .contains('Acessar')
      .click({ force: true});

    cy.get('.input__warging')
      .should('contain', 'É campo obrigatório');
  });

  it('Login sem email', () => {
    cy.visit('https://bugbank.netlify.app/')

    cy.get('.input__default')
      .eq(0)
      .type('happypath@email.com', { force: true, delay: 200 });

    cy.get('button')
      .contains('Acessar')
      .click({ force: true});

    cy.get('.input__warging')
      .should('contain', 'É campo obrigatório');
  });

  it('Login com email em formato invalido', () => {
    cy.visit('https://bugbank.netlify.app/')

    cy.get('.input__default')
      .eq(0)
      .type('happypath', { force: true, delay: 200 });

    cy.get('[name="password"]')
      .eq(0)
      .type('senhateste123', { force: true, delay: 200 });

    cy.get('button')
      .contains('Acessar')
      .click({ force: true});

    cy.get('.input__warging')
      .should('contain', 'Formato inválido');
  });

  it('Login sem informar dados', () => {
    cy.visit('https://bugbank.netlify.app/')

    cy.get('button')
      .contains('Acessar')
      .click({ force: true});

    cy.get('.input__warging')
      .should('contain', 'É campo obrigatório');
  });
});