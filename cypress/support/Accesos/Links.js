class links {
    
    Thome(){
        cy.visit('https://ticketazo.com.ar/');
    }
    
    Tlogin(){
        cy.visit('https://ticketazo.com.ar/auth/login');
    }

    TRegistrer(){
        cy.visit('https://ticketazo.com.ar/auth/registerUser');
    };

    TEventos(){
        cy.visit('https://ticketazo.com.ar/auth/registerClient');
    }
}

export default new links();