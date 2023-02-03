/***********************************************

Autores: Lucas Moltedo - Martín Reser

***********************************************/

// INFORMACION PERSONAL:

const editarBotonPersonal = document.querySelector('#boton-editar-personal');

// querySelector nos permite seleccionar un elemento
// Lo que encuentre se guardará en una const (constante) llamada editarBotonPersonal

// Agregamos un evento al elemento para cuando se le haga click:
editarBotonPersonal.addEventListener('click', function () {
    // Con "getElementById" seleccionamos un elemento por un ID:
    document.getElementById('editor-info-personal').classList.toggle('active') // Abrimos el editor de info personal
    document.getElementById('info-seguridad').classList.toggle('active') // Ocultamos la info de seguridad
    // Con ".classList.toggle()" le podemos agregar/quitar una clase (depende si la tiene), a un elemento
    // Con esto tenemos la función de mostrar/ocultar
})

// Botón para cancelar la edición de la información

const botoncerrarPersonal = document.querySelector('.boton-cerrar-personal');

// querySelector nos permite seleccionar un elemento
// Lo que encuentre se guardará en una const (constante) llamada botoncerrarPersonal

// Agregamos un evento al elemento para cuando se le haga click:
botoncerrarPersonal.addEventListener('click', function () {
    // Con "getElementById" seleccionamos un elemento por un ID:
    document.getElementById('editor-info-personal').classList.toggle('active') // Cerramos el editor de info personal
    document.getElementById('info-seguridad').classList.toggle('active') // Volvemos a mostrar la info de seguridad
    // Con ".classList.toggle()" le podemos agregar/quitar una clase (depende si la tiene), a un elemento
    // Con esto tenemos la función de cerrar el editor de información personal y volver a mostrar
    // la informacion de seguridad
})

// ######################################################################################################################
// ######################################################################################################################


// INFORMACION SEGURIDAD:

const editarBotonSeguridad = document.querySelector('#boton-editar-seguridad');

// querySelector nos permite seleccionar un elemento
// Lo que encuentre se guardará en una const (constante) llamada editarBotonSeguridad

// Agregamos un evento al elemento para cuando se le haga click:
editarBotonSeguridad.addEventListener('click', function () {
    // Con "getElementById" seleccionamos un elemento por un ID:
    document.getElementById('editor-info-seguridad').classList.toggle('active') // Abrimos el editor de info seguridad
    document.getElementById('info-personal').classList.toggle('active') // Ocultamos la info personal
    // Con ".classList.toggle()" le podemos agregar/quitar una clase (depende si la tiene), a un elemento
    // Con esto tenemos la función de mostrar/ocultar
})

// Botón para cancelar la edición de la información

const botonCerrarSeguridad = document.querySelector('.boton-cerrar-seguridad');

// querySelector nos permite seleccionar un elemento
// Lo que encuentre se guardará en una const (constante) llamada botonCerrarSeguridad

// Agregamos un evento al elemento para cuando se le haga click:
botonCerrarSeguridad.addEventListener('click', function () {
    // Con "getElementById" seleccionamos un elemento por un ID:
    document.getElementById('editor-info-seguridad').classList.toggle('active') // Cerramos el editor de info seguridad
    document.getElementById('info-personal').classList.toggle('active') // Volvemos a mostrar la info personal
    // Con ".classList.toggle()" le podemos agregar/quitar una clase (depende si la tiene), a un elemento
    // Con esto tenemos la función de cerrar el editor de info seguridad y volver a mostrar
    // la informacion personal
})