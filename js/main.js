// Objetos

class Juego {
    constructor(nombre, genero, precio) {
        this.nombre = nombre;
        this.genero = genero;
        this.precio = precio;
    }
}

// Funciones

function mostrarOpcionesComprador() {
    document.getElementById('bienvenida').style.display = 'none';
    document.getElementById('comprador').style.display = 'block';
}

function mostrarOpcionesAdministrador() {
    document.getElementById('bienvenida').style.display = 'none';
    document.getElementById('administrador').style.display = 'block';
}

function ocultarComprador() {
    document.getElementById('comprador').style.display = 'none';
    document.getElementById('bienvenida').style.display = 'block';
}

function ocultarAdministrador() {
    document.getElementById('administrador').style.display = 'none';
    document.getElementById('bienvenida').style.display = 'block';
}

function mostrarJuegos() {
    const tablaJuegos = document.getElementById('tablaJuegos').getElementsByTagName('tbody')[0];
    tablaJuegos.innerHTML = '';
    juegos.forEach(juego => {
        const fila = tablaJuegos.insertRow();
        fila.insertCell(0).innerText = juego.nombre;
        fila.insertCell(1).innerText = juego.genero;
        fila.insertCell(2).innerText = `$${juego.precio}`;
    });
}

function comprarJuego() {
    const nombreJuego = prompt("Ingrese el nombre del juego que desea comprar:");
    const juego = juegos.find(j => j.nombre.toLowerCase() === nombreJuego.toLowerCase());
    if (juego) {
        alert(`Has comprado "${juego.nombre}" por $${juego.precio}.`);
    } else {
        alert("Juego no encontrado.");
    }
}

function agregarJuegoForm() {
    document.getElementById('administrador').style.display = 'none';
    document.getElementById('formAgregarJuego').style.display = 'block';
}

function agregarJuego() {
    const nombre = document.getElementById('nombreJuego').value;
    const genero = document.getElementById('generoJuego').value;
    const precio = parseFloat(document.getElementById('precioJuego').value);

    const juegoExistente = juegos.some(juego => juego.nombre.toLowerCase() === nombre.toLowerCase());
    
    if (juegoExistente) {
        alert("Ese juego ya existe.");
    } else if (nombre && genero && precio) {
        const nuevoJuego = new Juego(nombre, genero, precio);
        juegos.push(nuevoJuego);
        mostrarJuegos();
        cancelarAgregarJuego();
    } else {
        alert("Por favor, complete todos los datos.");
    }
}

function cancelarAgregarJuego() {
    document.getElementById('formAgregarJuego').style.display = 'none';
    document.getElementById('administrador').style.display = 'block';
}

function modificarJuegoForm() {
    document.getElementById('administrador').style.display = 'none';
    document.getElementById('formModificarJuego').style.display = 'block';
}

function cargarJuegoModificar() {
    const nombreJuegoModificar = document.getElementById('nombreJuegoModificar').value;
    const juegoSeleccionado = juegos.find(juego => juego.nombre.toLowerCase() === nombreJuegoModificar.toLowerCase());

    if (juegoSeleccionado) {
        document.getElementById('nuevoNombre').value = juegoSeleccionado.nombre;
        document.getElementById('nuevoGenero').value = juegoSeleccionado.genero;
        document.getElementById('nuevoPrecio').value = juegoSeleccionado.precio;
    } else {
        alert("Juego no encontrado.");
    }
}

function modificarJuego() {
    const nombreJuegoModificar = document.getElementById('nombreJuegoModificar').value;
    const juegoSeleccionado = juegos.find(juego => juego.nombre.toLowerCase() === nombreJuegoModificar.toLowerCase());

    if (juegoSeleccionado) {
        juegoSeleccionado.nombre = document.getElementById('nuevoNombre').value;
        juegoSeleccionado.genero = document.getElementById('nuevoGenero').value;
        juegoSeleccionado.precio = parseFloat(document.getElementById('nuevoPrecio').value);
        
        mostrarJuegos();
        cancelarModificarJuego();
    } else {
        alert("Juego no encontrado.");
    }
}

function cancelarModificarJuego() {
    document.getElementById('formModificarJuego').style.display = 'none';
    document.getElementById('administrador').style.display = 'block';
}

// Inicio del Programa

let juegos = [];
const nuevoJuego = new Juego("Minecraft", "aventura", 30);
juegos.push(nuevoJuego);
mostrarJuegos();
