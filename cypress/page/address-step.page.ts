class AddressStepPage {
    private proceedtoCheckoutButton: string

    constructor() {
        this.proceedtoCheckoutButton = '#center_column > form > p > button > span'
    }

    public clickProceedButtonAddress(): void {
        cy.get(this.proceedtoCheckoutButton).click()
    }

}
export { AddressStepPage }
