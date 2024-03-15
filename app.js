
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora del Desafío';

function buttonConsole() {
    alert('El botón fue clicado');
}

function buttonPrompt() {
    
    let ciudad = prompt("Menciona una ciudad de Brasil");
    alert(`Estuve en ${ciudad} y me acordé de ti`);

}