describe('Api Adopet', () => {
    const authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIzMWI5OThlYi04YmIzLTQ2ZTItYWYxOC03NGNjMWQ4ODRhZmIiLCJhZG9wdGVyTmFtZSI6IkFuYSBkZSBKZXN1cyIsImlhdCI6MTczMzM1MjU4NCwiZXhwIjoxNzMzNjExNzg0fQ.aRqMh8nOtfZVJqQsf_CBl_xRNM1ZdKHPI21SYr3fL7E`

    it('Mensagens da API', () => {
        cy.request({
            method: 'GET',
            url: 'https://adopet-api-i8qu.onrender.com/mensagem/31b998eb-8bb3-46e2-af18-74cc1d884afb',
            headers: { authorization }
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('msg')
        })
    })
})