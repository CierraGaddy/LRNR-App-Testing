/// <reference types="cypress" />

describe("Account Page Tests", () => {
  beforeEach(() => {
    cy.visit("/account");
  });

  it("should display user streak information", () => {
    cy.contains("Streak").should("be.visible");
  });

  it("should show XP progress", () => {
    cy.contains("xp").should("be.visible");
  });

  it("should navigate back to Home", () => {
    cy.get("a").contains("Home").click();
    cy.url().should("eq", "http://localhost:5173/");
  });
});
