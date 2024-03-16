function imc(peso, altura) {
    return peso/(Math.pow(altura, 2));
}

console.log(imc(68, 1.65));

function valorFactorial (numero) {
    let factorial = numero;
    while(numero > 1){
        factorial = factorial * (numero - 1);
        numero--
    }
    return factorial;
}

console.log(valorFactorial(4));