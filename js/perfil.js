/***********************************************

Autores: Lucas Moltedo - Martín Reser

***********************************************/

const editarButton = document.querySelector('#boton-editar');

// querySelector nos permite seleccionar un elemento
// Lo que encuentre se guardará en una const (constante) llamada editarButton

// Agregamos un evento al elemento para cuando se le haga click:
editarButton.addEventListener('click', function () {
    // Con "getElementById" seleccionamos un elemento por un ID:
    document.getElementById('editor-info-personal').classList.toggle('active') // info personal editar
    document.getElementById('editor-info-privacidad').classList.toggle('active') // info privacidad editar
    document.getElementById('info-personal').classList.toggle('active') //Acá ocultamos la informacion sin editar
    // Con ".classList.toggle()" le podemos agregar/quitar una clase (depende si la tiene), a un elemento
    // Con esto ya tenemos la función de mostrar/ocultar los editores de información
})

// Botón para cancelar la edición de la información

const botoncerrar = document.querySelector('.boton-cerrar');

// querySelector nos permite seleccionar un elemento
// Lo que encuentre se guardará en una const (constante) llamada botoncerrar

// Agregamos un evento al elemento para cuando se le haga click:
botoncerrar.addEventListener('click', function () {
    // Con "getElementById" seleccionamos un elemento por un ID:
    document.getElementById('editor-info-personal').classList.toggle('active')
    document.getElementById('editor-info-privacidad').classList.toggle('active')
    document.getElementById('info-personal').classList.toggle('active') 
    // Con ".classList.toggle()" le podemos agregar/quitar una clase (depende si la tiene), a un elemento
    // Con esto ya tenemos la función de ocultar los editores de información y volver a mostrar
    // la informacion personal
})
