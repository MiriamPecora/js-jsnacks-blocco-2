// snack-c
// scrivere una funzione stampa() che, dato un array in input, restituisca una stringa contenente tutti gli elementi dell'array, separati da una virgola

const array = [];
let input;

// Riciclo, in parte, del codice nello snack a
function addToArray() {
    while (input !== "stop") {
        input = prompt("Inserisci un elemento, digita 'stop' quando hai concluso");
        if (input !== "stop"){ 
        array.push(input);
        } else {
            alert("Hai interrotto l'aggiunta di elementi")
        }
    }
}

// Creo la funzione stampa()
function stampa() {
    // Inizializzo una stringa vuota per contenere il risultato
    let result = ''; 
    // Tramite ciclo for(), scorro l'array
    for (let i = 0; i < array.length; i++) {
        // Aggiungo l'elemento all'output
        result += array[i]; 
        // In caso non fosse l'ultimo elemento, aggiungo una virgola
        if (i !== array.length - 1) {
            result += ', ';
        }
    }
    // Restituisco la stringa con gli elementi separati da virgole
    return result;
}

// Eseguo la funzione per pushare la parola all'interno dell'array
addToArray();
// Eseguo la funzione per stampare i risultati e li stampo in console con la virgola
const result = stampa(array);
console.log(result);

