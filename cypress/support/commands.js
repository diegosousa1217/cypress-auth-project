
Cypress.Commands.add('realizarLogin', () => {
    cy.request({
        method: 'POST',
        url: 'https://restful-booker.herokuapp.com/auth',
        body: {
            "username": "admin",
            "password": "password123"
        }
    }).then((response) => {
        return response
    })
})

Cypress.Commands.add('criarReserva', (payload) => {
    cy.request({
        method: 'POST',
        url: 'https://restful-booker.herokuapp.com/booking',
        failOnStatusCode: false,
        body: payload
    }).then((response) => {
        return response
    })
})

Cypress.Commands.add('atualizarReserva', (bookingid, payload, token) => {
    cy.request({
        method: 'PUT',
        url: `https://restful-booker.herokuapp.com/booking/${bookingid}`,
        failOnStatusCode: false,
        body: payload,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Cookie': `token=${token}`
        }
    }).then((response) => {
        return response
    })
})