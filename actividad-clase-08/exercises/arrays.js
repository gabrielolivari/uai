console.log("Ejercicios arrays")

// a. Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio","Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar porconsola los meses 5 y 11 (utilizar console.log).
var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio","Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log("Ejercicio a: el es mes 05 es", months[4], "y el mes 11 es", months[10])

// b. Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
months.sort();
console.log("Ejercicio b:", months);

// c. Agregar un elemento al principio y al final del array (utilizar unshift y push).
months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio","Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
months.unshift("Inicio arreglo");
months.push("Fin arreglo");
console.log("Ejercicio c:", months);

// d. Quitar un elemento del principio y del final del array (utilizar shift y pop).
months.shift();
months.pop();
console.log("Ejercicio d:", months);

// e. Invertir el orden del array (utilizar reverse).
months.reverse();
console.log("Ejercicio e:", months);

// f. Unir todos los elementos del array en un único string donde cada mes esteseparado por un guión - (utilizar join).
months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio","Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var monthsString = months.join('-');
console.log("Ejercicio f:", monthsString);

// g. Crear una copia del array de meses que contenga desde Mayo hasta Noviembre(utilizar slice).
var monthsCopy = months.slice(4, 11);
console.log("Ejercicio g:", monthsCopy);
