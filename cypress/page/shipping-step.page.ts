class ShippingStepPage {
    private termsAndConditions: string;
    private preceedButton: string

    constructor() {
        this.termsAndConditions = '#cgv';
        this.preceedButton = '#form > p > button > span > i'
    }

    public acceptTermsAndConditions(): void {
        cy.get(this.termsAndConditions).click()
    }

    public clickProceedButtonShipping(): void {
        cy.get(this.preceedButton).click()
    }
}
export { ShippingStepPage }
