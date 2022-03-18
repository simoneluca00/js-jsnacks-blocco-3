// Snack2

//ANCHOR 1) Fai inserire un numero, che chiameremo "n", all’utente.
let n = parseInt(prompt("Quante liste vuoi creare? (inserire valore numerico)")); 
if (isNaN(n)) {
    n = parseInt(prompt("Inserire valore numerico")); 
}

//ANCHOR 2) Genera "n" array, ognuno formato da 10 numeri casuali da 1 a 100. 

let i = 0;

do {
    
    let numeriRandom = Math.floor(Math.random() * 100 + 1);
    let numeriRandom1 = Math.floor(Math.random() * 100 + 1);
    let numeriRandom2 = Math.floor(Math.random() * 100 + 1);
    let numeriRandom3 = Math.floor(Math.random() * 100 + 1);
    let numeriRandom4 = Math.floor(Math.random() * 100 + 1);
    let numeriRandom5 = Math.floor(Math.random() * 100 + 1);
    let numeriRandom6 = Math.floor(Math.random() * 100 + 1);
    let numeriRandom7 = Math.floor(Math.random() * 100 + 1);
    let numeriRandom8 = Math.floor(Math.random() * 100 + 1);
    let numeriRandom9 = Math.floor(Math.random() * 100 + 1);

    let lista = new Array(10);
    
    lista[0] = numeriRandom;
    lista[1] = numeriRandom1;
    lista[2] = numeriRandom2;
    lista[3] = numeriRandom3;
    lista[4] = numeriRandom4;
    lista[5] = numeriRandom5;
    lista[6] = numeriRandom6;
    lista[7] = numeriRandom7;
    lista[8] = numeriRandom8;
    lista[9] = numeriRandom9;
    
    console.log(lista);

    lista = lista.join(', ');

    //ANCHOR 3) Ogni volta che ne crei uno, stampalo.
    document.getElementById("containerArray").innerHTML += ` <div style="font-weigth: bold; padding: 30px;"> <span style="text-decoration: underline;">Lista n.${i+1}:</span> ${lista} </div> `;

    i++
} while (i < n);

// ------------------------------------ CORREZIONE ALTERNATIVA ------------------------------------ //

// const x = parseInt(prompt("inserisci numero"));

// let y = 0;

// while (y < x) {
//     let newArray = [];

//     for ( let z = 0; z < 10; z++ ) {
//         newArray.push( Math.floor(Math.random() * 100) +1 );
//     }

//     console.log( newArray );
//     y++
// }







