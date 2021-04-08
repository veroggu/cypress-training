class ProductsListPage {
    private firstTshirt: string

    constructor() {
        this.firstTshirt = '#center_column a.button.ajax_add_to_cart_button.btn.btn-default'
    }

    public addTshirtToCart(): void {
        cy.get(this.firstTshirt).click()
    }

}
export { ProductsListPage }
