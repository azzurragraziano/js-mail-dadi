/* Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.*/

// generare numero casuale per il giocatore
const userNumber = Math.floor(Math.random() * 6) + 1;
console.log('user', userNumber);

// generare numero casuale per il computer
const computerNumber = Math.floor(Math.random() * 6) + 1;
console.log('computer', computerNumber);

// stabilire chi ha avuto la mano vincente con un if nel quale confronto a chi è uscito il numero più alto
let result;

// SE l'utente ha un numero maggiore di quello del computer, vince
// SE l'utente ha un numero uguale a quello del computer, pareggiano
// ALTRIMENTI l'utente perde
if (userNumber > computerNumber) {
    result = 'you won';
} else if (userNumber === computerNumber) {
    result = 'you tied';
} else {
    result = 'you lose';
}

// stampo in console il risultato 
console.log(result);