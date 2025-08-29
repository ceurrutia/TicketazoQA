//TEST CLICK DE LOGIN BUTTON

describe('Ingresa al sitio web y clickea el button Login', ()=>{
  it('Debería mostrar la pagina Login de Ticketazo', ()=>{
    cy.viewport('iphone-7')
     cy.visit('https://ticketazo.com.ar')
      cy.log('Test pass, ha ingresado correctamente')
      cy.contains('button', 'Login').click( {force: true})
      cy.url().should('include', '/auth/login')

  })
})