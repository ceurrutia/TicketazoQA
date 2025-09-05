describe('Register with valid credentials', () => {
    cy.viewport('Iphone-6')
    it('User must be register with valid data', ()=>{
        cy.fixture('userRegistrado').then((user) =>{
           cy.CompletaRegistroForm(user) 
           cy.registroCorrecto()
        })
        cy.log('Test pass, user registered successfully')
    })
})