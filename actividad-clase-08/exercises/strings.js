console.log("Ejercicios strings")

// a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo eltexto en mayúscula (utilizar toUpperCase).
var email = "olivarigabriel@gmail.com";
var emailUpperCase = email.toUpperCase();
console.log("Ejercicio a:", emailUpperCase);

// b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).
var address = "Av. Pellegrini 1200";
var addressSubstring = address.substring(0, 5);
console.log("Ejercicio b:", addressSubstring);

// c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).
var country = "Nueva Zelanda";
var countrySubstring = country.substring(country.length - 5);
console.log("Ejercicio c:", countrySubstring);

// d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).
var string1 = "este es un String";
var string = string1.substring(0, 1).toUpperCase() + string1.substring(1).toLowerCase();
console.log("Ejercicio d:", string);

// e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).
var city = "San Fernando del valle de Catamarca";
var cityIndex = city.indexOf(" ");
console.log("Ejercicio e:", cityIndex);

// f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en
// mayúscula y las demás letras en minúscula (utilizar indexOf, substring,toUpperCase, toLowerCase y el operador +).
var sentence = "empezando programacion";
var sentenceIndex = sentence.indexOf(" ");
var word1 = sentence.substring(0, sentenceIndex);
var word2 = sentence.substring(sentenceIndex + 1);
var text = word1.substring(0, 1).toUpperCase() + word1.substring(1).toLowerCase() + " " + word2.substring(0, 1).toUpperCase() + word2.substring(1).toLowerCase();
console.log("Ejercicio f:", text);