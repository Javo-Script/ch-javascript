var name = prompt('Ingrese su nombre.');
var lastName = prompt('Ingrese su apellido.');

var year = new Date().getFullYear();
var birth = prompt('Hola ' + name + ' ' + lastName  + ', cómo andas? En que año naciste?');

var age = year - birth;

alert('Gracias' + name + ', tenes o vas a tener ' + age + ' años.')