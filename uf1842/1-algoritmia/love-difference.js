/**
 * A Tinder le gusta conocer la diferencia de edad entre dos personas para incluirlo en su perfil. Crea una función que devuelve un número positivo indicando la diferencia de edad entre las dos personas.
 * 
 * @param {number} age1 Edad usuario 1, siempre un número positivo
 * @param {number} age2 Edad usuario 2, siempre un número positivo
 * @return {number} La diferencia de edad, siempre un número positivo
 */

/* 
function loveDifference(age1, age2) {

    // Primero calculamos la diferencia sin importar el orden
    let diferencia = age1 - age2;

    // Si la diferencia es negativa, la convertimos a positiva
    if (diferencia < 0) {
        diferencia = -diferencia; // Usamos el operador unario (-) para cambiar del signo el valor. Esto es lo mismo que diferencia * -1
    }

    // Retornamos la diferencia siempre positiva
    return diferencia;
}
 */

// BONUS:

function loveDifference(age1, age2) {
    return Math.abs(age1 - age2); // El método Math.abs convierte cualquier resultado negativo a positivo
}


// Prueba 1: Diferencia básica
console.log(loveDifference(25, 20)); // Resultado esperado: 5

// Prueba 2: Diferencia cuando los valores están invertidos
console.log(loveDifference(20, 25)); // Resultado esperado: 5

// Prueba 3: Edad iguales
console.log(loveDifference(30, 30)); // Resultado esperado: 0

// Prueba 4: Diferencia con edades grandes (el amor no tiene edad)
console.log(loveDifference(100, 80)); // Resultado esperado: 20

// BONUS: Implementa la función en una sola línea


