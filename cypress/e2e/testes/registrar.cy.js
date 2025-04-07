describe('Cenarios ao registrar usuario', () => {
    
    beforeEach(() => {
        cy.visit('https://bugbank.netlify.app/');
      });    
    
    it('Registro com sucesso', () => {
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
            .click({ force: true });

        cy.get('button')
            .contains('Cadastrar')
            .click({ force: true });

        cy.get('#modalText')
            .should('be.visible');
    });

    it('Registro com email em formato invalido', () => {

        cy.contains('Registrar')
            .click();

        cy.get('[name="email"]')
            .eq(1)
            .type('happypath', { force: true, delay: 200 });

        cy.get('[name="name"]')
            .type('Nome Teste', { force: true, delay: 200 });

        cy.get('[name="password"]')
            .eq(1)
            .type('senhateste123', { force: true, delay: 200 });

        cy.get('[name="passwordConfirmation"]')
            .type('senhateste123', { force: true, delay: 200 });

        cy.get('#toggleAddBalance')
            .click({ force: true });

        cy.get('button')
            .contains('Cadastrar')
            .click({ force: true });

        cy.get('.input__warging')
            .should('contain', 'Formato inválido');
    });

    it('Registro sem email', () => {
        cy.contains('Registrar')
            .click();

        cy.get('[name="name"]')
            .type('Nome Teste', { force: true, delay: 200 });

        cy.get('[name="password"]')
            .eq(1)
            .type('senhateste123', { force: true, delay: 200 });

        cy.get('[name="passwordConfirmation"]')
            .type('senhateste123', { force: true, delay: 200 });

        cy.get('#toggleAddBalance')
            .click({ force: true });

        cy.get('button')
            .contains('Cadastrar')
            .click({ force: true });

        cy.get('.input__warging')
            .should('contain', 'É campo obrigatório');
    });

    it('Registro sem nome', () => {
        cy.contains('Registrar')
            .click();

        cy.get('[name="email"]')
            .eq(1)
            .type('happypath@email.com', { force: true, delay: 200 });

        cy.get('[name="password"]')
            .eq(1)
            .type('senhateste123', { force: true, delay: 200 });

        cy.get('[name="passwordConfirmation"]')
            .type('senhateste123', { force: true, delay: 200 });

        cy.get('#toggleAddBalance')
            .click({ force: true });

        cy.get('button')
            .contains('Cadastrar')
            .click({ force: true });

        cy.get('#modalText')
            .should('contain', 'Nome não pode ser vazio.');
    });

    it('Registro sem senha', () => {
        cy.contains('Registrar')
            .click();

        cy.get('[name="email"]')
            .eq(1)
            .type('happypath@email.com', { force: true, delay: 200 });

        cy.get('[name="name"]')
            .type('Nome Teste', { force: true, delay: 200 });

        cy.get('#toggleAddBalance')
            .click({ force: true });

        cy.get('button')
            .contains('Cadastrar')
            .click({ force: true });

        cy.get('.input__warging')
            .should('contain', 'É campo obrigatório');
    });

    it('Registro sem informar dados', () => {
        cy.contains('Registrar')
            .click();

        cy.get('#toggleAddBalance')
            .click({ force: true });

        cy.get('button')
            .contains('Cadastrar')
            .click({ force: true });

        cy.get('.input__warging')
            .should('contain', 'É campo obrigatório');
    });
});