//correr este solo comando: npx cypress run --spec "cypress/e2e/CompraTicketButtons.cy.js"
//Happy path de compra evento gratuito

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

    it('Debe loguear al usuario si no está logueado', () => {

      cy.intercept('POST', '/api/auth/login', (req) => {
        req.reply((res) => {
            expect(res.statusCode).to.eq(200)
            expect(res.body).to.have.property('token')
        })
    }).as('loginRequest')


      cy.viewport('iphone-7')
      cy.url().should('include', '/auth/login')
      cy.get('[data-cy="btn-login"]').click();
      
      const usuarioEjemplo = {
        email: 'urrutiace14@gmail.com',
        password: 'contraseñaSegura123'
    }

    

    cy.get('[data-cy="input-email"]').type(usuarioEjemplo.email)
    cy.get('[data-cy="input-password"]').type(usuarioEjemplo.password)
    cy.get('[data-cy="btn-login"]').click()

    cy.url().should('include', '/compra/Tesis%20Cervantes?horario=27')
    cy.contains('span', 'Auditorio')
    .parent('button')
    .click()

    //espera a los asientos

    cy.get('.bg-white.dark\\:text-gray-100').should('be.visible')
    //cambiar aca fila y columna si es necesario si el button esta ya deshabiitado
    cy.get('button[title="Fila 25, Columna 2"]').click()

    cy.get('button.w-full.md\\:w-auto.flex.items-center.justify-center.gap-2.px-4.py-2.bg-blue-500.text-white.rounded-lg.hover\\:bg-blue-600.transition-colors').click();

    cy.contains('Generar Entrada Gratuita').click()
    cy.url().should('include', '/tickets/list')
  })
})

