describe('Testes na Página principal', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
  })
  it('Verifica se o texto adopet está presente na página inicial”', () => {
    cy.title().should('eq', 'AdoPet');
  })
  it('Verifica se o texto ‘Quem ama adota!” está presenten no html', () => {
    cy.contains('Quem ama adota!').should('be.visible');
  })
  it('Verifica se o texto ‘Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!', () => {
    cy.contains('Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!').should('be.visible');
  })

})