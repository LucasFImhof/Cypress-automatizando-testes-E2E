describe('Fluxo de Login', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/'); // Acessa o site de estudo Adopet
  })

  it('Verifica mensagem de texto', () => {
    cy.get('.header__message').click();
    cy.login('ana@email.com', 'Senha123'); // Preenche usuário e senha utilizando o command
  })
});