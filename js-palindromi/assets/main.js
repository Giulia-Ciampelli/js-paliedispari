// Palidroma
// Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma

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