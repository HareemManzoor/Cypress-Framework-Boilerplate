/// <reference types="cypress" />
import women from '../../support/Pages/women'
describe('Women tab test cases', () => {
    const woman = new women();

    before(() => {
        cy.visit(Cypress.config().baseUrl)
    })
    it('To verify that user should be able to add item in cart.', () => {
        woman.goToWomanTab()
        woman.getSearchQuery().type('Blouse')
        woman.clickSearchButton()
        woman.productDetail()
        woman.addToCart()
        woman.closeModal()
    })
    it('To verify that user is able to clear the search query tab.', () => {
        woman.getSearchQuery().type('Blouse')
        woman.clickSearchButton()
        woman.getSearchQuery().clear()
    })
    it('To verify that user is able to sort by using sort-by dropdown.', () => {
        var sortLowPrice = "price:asc",
            sortHighPrice = "price:desc"

        woman.goToWomanTab()
        cy.log('Sorting product with lower price first.')
        woman.sort(sortLowPrice)

        cy.log('Sorting product with high price first.')
        woman.sort(sortHighPrice)
    })
    it('To verify that user is able to go to T-shirts tab by going through menu appears upon hovering over women tab. And user should be able to click and land on the menu item. Also verify that user can click and go to the sub-category.', () => {
        var category = "Top",
            subCategory = "T-shirts"

        woman.selectProductCategoryFromHoverMenu(category)

        cy.log('verify that user can click and go to the sub-category.')
        woman.goToSubCategoryProduct(subCategory)
    });
    it('To verify that women landing page should contain two sub categories Tops and dresses', () => {
        woman.goToWomanTab()
        woman.getSubCategoryFromWomenLandingPage().eq(0).should('contain', 'Tops')
        woman.getSubCategoryFromWomenLandingPage().eq(1).should('contain', 'Dresses')
    });

    it.only('To verify that women landing page has 7 products.',() => {
        woman.goToWomanTab()
        woman.checkProductQuantity()
    })

});