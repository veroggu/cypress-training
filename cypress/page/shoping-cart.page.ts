class ShopingCartPage {
    private popUpWindow: string;
    private sumaryStep: string

    constructor() {
        this.popUpWindow = '[style*="display: block;"] .button-container > a';
        this.sumaryStep = '.cart_navigation span'
    }

    public clickProceedToCheckoutPopWindow(): void {
        cy.get(this.popUpWindow).click()
    }

    public clickProceedToCheckoutSumaryStep(): void {
        cy.get(this.sumaryStep).click()
    }
}
export { ShopingCartPage }
