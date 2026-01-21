// Crea una función que, al ser llamada,
// imprima por consola el resultado de
// la multiplicación de dos números
// introducidos como parámetros.

// Asignación de una expresión funcional (función anónima)

const multiply = function (a, b) {
    const result = a * b;
    return result
}

const r = multiply(3,5)
console.log(r)


// Asignación de una expresión de función arrow (función anónima)

const multiplyArrow = (a, b) => {
    const result = a * b;
    return result
}

const r2 = multiplyArrow(3,5)
console.log(r2)
