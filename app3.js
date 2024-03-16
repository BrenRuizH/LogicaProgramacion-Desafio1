function imc(peso, altura) {
    return `Tu IMC con peso de ${peso}kg y altura de ${altura}m corresponde a ${peso/(Math.pow(altura, 2))}`;
}

console.log(imc(68, 1.65));

function valorFactorial (numero) {
    let factorial = numero;
    while(numero > 1){
        factorial = factorial * (numero - 1);
        numero--
    }
    return `El factorial del número ${numero} es ${factorial}`;
}

console.log(valorFactorial(4));

function dolaresApeso(dolar) {
    return `La cantidad ${dolar} dolares corresponde a ${dolar * 16.72} pesos mexicanos`;
}

console.log(dolaresApeso(24));

function areaPerimetro(altura, anchura) {
    return `Con altura de ${altura} y una anchura de ${anchura} corresponden a un perímetro de ${(2 * altura) + (2 * anchura)} y un área de ${altura * anchura}`;
}

console.log(areaPerimetro(12, 16));

function areaPerimetroCircular(radio) {
    let pi = 3.14
    return `Con radio de ${radio} y considerando Pi = ${pi}, corresponden a un perímetro de ${radio * (2 * pi)} y un área de ${pi * (Math.pow(radio, 2))}`;
}

console.log(areaPerimetroCircular(4));

function tablaMultiplicar(numero) {
    for (var i=1; i<=10; i++) {
        console.log(numero + " X " + i + " = " + numero * i);
    }
}

tablaMultiplicar(2);