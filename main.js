// - Il software riceve in input un lungo testo e una serie di parole da censurare.
// - Restituisce il testo con xxx al posto delle parole censurate.
// - Stampa un “badword index” calcolato come il numero di parole censurate su il numero di parole totali
var testo, testoArray, censura, array_cens, testo_cens;
// utente inserisce testo
testo=prompt('scrivi qui il tuo testo');
console.log(testo);

testoArray=testo.split(' ');
console.log(testoArray);

// creo lista parolec censurate
censura=['ciao','Francesco'];
array_cens=[];
// confronto testo inserito con con lista parole censurate
for(i=0;i<testoArray.length;i++){
  if(censura.includes(testoArray[i])){
    console.log('xxx');
    array_cens.push('xxx');
  }else{
    console.log(testoArray[i]);
    array_cens.push(testoArray[i]);
  }
}
console.log(array_cens);

// restutisco testo con xxx al posto delle parole presenti nella lista censurate
testo_cens=array_cens.join(' ');
console.log(testo_cens);
document.write(testo_cens);
// calcolo il numero di parole censurate rispetto a quelle totali del testo
