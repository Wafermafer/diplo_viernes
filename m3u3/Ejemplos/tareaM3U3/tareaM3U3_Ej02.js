// Crear el código que reciba como parámetro un array de números y devuelva el mayor.


function obtenerMayor() {
    document.getElementById("resultadoMayor").innerText = listaArray.sort((a, b) => b - a)[0];
    counter = 0;
}

function resetear() {

    document.getElementById("distancia").value = ""
    document.getElementById('resultado').innerText = "";
    //
    counter = 0;
    listaArray = [];
    document.getElementById("elementoArray").value = "";
    document.getElementById("listaNros").innerText = "";
    document.getElementById("resultadoMayor").innerText = "";
}