describe("Price Range Slider", () => {
  beforeEach(() => {
    // Replace with the correct URL of your component
    cy.visit("http://localhost:5173/search");
  });

  it("should render the price range slider", () => {
    cy.get("#price-range-slider") // Slider's aria-label selector
      .should("exist") // Verify slider exists
      .and("be.visible"); // Verify slider is visible
  });

  it("should allow changing the price range", () => {
    // Interact with the slider by dragging its handle
    cy.get("#price-range-slider")
    .invoke("val", 5000) // Set the slider's value
    .trigger("change"); // Trigger the change event

  // Verify the value is updated
  cy.get("#price-range-slider")
    .should("have.attr", "aria-valuenow", "5000"); // Check the updated value
  });

  it("should restrict value within the range", () => {
    // Try setting a value below the minimum
    cy.get("#price-range-slider")
      .invoke("val", 700) // Below the min value
      .trigger("change");

    cy.get("#price-range-slider")
      .invoke("attr", "aria-valuenow")
      .should("not.eq", "700") // Ensure it doesn't accept below the min value

    // Try setting a value above the maximum
    cy.get("#price-range-slider")
      .invoke("val", 11000) // Above the max value
      .trigger("change");

    cy.get("#price-range-slider")
      .invoke("attr", "aria-valuenow")
      .should("not.eq", "11000"); // Ensure it doesn't accept above the max value
  });
});

