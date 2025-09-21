import Links from "../../support/AccesosYMas/Links";
import ElementsES from "../../support/AccesosYMas/ElementsES";

describe("Pruebas utilizando el usuario admin", () => {
    beforeEach(() => {
        Links.Thome();
    });

    it("verfiicacion el codigo QR dinamico", () => {
      ElementsES.LogElement();
      
     cy.visit('https://ticketazo.com.ar/scan');
     cy.get('[data-cy="titulo-scan-qr"]').should('be.visible');
     cy.get('[data-cy="titulo-scan-qr"]').should('exist');
     cy.get('[data-cy="titulo-scan-qr"]').should('have.text', 'Escanear QR')
     cy.url().should('eq', 'https://ticketazo.com.ar/scan');
    });

    it('admin clientes pendientes', () => {
      ElementsES.LogElement();
      cy.wait(2000);
      cy.visit('https://ticketazo.com.ar/adminClients');

      //
      cy.get('[data-cy="btn-filtro-pendiente"]').should('be.visible', 'exist').click();
      cy.contains('Nombre y Apellido').should('have.text', 'Nombre y Apellido', 'be.visible')
      cy.contains('Tipo').should('have.text', 'Tipo', 'be.visible');
      cy.contains('Email').should('have.text', 'Email', 'be.visible');
      cy.contains('CUIT').should('have.text', 'CUIT', 'be.visible');
      cy.contains('Provincia').should('have.text', 'Provincia', 'be.visible');
    });

    it('admin clientes Aprobado', () => {
      ElementsES.LogElement();
      cy.wait(1000);
      cy.visit('https://ticketazo.com.ar/adminClients');

      cy.get('[data-cy="btn-filtro-aprobado"]').click();
       cy.contains('Nombre y Apellido').should('have.text', 'Nombre y Apellido', 'be.visible')
      cy.contains('Tipo').should('have.text', 'Tipo', 'be.visible');
      cy.contains('Email').should('have.text', 'Email', 'be.visible');  
    });

    it('admin clientes Rechazado', () => {
      ElementsES.LogElement();
      cy.wait(2000);
      cy.visit('https://ticketazo.com.ar/adminClients');
      cy.wait(3000);
      cy.visit('[data-cy="btn-filtro-rechazado"]').should('be.visible', 'exist').click();

       cy.contains('Nombre y Apellido').should('have.text', 'Nombre y Apellido', 'be.visible')
      cy.contains('Tipo').should('have.text', 'Tipo', 'be.visible');
      cy.contains('Email').should('have.text', 'Email', 'be.visible');
      
    })
})