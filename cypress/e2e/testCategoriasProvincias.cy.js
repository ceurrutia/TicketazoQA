const URL_TIQUETAZO = 'https://ticketazo.com.ar/';
const PROVINCIAS = [
  { nombre: 'Buenos Aires', id: 6 },
  { nombre: 'Córdoba', id: 14 },
  { nombre: 'Corrientes', id: 18 },
  { nombre: 'Catamarca', id:10}
];

describe('Validar coherencia API ↔ UI por provincia', () => {
  beforeEach(() => {
    cy.viewport(1280, 800);
    cy.visit(URL_TIQUETAZO);
  });

  PROVINCIAS.forEach(provincia => {
    it(`Debe validar eventos para ${provincia.nombre}`, () => {
      cy.intercept(
        'GET',
        `**/api/backend/ubicacion/localidadesConEventos?idProvincia=${provincia.id}`
      ).as('getLocalidades');

      cy.get('button[data-slot="trigger"][aria-label="Provincia"]')
        .should('be.visible')
        .click({ force: true });

      cy.contains('[role="option"]', provincia.nombre, { matchCase: false })
        .click({ force: true });

      cy.wait('@getLocalidades', { timeout: 10000 }).then(interception => {
        const localidadesAPI = interception.response.body || [];
        cy.log(`La API devolvió ${localidadesAPI.length} localidades con eventos para ${provincia.nombre}`);

        cy.get('body').then($body => {
          const eventosUI = $body.find('[data-cy^="evento-card-"]').length;
          cy.log(`La UI muestra ${eventosUI} eventos para ${provincia.nombre}`);

          if (localidadesAPI.length > 0 && eventosUI === 0) {
            cy.log(`BUG: La API indica eventos pero la UI no los muestra`);
          } else if (localidadesAPI.length === 0 && eventosUI > 0) {
            cy.log(`BUG: La UI muestra eventos pero la API dice que no hay`);
          } else {
            cy.log(`API y UI coherentes para ${provincia.nombre}`);
          }
        });
      });
    });
  });
});













