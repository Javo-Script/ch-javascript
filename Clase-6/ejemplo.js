class Persona {
  constructor(nombre, apellido, dni, sexo) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.dni = dni;
      this.sexo = sexo;
  }
  mostrarPersona() {
      console.log(this.nombre + " " + this.apellido + " " + this.dni + " " + this.sexo);
  }
}
let cantPersonas = parseInt(prompt("Ingrese la cantidad de personas que desea ingresar al sistema: "));
let listaDePersonas = [];
for (let i = 0; i < cantPersonas; i++) {
  let nombre = prompt("Ingrese nombre: ");
  let apellido = prompt("Ingrese apellido: ");
  let dni = prompt("Ingrese dni: ");
  let sexo = prompt("Ingrese el sexo: ");
  let nuevaPersona = new Persona(nombre, apellido, dni, sexo);
  listaDePersonas.push(nuevaPersona);
}

//por hoisting puedo llamar a una funcion antes de crearla
imprimirListado();
function imprimirListado() {
  for (pers of listaDePersonas) {
      pers.mostrarPersona();
  }
}