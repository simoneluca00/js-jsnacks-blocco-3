// Snack3
// Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti.

let i = 0;
let sum = 0;

while ( i < 5 ) {
    let richiesta = parseInt(prompt("Inserisci un numero"))
    sum += richiesta;

    i++
}

document.getElementById("containerSum").innerHTML += `La somma dei numeri inseriti è: <div style="font-size: 2em; font-wieght= bold; margin-top: 20px;">${sum}</div>`;