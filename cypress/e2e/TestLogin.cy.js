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


    describe("No deja ingresar con un usuario registrado pero no validado por mail", ()=>{
      it("Deberia no dejar ingresar con un usuario registrado y no validado por mail", ()=>{
        cy.viewport('iphone-7')
        cy.visit('https://ticketazo.com.ar/auth/login')
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
    })  