it('Muestra errores secuenciales en registro', () => {
  cy.visit('https://ticketazo.com.ar/auth/registerUser')

  //datos de usuario
  cy.get('[data-cy="input-nombres"]').type('Fulano')
  cy.get('[data-cy="input-apellido"]').type('desk')
  cy.get('[data-cy="input-telefono"]').type('3525636386')
  cy.get('[data-cy="input-dni"]').type('30324735')
  cy.get('[data-cy="select-provincia"]').click()
  //cy.wait(2000)

  cy.get('[data-cy="select-provincia"]').type('Córdoba{enter}')
  cy.get('[data-cy="select-localidad"]').click()
  cy.get('[data-cy="select-localidad"]').type('Agua de Oro{enter}')
  //cy.wait(2000)

  cy.contains('dd').type('10')
  cy.contains('mm').type('07')
  cy.contains('aaaa').type('1990')

  // Completar con datos erróneos
  cy.get('input[name="email"]').type('toty__++++++.}}}}--@hey.com')
  cy.get('input[name="confirmarEmail"]').type('to__++++++.}}}}--@hey.com') // error
  cy.get('input[name="password"]').type('123') // error también
  cy.get('[data-cy="input-repetir-password"]').type('Cotraseña12')

  cy.get('button[type="submit"]').click()

  // Primero debería mostrar el error de los correos
  cy.contains('Los correos electrónicos no coinciden').should('be.visible')

  // Corrijo los correos
  cy.get('input[name="confirmarEmail"]').clear().type('toty__++++++.}}}}--@hey.com')
  cy.get('button[type="submit"]').click()

  // Ahora debería mostrar el error de la contraseña
  cy.contains('Las contraseñas no coinciden').should('be.visible')
})