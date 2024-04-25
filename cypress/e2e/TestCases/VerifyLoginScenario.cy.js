describe('Loging scenarios ', () => {
  it('Verify login test with valid details ', () => {
    cy.visit("/");
    cy.get("input[type='email']").type("csaautomation0@gmail.com");
    cy.get("input[name=password]").type("Adminpass90*");
    cy.get('button[type="button"]').first().click();
  })

  it('Verify login test with valid details ', () => {
    cy.visit("/");
    cy.get("input[type='email']").type("csaautomation0@gmail.com");
    cy.get("input[name=password]").type("Adminpass9**");
    cy.get('button[type="button"]').first().click();
    cy.get('[data-cy="auth-error-message"]').should(
      "have.text",
      "The email or password you entered is incorrect"
    );
  })
})