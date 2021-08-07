class SalePage {
  assertSalePageOnScreen() {
    cy.url().should(
      "eq",
      "http://automationpractice.com/index.php?controller=sale"
    );
  }
}

export default SalePage;
