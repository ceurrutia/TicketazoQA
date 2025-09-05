
# Historia de Usuario

Como usuario interesado en eventos, quiero registrarme en el sitio web de Ticketazo para poder comprar tickets de cine y otros eventos que me interesan.

### TÍTULO: Suscripción a plataforma de Ticketazo.
#### SPRINT: 1
#### LIDER: Sape
#### PROGAMADOR: Facundo
#### TESTER: Urrutia
#### ACTOR: Quiero registrarme en el sitio web de ticketazo mediante la web, para poder comprar tickets de cine y eventos me gustan.

## CRITERIOS DE ACEPTACIÓN:

* Poder suscribirse online.
* Que valide los datos del cliente en el registro.
* Que pueda iniciar sesión en su cuenta y poder comprar de la cartelera las películas y eventos que le gustan.
* Que pueda cerrar sesión y que el sistema le indique que ha cerrado sesión y lo envíe a la home.


## Caso de Uso: Registro de Usuario en Ticketazo

Nombre del Caso de Uso: Registrarse como nuevo usuario

Actor Principal: Usuario no registrado

### Precondiciones:

*   El usuario tiene acceso a internet.
*	El usuario tiene acceso a un navegador web.
*	El usuario no tiene una cuenta activa en Ticketazo.
*	El portal de Ticketazo está operativo.

### Flujo Principal (Escenario Normal):

1.	El usuario navega a la página de inicio de Ticketazo.
2.	El usuario hace clic en el enlace Iniciar sesión y clickea sobre el link "Registrarse como nuevo usuario".
3.	El sistema muestra el formulario de registro.
4.	El usuario introduce su nombre, apellido, fecha de nacimiento, DNI, correo electrónico, ciudad, localidad, contraseña y otros datos en el formato requeridos.
5.	El usuario acepta los términos y condiciones.
6.	El usuario hace clic en el botón "Registrarse".
7.	El sistema crea una nueva cuenta de usuario en la base de datos.
8. El usuario debe validar su cuenta con su email registrado.
9.	El sistema redirige al usuario a la pagina de login.
10.	El usuario puede iniciar sesión con sus credenciales validadas.

### Postcondiciones:

* __Éxito__: El usuario tiene una cuenta activa y verificada en Ticketazo y puede iniciar sesión y acceder a todas las funcionalidades para usuarios registrados.
* __Fallo__: No se ha creado una cuenta. Los datos ingresados por el usuario no se han guardado o no son válidos. El usuario permanece en la página de registro o es redirigido a una página de error.