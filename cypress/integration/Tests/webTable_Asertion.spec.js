/// <reference types="cypress" />
chai.use(require('chai-sorted'))

describe(' Web Table Assertions',() => {
    
    beforeEach(() => {
        cy.visit('https://demoqa.com/webtables')
        cy.url().should('include', 'demoqa')
    })
    
    it('Confirm the table is showing 10 rows on page', () => {
        cy.get('[aria-label="rows per page"]').should('have.value', '10')
    })

    it('Confirm there are multiple pages', () => {
        cy.get('input[aria-label="jump to page"]').should('have.length.gt', '1')
    })

    it('Change pagination to show 20 pages', () => {
        cy.get('[aria-label="rows per page"]').select('20')
    })

    it('Confirm there is a single page', () => {
        cy.get('[aria-label="rows per page"]').should('have.length', '1')
    })

    it('Confirm that age column is not sorted', () => {
        cy.get('.rt-tbody .rt-td:nth-child(3)')
        .then(($cells) => Cypress._.map($cells, 'innerText'))
        .then((strings) => Cypress._.map(strings, parseFloat))
        .then((numbers) => cy.log(numbers.slice(0,3).join(', '))) //will create shallow copy of array into new array numbers
        .should('not.be.sorted')
    })
    //For more https://www.youtube.com/watch?v=_vqOtLIGI9o
})