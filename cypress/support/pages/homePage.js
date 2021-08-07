const selectors = {
  product: "div.product-image-container a img[title=",
  phoneNumberHeader: "#header > div.nav span > strong",
  phoneNumberFooter: "#block_contact_infos li:nth-child(2) > span",
};

class HomePage {
  /**
   * Click in a product in the home screen
   *
   * @param {String} productName Name of the product to be clicked on the home screen
   */
  clickProductFromHomePage(productName) {
    cy.get(selectors.product + productName)
      .eq(1)
      .scrollIntoView()
      .click({ force: true });
  }

  /**
   * Assert the phone number provided is the same for both header and footer
   *
   * @param {Any} phoneNumber Phone number to be validated
   */
  assertPhoneNumberIsTheSameOnHeaderAndFooter(phoneNumber) {
    cy.get(selectors.phoneNumberHeader).should("have.text", phoneNumber);
    cy.get(selectors.phoneNumberFooter).should("have.text", phoneNumber);
  }
}

export default HomePage;
