
describe("Crear ueva duncion con credenciales validas de admin", () => {
  it("Debería crear una nueva funcion", () => {
    //se loguea como admin

    cy.visit('https://vps-3696213-x.dattaweb.com/auth/login')
    cy.get('input[data-cy="input-email"]').type("admin@admin.com")
          cy.get('input[data-cy="input-password"]').type("admin")
          cy.contains('button', 'Login').click()
          cy.url().should('include', 'https://vps-3696213-x.dattaweb.com/')

    //empieza la carga de nueva funcion

    cy.visit("https://vps-3696213-x.dattaweb.com/newEvent")
    
    cy.get('input[data-cy="input-titulo"]').should('be.visible').type("Nuevo Evento 2025")

    //fecha
     cy.get('[data-cy="datepicker-fecha"]').within(() => {
        cy.get('[data-type="day"]').click().type('22')
        cy.get('[data-type="month"]').click().type('12')
        cy.get('[data-type="year"]').click().type('2025')
     })

      //selectors
     cy.get('[data-cy="select-edad"]').click()
     cy.get('li[data-key="ATP"]').click()

     cy.get('[data-cy="select-genero"]').click()    
     cy.get('li[data-key="Recital"]').click()

    //  cy.get('[data-type="hour"]').type('12')
    //  cy.get('[data-type="minute"]').type('40')

    cy.get('input[data-cy="select-lugar-evento"]').type("Nombre del lugar")
    cy.contains('Debe seleccionar un lugar para el evento.').should('be.visible')
    
    cy.get('textarea[data-cy="input-info"]').type("Mi descripción del evento.")
    //boton siguiente
     cy.contains('button', 'Siguiente').click()

  })
})

