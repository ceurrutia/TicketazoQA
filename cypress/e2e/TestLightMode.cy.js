describe("Se testea button modo oscuro a modo claro", () => {
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

//tiene eleccion de modo claro en celulares
    describe('Debería cambiar de modo oscuro a claro al hacer clic en el botón en celulares', () => {
    it('Puede cambiar de modo claro a oscuro en celulares', () => {
      cy.viewport('iphone-x')
      cy.visit("https://ticketazo.com.ar/")
      cy.get('label[aria-label="Switch to light mode"]')
     .first()
     .click({ force: true })
     cy.wait(3000)
      cy.get('label[aria-label="Switch to dark mode"]')
     .first()
     .click({ force: true })
     //el assert
     cy.get('label[aria-label="Switch to light mode"]').should('exist')
    })
})
   
