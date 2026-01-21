// Crea una función que imprima por consola
// el resultado de elevar al cubo un número
// dado como parámetro.

const pow = function (base, exp) {
    const result = base ** exp;
    return result;
};

const cube = function (b) {
    const result =
        // b**3
        // Math.pow(b,3)
        // b * b * b;
        pow(b, 3);

    return result;
};

const square = function (b) {
    const result = b * b;
    return result;
};

console.log(cube(3));
console.log(square(4));
