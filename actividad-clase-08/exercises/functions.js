console.log("Ejercicios functions")

// a. Crear una función suma que reciba dos valores numéricos y retorne el resultado.Ejecutar la función y guardar el resultado en una variable, mostrando el valor dedicha variable en la consola del navegador.
function sum(a, b) {
  return a + b;
}
var result = sum(3, 4);
console.log("Ejercicio a:", result);

// b. A la función suma anterior, agregarle una validación para controlar si alguno delos parámetros no es un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.
function sumWithValidator(a, b) {
  if (!Number(a) || !Number(b)) {
    alert("Ejercicio b: parámetro con error, ingresar solo números")
    return NaN;
  }
  return a + b;
}
var resultValid = sumWithValidator(3, 4);
var resultInvalid = sumWithValidator('invalid', 4);
console.log("Ejercicio b:", resultValid);

// c. Crear una función validate integer que reciba un número como parámetro ydevuelva verdadero si es un número entero.
function validateInteger(a) {
  return Number.isInteger(a);
}
console.log("Ejercicio c: resultado para 1", validateInteger(1), "y resultado para 2.5", validateInteger(2.5));

// d. A la función suma del ejercicio 6b) agregarle una llamada que valide que losnúmeros sean enteros. En caso que haya decimales mostrar un alerta con elerror y retorna el número convertido a entero (redondeado).
function sumWithIntegerValidator(a, b) {
  if (!Number(a) || !Number(b)) {
    alert("Ejercicio d: parámetro con error, ingresar solo números")
    return NaN;
  }
  if (validateInteger(a)) {
    a = Math.round(a);
    alert("Ejercicio d: primer parámetro con error, ingresar solo números enteros")
  }
  if (validateInteger(b)) {
    b = Math.round(b);
    alert("Ejercicio d: segundo parámetro con error, ingresar solo números enteros")
  }
  return a + b;
}
console.log("Ejercicio d: suma validada con éxito", sumWithIntegerValidator(1, 3));
console.log("Ejercicio d: suma parámetro 1 no entero", sumWithIntegerValidator(1.2, 3));
console.log("Ejercicio d: suma parámetro 2 no entero", sumWithIntegerValidator(1, 3.1));

// e. Convertir la validación del ejercicio 6d) en una función separada y llamarladentro de la función suma probando que todo siga funcionando igual.
function validations(a, b) {
  if (!Number(a) || !Number(b)) {
    alert("Ejercicio e: parámetro con error, ingresar solo números")
    return NaN;
  }
  if (validateInteger(a)) {
    a = Math.round(a);
    alert("Ejercicio e: primer parámetro con error, ingresar solo números enteros")
  }
  if (validateInteger(b)) {
    b = Math.round(b);
    alert("Ejercicio e: segundo parámetro con error, ingresar solo números enteros")
  }
  return [a, b];
}
function sum(a, b) {
  var [a, b] = validations(a, b);
  return a + b;
}
console.log("Ejercicio e: suma validada con éxito", sumWithIntegerValidator(1, 3));
console.log("Ejercicio e: suma parámetro 1 no entero", sumWithIntegerValidator(1.2, 3));
console.log("Ejercicio e: suma parámetro 2 no entero", sumWithIntegerValidator(1, 3.1));