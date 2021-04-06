class PaymentStepPage {
    private payBy: string;
    private orderConfirmation: string

    constructor() {
        this.payBy = '#HOOK_PAYMENT > div:nth-child(1) > div > p > a > span';
        this.orderConfirmation = '#cart_navigation > button > span > i'
    }

    public selectPayByBank(): void {
        cy.get(this.payBy).click()
    }

    public confirmOrder(): void {
        cy.get(this.orderConfirmation).click()
    }

}
export { PaymentStepPage }
