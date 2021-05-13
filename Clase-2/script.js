var username = prompt('Ingrese un nombre de usuario para registrarse.');
var password = prompt('Ingrese una contraseña.');

var confirmPassword = prompt('Ingrese nuevamente su contraseña para confirmar.');

if (password == confirmPassword) {
  alert('Se ha registrado correctamente.');
} else {
  alert('Las contraseñas ingresadas no coinciden. Refresque la pagina e intente de vuelta.');
}