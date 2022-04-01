let conteggio;
let numeri = prompt('inserisci un numero di 4 cifre' );
if(numeri.legth == 4){
    conteggio = numeri.split("");
let somma = 0;
let index = 0;
while(index < conteggio.length){
    somma += parseInt(conteggio[index]);
    index ++;
}
}