// Snack4 (Bonus)
// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa. Interrompi il ciclo appena il nome è stato trovato.
let invitati = [ "Nick", "Jay", "Daisy", "Tom", "Jordan", "Myrtle", "George", "Owl", "Meyer", "Klipspringer" ];

let nomeInvitato = prompt("Qual è il tuo nome?")

let conferma = false;

let i = 0;

while ( i < invitati.length ) {
    if ( invitati[i] == nomeInvitato ) {
        conferma = true;
    }
    
    i++
}

if (conferma == true) {
    document.getElementById("containerConferma").innerHTML += `Ciao ${nomeInvitato}! Entra pure, ti aspettano tutti nella sala da ballo!`
} else {
    document.getElementById("containerConferma").innerHTML += `Mi dispiace ${nomeInvitato}, mi sa che la musica l'ascolterai da qui...`
}
