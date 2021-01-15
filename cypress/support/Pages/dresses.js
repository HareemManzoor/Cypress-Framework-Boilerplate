class dresses {
    goToDressesTab() {
        cy.get('.sf-menu > :nth-child(2) > .sf-with-ul').click()
        cy.get('.page-heading.product-listing [class = "cat-name"]').should('contain', 'Dresses')
    }

    verifyDressCategory() {
        cy.get('#categories_block_left')
        .find('ul > li')
        .should('have.length', 3)
        .then(($item) => {
            expect($item[0]).to.contain.text('Casual Dresses')
            expect($item[1]).to.contain.text('Evening Dresses')
            expect($item[2]).to.contain.text('Summer Dresses')
        })
    }

    verifyDressSubCategory() {
        cy.get('#subcategories')
        .find('ul > li')
        .should('have.length', 3)
        .then(($item) => {
            expect($item[0]).to.contain.text('Casual Dresses')
            expect($item[1]).to.contain.text('Evening Dresses')
            expect($item[2]).to.contain.text('Summer Dresses')
        })
    }

    goToOurStorePage(){
        //npm install --save-dev cypress @testing-library/cypress --For using FindBy commands in cypress
        //https://testing-library.com/docs/cypress-testing-library/intro/
        cy.findByText('All specials').click()
        cy.get('[class="breadcrumb clearfix"]').should('contain','Price drop')
    }
    
    discoverOurStore() {
        cy.findByText('Discover our stores').click()
        cy.get('.page-heading').should('contain','Our store(s)!')
        cy.get('#map').should('exist')
    }
}
export default dresses