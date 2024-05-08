// snack-a
// scrivere una funzione contaElementi() che, dato un array in input, restituisca il numero di elementi presenti nell'array

// Dichiaro le variabili che mi serviranno all'interno della funzione
const array = [];
let input;
let counter = 0;

// Creo la funzione
function contaElementi() {

    // Tramite ciclo while(), finché non viene scritto "stop" all'interno del prompt, eseguo queste istruzioni
    while (input !== "stop") {
        input = prompt("Inserisci un elemento, digita 'stop' quando hai concluso");
        
        // Allo stesso tempo, se l'input è diverso da "stop":
        if (input !== "stop"){
        // Pusho l'input all'interno dell'array
        array.push(input);
        // Aumento il contatore di un valore
        counter++;
        // Altrimenti, avverti l'utente che ha finito di aggiungere elementi
        } else {
            alert("Hai interrotto l'aggiunta di elementi")
        }
    }
}

// Eseguo la funzione
contaElementi();
// Stampo gli elementi che mi servono in console
console.log(array);
console.log("Numero di elementi nell'array:", counter);
