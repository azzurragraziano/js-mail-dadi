/* Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.*/

// lista delle email consentite  
const allowedEmails = ['marcusgoldman@gmail.com', 'elliotalderson@gmail.com', 'harryquebert@gmail.com',          'alaskayoung@me.com'];

const loginBtn = document.getElementById('login-btn');
loginBtn.addEventListener('click',
    function() {
        // leggi email dell'utente
        const userEmail = document.getElementById('user-email').value;

        // controllo se è presente nella lista delle email che possono accedere  
        let emailFound = false;

        // scorro l'array
        for (let i = 0; i < allowedEmails.length; i++) {

            // per ogni elemento 
            const email = allowedEmails[i];

            // controllo se userEmail è presente nell'array
            if (email === userEmail) {
                emailFound = true;
            }
        }

        // stampo l'esito del controllo
        // se è presente stampo "allowed email"
        // se non è presente stampo "not allowed email"
        let userMessage;

        if (emailFound === true) {
            userMessage = 'allowed email';
        } else {
            userMessage = 'not allowed email';
        }

        document.getElementById('user-message').innerHTML = userMessage;
    }
)



