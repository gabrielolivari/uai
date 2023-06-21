function updateTitle() {
  var name = document.getElementById('name').value;
  document.getElementById('title').innerText = 'Hola ' + name;
}

function clearError(id) {
  document.getElementById('error-' + id).innerText = '';
}

function validateName() {
  var name = document.getElementById('name').value;
  var error = '';
  if (name.length <= 6 || name.indexOf(" ") === -1) {
    error = 'Debe tener más de 6 letras y al menos un espacio entre medio';
    document.getElementById('error-name').innerText = error;
  }
  return error;
}

function validateEmail() {
  var email = document.getElementById('email').value;
  var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var error = '';
  if (!regex.test(email)) {
    error = 'Debe tener un formato de email válido';
    document.getElementById('error-email').innerText = error;
  }
  return error;
}

function validatePass() {
  var pass = document.getElementById('pass').value;
  var regex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  var error = '';
  if (!regex.test(pass)) {
    error = 'Debe tener al menos 8 caracteres, formados por letras y números.';
    document.getElementById('error-pass').innerText = error;
  }
  return error;
}

function validatePassRepeat() {
  var pass = document.getElementById('pass').value;
  var passRepeat = document.getElementById('passRepeat').value;
  var error = '';
  if (pass != passRepeat) {
    error = 'Debe coincidir con la conraseña ingresada';
    document.getElementById('error-passRepeat').innerText = error;
  }
  return error;
}

function validateAge() {
  var age = Number(document.getElementById('age').value);
  var error = '';
  if (!Number.isInteger(age) || age < 18) {
    error = 'Debe ser número entero y mayor o igual a 18';
    document.getElementById('error-age').innerText = error;
  }
  return error;
}

function validatePhone() {
  var phone = document.getElementById('phone').value;
  var regex = /^[0-9]{7,}$/;
  var error = '';
  if (!regex.test(phone)) {
    error = 'Debe ser número de al menos 7 dígitos, sin espacios, guiones ni paréntesis.';
    document.getElementById('error-phone').innerText = error;
  }
  return error;
}

function validateAddress() {
  var address = document.getElementById('address').value;
  var regex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d\s]{0,}$/;
  var error = '';
  if (address.length < 5 || address.indexOf(" ") === -1 || !regex.test(address)) {
    error = 'Debe tener al menos 5 caracteres, con letras, números y un espacio en el medio.';
    document.getElementById('error-address').innerText = error;
  }
  return error;
}

function validateCity() {
  var city = document.getElementById('city').value;
  var error = '';
  if (city.length < 3) {
    error = 'Debe tener al menos 3 caracteres.';
    document.getElementById('error-city').innerText = error;
  }
  return error;
}

function validateCP() {
  var cp = document.getElementById('cp').value;
  var error = '';
  if (cp.length < 3) {
    error = 'Debe tener al menos 3 caracteres.';
    document.getElementById('error-cp').innerText = error;
  }
  return error;
}

function validateDNI() {
  var dni = document.getElementById('dni').value;
  var error = '';
  if (!Number.isInteger(Number(dni)) || !(dni.length == 7 || dni.length == 8)) {
    error = 'Debe ser número y tener 7 u 8 caracteres';
    document.getElementById('error-dni').innerText = error;
  }
  return error;
}

function submitForm() {
  const errors = [];
  const success = [];
  var errorName = validateName();
  if (errorName) errors.push('Campo nombre: ' + errorName);
  else success.push('Campo nombre: ' + document.getElementById('name').value);
  var errorEmail = validateEmail();
  if (errorEmail) errors.push('Campo email: ' + errorEmail);
  else success.push('Campo email: ' + document.getElementById('email').value);
  var errorPass = validatePass();
  if (errorPass) errors.push('Campo contraseña: ' + errorPass);
  else success.push('Campo contraseña: ' + document.getElementById('pass').value);
  var errorPassRepeat = validatePassRepeat();
  if (errorPassRepeat) errors.push('Campo repetir contraseña: ' + errorPassRepeat);
  var errorAge = validateAge();
  if (errorAge) errors.push('Campo edad: ' + errorAge);
  else success.push('Campo edad: ' + document.getElementById('age').value);
  var errorPhone = validatePhone();
  if (errorPhone) errors.push('Campo teléfono: ' + errorPhone);
  else success.push('Campo teléfono: ' + document.getElementById('phone').value);
  var errorAddress = validateAddress();
  if (errorAddress) errors.push('Campo dirección: ' + errorAddress);
  else success.push('Campo dirección: ' + document.getElementById('address').value);
  var errorCity = validateCity();
  if (errorCity) errors.push('Campo ciudad: ' + errorCity);
  else success.push('Campo ciudad: ' + document.getElementById('city').value);
  var errorCP = validateCP();
  if (errorCP) errors.push('Campo CP: ' + errorCP);
  else success.push('Campo CP: ' + document.getElementById('cp').value);
  var errorDNI = validateDNI();
  if (errorDNI) errors.push('Campo DNI: ' + errorDNI);
  else success.push('Campo DNI: ' + document.getElementById('dni').value);
  if (errors.length) {
    alert('El formulario tiene los siguientes errores:\n\n' + errors.join('\n'));
  } else {
    alert('El formulario fue completado con los siguientes valores:\n\n' + success.join('\n'));
  }
}