/// <reference types="Cypress" />
import SignInSignoutPage from '../Pages/SignInSignoutPage';
import HeaderLinks from '../Helpers/HeaderLinks';
import AgentsOperations from '../Pages/AgentsOperations'

describe('Navigation Bar', () => { 
  // it('Hotel link should navigate to Hotel page', () => {
  //   const signIn = new SignInPage();
  //   signIn.visit();
  //   const headerLinks = new HeaderLinks(); 
  //   headerLinks.navigation();  
  //   })

  it('User should be able to click Header Menu', () => {

    const signIn = new SignInSignoutPage();
    signIn.login();
    cy.wait(20000)
    const agentTab= new HeaderLinks();
    agentTab.agentsTabNavigation();
    })
  //Inprogress
  it('User should be able to add Agent'), () => {
    
    const headerLinks= new HeaderLinks();
    headerLinks.agentsTabNavigation();
    const addAgent=new AgentsOperations();
   // addAgent.addAgents();


    }

  })