import SignInSignoutPage from '../Pages/SignInSignoutPage';

beforeEach(() => {
// Preserving local storage
  cy.restoreLocalStorage();
});


describe('Sign In', () => { 
 it('Should login to the url',function(){
  const signIn = new SignInSignoutPage();
  signIn.login();
  cy.wait(5000);
  cy.get("[role='alertdialog']").invoke('text').then((text)=>{//invoke(text) yields the text of the HTML element 
  const toastText =text;
  cy.debug()
  expect(toastText).to.equal(" Welcome Hareem Company ");
  })
 }) 
 })  

// describe('Sign Out', () => { 
//  it('Should logout to the url',function(){
//   const signOut = new SignInSignoutPage();
//    signOut.logout();
//   })
//  })   
