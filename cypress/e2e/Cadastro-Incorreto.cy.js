describe('Página de cadastro', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/'); // Acessa o site de estudo Adopet
    cy.get('[data-test="register-button"]').click(); //Clica no botão de cadastro
  })
  it('Preencher os campos do formulário incorretamente e exibir mensagens ao usuário', () => {
    cy.get('[data-test="submit-button"]').click(); //Clica no botão de salvar cadastro
    cy.contains('É necessário informar um endereço de email').should('be.visible'); // Verifica se contem a mensagem de erro "É necessário informar um endereço de email"
    cy.contains('Crie uma senha').should('be.visible'); // Verifica se contem a mensagem de erro "Crie uma senha"
    cy.contains('Repita a senha criada acima').should('be.visible'); // Verifica se contem a mensagem de erro "Repita a senha criada acima"
  })
})