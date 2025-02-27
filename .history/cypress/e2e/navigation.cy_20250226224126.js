/// <reference types="cypress" />

describe("Navigation Tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should navigate to the Account page", () => {
    cy.get("nav").contains("Account").click();
    cy.url().should("include", "/account");
  });

  it("should navigate to the Quiz page", () => {
    cy.get("nav").contains("Quiz Generation").click();
    cy.url().should("include", "/quiz");
  });

  it("should allow users to return to Home", () => {
    cy.get("nav").contains("Home").click();
    cy.url().should("eq", "http://localhost:5173/");
  });
});
