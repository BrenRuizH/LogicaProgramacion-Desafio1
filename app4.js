let listaGenerica = [];
let numeros = [5, 15, 10];
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
    return lista.reduce((valorAn, valorAc) => {
        return valorAn + valorAc;
    }, 0);
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