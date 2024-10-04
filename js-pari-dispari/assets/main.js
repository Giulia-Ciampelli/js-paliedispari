console.log('im alive too');

// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

// metodi da usare:
// Math.floor(Math.random());
// somma aritmetica +;
// resto %;
// prompt;

// creazione della funzione che verifica se il risultato è pari o dispari
function pari_dispari(user) {
    user = Number(prompt('Inserisci un numero da 1 a 5'));
    pc = Math.floor(Math.random() * 5) + 1;
    sum = user + pc;
    
    if (sum % 2 == 0) {
        alert('è pari');
    }
    else {
        alert('è dispari');
    }
}

// variazione per permettere di accedere alla funzione pari_dispari
let evenOdd = prompt('pari o dispari?');

if (evenOdd === 'pari' || evenOdd === 'dispari'){
    pari_dispari();
}
else {
    alert('Errore: assicurati di scrivere bene "pari" o "dispari"!');
}