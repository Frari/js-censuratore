// - Il software riceve in input un lungo testo e una serie di parole da censurare.
// - Restituisce il testo con xxx al posto delle parole censurate.
// - Stampa un “badword index” calcolato come il numero di parole censurate su il numero di parole totali
var testo, testoArray, censura;
// utente inserisce testo
testo=prompt('scrivi qui il tuo testo');
console.log(testo);

testoArray=testo.split(' ');
console.log(testoArray);

// creo lista parolec censurate
censura=['ciao','Francesco'];
// confronto testo inserito con con lista parole censurate

// restutisco testo con xxx al posto delle parole presenti nella lista censurate

// calcolo il numero di parole censurate rispetto a quelle totali del testo
