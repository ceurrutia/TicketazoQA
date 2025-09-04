Cypress.Commands.add('register', (nombres, apellido, telefono, dni, provincia, localidad, fechaNacimiento, email, confirmarEmail, password, repetirPassword) => {
    cy.visit('https://ticketazo.com.ar/auth/registerUser')
    cy.get('input[data-cy="input-nombres"]').type(nombres)
    cy.get('input[data-cy="input-apellido"]').type(apellido)
    cy.get('input[data-cy="input-telefono"]').type(telefono)
    cy.get('input[data-cy="input-dni"]').type(dni)
    cy.get('input[data-cy="select-provincia"]').type(provincia);
    cy.contains(provincia).click()
    cy.get('input[data-cy="select-localidad"]').type(localidad + '{enter}')

    cy.get('[data-cy="input-fecha-nacimiento"]').within(() => {
        cy.get('[data-type="day"]').click().type('22')
        cy.get('[data-type="month"]').click().type('07')
        cy.get('[data-type="year"]').click().type('1998')
    })

    cy.get('input[data-cy="input-email"]').type(email)
    cy.get('input[data-cy="input-confirmar-email"]').type(confirmarEmail)
    cy.get('input[data-cy="input-password"]').type(password)
    cy.get('input[data-cy="input-repetir-password"]').type(repetirPassword)

    cy.on('window:alert', (text) => {
        expect(text).to.equal('Usuario registrado con éxito. Por favor, verifica tu correo electrónico para activar tu cuenta.')
    })
    cy.get('button[type="submit"]').click()
    cy.url().should('eq', 'https://ticketazo.com.ar/auth/login')
    
})