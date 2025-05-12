
Cypress.Commands.add('realizarLogin', () => {
    cy.request({
        method: 'POST',
        url: 'https://restful-booker.herokuapp.com/auth',
        failOnStatusCode: false,
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

Cypress.Commands.add('buscarReservaPorId', (id_reserva) => {
    cy.request({
        method: 'GET',
        url: `https://restful-booker.herokuapp.com/booking/${id_reserva}`,
        failOnStatusCode: false
    }).then((response) => {
        return response
    })

})

Cypress.Commands.add('buscarTodasReservas', () => {
    cy.request({
        method: 'GET',
        url: 'https://restful-booker.herokuapp.com/booking',
        failOnStatusCode: false
    }).then((response) => {
        return response
    })
})