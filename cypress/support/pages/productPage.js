const selectors = {
  quantityInput: "#quantity_wanted",
};

class ProductPage {
  /**
   * Insert quantity in the product
   *
   * @param {Any} quantity Quanity of products to be inserted
   */
  insertQuantityInProduct(quantity) {
    cy.get(selectors.quantityInput).clear().type(quantity).blur(); // clear before typing, then remove focus from the input
  }

  /**
   * Assert the value in quantity field
   *
   * @param {Any} value Value in quantity field
   */
  assertValueOnQuantityField(value) {
    cy.get(selectors.quantityInput).should("have.value", value);
  }
}

export default ProductPage;
