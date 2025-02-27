/// <reference types="cypress" />

describe("Quiz Page Tests", () => {
  beforeEach(() => {
    cy.visit("/quiz"); // Load the Quiz page
  });

  it("should display the quiz topic", () => {
    cy.contains("Topic").should("be.visible"); // Ensure the topic is visible
  });

  it("should have a dropdown for selecting an answer", () => {
    cy.get("select").should("exist"); // Check if the dropdown box exists
  });

  it("should have multiple options in the dropdown", () => {
    cy.get("select option").should("have.length.greaterThan", 1); // Ensure dropdown has multiple choices
  });
});
