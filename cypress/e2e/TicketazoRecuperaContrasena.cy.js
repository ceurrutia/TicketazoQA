//test olvida contraseña
describe('Olvidé mi contraseña', () => {
  it('Debería redirigir a la página de recuperación de contraseña, completar el input, enviar email', () => {
    cy.viewport('iphone-7')
    cy.visit('https://vps-3696213-x.dattaweb.com/auth/login')
    cy.contains('button', 'Olvidaste tu contraseña').click()
    cy.url().should('include', '/auth/forgotPassword')
    cy.get('[data-cy="input-email"]').type("urrutiace14@gmail.com")
    cy.get('[data-cy="btn-enviar"]').click()
    cy.contains('Se ha enviado un correo para restablecer la contraseña').should('be.visible')
    cy.url().should('include', '/auth/login')
  })
})