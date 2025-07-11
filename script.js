console.log("¡Bienvenido al juego de Piedra, Papel o Tijera!");
// Declarar las variables de puntuación de los jugadores pasadas a globales 
let humanScore = 0;
let computerScore = 0;

//referencia al div que muestra los resultados y la puntuación

const resultadosDiv = document.querySelector('#resultados');
const humanScoreDisplay = document.querySelector('#humanScore');
const computerScoreDisplay = document.querySelector('#computerScore');


// Lógica para obtener la elección de la computadora

function getComputerChoice() {
    const random = Math.floor(Math.random() * 3);

    if (random === 0) {
        return "piedra";

    } else if (random === 1) {
        return "papel";

    } else if (random === 2) {
        return "tijera";
    }
}
//console.log(getComputerChoice());

//Lógica para obtener la elección del jugador

function getHumanChoice() {

    return option;
}

function playRound(humanChoice, computerChoice) {
    const normalizedHumanChoice = humanChoice.toLowerCase();

    // ¡IMPORTANTE! Cambia a innerHTML aquí para limpiar
    resultadosDiv.innerHTML = '';

    // ¡IMPORTANTE! Cambia a innerHTML aquí y en todas las demás líneas que usen resultadosDiv
    resultadosDiv.innerHTML += `Tu elección: ${normalizedHumanChoice}.<br>`;
    resultadosDiv.innerHTML += `Elección de la computadora: ${computerChoice}.<br>`; // Añadí un punto para consistencia

    if (normalizedHumanChoice === computerChoice) {
        resultadosDiv.innerHTML += "¡¡¡Empate!!!<br>";

    } else if (
        (normalizedHumanChoice === "piedra" && computerChoice === "tijera") ||
        (normalizedHumanChoice === "papel" && computerChoice === "piedra") ||
        (normalizedHumanChoice === "tijera" && computerChoice === "papel")
    ) {
        resultadosDiv.innerHTML += `¡Ganas! ${normalizedHumanChoice} le gana a ${computerChoice}.<br>`;
        humanScore++; // Incrementa la puntuación del jugador
    } else {
        // Si no es empate y el humano no gana, entonces la computadora gana
        resultadosDiv.innerHTML += `¡Pierdes! ${computerChoice} le gana a ${normalizedHumanChoice}.<br>`;
        computerScore++; // Incrementa la puntuación de la computadora
    }


    humanScoreDisplay.textContent = humanScore;
    computerScoreDisplay.textContent = computerScore;

    if (humanScore === 5 || computerScore === 5) {
        playGame();
        btnPiedra.disabled = true;
        btnPapel.disabled = true;
        btnTijera.disabled = true;
    }
}


// Lógica  para jugar todo el juego



function playGame() {
    // ¡IMPORTANTE! Cambia a innerHTML aquí y en todas las demás líneas de playGame
    resultadosDiv.innerHTML = "<br>--- RESULTADO FINAL DEL JUEGO ---<br>";

    if (humanScore > computerScore) {
        resultadosDiv.innerHTML += `¡FELICIDADES! ¡Ganaste el juego ${humanScore} a ${computerScore}!<br>`;
    } else if (computerScore > humanScore) {
        resultadosDiv.innerHTML += `¡Qué pena! La computadora ganó el juego ${computerScore} a ${humanScore}.<br>`;
    } else {
        resultadosDiv.innerHTML += `¡Es un EMPATE! El juego terminó ${humanScore} a ${computerScore}!<br>`;
    }
}

//nuevo código para dar funcionalidad a los tres botones

const btnPiedra = document.querySelector('#btnPiedra');
const btnPapel = document.querySelector('#btnPapel');
const btnTijera = document.querySelector('#btnTijera');

// añadir el evento a los botones

btnPiedra.addEventListener('click', () => {
    const humanSelection = 'piedra';
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
});

btnPapel.addEventListener('click', () => {
    const humanSelection = 'papel';
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
});

btnTijera.addEventListener('click', () => {
    const humanSelection = 'tijera';
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
});





