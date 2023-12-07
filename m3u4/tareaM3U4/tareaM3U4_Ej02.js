var texto = document.getElementById("texto");
texto.addEventListener('keyup', function (event) {
    document.getElementById("contador").innerText = event.currentTarget.value.length;
});