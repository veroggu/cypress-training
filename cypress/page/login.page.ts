class LoginPage {
    private emailselector: string;
    private passwordselector: string;
    private submitlog: string
    private email:string
    private password:string

    constructor(email:string, password:string) {
        this.emailselector = '#email'
        this.passwordselector = '#passwd'
        this.submitlog = '#SubmitLogin > span'
        this.email = email
        this.password = password
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
