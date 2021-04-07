class LoginPage {
    private emailselector: string;
    private passwordselector: string;
    private email: string;
    private password: string;
    private submitlog: string

    constructor() {
        this.emailselector = '#email'
        this.email = 'aperdomobo@gmail.com'
        this.passwordselector = '#passwd'
        this.password = 'WorkshopProtractor'
        this.submitlog = '#SubmitLogin > span'
    }

    public typeEmail(): void {
        cy.get(this.emailselector).type(this.email)
    }

    public typePassword(): void {
        cy.get(this.passwordselector).type(this.password)
    }

    public submit(): void {
        cy.get(this.submitlog).click()
    }

}
export { LoginPage }
