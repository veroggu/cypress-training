describe("Buy a t-shirt", () => {

  it("then the t-shirt should be bought", () => {
    cy.visit("http://automationpractice.com/")
    cy.get("#block_top_menu > ul > li:nth-child(3) > a").click()
    cy.get("#center_column a.button.ajax_add_to_cart_button.btn.btn-default").click()
    cy.get("[style*=\"display: block;\"] .button-container > a").click()
    cy.get(".cart_navigation span").click()

    cy.get("#email").type("aperdomobo@gmail.com")
    cy.get("#passwd").type("WorkshopProtractor")

    cy.get("#SubmitLogin > span").click()
    cy.get("#center_column > form > p > button > span").click()
    cy.get("#cgv").click()
    cy.get("#form > p > button > span > i").click()
    cy.get("#HOOK_PAYMENT > div:nth-child(1) > div > p > a > span").click()
    cy.get("#cart_navigation > button > span > i").click()

    cy.get("#center_column > div > p > strong")
      .should("have.text", "Your order on My Store is complete.")
  });
});
