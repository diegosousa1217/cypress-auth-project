/// <reference types="cypress"/>

describe('Get Booking', () => {

    const body_criar_reserva = require('../fixtures/criar.reserva.json')

    it('buscar todas as reservas', () => {
        cy.request({
            method: 'GET',
            url: 'https://restful-booker.herokuapp.com/booking',
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eql(200)
        })
    })

    it('buscar reserva por id', () => {

        cy.criarReserva(body_criar_reserva)
            .then((response) => {
                expect(response.status).to.eql(200)
                const id_reserva = response.body.bookingid
                expect(id_reserva).not.to.be.null

                cy.buscarReservaPorId(id_reserva)
                    .then((response) => {
                        expect(response.status).to.eql(200)
                        expect(response.body.firstname).to.exist
                    })
            })
    })

    it('buscar reserva por id invalido', () => {
            var id_reserva_invalido = 12546
       

                cy.buscarReservaPorId(id_reserva_invalido)
                    .then((response) => {
                        expect(response.status).to.eql(404)
                    })
            })
    })
