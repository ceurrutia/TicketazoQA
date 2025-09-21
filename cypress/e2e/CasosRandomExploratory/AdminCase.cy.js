import Links from "../../support/AccesosYMas/Links";
import ElementsES from "../../support/AccesosYMas/ElementsES";

describe("Pruebas utilizando el usuario admin", () => {
    beforeEach(() => {
        Links.Thome();
    });

    it.only("verificacion del buttom display", () => {
      ElementsES.LogElement();
      cy.wait(1000);
     
      cy.get('.z-0.group').first()
       .then($btn => {
    $btn[0].click();  // accede al elemento nativo y lo clickea
  }); 
      //.invoke('click');
      
     // cy.get('[href="/tickets/list"]', 'Mis entradas').should('be.visible').click();
      //.should('exist', 'be.visible', 'be.enabled').click();
      
    //    cy.get('[data-cy="input-titulo"]').type('el mejor');{ force: true }
    //     cy.get('[data-cy="datepicker-fecha"]').select("");
    //     cy.get('[data-cy="select-edad"] > .inline-flex');
    //     cy.get('[data-cy="select-genero"] > .inline-flex')
    //     cy.get('[data-cy="input-horario"]')
    //     cy.get('[data-cy="input-duracion"]')
    //     cy.get('[data-cy="select-lugar-evento"]')
    //     cy.get('.flex.col-span-1 > .tap-highlight-transparent')
    //     cy.get('.rounded-b-large > .z-0')

    });

    it('Links de redireccionamiento para el admin', () => {
      ElementsES.LogElement();
    });

    it('Happy patch, el admin debe poder eliminar eventos', () => {
      ElementsES.LogElement();
    })
})