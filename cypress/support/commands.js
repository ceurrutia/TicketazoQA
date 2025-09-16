Cypress.Commands.add('CompletaRegistroForm', (user) => {
  cy.visit('https://ticketazo.com.ar/auth/registerUser')
  cy.get('input[data-cy="input-nombres"]').type(user.nombres)
  cy.get('input[data-cy="input-apellido"]').type(user.apellido)
  cy.get('input[data-cy="input-telefono"]').type(user.telefono)
  cy.get('input[data-cy="input-dni"]').type(user.dni)
  cy.get('input[data-cy="select-provincia"]').type(user.provincia)
  cy.contains(user.provincia).click()
  cy.get('input[data-cy="select-localidad"]').type(user.localidad + '{enter}')

  cy.get('[data-cy="input-fecha-nacimiento"]').within(() => {
      cy.get('[data-type="day"]').click().type('22')
      cy.get('[data-type="month"]').click().type('07')
      cy.get('[data-type="year"]').click().type('1998')
  })

  cy.get('input[data-cy="input-email"]').type(user.email)
  cy.get('input[data-cy="input-confirmar-email"]').type(user.confirmarEmail)
  cy.get('input[data-cy="input-password"]').type(user.password)
  cy.get('input[data-cy="input-repetir-password"]').type(user.repetirPassword)

  cy.get('button[type="submit"]').click()
})


// funcion para el registro correcto, usuario nuevo
Cypress.Commands.add('registroCorrecto', (...args) => {
  cy.CompletaRegistroForm(...args)

  cy.on('window:alert', (text) => {
    expect(text).to.equal('Usuario registrado con éxito. Por favor, verifica tu correo electrónico para activar tu cuenta.')
  })
  cy.url().should('eq', 'https://ticketazo.com.ar/auth/login')
})

// funcion para el registro incorrecto, usuario ya existente
Cypress.Commands.add('registroIncorrecto', (user) => {
    cy.get('.text-red-500.text-center.mt-2', { timeout: 5000})
      .should('be.visible')
      .and('contain.text', 'Ya existe un usuario registrado con ese correo electrónico')
})

