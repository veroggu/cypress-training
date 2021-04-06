import { MenuContentPage, ProductsListPage, ShopingCartPage, LoginPage, AddressStepPage, ShippingStepPage, PaymentStepPage } from "../page/index"

const menuContentPage = new MenuContentPage()
const productsListPage = new ProductsListPage()
const shopingCartPage = new ShopingCartPage()
const loginPage = new LoginPage()
const addressStepPage = new AddressStepPage()
const shippingStepPage = new ShippingStepPage()
const paymentStepPage = new PaymentStepPage()

describe("Buy a t-shirt", () => {

  it("then should be bought a t-shirt", () => {
    menuContentPage.visitMenuContentPage()
    menuContentPage.goToTShirtMenu()
    productsListPage.addTshirtToCart()
    shopingCartPage.clickProceedToCheckoutPopWindow()
    shopingCartPage.clickProceedToCheckoutSumaryStep()

    loginPage.typeEmail()
    loginPage.typePassword()
    loginPage.submit()

    addressStepPage.clickProceedButtonAddress()
    shippingStepPage.acceptTermsAndConditions()
    shippingStepPage.clickProceedButtonShipping()
    paymentStepPage.selectPayByBank()
    paymentStepPage.confirmOrder()

    cy.get("#center_column > div > p > strong")
      .should("have.text", "Your order on My Store is complete.")
  });
});
