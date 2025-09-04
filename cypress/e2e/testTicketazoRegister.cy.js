describe('Register with valid credentials', () => {
    it('User must be register with valid data', ()=>{
        cy.fixture('userRegistrado').then((user) =>{
            cy.register(user.nombres, user.apellido, user.telefono, user.dni, user.provincia, user.localidad, user.fechaNacimiento, user.email, user.confirmarEmail, user.password, user.repetirPassword)
        })
        cy.log('Test pass, user registered successfully')
    })
})