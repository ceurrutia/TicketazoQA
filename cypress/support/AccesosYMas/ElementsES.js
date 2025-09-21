//elementos especificos y complicados de tomar

class ElementsDifict{

    dateInput(dd, mm, aaaa){
     cy.contains('dd').type(dd);
     cy.contains('mm').type(mm);
     cy.contains('aaaa').type(aaaa);  
    }

    LogElement(){
        cy.get('.justify-end > .text-sm').click();
        cy.get('[data-cy="input-email"]').type('admin@admin.com');
        cy.get('[data-cy="input-password"]').type('admin');
        cy.get('[data-cy="btn-login"]').click();
    }

}

export default new ElementsDifict();