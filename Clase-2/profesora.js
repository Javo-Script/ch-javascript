var colorFavorito = prompt("Ingresa tu color favorito");
if ((colorFavorito == "Azul") || (colorFavorito == "AZUL") || (colorFavorito == "azul")) {
    alert("Es mi color favorito tambien!!!");
} else if (colorFavorito == "Rosa") {
    alert("A mi no me gusta el Rosa...");
} else {
    alert("Tu color favorito es: " + colorFavorito + ". El mio es el azul");
}


var numero1 = 1;
var numeroUno = "1";
var sonIguales = (numero1 === numeroUno); //se pide igualdad en tipo y valor
console.log(sonIguales);


// EJERCICIO: Preguntar la edad del usuario y segun sea, escribir los siguientes mensajes:
// Si tiene entre 0 y 17 años -> "Eres niño o adolescente"
// Si tiene entre 18 y 40 años -> "Eres un joven lleno de vida"
// Si tiene mas de 40 años -> "Estás muy bien realmente!!!!"
var edad = parseInt(prompt("Ingresa tu edad"));
if (edad < 18) {
    alert("Eres niño o adolescente");
} else if (edad < 41) {
    alert("Eres un joven lleno de vida");
} else {
    alert("Estás muy bien realmente!!!");
}


var edad2 = parseInt(prompt("Ingrese su edad:"));
var esMayorDeEdad = (edad2 >= 18);
console.log(esMayorDeEdad);
if (esMayorDeEdad) {
    console.log("Tiene acceso al contenido");
} else {
    console.log("No tiene acceso al contenido por ser menor de edad");
}


var anioActual = 2021;
var anioNacimiento = parseInt(prompt("Ingresa el año de tu nacimiento"));
//INICIA EL CONDICIONAL
if (anioNacimiento < anioActual) {
    let edad = anioActual - anioNacimiento;
    alert("Tenés: " + edad + " años");
    console.log("Variable año actual: " + anioActual);
    console.log("Variable año de nacimiento: " + anioNacimiento);
    console.log("Variable edad: " + edad);
    console.log("---------------- FIN IF ---------------------");
}
//FIN CONDICIONAL
console.log("Variable año actual: " + anioActual);
console.log("Variable año de nacimiento: " + anioNacimiento);
console.log("Variable edad: " + edad);