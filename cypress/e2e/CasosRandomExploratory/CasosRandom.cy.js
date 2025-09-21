import Links from "../../support/AccesosYMas/Links";
import ElementsES from "../../support/AccesosYMas/ElementsES";

describe('Home Page Tests', () => {
    beforeEach(() => {
        Links.Thome();
    });

    it("verificacion a la casilla de eventos cercanos", () => {
        cy.get('.p-2').click();
        cy.wait(2000);
        cy.get('#locationFilter').should("exist");
        cy.get('#locationFilter').should("to.be", "enabled"); //esta desactivado
    });

    it("usuario intenta buscar un evento programado en una fecha futura", () => {
        //seleccionar la barra de busqueda desplegable y seleccionar el atributo date  
        cy.get('.p-2').should('exist').click();
        cy.get('[data-slot="start-input"]').first()
        .should('exist', 'be.visible');
        
        ElementsES.dateInput('2025', '1', '22');
        //.should('be.visible');
        
    });
});

