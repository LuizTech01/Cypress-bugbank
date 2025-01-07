# Cypress-bugbank
Este é um conjunto de testes automatizados usando o Cypress para garantir a qualidade da aplicação web.
------------------------------------------------------------------------------------------------------------

# Tecnologias Utilizadas
Cypress:<br>
Framework de testes end-to-end.<br><br>
Node.js:<br>
Ambiente de execução para o Cypress.

------------------------------------------------------------------------------------------------------------
# Pré-requisitos
Antes de começar, certifique-se de ter as seguintes ferramentas instaladas:

Node.js (versão X ou superior)
NPM ou Yarn (gerenciador de pacotes)

------------------------------------------------------------------------------------------------------------
# Instalação
#### Passos para configurar o projeto localmente:

Clone o repositório:<br>
git clone https://github.com/seu-usuario/nome-do-repositorio.git

Navegue até o diretório do projeto:<br>
cd nome-do-repositorio

#### Instale as dependências:<br>

Se você estiver usando o NPM:<br>
npm install

Ou se você estiver usando o Yarn:<br>
yarn install

------------------------------------------------------------------------------------------------------------
# Executando os Testes
#### Para rodar os testes utilizando o Cypress, siga os seguintes passos:

Abra o Cypress:<br>
npx cypress open

Ou para rodar os testes em modo headless (sem interface gráfica):<br>
npx cypress run

O Cypress abrirá automaticamente uma interface onde você poderá escolher os testes a serem executados.

------------------------------------------------------------------------------------------------------------
# Estrutura de Pastas
#### Explique a estrutura do projeto para que os colaboradores saibam onde encontrar os testes e outros arquivos importantes. Exemplo:

/cypress<br>
&nbsp;&nbsp;/e2e            # Testes end-to-end<br>
&nbsp;&nbsp;/fixtures       # Dados de teste<br>
&nbsp;&nbsp;/support        # Arquivos de configuração do Cypress<br>
/cypress.json      # Configurações do Cypress<br>
/package.json      # Dependências e scripts

------------------------------------------------------------------------------------------------------------
# Exemplos de Testes
Aqui você pode fornecer exemplos simples de testes para ilustrar como os testes estão estruturados:

describe('Página de Login', () => {

  it('deve permitir login com credenciais válidas', () => {
  &nbsp;&nbsp;cy.visit('/login');<br>
  &nbsp;&nbsp;cy.get('input[name="username"]').type('usuario');<br>
  &nbsp;&nbsp;cy.get('input[name="password"]').type('senha');<br>
  &nbsp;&nbsp;cy.get('button[type="submit"]').click();<br>
  &nbsp;&nbsp;cy.url().should('include', '/dashboard');<br>
  &nbsp;&nbsp;});<br>
});
