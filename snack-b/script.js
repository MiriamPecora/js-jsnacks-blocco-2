// snack-b
// scrivere una funzione trovaIndice() che, dati un array e un elemento in input, restituisca la posizione in cui si trova l'elemento all'interno dell'array; se l'elemento non è presente nell'array, allora la funzione deve restituire -1

// Dichiaro un array di colori e un prompt per lasciare inserire una stringa all'utente
const colorList = ["rosa", "celeste", "grigio", "blu", "rosso", "giallo", "verde", "magenta", "viola", "nero", "bianco"];
let input = prompt('Verifica se il colore è presente nella lista');

// Creo la funzione
function trovaIndice() {
    
    // Tramite un ciclo for(), mi assicuro che l'array venga ciclato fino al suo ultimo elemento
    for (let i = 0; i < colorList.length; i++) {
        // Durante il ciclo, se input risulta uguale ad un elemento dell'array, allora return i
        if (input === colorList[i]) {
            return i;
       } 
    }
    // Altrimenti, return -1
    return -1;
}

// Eseguo la funzione e la vchiamo index
const index = trovaIndice();

// Se index è diverso da -1, allora stampo un messaggio in console con il colore scelto e la posizione dell'elemento all'interno dell'array
if (index !== -1) {
    console.log(`Il colore "${input}" si trova all'indice ${index} nell'array.`);
    
    // Altrimenti, se index è -1, stampo un messaggio in console dove informo che il colore non è presente nell'array
} else {
    console.log(`Il colore "${input}" non è presente nell'array.`);
}