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

        //al registrar ok redirige al login
  });
  
  //  Caso negativo : Leyenda " complete los campos requeridos"
  
  // Datos base para los campos
  const datos = {
    '[data-cy="input-razon-social"]': 'Dan Eventos',
    '[data-cy="input-cuit"]': '27-25632598-6',
    '[data-cy="select-provincia"]': 'Buenos Aires{enter}',
    '[data-cy="select-localidad"]': 'Chacabuco{enter}',
    '[data-cy="input-direccion"]': 'Rivadavia 102',
    '[data-cy="input-telefono"]': '1152635263',
    '[data-cy="input-email"]': `daneventos${Date.now()}@test.com`,
    '[data-cy="input-confirmar-email"]': `daneventos${Date.now()}@test.com`,
    '[data-cy="input-password"]': 'Password123!',
    '[data-cy="input-repetir-password"]': 'Password123!',
  };

  const campos = Object.keys(datos);
  campos.forEach((campo) => {
    it(`No debería registrar si falta el campo ${campo}`, () => {
      // Rellenamos todos los campos menos el que se omite
      Object.entries(datos).forEach(([selector, valor]) => {
        if (selector !== campo) {
          cy.get(selector).type(valor);
        }
      });

      cy.get('button[type="submit"]').click();

      // Aserción: mensaje de error esperado
      cy.contains('Completa este campo').should('exist');
    });
   });

});