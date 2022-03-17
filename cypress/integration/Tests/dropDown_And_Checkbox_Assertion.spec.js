describe('Dropdown and checkbox assertions', () => {

    it('Verify that user is able to search in dynamic dropdown', () => {
        cy.visit('https://codenboxautomationlab.com/practice/')
        cy.get('#autocomplete').click().type('Pa')
        cy.get('.ui-menu-item').each(($listItem, index, $list) => {
            if ($listItem.text() === "Pakistan") {
                $listItem.click()
            }
        })
        cy.get("#autocomplete").should("have.value", "Pakistan")
    })

    it('Verify that user is able to select option from static dropdown', () => {
        cy.get('#dropdown-class-example').select('API')
        cy.get('#dropdown-class-example').should('contain', 'API')
    })

    it('Verify that user is able to check first option', () => {
        cy.get('#checkBoxOption1').check()
        cy.get("#checkBoxOption1").should('be.checked')
    })
})
