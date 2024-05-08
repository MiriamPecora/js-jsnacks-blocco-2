// Crea due array che hanno un numero di elementi diversi.

// Aggiungi elementi casuali all’array che ha meno elementi,

// fino a quando ne avrà tanti quanti l’altro.

const shorterArray = [1, 2, 3, 4, 5];
const longerArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

while(shorterArray.length < longerArray.length){
    let number = Math.floor(Math.random() * (10 - 5 + 1) + 5);
    shorterArray.push(number);
    console.log(shorterArray);
}