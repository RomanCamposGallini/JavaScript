// Objetos

class Juego {
    constructor(nombre, genero, precio) {
        this.nombre = nombre
        this.genero = genero
        this.precio = precio
    }
}

// Funciones

function agregarJuego() {
    let nombre = prompt("Ingrese el nombre del juego:")
    let genero = prompt("Ingrese el género del juego:")
    let precio = parseFloat(prompt("Ingrese el precio del juego:"))

    const nuevoJuego = new Juego(nombre, genero, precio)
    juegos.push(nuevoJuego)
    alert("Juego agregado con éxito.")
}

function mostrarJuegos() {
    if (juegos.length === 0) {
        alert("No hay juegos en la lista.")
    } else {
        let lista = "Lista de Juegos:\n"
        for (let i = 0; i < juegos.length; i++) {
            lista += `${i + 1}. ${juegos[i].nombre} - Género: ${juegos[i].genero}, Precio: $${juegos[i].precio}\n`
        }
        console.log(lista)
    }
}

function comprarJuego() {
    if (juegos.length === 0) {
        alert("No hay juegos disponibles para comprar.")
    } else {
        let lista = "Lista de Juegos:\n"
        for (let i = 0; i < juegos.length; i++) {
            lista += (i + 1) + ". " + juegos[i].nombre + " - Género: " + juegos[i].genero + ", Precio: " + juegos[i].precio + "\n"
        }
        lista += "0. Cancelar\n";
        let opcion = parseInt(prompt(lista + "Seleccione el índice del juego que desea comprar:"))

        if (opcion === 0) {
            alert("Compra cancelada.");
        } else if (opcion > 0 && opcion <= juegos.length) {
            alert("Has comprado " + juegos[opcion - 1].nombre + " por " + juegos[opcion - 1].precio + ".")
        } else {
            alert("Opción inválida.");
        }
    }
}

function modificarJuego() {
    if (juegos.length === 0) {
        alert("No hay juegos disponibles para modificar.");
    } else {
        let lista = "Lista de Juegos:\n";
        for (let i = 0; i < juegos.length; i++) {
            lista += (i + 1) + ". " + juegos[i].nombre + " - Género: " + juegos[i].genero + ", Precio: " + juegos[i].precio + "\n";
        }
        lista += "0. Cancelar\n";
        let opcion = parseInt(prompt(lista + "Seleccione el índice del juego que desea modificar:"));

        if (opcion === 0) {
            alert("Modificación cancelada.");
        } else if (opcion > 0 && opcion <= juegos.length) {
            let juegoSeleccionado = juegos[opcion - 1];

            let nuevoNombre = prompt("Ingrese el nuevo nombre del juego");
            let nuevoGenero = prompt("Ingrese el nuevo género del juego");
            let nuevoPrecio = parseFloat(prompt("Ingrese el nuevo precio del juego"));

            juegoSeleccionado.nombre = nuevoNombre;
            juegoSeleccionado.genero = nuevoGenero;
            juegoSeleccionado.precio = nuevoPrecio;

            alert("Juego modificado con éxito.");
        } else {
            alert("Opción inválida.");
        }
    }
}

function opcionesComprador() {
    let opcion = parseInt(prompt("Opciones para compradores:\n 1. Comprar un juego\n 2. Ver lista de juegos\n 0. Salir."));
    
    while (opcion !== 0) {
        if (opcion === 1) {

            comprarJuego()

        } else if (opcion === 2) {

            mostrarJuegos()

        } else {

            alert("Opción inválida.");
        }
        opcion = parseInt(prompt("Opciones para compradores:\n 1. Comprar un juego\n 2. Ver lista de juegos\n 0. Salir."));
    }
    alert("Gracias por tu visita, comprador.");
}

function opcionesAdministrador() {
    let opcion = parseInt(prompt("Opciones para administradores:\n1. Agregar un juego\n2. Modificar juego existente\n3. Ver lista de juegos\n0. Salir"));
    
    while (opcion !== 0) {
        if (opcion === 1) {
            agregarJuego()

        } else if (opcion === 2) {

            modificarJuego()

        } else if (opcion === 3) {

            mostrarJuegos()

        } else {

            alert("Opción inválida.")

        }
        opcion = parseInt(prompt("Opciones para administradores:\n1. Agregar un juego\n2. Modificar juego existente\n3. Ver lista de juegos\n0. Salir"));
    }
    alert("Gracias por tu visita, administrador.");
}

function inicioDePrograma() {
    let tipoDeUsuario = parseInt(prompt("Bienvenido. Por favor, elija:\n1. Soy comprador\n2. Soy administrador\n0. Salir"));
    
    while (tipoDeUsuario !== 0) {
        if (tipoDeUsuario === 1) {
            opcionesComprador()
        } else if (tipoDeUsuario === 2) {
            opcionesAdministrador()
        } else {
            alert("Opción inválida.")
        }
        tipoDeUsuario = parseInt(prompt("Bienvenido. Por favor, elija:\n1. Soy comprador\n2. Soy administrador\n0. Salir"))
    }
    alert("Gracias por visitarnos.")
}

// Inicio del Programa

let juegos = []

const nuevoJuego = new Juego("Minecraft", "aventura", 30)
juegos.push(nuevoJuego)

inicioDePrograma()
