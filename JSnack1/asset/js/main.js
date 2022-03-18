// Snack1
// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. 
// Continua a chiedere i numeri all’utente e a inserirli nell’array 
// fino a quando la somma degli elementi è minore di 50.
 
let arrayList = [];
let sum = 0;

do {
    let richiesta = parseInt(prompt("Inserisci un numero"));
    
    arrayList.push(richiesta);
    
    sum += richiesta;
    
    if (sum > 50) {
        var arrayListPop = arrayList.pop();
        arrayListPop;
    }

    let arrayListString = arrayList.join(", ");
    
    document.getElementById("containerList").innerHTML = `La lista dei numeri inseriti è: <div style="font-size: 2em; font-weight:bold; margin-top: 20px;">${arrayListString}</div>`;
    document.getElementById("containerSum").innerHTML = `La somma dei numeri inseriti è: <div style="font-size: 2em; font-weight:bold; margin-top: 20px;">${sum - arrayListPop}</div>`;

} while (sum < 50);

