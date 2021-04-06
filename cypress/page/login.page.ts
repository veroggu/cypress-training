class LoginPage {
    private email: string;
    private password: string;
    private submitlog: string

    constructor() {
        this.email = '#email';
        this.password = '#passwd';
        this.submitlog = '#SubmitLogin > span'
    }

    public typePassword(): void {
        cy.get(this.password).type("WorkshopProtractor")
    }

    public typeEmail(): void {
        cy.get(this.email).type("aperdomobo@gmail.com")
    }

    public submit(): void {
        cy.get(this.submitlog).click()
    }

}
export { LoginPage }
