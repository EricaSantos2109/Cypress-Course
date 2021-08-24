/// <reference types="cypress" />

describe('work with basic elements', () =>{
    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    beforeEach(() => {
        cy.reload()
    })

    it('...', () => {

    })
})
