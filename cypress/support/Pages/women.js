class women {

    goToWomanTab() {
        cy.get('.sf-menu > :nth-child(1) > [href="http://automationpractice.com/index.php?id_category=3&controller=category"]').click()
        cy.get('.page-heading.product-listing [class = "cat-name"]').should('contain', 'Women')
    }
    getSearchQuery() {
        return cy.get('#search_query_top')
    }
    clickSearchButton() {
        cy.get('#searchbox > .btn').click()
        cy.get('.page-heading.product-listing [class = "lighter"]').should('contain', 'Blouse')
    }
    productDetail() {
        cy.get('.left-block > .product-image-container').trigger('mouseover')
        cy.get('.addToWishlist').should('exist')
    }
    addToCart() {
        cy.get('.ajax_add_to_cart_button > span').click();
    }
    closeModal() {
        cy.get('[title="Close window"]').click()
    }
    sort(sort) {
        cy.get('#uniform-selectProductSort').click()
        cy.get('#selectProductSort')
            .select(sort).invoke('val')
            .should('deep.equal', sort)
    }
    selectProductCategoryFromHoverMenu(category) {
        cy.get('.sf-with-ul').contains(category).click({ force: true })
        cy.get('span[class="category-name"]').should('contain', category)
    }
    goToSubCategoryProduct(category) {
        cy.get('.subcategory-name').contains(category).click()
        cy.get('span[class="category-name"]').should('contain', category)
    }
    getSubCategoryFromWomenLandingPage() {
        return cy.get('.subcategory-name')
    }
    checkProductQuantity() {
        //This is correct method but it's not working on site.
        // const product= [
        // "Faded Short Sleeve T-shirts",
        // "Blouses",
        // "Printed Dress", 
        // "Printed Dress" , 
        // "Printed Summer Dress",
        // "Printed Summer Dress",
        // "Printed Chiffon Dress"
        //     ];
        // //you can test your lists using .then() or .each()
        // cy.get('.product_list').each((item, index) => {
        //     cy.wrap(item)
        //       .should('contain.text', product[index])
        // })

        
    }


}
export default women