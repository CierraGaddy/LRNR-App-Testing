/// <reference types="cypress" />

describe("Quiz Page Tests", () => {
  beforeEach(() => {
    cy.visit("/quiz");
  });

  it("should display the quiz topic", () => {
    cy.contains("select a topic").should("be.visible");
  });

  it("should have a submit button", () => {
    cy.get("button")
      .contains(/SUBMIT/i)
      .should("be.visible")
      .click();
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
