// Crea una función que imprima por consola
// un número al azar entre 0 y 10.

// Math.floor(5.99999) // 5
// Math.trunc(5.999999) // 5
// Math.ceil(5.00001) // 6
// Math.round(5.6) // 6

function randomNumber() {
    return Math.floor(Math.random() * 11);
}

for (let i = 1; i <= 20; i++) {
    console.log(i, randomNumber());
}
