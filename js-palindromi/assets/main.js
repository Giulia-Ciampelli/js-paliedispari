console.log('im alive');

// Palidroma
// Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma

// ricerca di metodi utili:
// .split();
// .reverse(), più compatibile, in uso dal 1997;
// .toReverse(), torna una nuova stringa;
// .length;
// .every(), forse inutile fuori da un array;
// .join(), forse inutile fuori da un array;

// funzione in cui si verifica una stringa con la metà al contrario di sè stessa
function seiPalindroma(word) {
    word = prompt('Inserisci una parola');
    if (word.split('').reverse().join('') === word) {
        alert('La parola è palindroma');
    }
    else {
        alert('La parola non è palindroma');
    }
}
seiPalindroma();