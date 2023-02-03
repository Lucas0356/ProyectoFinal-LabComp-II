/***********************************************

Autores: Lucas Moltedo - Martín Reser

***********************************************/

// INFORMACION PERSONAL:

const editarBotonPersonal = document.querySelector('#boton-editar-personal');

// querySelector nos permite seleccionar un elemento
// Lo que encuentre se guardará en una const (constante) llamada editarButton

// Agregamos un evento al elemento para cuando se le haga click:
editarBotonPersonal.addEventListener('click', function () {
    // Con "getElementById" seleccionamos un elemento por un ID:
    document.getElementById('editor-info-personal').classList.toggle('active') // info personal editar
    document.getElementById('info-seguridad').classList.toggle('active') //Acá ocultamos la informacion sin editar
    // Con ".classList.toggle()" le podemos agregar/quitar una clase (depende si la tiene), a un elemento
    // Con esto ya tenemos la función de mostrar/ocultar los editores de información

})

// Botón para cancelar la edición de la información

const botoncerrarPersonal = document.querySelector('.boton-cerrar-personal');

// querySelector nos permite seleccionar un elemento
// Lo que encuentre se guardará en una const (constante) llamada botoncerrar

// Agregamos un evento al elemento para cuando se le haga click:
botoncerrarPersonal.addEventListener('click', function () {
    // Con "getElementById" seleccionamos un elemento por un ID:
    document.getElementById('editor-info-personal').classList.toggle('active')
    document.getElementById('info-seguridad').classList.toggle('active')
    // Con ".classList.toggle()" le podemos agregar/quitar una clase (depende si la tiene), a un elemento
    // Con esto ya tenemos la función de ocultar los editores de información y volver a mostrar
    // la informacion personal
})

// ######################################################################################################################
// SEGURIDAD:

const editarBotonSeguridad = document.querySelector('#boton-editar-seguridad');

// querySelector nos permite seleccionar un elemento
// Lo que encuentre se guardará en una const (constante) llamada editarButton

// Agregamos un evento al elemento para cuando se le haga click:
editarBotonSeguridad.addEventListener('click', function () {
    // Con "getElementById" seleccionamos un elemento por un ID:
    document.getElementById('editor-info-seguridad').classList.toggle('active') // info personal editar
    document.getElementById('info-personal').classList.toggle('active') //Acá ocultamos la informacion sin editar
    // Con ".classList.toggle()" le podemos agregar/quitar una clase (depende si la tiene), a un elemento
    // Con esto ya tenemos la función de mostrar/ocultar los editores de información

})

// Botón para cancelar la edición de la información

const botonCerrarSeguridad = document.querySelector('.boton-cerrar-seguridad');

// querySelector nos permite seleccionar un elemento
// Lo que encuentre se guardará en una const (constante) llamada botoncerrar

// Agregamos un evento al elemento para cuando se le haga click:
botonCerrarSeguridad.addEventListener('click', function () {
    // Con "getElementById" seleccionamos un elemento por un ID:
    document.getElementById('editor-info-seguridad').classList.toggle('active')
    document.getElementById('info-personal').classList.toggle('active')
    // Con ".classList.toggle()" le podemos agregar/quitar una clase (depende si la tiene), a un elemento
    // Con esto ya tenemos la función de ocultar los editores de información y volver a mostrar
    // la informacion personal
})