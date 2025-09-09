//correr este solo comando: npx cypress run --spec "cypress/e2e/CompraTicketButtons.cy.js"

describe('Compra Ticket Buttons', () => {
  beforeEach(() => {
    cy.viewport('iphone-7')
    cy.visit('https://vps-3696213-x.dattaweb.com/')
    cy.wait(2000)
    cy.get('div[data-cy="evento-card-8"]').click()
    cy.get('button[data-cy="btn-ver-evento-8"]').click()
    cy.get('section[data-open="true"]').should('be.visible')
    cy.contains('button', 'Adquirir entrada').click()
    cy.intercept('POST', '/api/entradas').as('AdquirirEntrada')
    })

    it('Debe redirigir al login si no está logueado', () => {
      cy.viewport('iphone-7')
      cy.url().should('include', '/auth/login')
    
  })
})

//test olvida contraseña
describe('Olvidé mi contraseña', () => {
  it('Debería redirigir a la página de recuperación de contraseña', () => {
    cy.viewport('iphone-7')
    cy.visit('https://vps-3696213-x.dattaweb.com/auth/login')
    cy.contains('button', 'Olvidaste tu contraseña').click()
    cy.url().should('include', '/auth/forgotPassword')
  })
})