//elementos especificos y complicados de tomar

class ElementsDifict{

    dateInput(dd, mm, aaaa){
     cy.contains('dd').type(dd);
     cy.contains('mm').type(mm);
     cy.contains('aaaa').type(aaaa);  
    }
}

export default new ElementsDifict();