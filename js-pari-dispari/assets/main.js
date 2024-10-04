console.log('im alive too');

// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

// metodi da usare:
// Math.floor(Math.random());
// somma aritmetica +;
// resto %;
// prompt;

function pari_dispari(user) {
    user = Number(prompt('Inserisci un numero da 1 a 5'));
    pc = Math.floor(Math.random() * 5) + 1;
    console.log(pc);
    sum = user + pc;
    console.log(sum);
}
pari_dispari();