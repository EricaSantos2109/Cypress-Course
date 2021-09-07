/// <reference types="cypress" />

describe('work with basic elements', () =>{
    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    beforeEach(() => {
        cy.reload()
    })

    it('using jquery selector', () => {
        cy.get(':nth-child(1) > :nth-child(3) > [type="button"]')
        cy.get('table#tabelaUsuarios tbody > tr:eq(0) td:nth-child(3) > input') //eq: é "equal". Posso usar o ".click()" aqui para interagir com o elemento
        cy.get("[onclick*='Francisco']")
        cy.get('#tabelaUsuarios td:contains(\'Doutorado\'):eq(0) ~ td:eq(3) > input')// ~ serve para encontrar os irmaos
        cy.get('#tabelaUsuarios tr:contains(\'Doutorado\'):eq(0) td:eq(6) input') //tomar cuidado com as aspas dentro do parenteses
    })

    it('using xpath', () => {
        cy.xpath('//input')
    })
})
