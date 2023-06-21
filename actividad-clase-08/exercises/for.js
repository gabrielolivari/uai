console.log("Ejercicios for")

// a. Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript para mostrar una alerta utilizando cada una de las palabras.
var countries = ['argentina', 'brasil', 'canada', 'eslovenia', 'francia'];
countries.forEach(function(word, index) {
  alert("Ejercicio a: La palabra " + (index + 1) + " es " + word);
})

// b. Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por cada palabra modificada.
console.log("Ejercicio b");
countries.forEach(function(word, index) {
  countries[index] = word[0].toUpperCase() + word.substring(1);
  alert("Ejercicio b: La palabra " + (index + 1) + " es " + countries[index]);
})

// c. Crear una variable llamada "sentence" que tenga un string vacío, luego al array del punto a) recorrerlo con un bucle for para ir guardando cada palabra dentro de la variable sentence. Al final mostrar una única alerta con la cadena completa.
var sentence = "";
countries.forEach(function(word) {
  sentence += word;
})
alert("Ejercicio c: " + sentence);

// d. Crear una array vacío y con un bucle for de 10 repeticiones. Llenar el array con el número de la repetición, es decir que al final de la ejecución del bucle for debería haber 10 elementos dentro del array, desde el número 0 hasta al número 9. Mostrar por la consola del navegador el array final (utilizar console.log).
var arr = [];
for(var i = 0;i < 10;i++) {
  arr.push(i);
}
console.log("Ejercicio d:", arr);