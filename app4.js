let listaGenerica = [];
let numeros = [5, 15, 10];
let numeros2 = [21, 7, 14];
let lenguajesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

lenguajesDeProgramacion.push('Java', 'Ruby', 'GoLang');

function muestra() {
    return console.log(lenguajesDeProgramacion);
}

muestra();

function reversa() {
    return console.log(lenguajesDeProgramacion.reverse());
}

reversa();

function promedio(lista) {
    return (suma(lista))/lista.length;
}

console.log(promedio(numeros));

function maxMin(lista) {
    let max = lista[0];
    let min = lista[0];
    for(i = 1; i < lista.length; i++) {
        if(max < lista[i]) {
            max = lista[i];
        }
        if(min > lista[i]) {
            min = lista[i];
        }
    }

    return `El número máximo es ${max} y el mínimo es ${min}`;
}

console.log(maxMin(numeros));

function suma(lista) {
    let suma = lista.reduce((valorAn, valorAc) => {
        return valorAn + valorAc;
    }, 0);
    return suma;
}

console.log(suma(numeros));

function posicion(lista, elemento) {
    for(i = 0; i < lista.length; i++) {
        if(lista[i] === elemento) {
            return i;
        }
    }
    return -1;
}

console.log(posicion(numeros, 5));

function sumaListas(lista1, lista2) {
    let sumaL = [];
    if(lista1.length !== lista2.length) {
        return 'Las listas no son del mismo tamaño'
    } else {
        for(i = 0; i < lista1.length; i++) {
            sumaL.push = lista1[i] + lista2[i];
        }
    }
    return sumaL;
}

console.log(sumaListas(numeros, numeros2));

function cuadrado(lista) {
    let cuadrados = [];
    for(i = 0; i < lista.length; i++) {
        cuadrados.push = Math.pow(lista[i], 2);
    }
    return cuadrados;
}

console.log(cuadrado(numeros2));