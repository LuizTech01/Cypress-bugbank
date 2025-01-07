describe('Happy Path - BugBank', () => {
  beforeEach(() => {
    cy.visit('https://bugbank.netlify.app/');
  });

  it('should register, login, and navigate through functionalities', () => {
    function registerUser(email, name, password) {
      cy.contains('Registrar').click();

      cy.get('[name="email"]').eq(1).type(email, {force : true});
      cy.get('[name="name"]').type(name, {force : true});
      cy.get('[name="password"]').eq(1).type(password, {force : true});
      cy.get('[name="passwordConfirmation"]').type(password, {force : true});
      cy.get('#toggleAddBalance').click({force : true});
      cy.contains('Cadastrar').click({force : true});

      cy.get('#btnCloseModal')
      .contains('Fechar')
      .click();
    }

    function loginUser(email, password) {
      cy.get('.input__default').eq(0).type(email);
      cy.get('[name="password"]').eq(0).type(password);
      cy.contains('Acessar').click();

      cy.get('#btn-TRANSFERÊNCIA').should('be.visible');
    }

    const email = 'happypath@email.com';
    const name = 'Nome Teste';
    const password = 'senhateste123';

    registerUser(email, name, password);

    loginUser(email, password);

    cy.get('#btn-TRANSFERÊNCIA').click();
    cy.get('#btnBack').should('be.visible').click();

    cy.get('#btn-PAGAMENTOS').click();
    cy.get('#btnCloseModal').should('be.visible').click();

    cy.get('#btn-EXTRATO').click();
    cy.get('#btnBack').should('be.visible').click();

    cy.get('#btn-SAQUE').click();
    cy.get('#btnCloseModal').should('be.visible').click();

    cy.get('#btnExit').click();

    loginUser(email, password);

    cy.get('#btn-EXTRATO').click();
    cy.get('#btnExit').should('be.visible').click();
  });
});
