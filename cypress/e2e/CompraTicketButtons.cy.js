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
      cy.get('[data-cy="btn-google-login"]').click();
      
      const usuarioEjemplo = {
        email: 'exaple23@gmail.com',
        password: 'passSeguro123!'
    }

      cy.request('POST', 'https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?response_type=code&redirect_uri=https%3A%2F%2Fapi.ticketazo.com.ar%2Fauth%2Fgoogle%2Fcallback&scope=profile%20email&client_id=676335736434-drnalca36kg60bf7ehf5j2bmicritlrh.apps.googleusercontent.com&service=lso&o2v=2&flowName=GeneralOAuthFlow', {
        code: 'simula_google_auth_code',
        user: usuarioEjemplo  ,
      }).then((response) => {
        expect(response.status).to.eq(200);
        window.localStorage.setItem('user', JSON.stringify(response.body.user))
      })
   
    
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