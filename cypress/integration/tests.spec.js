/// <reference types="cypress" />

import HomePage from "../support/pages/homePage";
import SalePage from "../support/pages/salePage";
import Header from "../support/components/header";
import ProductPage from "../support/pages/productPage";

describe("Bynd exercise tests", () => {
  const header = new Header();
  const homePage = new HomePage();
  const salePage = new SalePage();
  const productPage = new ProductPage();

  beforeEach(() => {
    cy.visit("http://automationpractice.com/index.php");
  });

  it("Detect Bug 01", () => {
    header.accessSalesPage();
    salePage.assertSalePageOnScreen();
  });

  it("Detect Bug 02", () => {
    homePage.clickProductFromHomePage("Blouse");
    productPage.insertQuantityInProduct("asfasfasfasf");
    productPage.assertValueOnQuantityField("");
  });

  it("Detect Bug 03", () => {
    homePage.assertPhoneNumberIsTheSameOnHeaderAndFooter("0123-456-789");
  });
});
