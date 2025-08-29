

// TEST CAMPOS OBLIGATORIOS NO RELLENADOS

describe('Muestra menjsa de error si los campos obligatorios no estan llenos',()=>{
  it('Debe mostrar un cartel de rellnar los campos obligatorios',()=>{
    cy.visit('https://ticketazo.com.ar/auth/registerUser')
    cy.get('button[type="submit"]').click()
    cy.contains('Completa este campo').should('be.visible')
  })
})

//TEST DNI SIN FORMATO DE 8 NUMEROS ENTEROS

describe('Muestra mensaje de error si el dni tiene menos de 8 numeros', ()=>{
  it('Campo dni debe tener 8 numeros', ()=>{
    cy.visit('https://ticketazo.com.ar/auth/registerUser')
    cy.get('[data-cy="input-dni"]').type('01')
    cy.get('body').click()
    cy.contains('Utiliza un formato que coincida con el solicitado').should('be.visible')
    cy.get('[data-cy="input-dni"]').should('have.value', '01')
  })
})

//TEST DNI NO PERMITE MAS DE 8 NUMEROS

describe('DNI esta lmitado a 8 números enteros', () => {
  it('Campo dni debe aceptar exactamente 8 números', () => {
    cy.visit('https://ticketazo.com.ar/auth/registerUser')
    cy.get('[data-cy="input-dni"]').type('123456789') 
    cy.get('body').click()
    cy.get('[data-cy="input-dni"]').should('have.value', '12345678') 
  })
})

//NO MAS DE 10 NUMEROS EN EL TELEFONO

describe('Campo Teléfono - debe tener máximo 10 números', () => {
  it('Campo telefono debe aceptar exactamente 10 números no mas', () => {
    cy.visit('https://ticketazo.com.ar/auth/registerUser')
    cy.get('[data-cy="input-telefono"]').type('1159554321') 
    cy.get('body').click()
    cy.get('[data-cy="input-telefono"]').should('have.value', '1159554321')
  })
})

//TEST TELEFONO NO PERMITE CARACTERES SOLO NUEMROS

describe('El campo telefono no debe permitir ingresar una cadena de carcateres', ()=>{
  it('Campo telefono no debe permitir letras', ()=>{
    cy.visit('https://ticketazo.com.ar/auth/registerUser')
    cy.get('[data-cy="input-telefono"]').type('asdf')
    cy.get('body').click()
  })
})

//TEST DNI NO PERMITE CARACTERES SOLO NUEMROS

describe('El campo dni no debe permitir ingresar una cadena de carcateres', ()=>{
  it('Campo dni no debe permitir letras', ()=>{
    cy.visit('https://ticketazo.com.ar/auth/registerUser')
    cy.get('[data-cy="input-dni"]').type('asdf')
    cy.get('body').click()
  })
})

//TEST CONTRASENIA NO SEGURA, MENOS DE 8 CARACTERES
describe('Se testea la seguridad de la contrasenia', ()=>{
  it('La contrasenia deberia tener mas de 8 carcateres alfanumericos', ()=>{
    cy.visit('https://ticketazo.com.ar/auth/registerUser')
    cy.get('[data-cy="input-password"]').type('123')
    cy.get('body').click()
  })
}
)

//TEST EMAIL SIN @
describe('Se testea Que el emailtenga @', ()=>{
  it('La contrase;a deberia tener @', ()=>{
    cy.visit('https://ticketazo.com.ar/auth/registerUser')
    cy.get('[data-cy="input-email"]').type('endgmail')
    cy.get('body').click()
    cy.contains('Incluye un signo "@" en la dirección de correo electrónico. La dirección "endgmail" no incluye el signo "@".').should('be.visible')
  })
}
)