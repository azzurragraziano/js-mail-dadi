/* Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.*/

// lista delle email consentite  
const allowedEmails = ['marcusgoldman@gmail.com', 'elliotalderson@gmail.com', 'harryquebert@gmail.com',          'alaskayoung@me.com'];

console.log(allowedEmails)

// chiedi email all'utente
const userEmail = prompt('dimmi la tua email');
console.log(userEmail)

// controllo se è presente nella lista delle email che possono accedere  
// scorro l'array (con il ciclo for)
let emailFound = 'not allowed';

for (let i = 0; i < allowedEmails.length; i++) {
    const email = allowedEmails[i];

    if (email === userEmail) {
        emailFound = 'allowed';
    }
}

console.log(emailFound);

// per ogni elemento 
// controllo se userEmail è presente nell'array (con un if)

// stampo l'esito del controllo
// se è presente stampo "allowed email"
// se non è presente stampo "not allowed email"