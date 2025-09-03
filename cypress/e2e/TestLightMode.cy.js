describe("Se testea button modo claro", () => {
  it("Debería cambiar a modo claro al hacer clic en el botón", () => {
    cy.viewport(1280, 800)
    cy.visit("https://ticketazo.com.ar/")
    cy.get('label[aria-label="Switch to light mode"]')
    .first()
    .click({ force: true })

    //el assert
    cy.get('label[aria-label="Switch to dark mode"]').should('exist')
    
  })
})