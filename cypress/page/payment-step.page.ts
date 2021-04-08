class PaymentStepPage {
    private payBy: string;
    private orderConfirmation: string;
    private textVerification: string;
    private haveText: string;
    private finalMessage: string;

    constructor(text:string,message:string) {
        this.payBy = '#HOOK_PAYMENT > div:nth-child(1) > div > p > a > span';
        this.orderConfirmation = '#cart_navigation > button > span > i'
        this.textVerification = '#center_column > div > p > strong'
        this.haveText = text
        this.finalMessage = message
    }

    public selectPayByBank(): void {
        cy.get(this.payBy).click()
    }

    public confirmOrder(): void {
        cy.get(this.orderConfirmation).click()
    }

    public checkTextVerification(): void {
        cy.get(this.textVerification).should(this.haveText,this.finalMessage)
    }

}
export { PaymentStepPage }
