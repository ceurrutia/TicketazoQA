# Introduccion
En vista de que ingrese tarde al equipo y la mayoria de los flujos principales ya habian sido tomados, decidi centrarme mas
en los pequeños detalles, casos positivos o negativos que no se hubieran abarcado, exploracion libre de la web y 
la busqueda de fallos imperceptibles, como la tipografia, aspecto, usabilidad, ETC.

## Enfoque
* Pruebas exploratorias. 
* Comprobacion y verificacion de areas no probadas en otros casos de prueba.
* Busqueda de bugs, hallazgos o mejoras ocultas.
* Revisicion de paginado. 

## Retos
En el proceso de las pruebas exploratorias uno de los mayores retos que tuve fue el intentar seleccionar el Buttom display que es 
visible unicamente cuando se ingresa a la web con el usuario admin, a pesar de intentar de todas las formas pensables eh incluso con
ayuda de chat GPT, no me fue posible encontrar una forma totalmente funcional de seleccionarlo eh inducir el click para la automatizacion
del resto de componentes.

La unicaforma viable que encontre de hacer las pruebas fue primero logueando el usuario admin y despues utilizando los enlaces directos
a los modulos que quisiera probar.

Sin embargo, como demostracion y documentacion para perfeccional el uso de selectores, dejo aqui las formas en las que 
intente seleccionar el buttom y utilizarlo.

* cy.get('.z-0.group').first()
    .then($btn => {
    $btn[0].click();  
  });  
      
* .invoke('click');
      
* cy.get('[href="/tickets/list"]', 'Mis entradas').should('be.visible').click();
    
* cy.get('.z-0.group').should('exist', 'be.visible', 'be.enabled').click();

* cy.get('.z-0.group').first()
      .invoke('click')


