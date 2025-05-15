/// <reference types="cypress"/>

describe('Update Booking', () => {

    var token = null
    var bookingid = null
    
    const body_criar_reserva = require('../fixtures/criar.reserva.json')
    const body_atualizar_reserva = require('../fixtures/atualizar.reserva.json')

    before('Realizar login', () => {
        cy.realizarLogin()
            .then((response) => {
                expect(response.status).to.eql(200)
                expect(response.body.token).not.empty
                token = response.body.token
            })
    })

    beforeEach('criar reserva', () => {
        cy.criarReserva(body_criar_reserva)
            .then((response) => {
                expect(response.status).to.eql(200)
                expect(response.body.bookingid).not.to.null
                bookingid = response.body.bookingid
            })

    })

    it('Atualizar reserva', () => {
        cy.atualizarReserva(bookingid, body_atualizar_reserva, token)
        .then((response)=>{
            expect(response.status).to.eql(200)
        })
    })

    it('Atualizar reserva com id inavalido', () => {

        var bookingid_invalido = 1123456
        cy.atualizarReserva(bookingid_invalido, body_atualizar_reserva, token)
        .then((response)=>{
            expect(response.status).to.eql(405)
        })
    })
})