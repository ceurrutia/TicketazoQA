describe ('Búsqueda de eventos por filtros', () => {
 
    it('Filtro de Fechas', () => {
    cy.viewport(1440, 900);  
    cy.visit('https://ticketazo.com.ar/');
    cy.get('[data-slot="start-input"]').as('selectorInicio');
    cy.get('@selectorInicio').click()
        .find('[data-type="day"]').type('19')
        .parent()
        .find('[data-type="month"]').type('09')
        .parent()
        .find('[data-type="year"]')
        .type('2025');
    cy.get('[data-slot="end-input"]').as('selectorFin');
    cy.get('@selectorFin') .click()
        .find('[data-type="day"]').type('29')
        .parent()
        .find('[data-type="month"]').type('09')
        .parent()
        .find('[data-type="year"]')
        .type('2025');

    })


    })
