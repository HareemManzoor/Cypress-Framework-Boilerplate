import { dresses } from '../../support/Pages/dresses'
import '../../support/commands'

describe('Dresses tab test cases', () => {

    let dress = new dresses()

    beforeEach(() => {
        cy.visit('/')
        cy.fixture('config').as('myUserFixture')
        cy.get('@myUserFixture').then((user) => {
            cy.login(user)
        })
        dress.goToDressesTab()
    })

    it('To verify that user is able to navigate to dresses page by clicking on dressing tab. || To verify that 3 dresses categories: Casual Dresses, Evening Dresses and Summer Dresses are available under category block. || To very that there are 3 subcategories availble for dress on dresses landing page. ', () => {
        dress.verifyDressCategory()
        dress.verifyDressSubCategory()
    })

    it('To verify that clicking on the Our Stores link, user lands to our store page.', () => {
        dress.goToOurStorePage()
    })

    it('To verify that when user clicks on the discover our store he should be landed on Our store(s)! page and should have a map.', () => {
        dress.discoverOurStore()
    })

    afterEach(() => {
        cy.logout()
    })
})
