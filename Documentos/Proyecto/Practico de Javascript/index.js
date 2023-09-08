console.log("----- Ejercicio numero 1 -----")
// Función para verificar si un número es par o impar
function esParOImpar(numero) {
if (numero % 2 === 0) {
console.log(numero + " es par");
} else {
console.log(numero + " es impar");
}
}
esParOImpar(20);


console.log("----- Ejercicio numero 2 -----")
// Función para encontrar el número mayor entre dos números
function numeroMayor(a, b) {
if (a > b) {
console.log(a + " es mayor que " + b);
} else if (b > a) {
console.log(b + " es mayor que " + a);
} else {
console.log("Ambos números son iguales");
}
}
numeroMayor(12, 8);


console.log("----- Ejercicio numero 3 -----")
// Función para verificar si un número es múltiplo de 5
function esMultiploDe5(numero) {
if (numero % 5 === 0) {
console.log(numero + " es múltiplo de 5");
} else {
console.log(numero + " no es múltiplo de 5");
}
}
esMultiploDe5(25);


console.log("----- Ejercicio numero 4 -----")
// Función para imprimir números desde 0 hasta n
function imprimirNumerosHastaN(n) {
for (let i = 0; i <= n; i++) {
console.log(i);
}
}
imprimirNumerosHastaN(5);


console.log("----- Ejercicio numero 5 -----")
// Función para imprimir una palabra repetida n veces
function imprimirPalabra(palabra, cantidad) {
console.log(palabra.repeat(cantidad));
}
imprimirPalabra("hola ", 3);


console.log("----- Ejercicio numero 6 -----")
// Función para imprimir todos los valores de un array
function imprimirArray(array) {
for (let i = 0; i < array.length; i++) {
console.log(array[i]);
}
}
const miArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
imprimirArray(miArray);


console.log("----- Ejercicio numero 7 -----")
// Función para imprimir todos los valores de un array, excepto el de la posición 5
function imprimirArray(array) {
for (let i = 0; i < array.length; i++) {
if (i !== 5) {
console.log(array[i]);
}
}
}
imprimirArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);


console.log("----- Ejercicio numero 8 -----")
// Función para multiplicar cada número de un array por un número dado
function multiplicarArrayPorNumero(array, numero) {
for (let i = 0; i < array.length; i++) {
console.log(array[i] * numero);
}
}
multiplicarArrayPorNumero(miArray, 2);
