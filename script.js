console.log("¡Bienvenido al juego de Piedra, Papel o Tijera!");

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
    const option = prompt("!Escribe tu elección: piedra, papel o tijera¡.");

    return option;
}

//console.log(getHumanChoice());

// Lógica  para jugar todo el juego

function playGame() {

    // Declarar las variables de puntuación de los jugadores  
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {

        const normalizedHumanChoice = humanChoice.toLowerCase();

        console.log(`Tu elección: ${normalizedHumanChoice}`);
        console.log(`Elección de la computadora: ${computerChoice}`);

        if (normalizedHumanChoice === computerChoice) {
            console.log("¡¡¡Empate!!!");

        } else if (
            (normalizedHumanChoice === "piedra" && computerChoice === "tijera") ||
            (normalizedHumanChoice === "papel" && computerChoice === "piedra") ||
            (normalizedHumanChoice === "tijera" && computerChoice === "papel")
        ) {
            console.log(`¡Ganas! ${normalizedHumanChoice} le gana a ${computerChoice}.`);
            humanScore++; // Incrementa la puntuación del jugador
        } else {
            // Si no es empate y el humano no gana, entonces la computadora gana
            console.log(`¡Pierdes! ${computerChoice} le gana a ${normalizedHumanChoice}.`);
            computerScore++; // Incrementa la puntuación de la computadora
        }
    }
    for (let i = 0; i < 5; i++) {
        console.log(`\n--- Ronda ${i + 1} ---`); // Agregué un salto de línea para mejor legibilidad
        let human = getHumanChoice(); // Se obtiene opción humano
        let computer = getComputerChoice(); // Se obtiene opción computadora

        playRound(human, computer); // Ejecuta la lógica de la ronda

        console.log(`Marcador actual: Humano ${humanScore} - Computadora ${computerScore}`);
        console.log(`--------------------`);
    }

    // Lógica para el ganador final
    console.log("\n--- RESULTADO FINAL DEL JUEGO ---");
    if (humanScore > computerScore) {
        console.log(`¡FELICIDADES! ¡Ganaste el juego ${humanScore} a ${computerScore}!`);
    } else if (computerScore > humanScore) {
        console.log(`¡Qué pena! La computadora ganó el juego ${computerScore} a ${humanScore}.`);
    } else {
        console.log(`¡Es un EMPATE! El juego terminó ${humanScore} a ${computerScore}.`);
    }
}

// *** ¡IMPORTANTE! Llama a la función principal para iniciar el juego ***
playGame();




