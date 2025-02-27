describe("Homepage User Experience", () => {
  beforeEach(() => {
    cy.visit("/"); // Start on the homepage
  });

  it("greets the user with a warm welcome", () => {
    cy.contains("Welcome").should("be.visible"); // Adjust based on homepage content
    cy.wait(500); // Simulating a natural pause
  });

  it("allows users to explore navigation smoothly", () => {
    cy.get("nav").should("be.visible"); // Ensure navbar exists

    // Hover over navigation for a human-like interaction
    cy.contains("Account").trigger("mouseover");
    cy.wait(500);
    cy.contains("Account").click();
    cy.url().should("include", "/account");
  });

  it("engages users with interactive buttons", () => {
    cy.get("button")
      .contains(/get started/i)
      .should("be.visible")
      .click();

    cy.wait(1000); // Simulate a real-time user delay
    cy.url().should("include", "/signup"); // Adjust based on your app
  });

  it("displays dynamic elements when scrolling", () => {
    cy.scrollTo("bottom");
    cy.wait(500);
    cy.get("footer").should("contain", "Made by"); // Adjust content
  });

  it("handles broken links gracefully", () => {
    cy.get("a[href='/404']").click({ force: true });
    cy.wait(500);
    cy.contains("Oops! Page not found").should("be.visible"); // Example 404 handling
  });
});
