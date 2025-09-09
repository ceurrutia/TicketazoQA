describe("Usuario debe estar validado por mail", ()=>{
    it("Deberia no dejar ingresar con un usuario registrado y no validado por mail", ()=>{
        cy.viewport('iphone-7')
        cy.visit('https://vps-3696213-x.dattaweb.com/auth/login')
        cy.fixture('userRegistrado').then((user)=>{
          const email = user.email
          const password = user.password

          cy.get('input[data-cy="input-email"]').type(email)
          cy.get('input[data-cy="input-password"]').type(password)
          cy.contains('button', 'Login').click()
          cy.get('.text-red-500.text-center.mt-2')
              .should('be.visible')
              .and('contain.text', 'Usuario no confirmado')
        })
        })

        //validacion mail con @

    it("El email debe tener @", ()=>{
        cy.viewport('iphone-x')
        cy.visit('https://vps-3696213-x.dattaweb.com/auth/login')
        cy.get('[data-cy="input-email"]').type('endgmail')
        cy.get('body').click()
        cy.contains('Incluye un signo "@" en la dirección de correo electrónico. La dirección "endgmail" no incluye el signo "@".').should('be.visible')
})
})