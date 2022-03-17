
describe('Alert, New Tab and New Window assertions', () => {

    beforeEach(() => {
        cy.visit('https://codenboxautomationlab.com/practice/')
        cy.url().should('include', 'codenbox')
    })

    it('Verify that user is able to open url in new window', () => {
        cy.window().then((win) => {
            cy.stub(win, 'open', url => {
                win.location.href = 'http://www.codenbox.com/';
            }).as("popup")
        })
        cy.get('#openwindow').click()
        cy.get('@popup').should("be.called")
        cy.url().should('include', 'codenbox')
    })

    it('Verify that user is able to open url in new tab', () => {
        cy.get('#opentab').invoke('removeAttr', 'target').click()
        cy.url().should('include', 'codenbox')
    })

    it('Validate Alert Text and Click OK', () => {
        cy.get('#name').clear().click().type('Hareem')
        cy.get('#alertbtn').click()
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Hello Hareem, share this practice page who love to learn automation')
        })
        cy.on('window:confirm', () => true)
    })

    it('Validate Confirm Text and Click OK', () => {
        cy.get('#name').clear().click().type('Hareem')
        cy.get('#confirmbtn').click()
        cy.on('window:confirm', (str) => {
            expect(str).to.equal('Hello Hareem, Are you sure you want to confirm?')
        })
        cy.on('window:confirm', () => true)
    })

    it('Validate Confirm Text and Click Cancel', () => {
        cy.get('#name').clear().click().type('Hareem')
        cy.get('#confirmbtn').click()
        cy.on('window:confirm', (str) => {
            expect(str).to.equal('Hello Hareem, Are you sure you want to confirm?')
        })
        cy.on('window:confirm', () => false)
    })

    it('Validate mouse over', () => {
        cy.get('.mouse-hover').contains('Mouse Hover').then($el => {
            cy.get('#mousehover').scrollTo('center', { ensureScrollable: false })
            cy.wrap($el).invoke('show')
            cy.get('.mouse-hover-content > a').eq(0).invoke('text').should('equal', 'Top')
        })
    })

    it('Validate Iframe', () => {
        cy.getIframe('#courses-iframe').should('be.visible')
    })
})
