function saludo() {
    console.log("¡Hola, mundo!");
}

function saludoNombre() {
    let nombre = prompt("Dame tu nombre");
    console.log("¡Hola, " + nombre + "!");
}

function dobleNumero() {
    let numero = parseInt(prompt("Dame un número"));
    return numero*2;
}