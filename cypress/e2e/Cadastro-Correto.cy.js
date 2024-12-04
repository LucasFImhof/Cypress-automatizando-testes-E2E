describe('Página de cadastro', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-iota.vercel.app/'); // Acessa o site de estudo Adopet
    cy.get('[data-test="register-button"]').click(); //Clica no botão de cadastro
  })
  it('Deve preencher os campos do cadastro corretamente e clicar no botão cadastrar', () => {
    cy.cadastrar('Marjorie Anoquevem', 'marjorie@email.com', 'Senha123')  // Preenche os dados do usuário utilizando o comando "Cadastrar"
  })
})
