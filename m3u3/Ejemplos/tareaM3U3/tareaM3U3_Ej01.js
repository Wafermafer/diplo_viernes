
// Crear el código que dada una distancia determine el medio de transporte apropiado de acuerdo a las siguientes reglas:

// 0 a 1000 metros = pie

// 1000 a 10000 metros = bicicleta

// 10000 a 30000 metros = colectivo

// 30000 a 100000 metros = auto

// +100000 = avion


function calcular(distancia) {
    if (distancia === undefined || distancia === "") {
        alert("Debe ingresar un número");
        return;
    }

    const result = document.getElementById('resultado');
    const dist = parseInt(distancia);
    var transporte = "No definido";
    switch (true) {
        case 0:
            transporte = "Ninguno!";
            break;
        case 0 < dist && dist < 1000:
            transporte = "Pie";
            break;
        case 1000 <= dist && dist < 10000:
            transporte = "Bicicleta";
            break;
        case 10000 <= dist && dist < 30000:
            transporte = "Colectivo";
            break;
        case 30000 <= dist && dist < 100000:
            transporte = "Auto";
            break;
        case 100000 <= dist:
            transporte = "Avión";
            break;
        default:
            break;
    }
    result.innerText = "El transporte que debe utilizar para recorrer '" + distancia + "' metros es: '" + transporte + "'"
}

let listaArray = [];
let counter = 0;
function agregar(elementoArray) {
    if (elementoArray === "" || elementoArray === NaN) {
        alert("Ingrese un Número");
    }

    if (counter === 10) {
        alert("Alcanzó el límite de números permitidos");
        document.getElementById("elementoArray").value = "";
        return;
    }

    listaArray.push(elementoArray);
    document.getElementById("listaNros").innerText += (listaArray.length === 1) ? elementoArray : ", " + elementoArray;
    document.getElementById("elementoArray").value = "";
    counter += 1;
}