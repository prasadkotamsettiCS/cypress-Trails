/// <reference types = "cypress" />
import LoingPage from "../PageObjects/LoginPage";

const testData = require("../../fixtures/testData.json");
const loginPage = new LoingPage();
describe("Login as different users into organisation", () => {
  it("Verify that user able to login as Admin", () => {
    cy.log("**-Asserting the Admin user successful login-**");
    loginPage.loginMethod(testData.adminEmail, testData.adminPassword);
    loginPage.successfulLoginAssertion();

  });

  it.only("Verify that user able to login as Account Manager", () => {
    cy.log("**-Asserting the Account user successful login-**");
    loginPage.loginMethod(testData.accManEmail, testData.accManPassword);
    loginPage.successfulLoginAssertion();
  });

  it("Verify that user able to login as Senior Manager", () => {
    cy.log("**-Asserting the Senior Manager user successful login-**");
    loginPage.loginMethod(testData.senManEmail, testData.senManPassword);
    loginPage.successfulLoginAssertion();

  });

  it("Verify that user able to login as Owner", () => {
    cy.log("**-Asserting the Owner user successful login-**");
    loginPage.loginMethod(testData.ownerEmail, testData.ownerPassword);
    loginPage.successfulLoginAssertion();

  });
});
