import Links from "../../support/Accesos/Links";

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

    it.only("usuario intenta buscar un evento programado en una fecha futura", () => {
        cy.get('.p-2').click();
        cy.wait(2000);
        cy.get('div svg').click();

        //cy.get('#dateFilter').should("exist");
        cy.get('#dateFilter').should("be.enabled");
        cy.get('#dateFilter').type('01/01/2022');
        cy.get('.btn-primary').click();
        cy.wait(2000);
        cy.get('.Toastify__close-button--default').should("exist");
        cy.get('.Toastify__close-button--default').should("be.enabled");
    });
});

