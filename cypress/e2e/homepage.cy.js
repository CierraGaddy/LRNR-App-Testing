/// <reference types="cypress" />

describe("Homepage User Experience", () => {
  beforeEach(() => {
    cy.visit("/"); // Ensure Cypress starts at the homepage
  });

  it("greets the user with a warm welcome", () => {
    cy.contains("Welcome").should("be.visible"); // Adjust based on actual homepage text
  });

  it("allows users to explore navigation smoothly", () => {
    cy.get("nav").should("be.visible"); // Ensure navbar exists

    cy.contains("Account").click(); // Click the "Account" link
    cy.url().should("include", "/account"); // Verify the URL changes correctly
  });

  it("engages users with interactive buttons", () => {
    cy.get("button")
      .should("exist") // Ensure the button exists
      .contains(/begin journey/i) // Adjusted to match actual button text
      .should("be.visible")
      .click();

    cy.wait(1000); // Simulate user interaction delay
    cy.url().should("include", "/quiz"); // ✅ Correct URL based on actual behavior
  });

  it("checks that the footer is visible", () => {
    cy.scrollTo("bottom");
    cy.wait(500);
    cy.get("footer")
      .should("be.visible") // Ensure the footer exists
      .invoke("text") // Get text inside the footer
      .then((footerText) => {
        expect(footerText.length).to.be.greaterThan(10); // Ensure the footer contains some text
      });
  });
});
