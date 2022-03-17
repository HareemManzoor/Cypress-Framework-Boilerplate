import 'cypress-wait-until';
Cypress.Commands.add('login', (user) => {
    // verify that the correct page is available
    cy.get('[title="Log in to your customer account"]').click()
    cy.get('#login_form').should('exist')
    cy.get('#email').type(user.email)
    cy.get('#passwd').type(user.password)
    cy.get('#SubmitLogin').click()
  })

  Cypress.Commands.add('logout', () => {
    // verify that the correct page is available
    cy.get('[title="Log me out"]').click()
  })

  Cypress.Commands.add('getIframe', (iframe) => {
    return cy.get(iframe)
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap)
})
  