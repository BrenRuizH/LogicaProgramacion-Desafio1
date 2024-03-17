let listaGenerica = [];

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
    return (lista.reduce((valorAn, valorAc) => {
        return valorAn + valorAc;
    }, 0))/lista.length;
}
