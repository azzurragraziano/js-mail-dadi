/* Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.*/

// lista delle email consentite  
const allowedEmails = ['marcusgoldman@gmail.com', 'elliotalderson@gmail.com', 'harryquebert@gmail.com',          'alaskayoung@me.com'];

// chiedi email all'utente
const userEmail = prompt('dimmi la tua email');

// controllo se è presente nella lista delle email che possono accedere  
let emailFound = 'not allowed email';

// scorro l'array
for (let i = 0; i < allowedEmails.length; i++) {

    // per ogni elemento 
    const email = allowedEmails[i];

    // controllo se userEmail è presente nell'array
    if (email === userEmail) {
        emailFound = 'allowed email';
    }
}

// stampo in console l'esito del controllo
// se è presente stampo "allowed email"
// se non è presente stampo "not allowed email"
console.log(emailFound);