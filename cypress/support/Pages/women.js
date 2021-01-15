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

    hoverProductDetail() {
        cy.get('.left-block > .product-image-container').trigger('mouseover')
        cy.get('.addToWishlist').should('exist')
    }

    //Function to add product to cart by clicking on the modal appearing on product hover.
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
        cy.get('.product_list')
            .find('li > .product-container')
            .should('have.length', 7)

    }

    selectComposition(composition) {
        if (composition == 'Cotton') {
            cy.get('span input').check('5_5')
        }
        if (composition == 'Viscose') {
            cy.get('span input').check('3_5')
        }
        if (composition == 'Viscose') {
            cy.get('span input').check('1_5')
        }
    }

    moveSlider() {
        //npm install --save-dev @4tw/cypress-drag-drop please see the usage before dowloading. Below method doesnt use this plugin.
        cy.get('[class="ui-slider-handle ui-state-default ui-corner-all"]')
            .eq(0)
            .click()
            .wait(1000)
            .type('{rightarrow}{rightarrow}{rightarrow}{rightarrow}')
    }

    removeFromCart() {
        cy.contains('Cart')
            .trigger('mouseover')

        cy.get('.ajax_cart_block_remove_link')
            .click({ force: true })

        cy.get('.ajax_cart_no_product')
            .should('contain', '(empty)')
    }

    clickListView() {
        cy.get('[id="list"]').click()
    }

    //Function to add product in cart by clicking on the Add to Cart button on women tab landing page
    addToCartFromWomenLandingPage(productName) {
        cy.get('.product-name').then(() => {
            if (productName == "Faded Short Sleeve T-shirts") {
                cy.get('[title="Add to cart"]')
                    .eq(0)
                    .click()
            }
            if (productName == "Blouse") {
                cy.get('[title="Add to cart"]')
                    .eq(1)
                    .click()
            }
        })
        cy.get('.layer_cart_product > h2').should('contain', 'Product successfully added to your shopping cart')
    }

    goToShoppingCartPage() {
        cy.get('[title="View my shopping cart"]').click()
    }

    removeFromCartFromCartLandingPage(product) {
        cy.contains('td', product)  // gives you the cell 
            .siblings()             // gives you all the other cells in the row
            .find('.icon-trash')    // finds the delete button
            .click()
    }

    verifyInformationCategory() {
        cy.get('[class="block informations_block_left"]')
            .find('li')
            .should('have.length', 6)
            .then(($item) => {
                expect($item[0]).to.contain.text('Delivery')
                expect($item[1]).to.contain.text('Legal Notice')
                expect($item[2]).to.contain.text('Terms and conditions of use')
                expect($item[3]).to.contain.text('About us')
                expect($item[4]).to.contain.text('Secure payment')
                expect($item[5]).to.contain.text('Our stores')
            })
    }
    verifyDressSize() {
        cy.get('#ul_layered_id_attribute_group_1')
            .find('li')
            .should('have.length', 3)
            .then(($item) => {
                expect($item[0]).to.contain.text('S')
                expect($item[1]).to.contain.text('M')
                expect($item[2]).to.contain.text('L')
            })
    }
}
export default women