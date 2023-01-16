/***********************************************

Autores: Lucas Moltedo - Martín Reser

***********************************************/

const sidebarButton = document.querySelector('.sidebar-button');

// querySelector nos permite seleccionar un elemento
// Lo que encuentre se guardará en una const (constante) llamada sidebarBotton

// Agregamos un evento al elemento para cuando se le haga click:
sidebarButton.addEventListener('click', function () {
    // Con "getElementById" seleccionamos un elemento por un ID:
    document.getElementById('sidebar').classList.toggle('active')
    // Con ".classList.toggle()" le podemos agregar/quitar una clase (depende si la tiene), a un elemento
    // Con esto ya tenemos la función de mostrar/ocultar la barra lateral
})

