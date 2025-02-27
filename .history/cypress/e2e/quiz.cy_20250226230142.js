/// <reference types="cypress" />

describe("Quiz Page Tests", () => {
  beforeEach(() => {
    cy.visit("/quiz"); // Load the Quiz page
  });

  it("should display the quiz topic", () => {
    cy.contains("Topic").should("be.visible"); // Ensure the topic is visible
  });

  it("should have a section for selecting answers", () => {
    cy.get("form").should("exist"); // Check if the quiz page has a form
  });

  it("should have multiple answer choices", () => {
    cy.get("input[type='radio']").should("have.length.greaterThan", 1); // Ensure answer choices exist
  });
});
