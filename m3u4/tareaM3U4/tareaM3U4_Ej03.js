var alumnos = [
    {
        nombre: 'Juan Gomez',
        nota: 7
    }, {
        nombre: 'Pedro Rodriguez',
        nota: 4
    }, {
        nombre: 'Roxana García',
        nota: 8
    }, {
        nombre: 'Luciano Lopez',
        nota: 5
    }, {
        nombre: 'Fernanda Gimenez',
        nota: 6
    }, {
        nombre: 'Florencia Martinez',
        nota: 10
    }, {
        nombre: 'Raul Sanchez',
        nota: 7
    }, {
        nombre: 'Sandra Figueroa',
        nota: 8
    }
];

// Obtener el elemento div donde se mostrará la lista de alumnos
var listaAlumnos = document.getElementById("lista-alumnos");
const alumnosConEstado = alumnos.map(alumno => {
    let estado = "No Aprobado";
    if (alumno.nota >= 7) {
        estado = "Aprobado";
    }
    return { ...alumno, estado: estado };
});

alumnosConEstado.forEach(alumno => {
    let estadoCss = "noAprobado";

    if (alumno.nota >= 7) {
        estadoCss = "aprobado";
    }

    const nombreSpan = document.createElement("span")
    nombreSpan.innerText = alumno.nombre;

    const notaSpan = document.createElement("span");
    notaSpan.innerText = alumno.nota;

    const estadoSpan = document.createElement("span");
    estadoSpan.innerHTML = `<P class='estado ${estadoCss}'>${alumno.estado}</P>`;

    listaAlumnos.appendChild(nombreSpan);
    listaAlumnos.appendChild(notaSpan);
    listaAlumnos.appendChild(estadoSpan);

})