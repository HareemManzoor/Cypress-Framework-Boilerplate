/// <reference types="Cypress" />
class HeaderLinks {

    agentsTabNavigation() {
      cy.get('.navbar-nav:nth-child(1) #agents-menu').click();
    }
    patientsTabNavigation(){
      cy.get('.navbar-nav:nth-child(2) #patient-menu').click();
    }
    invoicesTabNavigation(){
      cy.get('.navbar-nav:nth-child(3) #invoices-menu').click();
    }
}


export default HeaderLinks;