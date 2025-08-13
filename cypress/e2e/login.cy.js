describe('template spec', () => {

  it('inValidlogin', () => {
    cy.visit('https://www.saucedemo.com/');

    cy.get('[data-test="username"]').type("invalid");
    cy.get('[data-test="password"]').type("Test");
    cy.get('[data-test="login-button"]').click();

    // Assertion: Error message should be visible and contain specific text
    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain.text', 'Epic sadface');
  });



    it('Validlogin', () => {
    cy.visit('https://www.saucedemo.com/');

    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();

   // Assert that URL contains /inventory.html
    cy.url().should('include', '/inventory.html');
    

  });

});


