describe('Registro de un cliente en Ticketazo', () => {
  const baseUrl = "https://ticketazo.com.ar/auth/registerClient";

  beforeEach(() => {
    cy.visit(baseUrl);
  });
  
   //  Caso positivo : Registro exitoso con datos válidos
    it('registrar un cliente con datos válidos', () => {
    cy.get('[data-cy="input-razon-social"]').type('Dan Eventos');
    cy.get('[data-cy="input-cuit"]').type('27-25632598-6');
    cy.get('[data-cy="select-provincia"]').type('Buenos Aires{enter}');
    cy.get('[data-cy="select-localidad"]').type('Chacabuco{enter}');
    cy.get('[data-cy="input-direccion"]').type('Rivadavia 102')
    cy.get('[data-cy="input-telefono"]').type('1152635263');
    cy.get('[data-cy="input-email"]').type(`daneventos${Date.now()}@test.com`); 
    cy.get('[data-cy="input-confirmar-email"]').type(`daneventos${Date.now()}@test.com`);

    cy.get('[data-cy="input-password"]').type('Password123!');
    cy.get('[data-cy="input-repetir-password"]').type('Password123!');

    cy.get('button[type="submit"]').click();

    // Aserción: esperar redirección o mensaje de éxito
        cy.wait(2000)
  });
  



});