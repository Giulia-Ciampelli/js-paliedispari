// Palidroma
// Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma

// variabile di verifica booleana
let check = false;

// funzione in cui si verifica una stringa con la metà al contrario di sè stessa
function seiPalindroma(word) {
    if (word.split('').reverse().join('') === word) {
        check = true;
    }
}
seiPalindroma(word = prompt('Inserisci una parola'));

// if statement per gli alert (messi fuori dalla funzione per far sì che essa possa essere invocata più volte senza ulteriori modifiche)
if (check) {
    alert('La parola è palindroma');
}
else {
    alert('La parola non è palindroma');
}