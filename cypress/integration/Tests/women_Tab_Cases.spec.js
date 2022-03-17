import { women } from '../../support/Pages/women'
describe('Women tab test cases', () => {

    let woman = new women()

    beforeEach(() => {
        cy.visit('/')
        cy.fixture('config').as('myUserFixture')
        cy.get('@myUserFixture').then(user => {
            cy.login(user)
        })
    })

    it('To verify that user should be able to search and add item in cart.', () => {
        woman.goToWomanTab()
        woman.getSearchQuery().type('Blouse')
        woman.clickSearchButton()
        woman.hoverProductDetail()
        woman.addToCart()
        woman.closeModal()
        woman.getSearchQuery().clear()
    })

    it('To verify that user is able to clear the search query tab.', () => {
        woman.getSearchQuery().type('Blouse')
        woman.clickSearchButton()
        woman.getSearchQuery().clear()
    })

    it('To verify that user is able to sort by using sort-by dropdown.', () => {
        var sortLowPrice = "price:asc", sortHighPrice = "price:desc"
        woman.goToWomanTab()
        woman.sort(sortLowPrice)
        woman.sort(sortHighPrice)
    })

    it('To verify that user is able to go to T-shirts tab by going through menu appears upon hovering over women tab. And user should be able to click and land on the menu item. Also verify that user can click and go to the sub-category.', () => {
        var category = "Top", subCategory = "T-shirts"
        woman.selectProductCategoryFromHoverMenu(category)
        woman.verifySubCategoryProduct(subCategory)
    })

    it('To verify that women landing page should contain two sub categories Tops and dresses', () => {
        woman.goToWomanTab()
        woman.getSubCategoryFromWomenLandingPage().eq(0).should('contain', 'Tops')
        woman.getSubCategoryFromWomenLandingPage().eq(1).should('contain', 'Dresses')
    })

    it('To verify that women landing page has 7 products.', () => {
        woman.goToWomanTab()
        woman.checkProductQuantity()
    })

    it('To verify that user can select different compositions from left pane of the screen.', () => {
        var composition = 'Cotton'
        woman.goToWomanTab()
        woman.selectComposition(composition)
    })

    it.skip('To verify that user can adjust the price range by moving the slider.', () => {
        woman.goToWomanTab()
        woman.moveSlider()
    })

    it('To verify that user is able to remove product from cart by accessing cross button from Cart on same page.', () => {
        woman.getSearchQuery().type('Blouse')
        woman.clickSearchButton()
        woman.hoverProductDetail()
        woman.addToCart()
        woman.closeModal()
        woman.removeFromCart()
    })

    it('To verify that user is able to add product from the landing page and can delete it from cart by navigating to cart page. ', () => {
        woman.addToCartFromWomenLandingPage()
        woman.removeFromCartFromCartLandingPage()
    })

    it('To verify that the women landing page contains 6 categories under Information block.', () => {
        woman.goToWomanTab()
        woman.verifyInformationCategory()
    })

    it('To verify that 3 sizes are available for women dress that is Small(S), Medium(M), Large(L).', () => {
        woman.goToWomanTab()
        woman.verifyDressSize()
    })

    afterEach(() => {
        cy.logout()
    })
})
