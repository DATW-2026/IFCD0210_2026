// Crea una función que imprima por consola
// el resultado de elevar al cubo un número
// dado como parámetro.

function cube(b) {
    const result =  
    // b**3
    // Math.pow(b,3)
    // b * b * b;
    pow(b,3)

    return result;
}

function square(b) {
    const result = b * b;
    return result;
}

console.log(cube(3))
console.log(square(4))

function pow(base, exp) {
    const result = base**exp
    return result
}

const a = 5
const b = 5

console.log(`Esto es ${a} elevado a ${b}:`, pow(a,b))
