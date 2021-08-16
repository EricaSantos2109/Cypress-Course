/// <reference types="cypress" />

describe('Esperas...', () =>{

    before(() =>{
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    beforeEach(() =>{
        cy.reload()
    })

    it('Deve aguardar elemento estar disponivel', () => {
        cy.get('#novoCampo').should('not.exist')
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('not.exist')
        cy.get('#novoCampo').should('exist')
        cy.get('#novoCampo').type('funciona')
    })

    
    it.only('Deve fazer retrys', () => {
        cy.get('#novoCampo').should('not.exist')
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('not.exist')
        cy.get('#novoCampo')
            .should('exist')
            .type('funciona')
    })

    it.only('Uso do find', () => {
        cy.get('#buttonList').click()
        cy.get('#lista li')
            .find('span')
            .should('contain', 'Item 1')
        cy.get('#lista li span')
            .should('contain', 'Item 2')
    })

    it.only('Uso do timeout', () => {
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo', {timeout: 5000}).should('exist')

        //cy.get('#buttonListDOM').click()
        //cy.wait(5000)
        //cy.get('#lista li span')
          //  .should('contain', 'Item 2')
    })

    it.only('Click retry', () => {
        cy.get('#buttonCount')
        .click()
        .click()
        .should('have.value', '111')
    })

    //then consigo usar o return, serve nas novas buscas
    //should sempre retorna o elemento, não aceita novas buscas

})
