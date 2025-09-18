import Links from "../../support/Accesos/Links"

describe("verificar que el logo redireccione al home page independientemente de la vista en la que este", () => {
    beforeEach(() => {
        Links.Thome();
    })

    it("funcion del logo en home page", () => {
        //cy.get('class="group flex items-center"').click();
        cy.url().should("contain", "ticketazo");
         cy.contains('span', 'Ticketazo');
        cy.wait(3000);
        cy.get('nav svg').first().click();
    });
    
    it("funcion del logo en login", () => {
       cy.get('.justify-end > .text-sm').click();//ingreso al login
       cy.contains('Ticketazo').should('exist');
       cy.wait(2000); 
       cy.contains('Ticketazo').click(); 
       cy.url('https://ticketazo.com.ar/auth/login').should('contain','auth/login');
    });

   it('funcion del logo en registro', () => {
      cy.get('.justify-end > .text-sm').click();
      cy.wait(2000);  
      cy.url('https://ticketazo.com.ar/auth/registerUser').should('contains', 'registerUser');
   });

   it("funcion del logo en recuperacion de contrase;a", () => {
    cy.get('.justify-end > .text-sm').click();
    cy.get('[data-cy="btn-forgot-password"]').click();
    cy.url('https://ticketazo.com.ar/auth/forgotPassword').should('contains', 'forgotPassword');
    cy.contains('Ticketazo').click();
   });

   it.only('funcion del logo en creacion de eventos directos', () => {
    cy.get('.justify-end > .text-sm').click();
    cy.get('[data-cy="btn-register-client"]').click();
    cy.wait(2000);
    cy.get('[data-layer="Content"]').click();
    cy.wait(2000);
    cy.url("https://ticketazo.com.ar/").should('eq', 'https://ticketazo.com.ar/');
   })
})