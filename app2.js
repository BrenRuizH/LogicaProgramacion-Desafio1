function saludo() {
    console.log("¡Hola, mundo!");
}

saludo();

function saludoNombre(nombre) {
    console.log("¡Hola, " + nombre + "!");
}

saludoNombre('Brenda');

function dobleNumero(numero) {
    return numero*2;
}

console.log(dobleNumero(4));

function promedio(numero1, numero2, numero3) {
    return (numero1 + numero2 + numero3)/3;
}

console.log(promedio(4, 2, 6));