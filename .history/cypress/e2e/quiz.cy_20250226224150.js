/// <reference types="cypress" />

describe("Quiz Page Tests", () => {
  beforeEach(() => {
    cy.visit("/quiz");
  });

  it("should display the quiz title", () => {
    cy.contains("Start Your Quiz").should("be.visible");
  });

  it("should have a start button", () => {
    cy.get("button").contains(/start/i).should("be.visible").click();
  });

  it("should show the first question after starting", () => {
    cy.contains("Start").click();
    cy.contains("Question 1").should("be.visible");
  });

  it("should allow the user to select an answer", () => {
    cy.contains("Start").click();
    cy.get("input[type='radio']").first().check();
  });
});
