import { MenuContentPage, ProductsListPage, ShopingCartPage, LoginPage, AddressStepPage, ShippingStepPage, PaymentStepPage } from "../page/index"

const menuContentPage = new MenuContentPage()
const productsListPage = new ProductsListPage()
const shopingCartPage = new ShopingCartPage()
const loginPage = new LoginPage("aperdomobo@gmail.com","WorkshopProtractor")
const addressStepPage = new AddressStepPage()
const shippingStepPage = new ShippingStepPage()
const paymentStepPage = new PaymentStepPage("have.text","Your order on My Store is complete.")

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

    paymentStepPage.checkTextVerification()
  });
});
