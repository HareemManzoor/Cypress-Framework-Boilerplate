class SignInSignoutPage {

   login() {
    cy.fixture('config').then((config)  => { 
    var url=config.url  
    cy.visit(url)  
    var email = config.email
    const emailField = cy.get('[id="sk-signInEmail"]');
    emailField.clear();
    emailField.type(email);
    var pass = config.password  
    const passField = cy.get('[id="sk-regConfPassField"]');    
    passField.clear(); 
    passField.type(pass);   
    const submitButton = cy.get('.btn-signin');
    submitButton.click();
  })
   return this;
  }
  }

// logout() {  
//     var username = cy.get('id="navbarDropdown"');
//     var logout_btn = cy.get('[class="dropdown-item"]').last();
//     var logout_btn1 = cy.contains('Logout');
   
//     this.username_clk = function() {
//         username.click();
//     };
//     this.logout_btn_clk = function() {
//         logout_btn.click();
//     };
//     this.logout_btn_clk1 = function()
//     {
//         logout_btn1.click();
//     };  
//      return this;
//   }

export default SignInSignoutPage;



