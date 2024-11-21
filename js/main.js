// Objetos

class Juego {
    constructor(nombre, genero, precio) {
        this.nombre = nombre
        this.genero = genero
        this.precio = precio
    }
}

// Funciones

function opcionesComprador() {
    let opcion = parseInt(prompt("Opciones para compradores:\n 1. Comprar un juego\n 2. Filtrar por género\n 3. Ver lista de juegos\n 0. Salir."));
    
    while (opcion !== 0) {
        if (opcion === 1) {

            console.log("Has elegido comprar un juego.");

        } else if (opcion === 2) {

            console.log("Has elegido filtrar por género.");

        } else if (opcion === 3) {

            console.log("Mostrando lista de juegos.");
            

        } else {

            alert("Opción inválida.");
        }
        opcion = parseInt(prompt("Opciones para compradores:\n 1. Comprar un juego\n 2. Filtrar por género\n 3. Ver lista de juegos.\n 0. Salir."));
    }
    alert("Gracias por tu visita, comprador.");
}

function opcionesAdministrador() {
    let opcion = parseInt(prompt("Opciones para administradores:\n1. Agregar un juego\n2. Modificar juego existente\n3. Ver lista de juegos\n0. Salir"));
    
    while (opcion !== 0) {
        if (opcion === 1) {
            console.log("Has elegido agregar un juego.");
        } else if (opcion === 2) {
            console.log("Has elegido modificar un juego.");
        } else if (opcion === 3) {
            console.log("Mostrando lista de juegos para administración.");
        } else {
            alert("Opción inválida.");
        }
        opcion = parseInt(prompt("Opciones para administradores:\n1. Agregar un juego\n2. Modificar juego existente\n3. Ver lista de juegos\n0. Salir"));
    }
    alert("Gracias por tu visita, administrador.");
}

// Inicio del Programa

let tipoDeUsuario = parseInt(prompt("Bienvenido. Por favor, elija:\n1. Soy comprador\n2. Soy administrador\n0. Salir"));
    
    while (tipoDeUsuario !== 0) {
        if (tipoDeUsuario === 1) {
            opcionesComprador();
        } else if (tipoDeUsuario === 2) {
            opcionesAdministrador();
        } else {
            alert("Opción inválida.");
        }
        tipoDeUsuario = parseInt(prompt("Bienvenido. Por favor, elija:\n1. Soy comprador\n2. Soy administrador\n0. Salir"));
    }
    alert("Gracias por visitarnos.");
