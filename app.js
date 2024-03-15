
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora del Desafío';

function buttonConsole() {
    alert('El botón fue clicado');
}

function buttonPrompt() {
    let ciudad = prompt("Menciona una ciudad de Brasil");
    alert(`Estuve en ${ciudad} y me acordé de ti`);
}

function buttonAlert() {
    alert('Yo amo JS');
}

function buttonSuma() {
    let num1 =parseInt(prompt("Dame el primer número de la suma"));
    let num2 =parseInt(prompt("Dame el segundo número de la suma"));
    let suma = num1 + num2;
    alert(`El resultado de la suma de ${num1} y ${num2} es ${suma}`);
}