const cuadrados = document.getElementsByClassName("cuadrado");
for (let cuadrado of cuadrados) {
    cuadrado.addEventListener('click', function () {
        let body = document.getElementsByTagName("body")[0];
        body.className = "";
        body.classList.add(cuadrado.classList[1]);
    }, false);
}