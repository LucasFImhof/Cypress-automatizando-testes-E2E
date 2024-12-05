import { users } from '../fixtures/usuarios.json' // importa a massa de dados Users das fixtures

describe('Página de cadastro', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app'); // Visita o site Adopet
        cy.get('[data-test="register-button"]').click(); // Clica em cadastro
    })
    users.forEach(users => { // Percorre toda a lista de usuários presente na fixture users
        it('Deve preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
            cy.get('[data-test="input-name"]').clear().type(user.name); // Preenche o nome no cadastro com base da fixture
            cy.get('[data-test="input-email"]').clear().type(user.email); // Preenche o email no cadastro com base da fixture
            cy.get('[data-test="input-password"]').clear().type(user.password); // Preenche o senha no cadastro com base da fixture
            cy.get('[data-test="input-confirm-password"]').clear().type(user.password); // Preenche o senha no cadastro com base da fixture
            cy.get('[data-test="submit-button"]').click();
        })
    })
})