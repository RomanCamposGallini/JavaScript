class Juego {
    constructor(nombre, genero, precio, fecha = new Date().toLocaleDateString()) {
        this.nombre = nombre;
        this.genero = genero;
        this.precio = precio;
        this.fecha = fecha;
    }
}

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

function cargarJuegos() {
    const juegosGuardados = localStorage.getItem('juegos');
    if (juegosGuardados) {
        return JSON.parse(juegosGuardados);
    } else {
        return [];
    }
}

function guardarJuegos() {
    localStorage.setItem('juegos', JSON.stringify(juegos));
}

function mostrarJuegos() {
    const tablaJuegos = document.getElementById('tablaJuegos').getElementsByTagName('tbody')[0];
    tablaJuegos.innerHTML = '';
    juegos.forEach(juego => {
        const fila = tablaJuegos.insertRow();
        fila.insertCell(0).innerText = juego.nombre;
        fila.insertCell(1).innerText = juego.genero;
        fila.insertCell(2).innerText = `$${juego.precio}`;
        fila.insertCell(3).innerText = juego.fecha || "Sin fecha";
    });
}

function cargarJuegosDesdeJSON() {
    fetch('juegos.json')
        .then(response => {
            if (!response.ok) throw new Error("Error al cargar el JSON");
            return response.json();
        })
        .then(data => {
            data.forEach(item => {
                const nuevoJuego = new Juego(item.nombre, item.genero, item.precio);
                juegos.push(nuevoJuego);
            });
            guardarJuegos();
            mostrarJuegos();
        })
        .catch(error => {
            Swal.fire({
                title: 'Error',
                text: `No se pudo cargar el JSON: ${error.message}`,
                icon: 'error',
                confirmButtonText: 'Ok'
            });
        });
}

function comprarJuego() {
    const nombreJuego = document.getElementById('nombreJuegoCompra').value;
    const juego = juegos.find(j => j.nombre.toLowerCase() === nombreJuego.toLowerCase());
    if (juego) {
        Swal.fire({
            title: '¡Compra exitosa!',
            text: `Has comprado "${juego.nombre}" por $${juego.precio}.`,
            icon: 'success',
            confirmButtonText: 'Ok'
        });
    } else {
        Swal.fire({
            title: 'Error',
            text: "Juego no encontrado.",
            icon: 'error',
            confirmButtonText: 'Ok'
        });
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
        Swal.fire({
            title: 'Error',
            text: "Ese juego ya existe.",
            icon: 'error',
            confirmButtonText: 'Ok'
        });
    } else if (nombre && genero && precio) {
        const nuevoJuego = new Juego(nombre, genero, precio);
        juegos.push(nuevoJuego);
        guardarJuegos();
        mostrarJuegos();
        cancelarAgregarJuego();
    } else {
        Swal.fire({
            title: 'Error',
            text: "Por favor, complete todos los datos.",
            icon: 'error',
            confirmButtonText: 'Ok'
        });
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
    const nombre = document.getElementById('nombreJuegoModificar').value;
    const juegoSeleccionado = juegos.find(juego => juego.nombre.toLowerCase() === nombre.toLowerCase());

    if (juegoSeleccionado) {
        document.getElementById('nuevoNombre').value = juegoSeleccionado.nombre;
        document.getElementById('nuevoGenero').value = juegoSeleccionado.genero;
        document.getElementById('nuevoPrecio').value = juegoSeleccionado.precio;

        document.getElementById('formModificarJuego').style.display = 'block';
        document.getElementById('administrador').style.display = 'none';
    } else {
        Swal.fire({
            title: 'Error',
            text: "Juego no encontrado.",
            icon: 'error',
            confirmButtonText: 'Ok'
        });
    }
}

function modificarJuego() {
    const nombre = document.getElementById('nuevoNombre').value;
    const genero = document.getElementById('nuevoGenero').value;
    const precio = parseFloat(document.getElementById('nuevoPrecio').value);

    const juegoSeleccionado = juegos.find(juego => juego.nombre.toLowerCase() === nombre.toLowerCase());

    if (juegoSeleccionado) {
        juegoSeleccionado.nombre = nombre;
        juegoSeleccionado.genero = genero;
        juegoSeleccionado.precio = precio;
        guardarJuegos();
        mostrarJuegos();
        cancelarModificarJuego();
        Swal.fire({
            title: '¡Éxito!',
            text: "Juego modificado correctamente.",
            icon: 'success',
            confirmButtonText: 'Ok'
        });
    } else {
        Swal.fire({
            title: 'Error',
            text: "Juego no encontrado.",
            icon: 'error',
            confirmButtonText: 'Ok'
        });
    }
}

function cancelarModificarJuego() {
    document.getElementById('formModificarJuego').style.display = 'none';
    document.getElementById('administrador').style.display = 'block';
}

let juegos = [];

cargarJuegosDesdeJSON().then(() => {
    mostrarJuegos();
});

if (juegos.length === 0) {
    const nuevoJuego = new Juego("Minecraft", "aventura", 30);
    juegos.push(nuevoJuego);
    guardarJuegos();
}
