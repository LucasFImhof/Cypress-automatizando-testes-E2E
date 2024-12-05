describe('Api Adopet', () => {
    const authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIzMWI5OThlYi04YmIzLTQ2ZTItYWYxOC03NGNjMWQ4ODRhZmIiLCJhZG9wdGVyTmFtZSI6IkFuYSBkZSBKZXN1cyIsImlhdCI6MTczMzM1MjU4NCwiZXhwIjoxNzMzNjExNzg0fQ.aRqMh8nOtfZVJqQsf_CBl_xRNM1ZdKHPI21SYr3fL7E`

    it('Mensagens da API', () => {
        cy.request({
            method: 'GET', // Metodo que será utilizado (GET,POST,DELET etc)
            url: 'https://adopet-api-i8qu.onrender.com/mensagem/31b998eb-8bb3-46e2-af18-74cc1d884afb', //URL com autenticação do usuário (31b998eb-8bb3-46e2-af18-74cc1d884afb)
            headers: { authorization } // Bearer token
        }).then((res) => {
            expect(res.status).to.be.equal(200) // Valida se o status recebido pela API
            expect(res.body).is.not.empty // Valida se o conteudo não estará vazio
            expect(res.body).to.have.property('msg') // Valida se a propriade to corpo e uma mensagem
        })
    })
})