//1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.

function parImpar(name) {
   if (name % 2 === 0) {
      console.log("Es par");
   } else {
      console.log("Es impar");
   }
}

console.log("Primer Ejercicio");
parImpar(4);
console.log("");

// 2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.

function names(num1, num2) {
   if (num1 > num2) {
      console.log(`${num1} es mayor que ${num2}`);
   } else if (num2 > num1) {
      console.log(`${num2} es mayor que ${num1}`);
   } else {
      console.log(`${num1} y ${num2} son iguales`);
   }
}


console.log("Segundo Ejercicio");
names(3, 5);
console.log("");

// 3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.

function name(multiple) {
   if (multiple % 5 === 0) {
      console.log(`Es multiplo de 5`);
   } else {
      console.log(`No es multiplo de 5`);
   }
}


console.log("Tercer Ejercicio");
name(5);
console.log("");

// 4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.
function imprimirNumerosHasta(numero) {
   for (let i = 0; i <= numero; i++) {
      console.log(i);
   }
}


console.log("Cuarto Ejercicio");
imprimirNumerosHasta(10);
console.log("");



// 5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola esa palabra la cantidad correspondiente al número indicado.
function imprimirPalabraNTimes(palabra, cantidad) {
   for (let i = 0; i < cantidad; i++) {
      console.log(palabra);
   }
}


console.log("Quinto Ejercicio");
imprimirPalabraNTimes("Hola", 3); 
console.log("");



// 6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.
function imprimirArray(array) {
   for (let i = 0; i < array.length; i++) {
      console.log(array[i]);
   }
}


console.log("Sexto Ejercicio");
imprimirArray([1, 2, 3, 4, 5]);
console.log(""); 



// 7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo.
function imprimirArraySinQuintoElemento(array) {
   for (let i = 0; i < array.length; i++) {
      if (i !== 4) {
         console.log(array[i]);
      }
   }
}


console.log("Septimo Ejercicio");
imprimirArraySinQuintoElemento([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log("");



// 8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.
function imprimirArrayMultiplicadoPorNumero(array, numero) {
   for (let i = 0; i < array.length; i++) {
      console.log(array[i] * numero);
   }
}


console.log("Octavo Ejercicio");
imprimirArrayMultiplicadoPorNumero([1, 2, 3], 5);
