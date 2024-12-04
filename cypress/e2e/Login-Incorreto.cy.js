describe('Página de login', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/'); // Acessa o site de estudo Adopet
    cy.get('[data-test="login-button"]').click(); //Clica no botão de login
  })
  it('Deve preencher os campos do login corretamente e autenticar o usuário na página', () => {
    cy.get('[data-test="input-loginEmail"]').type('Marjorie3'); // Preenche o e-mail do usuário
    cy.get('[data-test="input-loginPassword"]').type('123'); // Preenche a senha do usuário
    cy.get('[data-test="submit-button"]').click(); // Clica no botão para realizar o login
    cy.contains('Por favor, verifique o email digitado').should('be.visible') // Verifica se contem a mensagem de erro "Por favor, verifique o e-mail digitado"
    cy.contains('A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres').should('be.visible') // Verifica se contem a mensagem de erro "A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres"

  })
})