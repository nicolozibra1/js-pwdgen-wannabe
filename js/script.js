let firstName = prompt (`Qual/'è il tuo nome?`);
let lastName = prompt (`Qual/'è il tuo cognome?`);
let favColor = prompt (`Qual/'è il tuo colore preferito?`);
let notValid = "Inserisci correttamente i tuoi dati."

const password = firstName + lastName + favColor + 21; 

if (firstName && lastName && favColor) {
    document.getElementById('pass').innerHTML =
    `<h1>${password}</h1>`;
}

else {
    document.getElementById('pass').innerHTML =
    `<h1>${notValid}</h1>
     <h2>Ricarica la pagina e riprova.</h2>`
}


console.log (password);